// ===================== MODALS MODULE =====================
// Gerencia abertura e fechamento de modais

function openAdd() {
  const active = document.querySelector('.page.active').id;
  
  if(active==='p-calendario') {
    window.editingCalIdx = -1;
    document.getElementById('modal-cal-title').textContent = 'Nova atividade';
    // clear fields
    ['add-mes','add-data','add-dia','add-ativ','add-cat','add-chefe','add-datas','add-obs'].forEach(id => {
      const el = document.getElementById(id);
      if(el.tagName==='SELECT') el.selectedIndex=0; else el.value='';
    });
    document.getElementById('modal-cal').classList.add('open');
  }
  else if(active==='p-especialidades') {
    window.editingEspIdx = -1;
    document.getElementById('modal-esp-title').textContent = 'Nova especialidade';
    if(typeof window.populateEspLobinhos === 'function') window.populateEspLobinhos();
    ['esp-esp','esp-data','esp-avaliador'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('esp-nome').selectedIndex = 0;
    document.getElementById('esp-nivel').value = '1';
    document.getElementById('esp-comp').value = 'OK';
    document.getElementById('esp-entregue').value = 'OK';
    document.getElementById('modal-esp').classList.add('open');
  }
  else if(active==='p-matilhas') {
    document.getElementById('modal-mat').classList.add('open');
  }
  else if(active==='p-comunicados') {
    window.editingComIdx = -1;
    document.getElementById('modal-com-title').textContent = 'Novo comunicado';
    document.getElementById('com-titulo').value = '';
    document.getElementById('com-cat').value = 'aviso';
    document.getElementById('com-data-evento').value = '';
    document.getElementById('com-texto').value = '';
    document.getElementById('com-fixado').checked = false;
    document.getElementById('modal-com').classList.add('open');
  }
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
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
}

// Exporta funções para uso global
window.openAdd = openAdd;
window.closeModals = closeModals;
window.initModals = initModals;

// Made with Bob
