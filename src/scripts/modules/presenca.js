// ===================== PRESENCA MODULE =====================
// Gerencia a lista de presença dos lobinhos

let presencaSortAsc = true;

// ===================== RENDER PRESENCA =====================
function renderPresenca() {
  const thead = document.getElementById('presenca-thead');
  const tbody = document.getElementById('presenca-tbody');
  if(!thead || !tbody) return;
  
  const datas = state.presenca.datas || [];
  const membros = state.presenca.membros || [];
  
  // Header with dates
  thead.innerHTML = `
    <tr>
      <th class="sticky-col" onclick="togglePresencaSort()">
        Nome ${presencaSortAsc ? '▲' : '▼'}
      </th>
      ${datas.map(d => `<th>${d}</th>`).join('')}
    </tr>
  `;
  
  // Body with members and attendance
  tbody.innerHTML = membros.map((m, mi) => {
    const reg = m.reg || [];
    return `
      <tr>
        <td class="sticky-col"><strong>${m.nome}</strong></td>
        ${datas.map((d, ri) => {
          const val = reg[ri] || '';
          const cls = val === 'P' ? 'cell-p' : val === 'A' ? 'cell-a' : val === 'FJ' ? 'cell-fj' : '';
          return `<td class="cell-presenca ${cls}" onclick="openCellDropdown(event, ${mi}, ${ri})">${val}</td>`;
        }).join('')}
      </tr>
    `;
  }).join('');
}

// ===================== SORT PRESENCA =====================
function togglePresencaSort() {
  presencaSortAsc = !presencaSortAsc;
  state.presenca.membros.sort((a, b) => {
    const na = (a.nome || '').toLowerCase();
    const nb = (b.nome || '').toLowerCase();
    return presencaSortAsc ? na.localeCompare(nb) : nb.localeCompare(na);
  });
  renderPresenca();
}

// ===================== CELL DROPDOWN =====================
function openCellDropdown(e, mi, ri) {
  e.stopPropagation();
  
  // Remove any existing dropdown
  const existing = document.querySelector('.presenca-dropdown');
  if(existing) existing.remove();
  
  const cell = e.target;
  const rect = cell.getBoundingClientRect();
  
  const dropdown = document.createElement('div');
  dropdown.className = 'presenca-dropdown';
  dropdown.style.position = 'fixed';
  dropdown.style.top = rect.bottom + 'px';
  dropdown.style.left = rect.left + 'px';
  dropdown.innerHTML = `
    <div class="dropdown-item" onclick="setCell(${mi}, ${ri}, 'P')">P - Presente</div>
    <div class="dropdown-item" onclick="setCell(${mi}, ${ri}, 'A')">A - Ausente</div>
    <div class="dropdown-item" onclick="setCell(${mi}, ${ri}, 'FJ')">FJ - Falta Justificada</div>
    <div class="dropdown-item" onclick="setCell(${mi}, ${ri}, '')">Limpar</div>
  `;
  
  document.body.appendChild(dropdown);
  
  // Close dropdown when clicking outside
  setTimeout(() => {
    document.addEventListener('click', function closeDropdown() {
      const dd = document.querySelector('.presenca-dropdown');
      if(dd) dd.remove();
      document.removeEventListener('click', closeDropdown);
    });
  }, 10);
}

// ===================== SET CELL VALUE =====================
function setCell(mi, ri, val) {
  if(!state.presenca.membros[mi]) return;
  if(!state.presenca.membros[mi].reg) state.presenca.membros[mi].reg = [];
  
  // If setting FJ, open modal for justification
  if(val === 'FJ') {
    openFJModal(mi, ri);
    return;
  }
  
  state.presenca.membros[mi].reg[ri] = val;
  fbSaveSection('presenca');
  renderPresenca();
  showToast(val ? `Marcado como ${val}` : 'Presença limpa');
}

// ===================== FALTA JUSTIFICADA MODAL =====================
function openFJModal(mi, ri) {
  window.currentFJMembro = mi;
  window.currentFJData = ri;
  
  const membro = state.presenca.membros[mi];
  const data = state.presenca.datas[ri];
  
  document.getElementById('fj-membro-nome').textContent = membro.nome;
  document.getElementById('fj-data').textContent = data;
  document.getElementById('fj-motivo').value = '';
  
  // Check if there's already a justification
  if(!state.justificativas) state.justificativas = {};
  const key = `${mi}-${ri}`;
  if(state.justificativas[key]) {
    document.getElementById('fj-motivo').value = state.justificativas[key];
  }
  
  openModal('modal-fj');
}

// ===================== SAVE FALTA JUSTIFICADA =====================
function saveFJ() {
  const mi = window.currentFJMembro;
  const ri = window.currentFJData;
  const motivo = document.getElementById('fj-motivo').value.trim();
  
  if(!motivo) {
    showToast('Digite o motivo da falta');
    return;
  }
  
  // Save justification
  if(!state.justificativas) state.justificativas = {};
  const key = `${mi}-${ri}`;
  state.justificativas[key] = motivo;
  
  // Mark as FJ
  if(!state.presenca.membros[mi].reg) state.presenca.membros[mi].reg = [];
  state.presenca.membros[mi].reg[ri] = 'FJ';
  
  withModalSaveLoading(Promise.all([
    fbSet('justificativas', state.justificativas),
    fbSaveSection('presenca')
  ])).then(() => {
    closeModals();
    renderPresenca();
    showToast('Falta justificada registrada');
  });
}

// ===================== CANCEL FALTA JUSTIFICADA =====================
function cancelFJ() {
  closeModals();
}

// Exporta funções para uso global
window.renderPresenca = renderPresenca;
window.togglePresencaSort = togglePresencaSort;
window.openCellDropdown = openCellDropdown;
window.setCell = setCell;
window.openFJModal = openFJModal;
window.saveFJ = saveFJ;
window.cancelFJ = cancelFJ;

// Made with Bob