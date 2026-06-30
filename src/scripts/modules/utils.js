// ===================== UTILS MODULE =====================
// Funções utilitárias compartilhadas

// ===================== SANITIZAÇÃO HTML =====================
function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
window.esc = esc;

// ===================== DEBOUNCE =====================
// Adia a execução de fn até passarem `wait` ms sem novas chamadas.
// Usado para evitar re-render a cada tecla em campos de busca.
function debounce(fn, wait = 250) {
  let t = null;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}
window.debounce = debounce;

// ===================== CARREGAMENTO SOB DEMANDA: XLSX =====================
// A biblioteca XLSX (~600KB) só é usada para importar/exportar planilhas.
// Em vez de baixá-la em toda visita, carregamos sob demanda no primeiro
// import/export. O service worker (stale-while-revalidate em cdnjs) mantém
// o arquivo em cache para uso offline depois da primeira vez.
let _xlsxPromise = null;
function ensureXLSX() {
  if (typeof XLSX !== 'undefined') return Promise.resolve();
  if (_xlsxPromise) return _xlsxPromise;
  _xlsxPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
    s.integrity = 'sha384-vtjasyidUo0kW94K5MXDXntzOJpQgBKXmE7e2Ga4LG0skTTLeBi97eFAXsqewJjw';
    s.crossOrigin = 'anonymous';
    s.onload = () => resolve();
    s.onerror = () => { _xlsxPromise = null; reject(new Error('Falha ao carregar XLSX')); };
    document.head.appendChild(s);
  });
  return _xlsxPromise;
}
window.ensureXLSX = ensureXLSX;

// ===================== TOAST =====================
function showToast(msg) {
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===================== LOADING STATE EM BOTÕES =====================
// Envolve uma operação assíncrona adicionando .is-loading ao botão primário
// do modal atualmente aberto enquanto a promise não resolve.
function withModalSaveLoading(promiseOrFn) {
  const openModal = document.querySelector('.modal-overlay.open');
  const btn = openModal ? openModal.querySelector('.form-actions .btn-primary') : null;
  if(btn) btn.classList.add('is-loading');
  const p = (typeof promiseOrFn === 'function') ? promiseOrFn() : promiseOrFn;
  const done = () => { if(btn) btn.classList.remove('is-loading'); };
  if(p && typeof p.then === 'function') {
    return p.then(r => { done(); return r; }).catch(e => { done(); throw e; });
  }
  done();
  return Promise.resolve(p);
}

// ===================== CONSTANTES =====================
const MESES_PT = ['','janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const DIAS_PT = ['dom.','seg.','ter.','qua.','qui.','sex.','sáb.'];
const MES_ORDER = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const MES_NUM = {'janeiro':1,'fevereiro':2,'março':3,'abril':4,'maio':5,'junho':6,'julho':7,'agosto':8,'setembro':9,'outubro':10,'novembro':11,'dezembro':12};

// ===================== CONVERSÃO DE DATAS =====================
function excelSerialToDate(serial) {
  // Excel serial: days since 1900-01-01 (with leap year bug on 1900)
  const d = new Date((serial - 25569) * 86400 * 1000);
  return d;
}

function formatDateBR(d) {
  const day = String(d.getUTCDate()).padStart(2,'0');
  const month = String(d.getUTCMonth()+1).padStart(2,'0');
  return `${day}/${month}`;
}

function todayStr() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

function formatDateStrBR(dateStr) {
  if(!dateStr) return '';
  const [y,m,d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

function isDateKey(k) {
  return /^\d{4}-\d{2}-\d{2}$/.test(k);
}

function currentSemesterBounds() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  return month <= 6 ? {start:`${year}-01-01`, end:`${year}-06-30`} : {start:`${year}-07-01`, end:`${year}-12-31`};
}

// ===================== DOWNLOAD HELPER =====================
function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for(let i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

// ===================== TEMA =====================
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('alcateiaTheme', isDark ? 'dark' : 'light');
  const moon = document.getElementById('theme-icon-moon');
  const sun  = document.getElementById('theme-icon-sun');
  if(moon) moon.style.display = isDark ? 'none' : '';
  if(sun)  sun.style.display  = isDark ? '' : 'none';
}

(function initTheme() {
  const saved = localStorage.getItem('alcateiaTheme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(saved === 'dark' || (!saved && prefersDark)) {
    document.body.classList.add('dark');
    const moon = document.getElementById('theme-icon-moon');
    const sun  = document.getElementById('theme-icon-sun');
    if(moon) moon.style.display = 'none';
    if(sun)  sun.style.display  = '';
  }
})();

// Exporta funções para uso global
window.showToast = showToast;
window.withModalSaveLoading = withModalSaveLoading;
window.toggleTheme = toggleTheme;
window.MESES_PT = MESES_PT;
window.DIAS_PT = DIAS_PT;
window.MES_ORDER = MES_ORDER;
window.MES_NUM = MES_NUM;
window.excelSerialToDate = excelSerialToDate;
window.formatDateBR = formatDateBR;
window.todayStr = todayStr;
window.formatDateStrBR = formatDateStrBR;
window.isDateKey = isDateKey;
window.currentSemesterBounds = currentSemesterBounds;
window.s2ab = s2ab;

// Made with Bob
