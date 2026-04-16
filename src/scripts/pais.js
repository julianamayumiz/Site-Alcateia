// ===================== FIREBASE =====================
// Use centralized Firebase configuration from firebase-config.js
firebase.initializeApp(window.firebaseConfig);
var db = firebase.database();

var CALENDARIO_ESTATICO = [
  { mes: "janeiro", data: "24/01", dia: "sab", atividade: "Indaba de Chefes", categoria: "", chefe: "", datas: "", obs: "" },
  { mes: "janeiro", data: "31/01", dia: "sab", atividade: "Inicio das Atividades/Normal Sede", categoria: "", chefe: "", datas: "", obs: "" },
  { mes: "fevereiro", data: "07/02", dia: "sab", atividade: "Normal Sede - Recepcao Novos", categoria: "", chefe: "", datas: "", obs: "EVENTO ASSOCIACAO: Yokai Festival" },
  { mes: "fevereiro", data: "14/02", dia: "sab", atividade: "Emenda - Feriado Carnaval", categoria: "", chefe: "", datas: "", obs: "" },
  { mes: "fevereiro", data: "16/02", dia: "seg.", atividade: "Feriado Carnaval", categoria: "", chefe: "", datas: "", obs: "" },
  { mes: "fevereiro", data: "17/02", dia: "ter.", atividade: "Feriado Carnaval", categoria: "", chefe: "", datas: "", obs: "" },
  { mes: "fevereiro", data: "18/02", dia: "qua.", atividade: "Feriado Carnaval", categoria: "", chefe: "", datas: "", obs: "" },
  { mes: "fevereiro", data: "21/02", dia: "sab", atividade: "Normal Sede (Passagem Lobinhos)", categoria: "", chefe: "Marly e Julia", datas: "", obs: "BAILE ASSOCIACAO" },
  { mes: "fevereiro", data: "28/02", dia: "sab", atividade: "Normal Sede/Habilidades Escoteiras/Transicao Lobinho", categoria: "", chefe: "Sampei e Mariana", datas: "", obs: "CT Vivência Lobinho (28 a 1/03)" },
  { mes: "marco", data: "07/03", dia: "sab", atividade: "Normal Sede", categoria: "", chefe: "Carol e Juliana", datas: "8 - Dia Internacional da Mulher", obs: "" },
  { mes: "marco", data: "14/03", dia: "sab", atividade: "Externa (Cinema)", categoria: "", chefe: "Angelita e Jefferson", datas: "Inicio MUTEPT", obs: "" },
  { mes: "marco", data: "15/03", dia: "dom.", atividade: "Festa do Sorvete", categoria: "Local", chefe: "", datas: "", obs: "" },
  { mes: "marco", data: "21/03", dia: "sab", atividade: "Normal Sede", categoria: "", chefe: "Marly e Julia", datas: "21 - Dia Internacional das Florestas / 22 - Dia Mundial da Água / 23 - Hora do Planeta", obs: "BAILE ASSOCIACAO" },
  { mes: "marco", data: "28/03", dia: "sab", atividade: "Normal Sede/Habilidades Escoteiras/Transicao Lobinho", categoria: "", chefe: "Sampei e Mariana", datas: "27 - Dia do circo", obs: "" },
  { mes: "abril", data: "03/04", dia: "sex.", atividade: "Feriado Pascoa", categoria: "", chefe: "", datas: "", obs: "" },
  { mes: "abril", data: "04/04", dia: "sab", atividade: "Emenda - Feriado Pascoa", categoria: "", chefe: "", datas: "", obs: "" },
  { mes: "abril", data: "11/04", dia: "sab", atividade: "Externa - Cacada Distrital", categoria: "Distrital", chefe: "Todos", datas: "13 - Dia do Hino Nacional", obs: "" },
  { mes: "abril", data: "18/04", dia: "sab", atividade: "Normal Sede (Reuniao Acampamento)", categoria: "", chefe: "Carol e Juliana", datas: "18 - Dia Nacional do Livro Infantil / 19 - Dia do Índio", obs: "" },
  { mes: "abril", data: "21/04", dia: "ter.", atividade: "Feriado Tiradentes", categoria: "", chefe: "", datas: "22 - Dia da Terra", obs: "" },
  { mes: "abril", data: "25/04", dia: "sab", atividade: "Normal sede/Transicao Lobinho", categoria: "", chefe: "Angelita e Jefferson", datas: "", obs: "BAILE ASSOCIACAO" },
  { mes: "maio", data: "01/05", dia: "sex.", atividade: "Acampamento de Grupo", categoria: "Local", chefe: "Todos", datas: "", obs: "" },
  { mes: "maio", data: "02/05", dia: "sab", atividade: "Acampamento de Grupo", categoria: "", chefe: "Todos", datas: "Inicio EducAÇÃO Escoteira", obs: "" },
  { mes: "maio", data: "03/05", dia: "dom.", atividade: "Acampamento de Grupo", categoria: "", chefe: "Todos", datas: "", obs: "" },
  { mes: "maio", data: "09/05", dia: "sab", atividade: "Normal Sede (Dia do Amigo)", categoria: "", chefe: "Marly e Julia", datas: "", obs: "" },
  { mes: "maio", data: "16/05", dia: "sab", atividade: "Externa (a confirmar)", categoria: "", chefe: "Sampei e Mariana", datas: "15 - Dia Internacional da Família", obs: "BAILE ASSOCIACAO" },
  { mes: "maio", data: "23/05", dia: "sab", atividade: "Noite Escoteira Italiana", categoria: "Local", chefe: "Todos", datas: "22 - Dia do Abraço", obs: "" },
  { mes: "maio", data: "30/05", dia: "sab", atividade: "Normal Sede/Habilidades Escoteiras", categoria: "", chefe: "Carol e Juliana", datas: "Fim EducAÇÃO Escoteira / Fim MutEPT", obs: "" },
  { mes: "junho", data: "04/06", dia: "qui.", atividade: "Jangalcamp", categoria: "Regional", chefe: "", datas: "", obs: "Feriado Corpus Christi" },
  { mes: "junho", data: "05/06", dia: "sex.", atividade: "Jangalcamp", categoria: "", chefe: "", datas: "5 - Dia Mundial do Meio Ambiente", obs: "" },
  { mes: "junho", data: "06/06", dia: "sab", atividade: "Jangalcamp", categoria: "", chefe: "", datas: "Inicio MutECO", obs: "" },
  { mes: "junho", data: "07/06", dia: "dom.", atividade: "Jangalcamp", categoria: "", chefe: "", datas: "", obs: "" },
  { mes: "junho", data: "13/06", dia: "sab", atividade: "Normal sede/Transicao Lobinho", categoria: "", chefe: "Angelita e Jefferson", datas: "", obs: "" },
  { mes: "junho", data: "20/06", dia: "sab", atividade: "Externa (a confirmar)", categoria: "", chefe: "Carol e Juliana", datas: "20 -Dia Internacional da Amizade", obs: "BAILE ASSOCIACAO Intermediário Lobinho (Distrito) - 27 e 28" },
  { mes: "junho", data: "27/06", dia: "sab", atividade: "Normal Sede/Habilidades Escoteiras", categoria: "", chefe: "Marly e Julia", datas: "26 - Dia dos Avós / Fim MutECO", obs: "Evento: WKS Cult Ainu de Hokkaido" },
  { mes: "julho", data: "04/07", dia: "sab", atividade: "Fogo de Conselho", categoria: "Local", chefe: "", datas: "", obs: "" },
  { mes: "julho", data: "10/07", dia: "sex.", atividade: "Festival do Japão", categoria: "Local", chefe: "", datas: "", obs: "" },
  { mes: "julho", data: "11/07", dia: "sab", atividade: "Festival do Japão", categoria: "Local", chefe: "", datas: "", obs: "" },
  { mes: "julho", data: "12/07", dia: "dom.", atividade: "Festival do Japão", categoria: "Local", chefe: "", datas: "", obs: "" },
  { mes: "agosto", data: "01/08", dia: "sab", atividade: "Normal Sede", categoria: "", chefe: "Marly e Julia", datas: "", obs: "" },
  { mes: "agosto", data: "08/08", dia: "sab", atividade: "Normal Sede - recepcao novos", categoria: "", chefe: "Sampei e Mariana", datas: "12 - Dia Nacional das Artes", obs: "" },
  { mes: "agosto", data: "15/08", dia: "sab", atividade: "Normal Sede", categoria: "", chefe: "Carol e Juliana", datas: "", obs: "Intermediário Lobinho (CEJ) - 15 e 16" },
  { mes: "agosto", data: "22/08", dia: "sab", atividade: "Externa (a confirmar)", categoria: "", chefe: "Angelita e Jefferson", datas: "22 - Dia do Folclore", obs: "BAILE ASSOCIACAO" },
  { mes: "agosto", data: "29/08", dia: "sab", atividade: "Normal Sede/Habilidades Escoteiras", categoria: "", chefe: "Marly e Julia", datas: "", obs: "" },
  { mes: "setembro", data: "05/09", dia: "sab", atividade: "Acanto", categoria: "", chefe: "Todos", datas: "Inicio MutCOM", obs: "" },
  { mes: "setembro", data: "06/09", dia: "dom.", atividade: "Acanto", categoria: "", chefe: "Todos", datas: "", obs: "" },
  { mes: "setembro", data: "07/09", dia: "seg.", atividade: "Acanto", categoria: "", chefe: "Todos", datas: "", obs: "" },
  { mes: "setembro", data: "12/09", dia: "sab", atividade: "Normal Sede", categoria: "", chefe: "Sampei e Mariana", datas: "", obs: "BAILE ASSOCIACAO Intermediário Lobinho (Distrito) - 12 e 13" },
  { mes: "setembro", data: "19/09", dia: "sab", atividade: "Normal Sede", categoria: "", chefe: "Carol e Juliana", datas: "21 - Dia da Árvore", obs: "" },
  { mes: "setembro", data: "26/09", dia: "sab", atividade: "Normal Sede/Habilidades Escoteiras", categoria: "", chefe: "Angelita e Jefferson", datas: "Fim MutCOM", obs: "Avançado Lobinho 1 (CEJ) 26 e 27" },
  { mes: "outubro", data: "03/10", dia: "sab", atividade: "Externa - Rally de Lobinhos", categoria: "Distrital", chefe: "Todos", datas: "1 - Dia Internacional da Música / 4 -Dia dos Animais", obs: "" },
  { mes: "outubro", data: "10/10", dia: "sab", atividade: "Emenda Feriado", categoria: "", chefe: "", datas: "", obs: "" },
  { mes: "outubro", data: "12/10", dia: "seg.", atividade: "Feriado Nossa Senhora Aparecida", categoria: "", chefe: "", datas: "Dia das Crianças", obs: "" },
  { mes: "outubro", data: "17/10", dia: "sab", atividade: "Preparação Scout Matsuri (JOTA-JOTI)", categoria: "Local", chefe: "Todos", datas: "", obs: "" },
  { mes: "outubro", data: "18/10", dia: "dom.", atividade: "Scout Matsuri", categoria: "Local", chefe: "Todos", datas: "", obs: "" },
  { mes: "outubro", data: "24/10", dia: "sab", atividade: "Normal Sede (Dia do Amigo)", categoria: "", chefe: "Marly e Julia", datas: "", obs: "BAILE ASSOCIACAO" },
  { mes: "outubro", data: "31/10", dia: "sab", atividade: "Emenda Feriado", categoria: "", chefe: "", datas: "Halloween", obs: "" },
  { mes: "novembro", data: "02/11", dia: "seg.", atividade: "Feriado Finados", categoria: "", chefe: "", datas: "", obs: "" },
  { mes: "novembro", data: "07/11", dia: "sab", atividade: "Normal Sede", categoria: "", chefe: "Sampei e Mariana", datas: "", obs: "" },
  { mes: "novembro", data: "14/11", dia: "sab", atividade: "Externa (a confirmar)", categoria: "", chefe: "", datas: "15 - Proclamação da República", obs: "BAILE ASSOCIACAO" },
  { mes: "novembro", data: "20/11", dia: "sex.", atividade: "Feriado Consciência Negra", categoria: "", chefe: "", datas: "Consciência Negra", obs: "" },
  { mes: "novembro", data: "21/11", dia: "sab", atividade: "Emenda Feriado", categoria: "", chefe: "", datas: "", obs: "" },
  { mes: "novembro", data: "28/11", dia: "sab", atividade: "Normal Sede - Roca de Conselho", categoria: "", chefe: "Angelita e Jefferson", datas: "", obs: "" },
  { mes: "dezembro", data: "06/12", dia: "dom.", atividade: "Bonenkai", categoria: "Local", chefe: "", datas: "", obs: "" }
];

var data = { calendario: CALENDARIO_ESTATICO, comunicados: [], confirmacoes: [] };

// ===================== EMPTY STATE SVGs =====================
var SVG_COM = '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true"><circle cx="36" cy="36" r="32" fill="var(--accent-light)"/><rect x="16" y="21" width="40" height="26" rx="5" stroke="var(--accent)" stroke-width="2.5" fill="none"/><path d="M24 47l-5 8h34l-5-8" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round" fill="var(--accent-light)"/><line x1="24" y1="31" x2="48" y2="31" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/><line x1="24" y1="38" x2="38" y2="38" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/></svg>';
var SVG_CAL = '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true"><circle cx="36" cy="36" r="32" fill="var(--accent-light)"/><rect x="17" y="24" width="38" height="30" rx="5" stroke="var(--accent)" stroke-width="2.5" fill="none"/><line x1="17" y1="34" x2="55" y2="34" stroke="var(--accent)" stroke-width="2"/><line x1="28" y1="19" x2="28" y2="29" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/><line x1="44" y1="19" x2="44" y2="29" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/><circle cx="36" cy="46" r="5" fill="var(--accent)" opacity="0.3"/><line x1="34" y1="46" x2="36" y2="44" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/><line x1="36" y1="44" x2="39" y2="49" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/></svg>';
var SVG_OK  = '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true"><circle cx="36" cy="36" r="32" fill="var(--accent-light)"/><circle cx="36" cy="36" r="15" stroke="var(--accent)" stroke-width="2.5" fill="none"/><polyline points="28,36 33,41 44,30" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var fbLoaded = false;
var offlineMode = false;
var retryAttempts = 0;
var maxRetries = 3;
var retryDelay = 3000; // 3 seconds

// Display user-friendly error notification
function showErrorNotification(message, isRetrying) {
  var existingNotif = document.getElementById('firebase-error-notification');
  if (existingNotif) existingNotif.remove();
  
  var notif = document.createElement('div');
  notif.id = 'firebase-error-notification';
  notif.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#ff4444;color:white;padding:16px 24px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.3);z-index:10000;max-width:90%;text-align:center;font-family:DM Sans,sans-serif;';
  notif.innerHTML = '<strong>⚠️ ' + message + '</strong>' + (isRetrying ? '<br><small>Tentando reconectar...</small>' : '');
  document.body.appendChild(notif);
  
  if (!isRetrying) {
    setTimeout(function() { notif.remove(); }, 8000);
  }
}

// Display offline mode indicator
function showOfflineIndicator() {
  var existingIndicator = document.getElementById('offline-indicator');
  if (existingIndicator) return;
  
  var indicator = document.createElement('div');
  indicator.id = 'offline-indicator';
  indicator.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#ff9800;color:white;padding:12px 20px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.2);z-index:9999;font-family:DM Sans,sans-serif;font-size:14px;';
  indicator.innerHTML = '📡 Modo Offline';
  document.body.appendChild(indicator);
}

// Remove offline indicator
function hideOfflineIndicator() {
  var indicator = document.getElementById('offline-indicator');
  if (indicator) indicator.remove();
  var notif = document.getElementById('firebase-error-notification');
  if (notif) notif.remove();
}

// Retry connection with exponential backoff
function retryConnection() {
  if (retryAttempts >= maxRetries) {
    offlineMode = true;
    showOfflineIndicator();
    showErrorNotification('Nao foi possivel conectar ao servidor. Usando dados locais.', false);
    return;
  }
  
  retryAttempts++;
  var delay = retryDelay * Math.pow(2, retryAttempts - 1);
  showErrorNotification('Erro de conexao com o servidor', true);
  
  setTimeout(function() {
    db.ref('alcateia').once('value').then(function(snap) {
      retryAttempts = 0;
      offlineMode = false;
      hideOfflineIndicator();
      processFirebaseData(snap);
    }).catch(function(error) {
      console.error('Retry failed:', error);
      retryConnection();
    });
  }, delay);
}

// Process Firebase data
function processFirebaseData(snap) {
  var d = snap.val() || {};
  // Sync calendario from Firebase if available, otherwise use static
  if (d.calendario && Array.isArray(d.calendario) && d.calendario.length > 0) {
    data.calendario = d.calendario;
  } else {
    data.calendario = CALENDARIO_ESTATICO;
  }
  if (d.comunicados && Array.isArray(d.comunicados)) data.comunicados = d.comunicados;
  if (d.confirmacoes) data.confirmacoes = d.confirmacoes;
  fbLoaded = true;
  document.getElementById('com-lista-pais').removeAttribute('aria-busy');
  renderAll();
}

// Single realtime listener — handles both initial load and updates
db.ref('alcateia').on('value', function(snap) {
  retryAttempts = 0;
  offlineMode = false;
  hideOfflineIndicator();
  processFirebaseData(snap);
}, function (error) {
  console.error('Firebase error:', error);
  
  // Log to monitoring service (placeholder for future implementation)
  if (typeof window.errorMonitoring !== 'undefined') {
    window.errorMonitoring.logError('Firebase Connection Error', {
      error: error.message,
      code: error.code,
      timestamp: new Date().toISOString()
    });
  }
  
  // Use static data as fallback
  data.calendario = CALENDARIO_ESTATICO;
  fbLoaded = true;
  document.getElementById('com-lista-pais').removeAttribute('aria-busy');
  renderAll();
  
  // Attempt to retry connection
  retryConnection();
});

// ===================== NAVIGATION =====================
window.showTab = function(tab) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  document.getElementById('p-' + tab).classList.add('active');
  var activeTab = document.getElementById('tab-' + tab);
  activeTab.classList.add('active');
  activeTab.setAttribute('aria-selected', 'true');
  window.location.hash = tab;
}

window.addEventListener('hashchange', function () {
  var h = window.location.hash.replace('#', '');
  if (['comunicados', 'calendario', 'confirmar'].includes(h)) showTab(h);
});

// On load
var initHash = window.location.hash.replace('#', '');
if (['comunicados', 'calendario', 'confirmar'].includes(initHash)) showTab(initHash);

// ===================== RENDER ALL =====================
function renderAll() {
  renderComunicados();
  renderCalendario();
  renderConfirmar();
}

// ===================== COMUNICADOS  =====================
var CAT_LABELS = { aviso: 'Aviso', externa: 'Atividade Externa', reuniao: 'Reuniao', outros: 'Outros' };

function renderComunicados() {
  var el = document.getElementById('com-lista-pais');
  if (!fbLoaded) {
    el.innerHTML = '<div class="empty">' + SVG_COM + '<p>Carregando comunicados...</p></div>';
    return;
  }
  var coms = [...(data.comunicados || [])].sort((a, b) => {
    if (a.fixado && !b.fixado) return -1;
    if (!a.fixado && b.fixado) return 1;
    return (b.ts || 0) - (a.ts || 0);
  });

  if (!coms.length) {
    el.innerHTML = '<div class="empty">' + SVG_COM + '<p>Nenhum comunicado por enquanto.<br>Volte em breve!</p></div>';
    return;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&')
      .replace(/</g, '<')
      .replace(/>/g, '>')
      .replace(/"/g, '"')
      .replace(/'/g, ''');
  }

  el.innerHTML = coms.map(c => {
    var catCls = 'com-cat-' + (c.categoria || 'aviso');
    var catLabel = CAT_LABELS[c.categoria] || 'Aviso';
    var dataStr = c.dataEvento ? ` · 📅 ${escapeHtml(c.dataEvento)}` : '';
    var pubDate = c.ts ? new Date(c.ts).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '';
    var titulo = escapeHtml(c.titulo);
    var texto = escapeHtml(c.texto);
    return `<div class="com-card${c.fixado ? ' fixado' : ''}">
      <div class="com-header-row">
        <span class="com-cat-badge ${catCls}">${catLabel}</span>
        <span class="com-titulo">${c.fixado ? '📌 ' : ''}${titulo}</span>
      </div>
      <div class="com-meta">Publicado em ${pubDate}${dataStr}</div>
      <div class="com-texto">${texto}</div>
    </div>`
  }).join('');
}

// ===================== CALENDÁRIO =====================
var FERIADO_WORDS = ['feriado', 'emenda'];
var MES_ORDER = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
var calPaisFilter = 'todos';

function filterCalPais(f, btn) {
  calPaisFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCalendario();
}

function getRowClass(ev) {
  var a = (ev.atividade || '').toLowerCase();
  var cat = (ev.categoria || '').toLowerCase();
  if (FERIADO_WORDS.some(w => a.includes(w))) return 'row-feriado';
  if (cat === 'regional' || cat === 'distrital') return 'row-regional';
  if (cat === 'local') return 'row-local';
  if (['externa', 'caçada', 'rally', 'cinema'].some(w => a.includes(w))) return 'row-externa';
  if (a.includes('normal sede')) return 'row-normal';
  return '';
}

function getDotColor(rowCls) {
  return rowCls === 'row-feriado' ? '#ef5350' : rowCls === 'row-local' ? '#1e88e5' : rowCls === 'row-regional' ? '#8e24aa' : rowCls === 'row-externa' ? '#f9a825' : '#4caf50';
}

function getCatLabel(rowCls) {
  if (rowCls === 'row-feriado') return 'Feriado';
  if (rowCls === 'row-local') return 'Local';
  if (rowCls === 'row-regional') return 'Regional/Distrital';
  if (rowCls === 'row-externa') return 'Externa';
  return 'Normal Sede';
}

function renderCalendario() {
  var el = document.getElementById('cal-lista-pais');
  var today = new Date();
  var todayYear = today.getFullYear();

  var cal = (data.calendario || []).filter(ev => {
    var isFeriado = FERIADO_WORDS.some(w => (ev.atividade || '').toLowerCase().includes(w));
    // Hide months before current month
    var parts = (ev.data || '').split('/');
    if (parts.length === 2 && parseInt(parts[1]) < today.getMonth() + 1) return false;
    if (calPaisFilter === 'proximas') {
      if (isFeriado) return false;
      if (parts.length < 2) return false;
      var evDate = new Date(todayYear, parseInt(parts[1]) - 1, parseInt(parts[0]));
      return evDate >= today;
    }
    if (calPaisFilter === 'Local') return (ev.categoria || '').toLowerCase() === 'local';
    if (calPaisFilter === 'Distrital') return (ev.categoria || '').toLowerCase() === 'distrital';
    if (calPaisFilter === 'Regional') return (ev.categoria || '').toLowerCase() === 'regional';
    return true; // todos
  });

  if (!cal.length) {
    el.innerHTML = '<div class="empty">' + SVG_CAL + '<p>Nenhuma atividade encontrada.</p></div>';
    return;
  }

  var foundNext = false;
  var byMonth = {};
  cal.forEach(ev => {
    if (!byMonth[ev.mes]) byMonth[ev.mes] = [];
    byMonth[ev.mes].push(ev);
  });

  var sorted = Object.entries(byMonth).sort((a, b) => MES_ORDER.indexOf(a[0]) - MES_ORDER.indexOf(b[0]));

  el.innerHTML = sorted.map(([mes, evs]) => {
    var rows = evs.map(ev => {
      var rowCls = getRowClass(ev);
      var isFeriado = rowCls === 'row-feriado';
      var parts = (ev.data || '').split('/');
      var isProxima = false;
      if (parts.length === 2 && !foundNext && !isFeriado) {
        var evDate = new Date(todayYear, parseInt(parts[1]) - 1, parseInt(parts[0]));
        if (evDate >= today) { isProxima = true; foundNext = true; }
      }
      var dotColor = getDotColor(rowCls);
      var catLabel = getCatLabel(rowCls);
      return `<div class="cal-row ${rowCls}">
        <span class="cal-date${isProxima ? ' proxima' : ''}">${ev.data}</span>
        <span class="cal-dot" style="background:${dotColor}" role="img" aria-label="${catLabel}"></span>
        <span class="cal-nome">${ev.atividade}</span>
      </div>`;
    }).join('');
    return `<div class="card">
      <div class="month-header">${mes.toUpperCase()}</div>
      ${rows}
    </div>`;
  }).join('');
}

// ===================== CONFIRMAR PRESENÇA =====================
var confirmado = false;
var proximasAtiv = [];

var NORMAL_SEDE_WORDS = ['normal sede'];

function renderConfirmar() {
  var el = document.getElementById('conf-content');
  var today = new Date();
  var todayYear = today.getFullYear();

  // Get next activities — exclude feriados AND Normal Sede
  proximasAtiv = (data.calendario || [])
    .filter(ev => {
      var a = (ev.atividade || '').toLowerCase();
      if (FERIADO_WORDS.some(w => a.includes(w))) return false;
      if (NORMAL_SEDE_WORDS.some(w => a.includes(w))) return false;
      var parts = (ev.data || '').split('/');
      if (parts.length < 2) return false;
      var evDate = new Date(todayYear, parseInt(parts[1]) - 1, parseInt(parts[0]));
      return evDate >= today;
    })
    .sort((a, b) => {
      var pa = a.data.split('/'), pb = b.data.split('/');
      var da = new Date(todayYear, parseInt(pa[1]) - 1, parseInt(pa[0]));
      var db = new Date(todayYear, parseInt(pb[1]) - 1, parseInt(pb[0]));
      var ma = MES_ORDER.indexOf(a.mes), mb = MES_ORDER.indexOf(b.mes);
      if (ma !== mb) return ma - mb;
      return da - db;
    })
    .slice(0, 8);

  if (!proximasAtiv.length) {
    el.innerHTML = '<div class="empty">' + SVG_OK + '<p>Nenhuma atividade próxima para confirmar.</p></div>';
    return;
  }

  if (confirmado) {
    el.innerHTML = `<div class="success-box">
      <div class="icon">🎉</div>
      <h3>Presença confirmada!</h3>
      <p>Obrigado pela confirmação.<br>Vemos vocês na atividade!</p>
      <button class="btn-confirmar" onclick="novaConfirmacao()" style="margin-top:16px">Confirmar outra atividade</button>
    </div>`;
    return;
  }

  var opcoesAtiv = proximasAtiv.map((ev, i) => `<option value="${i}">${ev.data} — ${ev.atividade}</option>`).join('');

  el.innerHTML = `
    <div class="conf-section">
      <h2>Confirmar presença</h2>
      <p>Selecione a atividade e informe o nome do lobinho para confirmar a participação.</p>
      <div class="form-group">
        <label for="conf-ativ">Atividade</label>
        <select id="conf-ativ" onchange="updateAtivCard()">${opcoesAtiv}</select>
      </div>
      <div id="conf-ativ-card" class="conf-atividade-card">
        <div class="data">${proximasAtiv[0].data} · ${proximasAtiv[0].dia || ''}</div>
        <div class="nome">${proximasAtiv[0].atividade}</div>
      </div>
      <div class="form-group">
        <label for="conf-nome">Nome do lobinho <span aria-hidden="true" style="color:var(--red)">*</span></label>
        <input type="text" id="conf-nome" placeholder="Ex: Lucas Masaki" aria-required="true" aria-describedby="conf-nome-error">
        <div id="conf-nome-error" role="alert" style="display:none;color:var(--red);font-size:12px;margin-top:4px"></div>
      </div>
      <div class="form-group">
        <label for="conf-status">Presença</label>
        <select id="conf-status">
          <option value="sim">Sim, vai participar</option>
          <option value="nao">Não vai poder ir</option>
          <option value="talvez">Talvez</option>
        </select>
      </div>
      <div class="form-group">
        <label for="conf-obs">Observação (opcional)</label>
        <textarea id="conf-obs" class="textarea-obs" placeholder="Alguma informação para a chefia..."></textarea>
      </div>
      <button class="btn-confirmar" onclick="enviarConfirmacao()">Confirmar presença</button>
    </div>
  `;
}

function updateAtivCard() {
  var sel = document.getElementById('conf-ativ');
  var card = document.getElementById('conf-ativ-card');
  if (!sel || !card) return;
  var idx = parseInt(sel.value);
  var ev = proximasAtiv[idx];
  if (!ev) return;
  card.innerHTML = `
    <div class="data">${ev.data} · ${ev.dia || ''}</div>
    <div class="nome">${ev.atividade}</div>
  `;
}

function novaConfirmacao() {
  confirmado = false;
  renderConfirmar();
}

function enviarConfirmacao() {
  var sel = document.getElementById('conf-ativ');
  var ativIdx = parseInt(sel.value);
  var nome = document.getElementById('conf-nome').value.trim();
  var status = document.getElementById('conf-status').value;
  var obs = document.getElementById('conf-obs').value.trim();

  // Comprehensive name validation
  var errEl = document.getElementById('conf-nome-error');
  
  if (!nome) {
    if (errEl) { errEl.textContent = 'Por favor, informe o nome do lobinho.'; errEl.style.display = 'block'; }
    document.getElementById('conf-nome').focus();
    return;
  }
  
  if (nome.length < 2) {
    if (errEl) { errEl.textContent = 'O nome deve ter pelo menos 2 caracteres.'; errEl.style.display = 'block'; }
    document.getElementById('conf-nome').focus();
    return;
  }
  
  if (nome.length > 100) {
    if (errEl) { errEl.textContent = 'O nome deve ter no máximo 100 caracteres.'; errEl.style.display = 'block'; }
    document.getElementById('conf-nome').focus();
    return;
  }
  
  // Validate character set: letters (including accented), spaces, hyphens, and apostrophes
  var validNamePattern = /^[a-zA-ZÀ-ÿ\s'-]+$/;
  if (!validNamePattern.test(nome)) {
    if (errEl) { errEl.textContent = 'O nome deve conter apenas letras, espaços, hífens e apóstrofos.'; errEl.style.display = 'block'; }
    document.getElementById('conf-nome').focus();
    return;
  }
  
  // Prevent potential injection attempts (HTML/script tags)
  if (/<|>|<|>|script|javascript|onerror|onclick/i.test(nome)) {
    if (errEl) { errEl.textContent = 'O nome contém caracteres não permitidos.'; errEl.style.display = 'block'; }
    document.getElementById('conf-nome').focus();
    return;
  }
  
  if (errEl) errEl.style.display = 'none';

  var ativ = proximasAtiv[ativIdx];
  var conf = {
    atividade: ativ.atividade,
    dataAtiv: ativ.data,
    nomeLobinho: nome,
    status,
    obs,
    ts: Date.now()
  };

  var btn = document.querySelector('.btn-confirmar');
  if (btn) { btn.disabled = true; btn.textContent = 'Enviando...'; }

  db.ref('alcateia/confirmacoes').push(conf)
    .then(() => {
      confirmado = true;
      renderConfirmar();
    })
    .catch((error) => {
      // Log detailed error information for debugging
      console.error('Erro ao enviar confirmação:', {
        error: error,
        errorCode: error.code,
        errorMessage: error.message,
        atividade: ativ.atividade,
        timestamp: new Date().toISOString()
      });
      
      // Provide specific, actionable error message
      var errorMsg = 'Não foi possível enviar a confirmação. ';
      if (error.code === 'PERMISSION_DENIED') {
        errorMsg += 'Verifique sua conexão e tente novamente.';
      } else if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {
        errorMsg += 'Verifique sua conexão com a internet.';
      } else {
        errorMsg += 'Tente novamente em alguns instantes.';
      }
      
      showErrorNotification(errorMsg, false);
      
      // Re-enable button for retry
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Tentar novamente';
      }
    });
}

// ===================== TEMA =====================
function toggleTheme() {
  var isDark = document.body.classList.toggle('dark');
  localStorage.setItem('paisTheme', isDark ? 'dark' : 'light');
  document.getElementById('theme-icon-moon').style.display = isDark ? 'none' : '';
  document.getElementById('theme-icon-sun').style.display  = isDark ? ''     : 'none';
}

(function initTheme() {
  var saved = localStorage.getItem('paisTheme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark = saved === 'dark' || (!saved && prefersDark);
  if (isDark) {
    document.body.classList.add('dark');
    document.documentElement.classList.remove('dark-init');
    document.getElementById('theme-icon-moon').style.display = 'none';
    document.getElementById('theme-icon-sun').style.display  = '';
  } else {
    document.documentElement.classList.remove('dark-init');
  }
})();

// Init
var h = window.location.hash.replace('#', '');
if (['comunicados', 'calendario', 'confirmar'].includes(h)) showTab(h);

// Made with Bob
