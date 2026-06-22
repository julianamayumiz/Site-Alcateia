// ===================== MODALS MODULE =====================
// Gerencia abertura e fechamento de modais com a11y (ESC, focus trap, scroll lock)

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

let lastFocusedBeforeModal = null;

function openModal(id) {
  const overlay = document.getElementById(id);
  if(!overlay) return;
  lastFocusedBeforeModal = document.activeElement;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Foca o primeiro campo interativo
  setTimeout(() => {
    const first = overlay.querySelector(FOCUSABLE_SELECTOR);
    if(first) first.focus();
  }, 50);
}

function openAdd() {
  const active = document.querySelector('.page.active').id;

  if(active==='p-calendario') {
    window.editingCalIdx = -1;
    document.getElementById('modal-cal-title').textContent = 'Nova atividade';
    ['add-mes','add-data','add-dia','add-ativ','add-cat','add-chefe','add-datas','add-obs'].forEach(id => {
      const el = document.getElementById(id);
      if(el.tagName==='SELECT') el.selectedIndex=0; else el.value='';
    });
    openModal('modal-cal');
  }
  else if(active==='p-especialidades') {
    window.editingEspIdx = -1;
    document.getElementById('modal-esp-title').textContent = 'Nova especialidade';
    if(typeof window.populateEspLobinhos === 'function') window.populateEspLobinhos();
    if(typeof window.populateEspNomeModal === 'function') window.populateEspNomeModal('');
    ['esp-esp','esp-data','esp-avaliador'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('esp-nivel').value = '1';
    document.getElementById('esp-comp').value = 'OK';
    document.getElementById('esp-entregue').value = 'OK';
    openModal('modal-esp');
  }
  else if(active==='p-matilhas') {
    openModal('modal-mat');
  }
  else if(active==='p-comunicados') {
    window.editingComIdx = -1;
    document.getElementById('modal-com-title').textContent = 'Novo comunicado';
    document.getElementById('com-titulo').value = '';
    document.getElementById('com-cat').value = 'aviso';
    document.getElementById('com-data-evento').value = '';
    document.getElementById('com-texto').value = '';
    document.getElementById('com-fixado').checked = false;
    openModal('modal-com');
  }
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
  if(lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
    lastFocusedBeforeModal.focus();
    lastFocusedBeforeModal = null;
  }
}

function getOpenModal() {
  return document.querySelector('.modal-overlay.open');
}

// Focus trap: mantém o foco dentro do modal ativo
function trapFocus(e) {
  if(e.key !== 'Tab') return;
  const open = getOpenModal();
  if(!open) return;
  const focusables = Array.from(open.querySelectorAll(FOCUSABLE_SELECTOR))
    .filter(el => el.offsetParent !== null);
  if(focusables.length === 0) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if(e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if(!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

// ESC para fechar
function handleModalKeydown(e) {
  const open = getOpenModal();
  if(!open) return;
  if(e.key === 'Escape') {
    e.preventDefault();
    if(open.id === 'modal-fj' && typeof window.cancelFJ === 'function') {
      window.cancelFJ();
    } else {
      closeModals();
    }
    return;
  }
  trapFocus(e);
}

// Setup modal click handlers
function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => {
      if(e.target===m) {
        if(m.id === 'modal-fj' && typeof window.cancelFJ === 'function') {
          window.cancelFJ();
        } else {
          closeModals();
        }
      }
    });
  });
  document.addEventListener('keydown', handleModalKeydown);
}

// Exporta funções para uso global
window.openModal = openModal;
window.openAdd = openAdd;
window.closeModals = closeModals;
window.initModals = initModals;

// Made with Bob
