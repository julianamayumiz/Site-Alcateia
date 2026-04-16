// ===================== UTILS MODULE =====================
// Funções utilitárias compartilhadas

// ===================== TOAST =====================
function showToast(msg) {
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
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
