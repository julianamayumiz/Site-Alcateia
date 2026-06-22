// ===================== ESPECIALIDADES MODULE =====================
// Renderiza especialidades com filtros múltiplos, stats e badges coloridos

const DELIVERY_STATUS_VALUES = new Set(['OK','Ok','ok','Sim','SIM','sim']);
const isDelivered = v => DELIVERY_STATUS_VALUES.has(v);

// ===================== FILTROS =====================
function matchesEspFilters(esp, f) {
  if(f.txt && !(esp.nome || '').toLowerCase().includes(f.txt) &&
     !(esp.esp || '').toLowerCase().includes(f.txt)) return false;
  if(f.lobinho && esp.nome !== f.lobinho) return false;
  if(f.nivel !== '' && String(esp.nivel) !== f.nivel) return false;
  if(f.comprado === 'ok' && esp.comprado !== 'OK') return false;
  if(f.comprado === 'nao' && esp.comprado === 'OK') return false;
  const delivered = isDelivered(esp.entregue);
  if(f.entregue === 'sim' && !delivered) return false;
  if(f.entregue === 'nao' && delivered) return false;
  return true;
}

function populateEspLobinhos() {
  const sel = document.getElementById('esp-filter-lobinho');
  if(!sel) return;
  const nomes = [...new Set(state.especialidades.map(e => e.nome).filter(Boolean))].sort();
  const cur = sel.value;
  sel.innerHTML = '<option value="">Todos os lobinhos</option>' +
    nomes.map(n => `<option value="${n}"${n === cur ? ' selected' : ''}>${n}</option>`).join('');
}

function populateEspNomeModal(selectedNome) {
  const container = document.getElementById('esp-nome-list');
  if(!container) return;
  const nomes = (state.presenca?.membros || []).map(m => m.nome).filter(Boolean).sort();
  if(!nomes.length) {
    container.innerHTML = '<span style="font-size:12px;color:var(--text2)">Nenhum lobinho cadastrado</span>';
    return;
  }
  container.innerHTML = nomes.map(n =>
    `<label class="checklist-item"><input type="checkbox" value="${n}"${n === selectedNome ? ' checked' : ''}><span>${n}</span></label>`
  ).join('');
}

function filterEsp() {
  renderEsp();
}

function limparFiltrosEsp() {
  ['esp-search','esp-filter-lobinho','esp-filter-nivel','esp-filter-comprado','esp-filter-entregue']
    .forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
  renderEsp();
}

// ===================== RENDER =====================
function calcEspStats(list) {
  return list.reduce((s, e) => {
    s.total++;
    if(isDelivered(e.entregue)) s.entregues++;
    if(Number(e.nivel) === 0) s.nivel0++;
    return s;
  }, { total: 0, entregues: 0, nivel0: 0 });
}

function renderEsp() {
  populateEspLobinhos();

  const tbody = document.getElementById('esp-tbody');
  const stats = document.getElementById('esp-stats');
  if(!tbody) return;

  const f = {
    txt: (document.getElementById('esp-search')?.value || '').toLowerCase(),
    lobinho: document.getElementById('esp-filter-lobinho')?.value || '',
    nivel: document.getElementById('esp-filter-nivel')?.value || '',
    comprado: document.getElementById('esp-filter-comprado')?.value || '',
    entregue: document.getElementById('esp-filter-entregue')?.value || ''
  };

  const filtered = state.especialidades
    .map((e, idx) => ({ ...e, _idx: idx }))
    .filter(e => matchesEspFilters(e, f));

  if(filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:32px;color:var(--text3)">Nenhum resultado.</td></tr>';
  } else {
    tbody.innerHTML = filtered.map(e => {
      const compOK = e.comprado === 'OK';
      const entOK = isDelivered(e.entregue);
      return `<tr>
        <td><b>${e.nome || ''}</b></td>
        <td>${e.esp || ''}</td>
        <td><span class="nivel-badge nivel-${e.nivel}">${e.nivel}</span></td>
        <td style="font-family:'DM Mono',monospace;font-size:12px">${e.data || '—'}</td>
        <td><span class="badge ${compOK ? 'badge-green' : 'badge-red'}">${e.comprado || '—'}</span></td>
        <td><span class="badge ${entOK ? 'badge-green' : 'badge-red'}">${e.entregue || '—'}</span></td>
        <td style="color:var(--text2);font-size:12px">${e.avaliador || '—'}</td>
        <td style="white-space:nowrap">
          <button class="lanc-btn" onclick="editEsp(${e._idx})" aria-label="Editar" title="Editar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="lanc-btn lanc-btn-del" onclick="delEsp(${e._idx})" aria-label="Excluir" title="Excluir">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </td>
      </tr>`;
    }).join('');
  }

  if(stats) {
    const s = calcEspStats(state.especialidades);
    const pendentes = s.total - s.entregues;
    stats.innerHTML = `
      <div class="stat-mini"><div class="val">${s.total}</div><div class="lbl">Total</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--accent)">${s.entregues}</div><div class="lbl">Entregues</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--red)">${pendentes}</div><div class="lbl">Pendentes</div></div>
      <div class="stat-mini"><div class="val" style="color:#7c3aed">${s.nivel0}</div><div class="lbl">Insígnias</div></div>
    `;
  }
}

// ===================== EDIT =====================
function editEsp(idx) {
  window.editingEspIdx = idx;
  const e = state.especialidades[idx];
  document.getElementById('modal-esp-title').textContent = 'Editar especialidade';
  populateEspLobinhos();
  populateEspNomeModal(e.nome || '');
  document.getElementById('esp-esp').value = e.esp || '';
  document.getElementById('esp-nivel').value = e.nivel || '1';
  document.getElementById('esp-data').value = e.data || '';
  document.getElementById('esp-comp').value = e.comprado || 'OK';
  document.getElementById('esp-entregue').value = e.entregue || 'OK';
  document.getElementById('esp-avaliador').value = e.avaliador || '';
  openModal('modal-esp');
}

// ===================== SAVE =====================
function saveEsp() {
  const checkedNomes = [...document.querySelectorAll('#esp-nome-list input[type="checkbox"]:checked')].map(cb => cb.value);
  const esp = document.getElementById('esp-esp').value.trim();
  const nivel = parseInt(document.getElementById('esp-nivel').value) || 1;
  const data = document.getElementById('esp-data').value.trim();
  const comprado = document.getElementById('esp-comp').value.trim();
  const entregue = document.getElementById('esp-entregue').value.trim();
  const avaliador = document.getElementById('esp-avaliador').value.trim();

  if(!checkedNomes.length || !esp) {
    showToast('Selecione ao menos um lobinho e preencha a especialidade');
    return;
  }

  if(window.editingEspIdx >= 0) {
    state.especialidades[window.editingEspIdx] = { nome: checkedNomes[0], esp, nivel, data, comprado, entregue, avaliador };
    showToast('Especialidade atualizada');
  } else {
    checkedNomes.forEach(nome => state.especialidades.push({ nome, esp, nivel, data, comprado, entregue, avaliador }));
    showToast(checkedNomes.length > 1 ? `${checkedNomes.length} especialidades adicionadas` : 'Especialidade adicionada');
  }

  withModalSaveLoading(fbSaveSection('especialidades')).then(() => {
    closeModals();
    renderEsp();
  });
}

// ===================== DELETE =====================
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
window.limparFiltrosEsp = limparFiltrosEsp;
window.populateEspLobinhos = populateEspLobinhos;
window.populateEspNomeModal = populateEspNomeModal;
window.editEsp = editEsp;
window.saveEsp = saveEsp;
window.delEsp = delEsp;
