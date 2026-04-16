// ===================== ESPECIALIDADES MODULE =====================
// Gerencia especialidades dos lobinhos

let currentEspFilter = 'todos';

// ===================== RENDER ESPECIALIDADES =====================
function renderEsp() {
  const tbody = document.getElementById('esp-tbody');
  if(!tbody) return;
  
  let filtered = state.especialidades;
  if(currentEspFilter !== 'todos') {
    if(currentEspFilter === 'pendentes') {
      filtered = state.especialidades.filter(e => e.comprado !== 'OK' || e.entregue !== 'OK');
    } else if(currentEspFilter === 'concluidas') {
      filtered = state.especialidades.filter(e => e.comprado === 'OK' && e.entregue === 'OK');
    }
  }
  
  tbody.innerHTML = filtered.map((e, idx) => {
    const realIdx = state.especialidades.indexOf(e);
    const statusClass = (e.comprado === 'OK' && e.entregue === 'OK') ? 'row-concluida' : 'row-pendente';
    return `
      <tr class="${statusClass}">
        <td>${e.nome}</td>
        <td>${e.esp}</td>
        <td>${e.nivel}</td>
        <td>${e.data || '-'}</td>
        <td>${e.comprado || '-'}</td>
        <td>${e.entregue || '-'}</td>
        <td>${e.avaliador || '-'}</td>
        <td>
          <button class="btn-icon" onclick="editEsp(${realIdx})" title="Editar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
          <button class="btn-icon" onclick="delEsp(${realIdx})" title="Excluir">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// ===================== FILTER ESPECIALIDADES =====================
function filterEsp(filter) {
  currentEspFilter = filter;
  
  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  
  renderEsp();
}

// ===================== POPULATE LOBINHOS SELECT =====================
function populateEspLobinhos() {
  const select = document.getElementById('esp-nome');
  if(!select) return;
  
  // Get unique names from presenca
  const nomes = [...new Set(state.presenca.membros.map(m => m.nome))].sort();
  
  select.innerHTML = '<option value="">Selecione...</option>' + 
    nomes.map(n => `<option value="${n}">${n}</option>`).join('');
}

// ===================== EDIT ESPECIALIDADE =====================
function editEsp(idx) {
  window.editingEspIdx = idx;
  const e = state.especialidades[idx];
  
  document.getElementById('modal-esp-title').textContent = 'Editar especialidade';
  
  // Populate select if not already done
  populateEspLobinhos();
  
  document.getElementById('esp-nome').value = e.nome || '';
  document.getElementById('esp-esp').value = e.esp || '';
  document.getElementById('esp-nivel').value = e.nivel || '1';
  document.getElementById('esp-data').value = e.data || '';
  document.getElementById('esp-comp').value = e.comprado || 'OK';
  document.getElementById('esp-entregue').value = e.entregue || 'OK';
  document.getElementById('esp-avaliador').value = e.avaliador || '';
  
  document.getElementById('modal-esp').classList.add('open');
}

// ===================== SAVE ESPECIALIDADE =====================
function saveEsp() {
  const nome = document.getElementById('esp-nome').value.trim();
  const esp = document.getElementById('esp-esp').value.trim();
  const nivel = parseInt(document.getElementById('esp-nivel').value) || 1;
  const data = document.getElementById('esp-data').value.trim();
  const comprado = document.getElementById('esp-comp').value.trim();
  const entregue = document.getElementById('esp-entregue').value.trim();
  const avaliador = document.getElementById('esp-avaliador').value.trim();
  
  if(!nome || !esp) {
    showToast('Preencha nome e especialidade');
    return;
  }
  
  const espObj = {nome, esp, nivel, data, comprado, entregue, avaliador};
  
  if(window.editingEspIdx >= 0) {
    state.especialidades[window.editingEspIdx] = espObj;
    showToast('Especialidade atualizada');
  } else {
    state.especialidades.push(espObj);
    showToast('Especialidade adicionada');
  }
  
  fbSaveSection('especialidades');
  closeModals();
  renderEsp();
}

// ===================== DELETE ESPECIALIDADE =====================
function delEsp(idx) {
  if(!confirm('Excluir esta especialidade?')) return;
  state.especialidades.splice(idx, 1);
  fbSaveSection('especialidades');
  showToast('Especialidade excluída');
  renderEsp();
}

// Exporta funções para uso global
window.renderEsp = renderEsp;
window.filterEsp = filterEsp;
window.populateEspLobinhos = populateEspLobinhos;
window.editEsp = editEsp;
window.saveEsp = saveEsp;
window.delEsp = delEsp;

// Made with Bob