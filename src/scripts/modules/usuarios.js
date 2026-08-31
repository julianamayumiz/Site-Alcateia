// ===================== USUÁRIOS MODULE =====================
// Área administrativa: gerencia as contas de acesso ao Portal da Chefia.
// Todas as operações passam por Cloud Functions (região southamerica-east1),
// que validam se quem chamou é admin. O nó /usuarios (raiz do RTDB) é sincronizado
// por firebase.js -> subscribeUsuarios() (só admin lê a coleção) e fica em state.usuarios.

let _usuariosBusy = false;

function fnsUsuarios() {
  return firebase.app().functions('southamerica-east1');
}

function isAdminAtual() {
  return !!(window.ALCATEIA_USER && window.ALCATEIA_USER.papel === 'admin');
}

function _uBusy(on) {
  _usuariosBusy = on;
  document.querySelectorAll('#p-usuarios button').forEach(b => { b.disabled = on; });
}

async function _chamar(nome, dados, msgOk) {
  if (_usuariosBusy) return;
  _uBusy(true);
  try {
    const res = await fnsUsuarios().httpsCallable(nome)(dados || {});
    if (msgOk) alert(typeof msgOk === 'function' ? msgOk(res.data) : msgOk);
    return res.data;
  } catch (e) {
    console.warn(nome, e);
    alert('Erro: ' + (e && e.message || e));
  } finally {
    _uBusy(false);
  }
}

function renderUsuarios() {
  const guard = document.getElementById('usuarios-guard');
  const conteudo = document.getElementById('usuarios-conteudo');
  if (!guard || !conteudo) return;

  if (!isAdminAtual()) {
    guard.style.display = 'block';
    conteudo.style.display = 'none';
    return;
  }
  guard.style.display = 'none';
  conteudo.style.display = 'block';

  const lista = document.getElementById('usuarios-lista');
  const label = document.getElementById('usuarios-label');
  const usuarios = state.usuarios || {};
  const linhas = Object.keys(usuarios).map(uid => Object.assign({ uid }, usuarios[uid]));

  linhas.sort((a, b) => {
    if ((a.papel === 'admin') !== (b.papel === 'admin')) return a.papel === 'admin' ? -1 : 1;
    return (a.nome || a.email || '').localeCompare(b.nome || b.email || '');
  });

  if (label) label.textContent = `Contas · ${linhas.length}`;

  if (linhas.length === 0) {
    lista.innerHTML = `<p style="color:var(--text3);font-size:14px;padding:24px 0">Nenhuma conta cadastrada.</p>`;
    return;
  }

  const meuUid = window.ALCATEIA_USER && window.ALCATEIA_USER.uid;

  lista.innerHTML = linhas.map(u => {
    const eu = u.uid === meuUid;
    const ativo = u.ativo === true;
    const admin = u.papel === 'admin';
    return `
      <div class="usuarios-row">
        <div style="flex:1;min-width:0">
          <div style="font-weight:500;font-size:14px;color:${ativo ? 'var(--text1,var(--text))' : 'var(--text3)'}">
            ${esc(u.nome || '(sem nome)')}
            ${eu ? '<span style="font-size:11px;color:var(--text3);font-weight:400"> · você</span>' : ''}
          </div>
          <div style="font-size:12px;color:var(--text3);margin-top:2px">${esc(u.email || '')}</div>
          <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">
            <span class="tag ${admin ? 'admin' : ''}">${admin ? 'Admin' : 'Chefe'}</span>
            ${ativo ? '' : '<span class="tag inativo">Desativado</span>'}
            ${u.senhaProvisoria === true ? '<span class="tag">Senha provisória</span>' : ''}
          </div>
        </div>
        <div class="usuarios-acoes">
          <button class="btn" onclick="editarNomeUI('${u.uid}')">Editar nome</button>
          <button class="btn" onclick="resetarSenhaUI('${u.uid}')">Resetar senha</button>
          ${eu ? '' : `
            <button class="btn" onclick="toggleAtivoUI('${u.uid}', ${!ativo})">${ativo ? 'Desativar' : 'Ativar'}</button>
            <button class="btn" onclick="togglePapelUI('${u.uid}', '${admin ? 'chefe' : 'admin'}')">${admin ? 'Tornar chefe' : 'Tornar admin'}</button>
            <button class="btn" style="color:var(--red,#c0392b)" onclick="removerUsuarioUI('${u.uid}')">Remover</button>
          `}
        </div>
      </div>`;
  }).join('');
}

// ===================== AÇÕES =====================

async function criarUsuarioUI() {
  const nome = (document.getElementById('novo-nome').value || '').trim();
  const email = (document.getElementById('novo-email').value || '').trim().toLowerCase();
  const papel = document.getElementById('novo-papel').value;
  if (!nome) { alert('Informe o nome.'); return; }
  if (!email || email.indexOf('@') < 0) { alert('Informe um e-mail válido.'); return; }

  const data = await _chamar('criarUsuario', { email, nome, papel },
    d => `Conta ${d.jaExistia ? 'atualizada' : 'criada'}.\n\nSenha temporária: ${d.senhaPadrao}\n\nRepasse à pessoa — ela troca no primeiro acesso.`);
  if (data) {
    document.getElementById('novo-nome').value = '';
    document.getElementById('novo-email').value = '';
    document.getElementById('novo-papel').value = 'chefe';
  }
}

function _nomeDe(uid) {
  const u = (state.usuarios || {})[uid] || {};
  return u.nome || u.email || uid;
}

async function resetarSenhaUI(uid) {
  if (!confirm(`Resetar a senha de ${_nomeDe(uid)} para a senha temporária padrão?\nA pessoa terá que criar uma nova senha no próximo acesso.`)) return;
  await _chamar('resetarSenha', { uid }, d => `Senha resetada para: ${d.senhaPadrao}`);
}

async function toggleAtivoUI(uid, ativo) {
  const acao = ativo ? 'reativar o acesso de' : 'DESATIVAR o acesso de';
  if (!confirm(`Deseja ${acao} ${_nomeDe(uid)}?`)) return;
  await _chamar('definirAtivo', { uid, ativo });
}

async function togglePapelUI(uid, papel) {
  const txt = papel === 'admin'
    ? `Tornar ${_nomeDe(uid)} ADMIN? Terá acesso total à gestão de usuários.`
    : `Rebaixar ${_nomeDe(uid)} para chefe?`;
  if (!confirm(txt)) return;
  await _chamar('definirPapel', { uid, papel });
}

async function editarNomeUI(uid) {
  const atual = _nomeDe(uid);
  const novo = prompt('Nome exibido:', atual);
  if (novo === null) return;
  if (!novo.trim()) { alert('Nome não pode ficar vazio.'); return; }
  await _chamar('atualizarDados', { uid, nome: novo.trim() });
}

async function removerUsuarioUI(uid) {
  const nome = _nomeDe(uid);
  if (!confirm(`Remover permanentemente a conta de ${nome}?\nA pessoa perde o acesso e a conta de login é apagada.`)) return;
  if (prompt(`Para confirmar, digite REMOVER`) !== 'REMOVER') { alert('Cancelado.'); return; }
  await _chamar('removerUsuario', { uid }, 'Conta removida.');
}

// Exporta para uso global
window.renderUsuarios = renderUsuarios;
window.criarUsuarioUI = criarUsuarioUI;
window.resetarSenhaUI = resetarSenhaUI;
window.toggleAtivoUI = toggleAtivoUI;
window.togglePapelUI = togglePapelUI;
window.editarNomeUI = editarNomeUI;
window.removerUsuarioUI = removerUsuarioUI;
