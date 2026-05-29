// ===================== NAVIGATION MODULE =====================
// Gerencia navegação entre páginas e sidebar mobile

const pageNames = {
  dashboard: 'Dashboard',
  calendario: 'Calendário',
  presenca: 'Presença',
  especialidades: 'Especialidades',
  matilhas: 'Matilhas',
  comunicados: 'Comunicados',
  caixa: 'Fluxo de Caixa',
  progressao: 'Progressão'
};

const pageList = ['dashboard','calendario','presenca','especialidades','matilhas','comunicados','caixa','progressao'];

// ===================== SIDEBAR MOBILE =====================
function toggleSidebar() {
  const s = document.getElementById('sidebar');
  const o = document.getElementById('sidebar-overlay');
  s.classList.toggle('open');
  o.classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}

// ===================== NAVIGATION =====================
function goTo(page) {
  if(!pageList.includes(page)) page = 'dashboard';
  
  // Remove active class from all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Remove active class from all nav items
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
    n.removeAttribute('aria-current');
  });
  
  // Add active class to current page
  document.getElementById('p-'+page).classList.add('active');
  
  // Add active class to current nav item
  const activeNavItem = document.querySelectorAll('.nav-item')[pageList.indexOf(page)];
  activeNavItem.classList.add('active');
  activeNavItem.setAttribute('aria-current', 'page');
  
  // Update topbar title
  document.getElementById('topbar-title').textContent = pageNames[page];
  
  // Show/hide add button based on page
  const addBtn = document.getElementById('btn-add');
  addBtn.style.display = (page === 'presenca' || page === 'dashboard') ? 'none' : 'inline-flex';

  // Importar/Exportar: ocultos no dashboard
  const hideData = page === 'dashboard';
  document.querySelectorAll('.btn-data').forEach(b => {
    b.style.display = hideData ? 'none' : '';
  });
  
  // Update bottom navigation (mobile)
  ['dashboard','calendario','presenca','especialidades','matilhas'].forEach(p => {
    const el = document.getElementById('bnav-'+p);
    if(el) el.classList.toggle('active', p===page);
  });
  
  // Update URL hash without reloading
  history.replaceState(null, '', page === 'dashboard' ? '#' : '#' + page);
  
  closeSidebar();
  render(page);
}

// Handle browser back/forward and direct hash links
window.addEventListener('hashchange', function() {
  const hash = window.location.hash.replace('#','') || 'dashboard';
  goTo(hash);
});

// Exporta funções para uso global
window.toggleSidebar = toggleSidebar;
window.closeSidebar = closeSidebar;
window.goTo = goTo;
window.pageNames = pageNames;
window.pageList = pageList;

// Made with Bob
