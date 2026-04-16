// ===================== CALENDARIO MODULE =====================
// Renderiza calendário agrupado por mês, com row-colors por categoria

let currentCalFilter = 'todos';
const FERIADO_WORDS = ['feriado', 'emenda'];
const EXTERNA_WORDS = ['externa', 'caçada', 'rally', 'cinema'];

// ===================== HELPERS =====================
function isFeriado(ev) {
  const a = (ev.atividade || '').toLowerCase();
  const c = (ev.categoria || '').toLowerCase();
  return FERIADO_WORDS.some(w => a.includes(w) || c.includes(w));
}

function getRowClass(ev) {
  const a = (ev.atividade || '').toLowerCase();
  const c = (ev.categoria || '').toLowerCase();
  if(FERIADO_WORDS.some(w => a.includes(w) || c.includes(w))) return 'row-feriado';
  if(c === 'regional' || c === 'distrital') return 'row-regional';
  if(c === 'local') return 'row-local';
  if(EXTERNA_WORDS.some(w => a.includes(w))) return 'row-externa';
  if(a.includes('normal sede')) return 'row-normal';
  return '';
}

function matchFilter(ev, filter) {
  if(filter === 'todos') return true;
  if(filter === 'feriados') return isFeriado(ev);
  if(filter === 'externos') {
    const a = (ev.atividade || '').toLowerCase();
    const c = (ev.categoria || '').toLowerCase();
    return EXTERNA_WORDS.some(w => a.includes(w)) || c.includes('extern') || c === 'regional' || c === 'distrital';
  }
  if(filter === 'sede') {
    return (ev.atividade || '').toLowerCase().includes('normal sede') ||
      (!isFeriado(ev) && !(ev.categoria || '').toLowerCase().match(/extern|regional|distrital/));
  }
  return true;
}

// ===================== RENDER =====================
function renderCal() {
  const tbody = document.getElementById('cal-tbody');
  if(!tbody) return;

  // Filtra + preserva índice original
  const filtered = state.calendario
    .map((ev, originalIdx) => ({ ...ev, _idx: originalIdx }))
    .filter(ev => matchFilter(ev, currentCalFilter));

  if(filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--text3)">Nenhuma atividade encontrada.</td></tr>';
    return;
  }

  // Agrupa por mês (preserva ordem do array, que já vem sorted)
  const byMonth = {};
  filtered.forEach(ev => {
    const mes = ev.mes || 'Sem mês';
    (byMonth[mes] = byMonth[mes] || []).push(ev);
  });

  tbody.innerHTML = Object.entries(byMonth).map(([mes, evs]) => {
    const header = `<tr class="month-header"><td colspan="7">${mes.toUpperCase()}</td></tr>`;
    const rows = evs.map(ev => {
      const rowCls = getRowClass(ev);
      const chefeBadge = ev.chefe ? `<span class="badge badge-gray">${ev.chefe}</span>` : '';
      return `<tr class="event-row ${rowCls}">
        <td><b>${ev.data || ''}</b></td>
        <td style="color:var(--text2)">${ev.dia || ''}</td>
        <td>${ev.atividade || ''}</td>
        <td>${chefeBadge}</td>
        <td style="font-size:12px;color:var(--text2)">${ev.datas || ''}</td>
        <td style="font-size:12px;color:var(--text2)">${ev.obs || ''}</td>
        <td style="white-space:nowrap">
          <button class="lanc-btn" onclick="editCal(${ev._idx})" aria-label="Editar atividade" title="Editar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="lanc-btn lanc-btn-del" onclick="delCal(${ev._idx})" aria-label="Excluir atividade" title="Excluir">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </td>
      </tr>`;
    }).join('');
    return header + rows;
  }).join('');
}

// ===================== FILTER =====================
function filterCal(filter) {
  currentCalFilter = filter;
  document.querySelectorAll('#cal-filters .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderCal();
}

// ===================== EDIT =====================
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

// ===================== SAVE =====================
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

  const ev = { mes, data, dia, atividade, categoria, chefe, datas, obs };

  if(window.editingCalIdx >= 0) {
    state.calendario[window.editingCalIdx] = ev;
    showToast('Atividade atualizada');
  } else {
    state.calendario.push(ev);
    showToast('Atividade adicionada');
  }

  // Sort by month order, then by day-of-month
  state.calendario.sort((a, b) => {
    const ma = MES_NUM[a.mes] || 99;
    const mb = MES_NUM[b.mes] || 99;
    if(ma !== mb) return ma - mb;
    const [da] = (a.data || '01/01').split('/').map(Number);
    const [db] = (b.data || '01/01').split('/').map(Number);
    return da - db;
  });

  withModalSaveLoading(fbSaveSection('calendario')).then(() => {
    closeModals();
    renderCal();
  });
}

// ===================== DELETE =====================
function delCal(idx) {
  if(!confirm('Excluir esta atividade?')) return;
  state.calendario.splice(idx, 1);
  fbSaveSection('calendario');
  showToast('Atividade excluída');
  renderCal();
}

// Exporta funções para uso global
window.renderCal = renderCal;
window.filterCal = filterCal;
window.editCal = editCal;
window.saveCalEvent = saveCalEvent;
window.delCal = delCal;
window.getRowClass = getRowClass;
window.isFeriado = isFeriado;
