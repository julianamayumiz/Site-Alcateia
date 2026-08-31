// ===================== CLOUD FUNCTIONS - ADMINISTRAÇÃO DE USUÁRIOS =====================
// Migração do login Google -> E-mail/Senha (Firebase Authentication).
//
// Todas as funções são "callable" (chamadas pelo cliente via firebase.functions()).
// Só o admin pode usar as funções de gestão. O admin é identificado por:
//   1) UID na lista ADMIN_BOOTSTRAP_UIDS (para o primeiro acesso, antes do nó existir), ou
//   2) usuarios/{uid}/papel === 'admin' no Realtime Database.
//
// Modelo de dados: usuarios/{uid} = {
//   nome, email, papel: 'admin'|'chefe', ativo: bool, senhaProvisoria: bool,
//   criadoEm, atualizadoEm
// }

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

admin.initializeApp();
setGlobalOptions({ region: "southamerica-east1", maxInstances: 5 });

// -------------------- Configuração --------------------

// UID(s) que sempre podem administrar, mesmo sem nó em usuarios.
// Necessário para o "bootstrap" (rodar migrarTudo pela primeira vez).
const ADMIN_BOOTSTRAP_UIDS = ["f0zaMk3VgAMwvJOhPj615biG6kj2"]; // juliana.mayumi@escoteiros.org.br

// Senha temporária padrão. Cada pessoa troca no primeiro acesso (senhaProvisoria).
const SENHA_PADRAO = "Alcateia@2026";

// Elenco completo (8 chefes + 1 admin). Usado por migrarTudo().
// Os nomes podem ser editados depois pela área administrativa.
const ELENCO = [
  { email: "juliana.mayumi@escoteiros.org.br",      nome: "Juliana Mayumi",      papel: "admin" },
  { email: "angelita.maeda@escoteiros.org.br",       nome: "Angelita Maeda",      papel: "chefe" },
  { email: "augusto.maeda@escoteiros.org.br",        nome: "Augusto Maeda",       papel: "chefe" },
  { email: "mariana.fujino@escoteiros.org.br",       nome: "Mariana Fujino",      papel: "chefe" },
  { email: "claudio.sampei@escoteiros.org.br",       nome: "Claudio Sampei",      papel: "chefe" },
  { email: "jefferson.matsumoto@escoteiros.org.br",  nome: "Jefferson Matsumoto", papel: "chefe" },
  { email: "julia.yk@escoteiros.org.br",             nome: "Julia YK",            papel: "chefe" },
  { email: "marly.sasaki@escoteiros.org.br",         nome: "Marly Sasaki",        papel: "chefe" },
  { email: "caroline.fujino@escoteiros.org.br",      nome: "Caroline Fujino",     papel: "chefe" },
];

// -------------------- Utilitários --------------------

const auth = () => admin.auth();
const rtdb = () => admin.database();
const TS = () => admin.database.ServerValue.TIMESTAMP;

function normEmail(e) {
  return String(e || "").trim().toLowerCase();
}

function assertPapelValido(papel) {
  if (papel !== "admin" && papel !== "chefe") {
    throw new HttpsError("invalid-argument", "papel deve ser 'admin' ou 'chefe'.");
  }
}

async function papelDoUid(uid) {
  const snap = await rtdb().ref(`usuarios/${uid}/papel`).get();
  return snap.val();
}

// Garante que quem chamou é admin. Retorna o uid do chamador.
async function exigirAdmin(request) {
  const caller = request.auth;
  if (!caller || !caller.uid) {
    throw new HttpsError("unauthenticated", "É necessário estar autenticado.");
  }
  if (ADMIN_BOOTSTRAP_UIDS.includes(caller.uid)) return caller.uid;
  if ((await papelDoUid(caller.uid)) === "admin") return caller.uid;
  throw new HttpsError("permission-denied", "Apenas administradores podem executar esta ação.");
}

// Cria/atualiza o nó usuarios/{uid} preservando o que já existe.
async function gravarNoUsuario(uid, patch) {
  const ref = rtdb().ref(`usuarios/${uid}`);
  const atual = (await ref.get()).val() || {};
  const dados = {
    nome:            patch.nome            ?? atual.nome            ?? "",
    email:           patch.email           ?? atual.email           ?? "",
    papel:           patch.papel           ?? atual.papel           ?? "chefe",
    ativo:           patch.ativo           ?? atual.ativo           ?? true,
    senhaProvisoria: patch.senhaProvisoria ?? atual.senhaProvisoria ?? false,
    criadoEm:        atual.criadoEm        ?? TS(),
    atualizadoEm:    TS(),
  };
  await ref.set(dados);
  return dados;
}

// Busca usuário do Auth por e-mail; retorna null se não existir.
async function acharAuthPorEmail(email) {
  try {
    return await auth().getUserByEmail(email);
  } catch (e) {
    if (e && e.code === "auth/user-not-found") return null;
    throw e;
  }
}

// Cria (ou reaproveita) a conta de Auth para um e-mail, define a senha padrão
// e grava o nó de usuário com senhaProvisoria = true.
async function provisionarConta({ email, nome, papel }) {
  const e = normEmail(email);
  assertPapelValido(papel);

  let usuario = await acharAuthPorEmail(e);
  let criado = false;

  if (!usuario) {
    usuario = await auth().createUser({
      email: e,
      password: SENHA_PADRAO,
      displayName: nome || undefined,
      emailVerified: false,
    });
    criado = true;
  } else {
    await auth().updateUser(usuario.uid, {
      password: SENHA_PADRAO,
      displayName: nome || usuario.displayName || undefined,
      disabled: false,
    });
  }

  const no = await gravarNoUsuario(usuario.uid, {
    nome: nome || usuario.displayName || "",
    email: e,
    papel,
    ativo: true,
    senhaProvisoria: true,
  });

  return { uid: usuario.uid, criado, no };
}

// ==================== FUNÇÕES CALLABLE ====================

// --- moverUsuariosParaRaiz: uso único (Etapa 6). Copia alcateia/usuarios -> usuarios
//     na raiz do RTDB. Não apaga o original (fica como backup até a verificação). ---
exports.moverUsuariosParaRaiz = onCall(async (request) => {
  await exigirAdmin(request);
  const antigo = (await rtdb().ref("alcateia/usuarios").get()).val() || {};
  const novoRef = rtdb().ref("usuarios");
  const jaExiste = (await novoRef.get()).val();
  if (jaExiste && Object.keys(jaExiste).length) {
    return { ok: true, jaMigrado: true, total: Object.keys(jaExiste).length };
  }
  await novoRef.set(antigo);
  return { ok: true, jaMigrado: false, total: Object.keys(antigo).length, copiados: Object.keys(antigo) };
});

// --- limparUsuariosAntigos: uso único, DEPOIS de verificar. Remove alcateia/usuarios. ---
exports.limparUsuariosAntigos = onCall(async (request) => {
  await exigirAdmin(request);
  await rtdb().ref("alcateia/usuarios").remove();
  return { ok: true };
});

// --- migrarTudo: uso único (bootstrap). Provisiona todo o ELENCO. ---
exports.migrarTudo = onCall(async (request) => {
  await exigirAdmin(request);
  const resultado = [];
  for (const pessoa of ELENCO) {
    try {
      const r = await provisionarConta(pessoa);
      resultado.push({ email: pessoa.email, uid: r.uid, criado: r.criado, ok: true });
    } catch (err) {
      logger.error("Falha ao migrar", pessoa.email, err);
      resultado.push({ email: pessoa.email, ok: false, erro: String(err && err.message || err) });
    }
  }
  return { senhaPadrao: SENHA_PADRAO, total: resultado.length, resultado };
});

// --- criarUsuario: adiciona um chefe novo (ou re-provisiona um existente). ---
exports.criarUsuario = onCall(async (request) => {
  await exigirAdmin(request);
  const { email, nome, papel = "chefe" } = request.data || {};
  if (!email || !normEmail(email).includes("@")) {
    throw new HttpsError("invalid-argument", "Informe um e-mail válido.");
  }
  assertPapelValido(papel);
  const r = await provisionarConta({ email, nome, papel });
  return { uid: r.uid, jaExistia: !r.criado, senhaPadrao: SENHA_PADRAO };
});

// --- resetarSenha: volta a conta para a senha padrão + exige nova troca. ---
exports.resetarSenha = onCall(async (request) => {
  await exigirAdmin(request);
  const { uid } = request.data || {};
  if (!uid) throw new HttpsError("invalid-argument", "uid é obrigatório.");
  await auth().updateUser(uid, { password: SENHA_PADRAO });
  await gravarNoUsuario(uid, { senhaProvisoria: true });
  return { ok: true, senhaPadrao: SENHA_PADRAO };
});

// --- definirAtivo: ativa/desativa o acesso de um chefe. ---
exports.definirAtivo = onCall(async (request) => {
  const callerUid = await exigirAdmin(request);
  const { uid, ativo } = request.data || {};
  if (!uid || typeof ativo !== "boolean") {
    throw new HttpsError("invalid-argument", "uid e ativo (boolean) são obrigatórios.");
  }
  if (uid === callerUid && ativo === false) {
    throw new HttpsError("failed-precondition", "Você não pode desativar a própria conta.");
  }
  await auth().updateUser(uid, { disabled: !ativo });
  const no = await gravarNoUsuario(uid, { ativo });
  return { ok: true, no };
});

// --- definirPapel: troca papel entre 'admin' e 'chefe'. ---
exports.definirPapel = onCall(async (request) => {
  const callerUid = await exigirAdmin(request);
  const { uid, papel } = request.data || {};
  if (!uid) throw new HttpsError("invalid-argument", "uid é obrigatório.");
  assertPapelValido(papel);
  if (uid === callerUid && papel !== "admin") {
    throw new HttpsError("failed-precondition", "Você não pode rebaixar a própria conta.");
  }
  const no = await gravarNoUsuario(uid, { papel });
  return { ok: true, no };
});

// --- atualizarDados: edita nome/e-mail exibidos. ---
exports.atualizarDados = onCall(async (request) => {
  await exigirAdmin(request);
  const { uid, nome, email } = request.data || {};
  if (!uid) throw new HttpsError("invalid-argument", "uid é obrigatório.");
  const patch = {};
  if (typeof nome === "string") patch.nome = nome.trim();
  if (typeof email === "string" && normEmail(email).includes("@")) {
    const e = normEmail(email);
    await auth().updateUser(uid, { email: e });
    patch.email = e;
  }
  const no = await gravarNoUsuario(uid, patch);
  return { ok: true, no };
});

// --- removerUsuario: apaga a conta de Auth e o nó. ---
exports.removerUsuario = onCall(async (request) => {
  const callerUid = await exigirAdmin(request);
  const { uid } = request.data || {};
  if (!uid) throw new HttpsError("invalid-argument", "uid é obrigatório.");
  if (uid === callerUid) {
    throw new HttpsError("failed-precondition", "Você não pode remover a própria conta.");
  }
  await auth().deleteUser(uid).catch((e) => {
    if (!e || e.code !== "auth/user-not-found") throw e;
  });
  await rtdb().ref(`usuarios/${uid}`).remove();
  return { ok: true };
});

// --- listarUsuarios: retorna o nó completo (conveniência para a área admin). ---
exports.listarUsuarios = onCall(async (request) => {
  await exigirAdmin(request);
  const snap = await rtdb().ref("usuarios").get();
  return { usuarios: snap.val() || {} };
});

// --- finalizarTrocaSenha: chamada pelo PRÓPRIO usuário após updatePassword no cliente.
//     Limpa o flag senhaProvisoria. Não exige admin. ---
exports.finalizarTrocaSenha = onCall(async (request) => {
  const caller = request.auth;
  if (!caller || !caller.uid) {
    throw new HttpsError("unauthenticated", "É necessário estar autenticado.");
  }
  await rtdb().ref(`usuarios/${caller.uid}/senhaProvisoria`).set(false);
  await rtdb().ref(`usuarios/${caller.uid}/atualizadoEm`).set(TS());
  return { ok: true };
});
