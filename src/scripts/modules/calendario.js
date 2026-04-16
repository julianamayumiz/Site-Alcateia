// ===================== CALENDARIO MODULE =====================
// Gerencia o calendário de atividades

let currentCalFilter = 'todos';

// ===================== RENDER CALENDARIO =====================
function renderCal() {
  const tbody = document.getElementById('cal-tbody');
  if(!tbody) return;
  
  let filtered = state.calendario;
  if(currentCalFilter !== 'todos') {
    filtered = state.calendario.filter(ev => {
      if(currentCalFilter === 'feriados') return isFeriado(ev);
      if(currentCalFilter === 'externos') return ev.categoria && ev.categoria.toLowerCase().includes('extern');
      if(currentCalFilter === 'sede') return !ev.categoria || ev.categoria.toLowerCase().includes('sede') || ev.categoria === '';
      return true;
    });
  }
  
  tbody.innerHTML = filtered.map((ev, idx) => {
    const rowClass = getRowClass(ev);
    return `
      <tr class="${rowClass}">
        <td>${ev.mes}</td>
        <td>${ev.data}</td>
        <td>${ev.dia}</td>
        <td>${ev.atividade}</td>
        <td>${ev.categoria || '-'}</td>
        <td>${ev.chefe || '-'}</td>
        <td>${ev.datas || '-'}</td>
        <td>${ev.obs || '-'}</td>
        <td>
          <button class="btn-icon" onclick="editCal(${state.calendario.indexOf(ev)})" title="Editar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
          <button class="btn-icon" onclick="delCal(${state.calendario.indexOf(ev)})" title="Excluir">
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

// ===================== FILTER CALENDARIO =====================
function filterCal(filter) {
  currentCalFilter = filter;
  
  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  
  renderCal();
}

// ===================== EDIT CALENDARIO =====================
function editCal(idx) {
  window.editingCalIdx = idx;
  const ev = state.calendario[idx];
  
  document.getElementById('modal-cal-title').textContent = 'Editar atividade';
  document.getElementById('add-mes').value = ev.mes || '';
  document.getElementById('add-data').value = ev.data || '';
  document.getElementById('add-dia').value = ev.dia || '';
  document.getElementById('add-ativ').value = ev.atividade || '';
  document.getElementById('add-cat').value = ev.categoria || '';
  document.getElementById('add-chefe').value = ev.chefe || '';
  document.getElementById('add-datas').value = ev.datas || '';
  document.getElementById('add-obs').value = ev.obs || '';
  
  openModal('modal-cal');
}

// ===================== SAVE CALENDARIO =====================
function saveCalEvent() {
  const mes = document.getElementById('add-mes').value.trim();
  const data = document.getElementById('add-data').value.trim();
  const dia = document.getElementById('add-dia').value.trim();
  const atividade = document.getElementById('add-ativ').value.trim();
  const categoria = document.getElementById('add-cat').value.trim();
  const chefe = document.getElementById('add-chefe').value.trim();
  const datas = document.getElementById('add-datas').value.trim();
  const obs = document.getElementById('add-obs').value.trim();
  
  if(!mes || !data || !atividade) {
    showToast('Preencha mês, data e atividade');
    return;
  }
  
  const ev = {mes, data, dia, atividade, categoria, chefe, datas, obs};
  
  if(window.editingCalIdx >= 0) {
    state.calendario[window.editingCalIdx] = ev;
    showToast('Atividade atualizada');
  } else {
    state.calendario.push(ev);
    showToast('Atividade adicionada');
  }
  
  // Sort by month order
  state.calendario.sort((a,b) => {
    const ma = MES_NUM[a.mes] || 99;
    const mb = MES_NUM[b.mes] || 99;
    if(ma !== mb) return ma - mb;
    // Parse dates for same month
    const [da1, ma1] = (a.data || '01/01').split('/').map(Number);
    const [db1, mb1] = (b.data || '01/01').split('/').map(Number);
    return da1 - db1;
  });
  
  withModalSaveLoading(fbSaveSection('calendario')).then(() => {
    closeModals();
    renderCal();
  });
}

// ===================== DELETE CALENDARIO =====================
function delCal(idx) {
  if(!confirm('Excluir esta atividade?')) return;
  state.calendario.splice(idx, 1);
  fbSaveSection('calendario');
  showToast('Atividade excluída');
  renderCal();
}

// ===================== HELPERS =====================
function getRowClass(ev) {
  if(isFeriado(ev)) return 'row-feriado';
  if(ev.categoria && ev.categoria.toLowerCase().includes('extern')) return 'row-externa';
  if(ev.categoria && (ev.categoria.toLowerCase().includes('local') || ev.categoria.toLowerCase().includes('distrital') || ev.categoria.toLowerCase().includes('regional'))) return 'row-evento';
  return '';
}

function isFeriado(ev) {
  const feriadoWords = ['feriado', 'emenda'];
  const ativ = (ev.atividade || '').toLowerCase();
  const cat = (ev.categoria || '').toLowerCase();
  return feriadoWords.some(w => ativ.includes(w) || cat.includes(w));
}

// Exporta funções para uso global
window.renderCal = renderCal;
window.filterCal = filterCal;
window.editCal = editCal;
window.saveCalEvent = saveCalEvent;
window.delCal = delCal;
window.getRowClass = getRowClass;
window.isFeriado = isFeriado;

// Made with Bob