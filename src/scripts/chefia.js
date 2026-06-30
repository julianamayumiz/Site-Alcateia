// ===================== CHEFIA ORCHESTRATOR =====================
// Orquestra a inicialização da aplicação usando os módulos de src/scripts/modules/

function render(page) {
  if (page === 'dashboard' && typeof window.renderDashboard === 'function') {
    window.renderDashboard();
  } else if (page === 'calendario' && typeof window.renderCal === 'function') {
    window.renderCal();
  } else if (page === 'presenca' && typeof window.renderPresenca === 'function') {
    window.renderPresenca();
  } else if (page === 'especialidades' && typeof window.renderEsp === 'function') {
    window.renderEsp();
  } else if (page === 'matilhas' && typeof window.renderMatilhas === 'function') {
    window.renderMatilhas();
  } else if (page === 'comunicados' && typeof window.renderComunicados === 'function') {
    window.renderComunicados();
    if (typeof window.renderConfirmacoes === 'function') {
      window.renderConfirmacoes();
    }
  } else if (page === 'caixa' && typeof window.renderCaixa === 'function') {
    window.renderCaixa();
  } else if (page === 'progressao' && typeof window.renderProgressao === 'function') {
    window.renderProgressao();
  } else if (page === 'passagem' && typeof window.renderPassagem === 'function') {
    window.renderPassagem();
  } else if (page === 'controle' && typeof window.renderControle === 'function') {
    window.renderControle();
  }
}

function closeMaisMenu() {
  const menu = document.getElementById('mais-menu');
  const trigger = document.getElementById('btn-mais');
  if (menu) menu.classList.remove('open');
  if (trigger) trigger.classList.remove('active');
}

function toggleMaisMenu() {
  const menu = document.getElementById('mais-menu');
  const trigger = document.getElementById('btn-mais');
  if (!menu) return;

  const isOpen = menu.classList.toggle('open');
  if (trigger) trigger.classList.toggle('active', isOpen);
}

function handleGlobalClick(event) {
  const menu = document.getElementById('mais-menu');
  const trigger = document.getElementById('btn-mais');

  if (
    menu &&
    menu.classList.contains('open') &&
    !menu.contains(event.target) &&
    (!trigger || !trigger.contains(event.target))
  ) {
    closeMaisMenu();
  }
}


function openAddForCurrentPage() {
  const activePage = document.querySelector('.page.active')?.id;

  if (activePage === 'p-caixa' && typeof window.openAddLancamento === 'function') {
    window.openAddLancamento();
    return;
  }

  if (typeof window.openAdd === 'function') {
    window.openAdd();
  }
}

function bindStaticEvents() {
  const addButton = document.getElementById('btn-add');
  if (addButton && !addButton.dataset.bound) {
    addButton.addEventListener('click', openAddForCurrentPage);
    addButton.dataset.bound = 'true';
  }

  const maisButton = document.getElementById('btn-mais');
  if (maisButton && !maisButton.dataset.bound) {
    maisButton.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleMaisMenu();
    });
    maisButton.dataset.bound = 'true';
  }

  const importInput = document.getElementById('import-file');
  if (importInput && !importInput.dataset.bound && typeof window.importFile === 'function') {
    importInput.addEventListener('change', window.importFile);
    importInput.dataset.bound = 'true';
  }

  document.addEventListener('click', handleGlobalClick);
}

function bootstrap() {
  if (typeof window.initModals === 'function') {
    window.initModals();
  }

  if (typeof window.initFirebase === 'function') {
    window.initFirebase();
  }

  bindStaticEvents();

  const initialPage = window.location.hash.replace('#', '') || 'dashboard';
  if (typeof window.goTo === 'function') {
    window.goTo(initialPage);
  } else {
    render(initialPage);
  }
}

window.render = render;
window.closeMaisMenu = closeMaisMenu;
window.toggleMaisMenu = toggleMaisMenu;
window.openAddForCurrentPage = openAddForCurrentPage;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}

// Made with Bob
