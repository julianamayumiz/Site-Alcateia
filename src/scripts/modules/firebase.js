// ===================== FIREBASE MODULE =====================
// Gerencia integração com Firebase Realtime Database

let db = null;
let fbReady = false;

function initFirebase() {
  const config = {
    apiKey: "AIzaSyBqn10ZjuimbifYx_3813caY-s9boS7FKM",
    authDomain: "alcateiakotick-db12b.firebaseapp.com",
    databaseURL: "https://alcateiakotick-db12b-default-rtdb.firebaseio.com",
    projectId: "alcateiakotick-db12b",
    storageBucket: "alcateiakotick-db12b.firebasestorage.app",
    messagingSenderId: "1038585867031",
    appId: "1:1038585867031:web:7ca99aa4523c4beda36552"
  };

  try {
    firebase.initializeApp(config);
    db = firebase.database();
    fbReady = true;
    showSyncStatus('conectando');
    listenAll();
  } catch(e) {
    console.warn('Firebase init failed:', e);
    showSyncStatus('offline');
  }
}

function fbSet(path, data) {
  if(!fbReady || !db) return Promise.resolve();
  return db.ref('alcateia/' + path).set(data)
    .then(() => { showSyncStatus('salvo'); })
    .catch(e => { console.warn('fbSet error', e); showSyncStatus('erro'); });
}

function listenAll() {
  if(!db) return;
  const ref = db.ref('alcateia');

  ref.once('value').then(snap => {
    const d = snap.val();
    if(d) {
      if(d.calendario  && Array.isArray(d.calendario))  state.calendario  = d.calendario;
      if(d.presenca    && d.presenca.datas)              state.presenca    = d.presenca;
      if(d.especialidades && Array.isArray(d.especialidades)) state.especialidades = d.especialidades;
      if(d.matilhas)   state.matilhas  = d.matilhas;
      if(d.cargos)     state.cargos    = d.cargos;
      if(d.justificativas) state.justificativas = d.justificativas;
      if(d.comunicados && Array.isArray(d.comunicados)) state.comunicados = d.comunicados;
      if(d.confirmacoes) state.confirmacoes = d.confirmacoes;
      if(d.caixa && Array.isArray(d.caixa)) state.caixa = d.caixa;
      if(d.pontuacao) state.pontuacao = d.pontuacao;
      if(d.avisos_internos && Array.isArray(d.avisos_internos)) state.avisos_internos = d.avisos_internos;
      if(d.todos_chefia && Array.isArray(d.todos_chefia)) state.todos_chefia = d.todos_chefia;
    }
    showSyncStatus('ok');
    // Re-render active page with fresh data
    const activePage = document.querySelector('.page.active');
    if(activePage) render(activePage.id.replace('p-',''));
  }).catch(e => { console.warn('Firebase read error:', e); showSyncStatus('offline'); });

  // Listen for real-time changes from other devices
  ref.on('value', snap => {
    const d = snap.val();
    if(!d) return;
    let changed = false;
    if(d.calendario  && JSON.stringify(d.calendario)  !== JSON.stringify(state.calendario))  { state.calendario  = d.calendario;  changed=true; }
    if(d.presenca    && JSON.stringify(d.presenca)    !== JSON.stringify(state.presenca))    { state.presenca    = d.presenca;    changed=true; }
    if(d.especialidades && JSON.stringify(d.especialidades) !== JSON.stringify(state.especialidades)) { state.especialidades = d.especialidades; changed=true; }
    if(d.matilhas    && JSON.stringify(d.matilhas)    !== JSON.stringify(state.matilhas))    { state.matilhas    = d.matilhas;    changed=true; }
    if(d.cargos      && JSON.stringify(d.cargos)      !== JSON.stringify(state.cargos))      { state.cargos      = d.cargos;      changed=true; }
    if(d.justificativas && JSON.stringify(d.justificativas) !== JSON.stringify(state.justificativas)) { state.justificativas = d.justificativas; changed=true; }
    if(d.comunicados && JSON.stringify(d.comunicados) !== JSON.stringify(state.comunicados)) { state.comunicados = d.comunicados; changed=true; }
    if(d.confirmacoes && JSON.stringify(d.confirmacoes) !== JSON.stringify(state.confirmacoes)) { state.confirmacoes = d.confirmacoes; changed=true; }
    if(d.caixa && JSON.stringify(d.caixa) !== JSON.stringify(state.caixa)) { state.caixa = d.caixa; changed=true; }
    if(d.pontuacao   && JSON.stringify(d.pontuacao)   !== JSON.stringify(state.pontuacao))   { state.pontuacao   = d.pontuacao;   changed=true; }
    if(d.avisos_internos && JSON.stringify(d.avisos_internos) !== JSON.stringify(state.avisos_internos)) { state.avisos_internos = d.avisos_internos; changed=true; }
    if(d.todos_chefia && JSON.stringify(d.todos_chefia) !== JSON.stringify(state.todos_chefia)) { state.todos_chefia = d.todos_chefia; changed=true; }
    if(changed) {
      const activePage = document.querySelector('.page.active');
      if(activePage) render(activePage.id.replace('p-',''));
    }
  });
}

// Save entire state section to Firebase
function fbSaveSection(section) {
  if(!fbReady || !db) return Promise.resolve();
  return db.ref('alcateia/' + section).set(state[section])
    .then(() => { showSyncStatus('salvo'); })
    .catch(() => { showSyncStatus('erro'); });
}

// Sync indicator
function showSyncStatus(status) {
  const el = document.getElementById('sync-status');
  if(!el) return;
  const map = {
    'conectando': {txt:'Conectando...', color:'var(--text3)'},
    'ok':         {txt:'● Sincronizado',  color:'var(--accent)'},
    'salvo':      {txt:'● Salvo',         color:'var(--accent)'},
    'offline':    {txt:'○ Offline',       color:'var(--accent2)'},
    'erro':       {txt:'✕ Erro sync',     color:'var(--red)'}
  };
  const s = map[status] || map['offline'];
  el.textContent = s.txt;
  el.style.color = s.color;
  if(status==='salvo') setTimeout(()=>showSyncStatus('ok'), 2000);
}

// Exporta funções para uso global
window.initFirebase = initFirebase;
window.fbSet = fbSet;
window.fbSaveSection = fbSaveSection;
window.showSyncStatus = showSyncStatus;

// Made with Bob
