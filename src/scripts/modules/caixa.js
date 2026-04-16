// ===================== CAIXA MODULE =====================
// Gerencia fluxo de caixa (receitas e despesas)

let currentCaixaFilter = 'todos';
let currentCaixaView = 'grafico'; // 'grafico' ou 'lista'

// ===================== RENDER CAIXA =====================
function renderCaixa() {
  if(currentCaixaView === 'grafico') {
    renderCaixaGrafico();
  } else {
    renderCaixaLista();
  }
}

// ===================== RENDER GRAFICO =====================
function renderCaixaGrafico() {
  const container = document.getElementById('caixa-grafico');
  if(!container) return;
  
  // Calculate totals
  let receitas = 0;
  let despesas = 0;
  
  state.caixa.forEach(lanc => {
    const valor = parseFloat(lanc.valor) || 0;
    if(lanc.tipo === 'receita') {
      receitas += valor;
    } else {
      despesas += valor;
    }
  });
  
  const saldo = receitas - despesas;
  const saldoClass = saldo >= 0 ? 'saldo-positivo' : 'saldo-negativo';
  
  container.innerHTML = `
    <div class="caixa-resumo">
      <div class="resumo-card receita">
        <h3>Receitas</h3>
        <p class="valor">R$ ${receitas.toFixed(2)}</p>
      </div>
      <div class="resumo-card despesa">
        <h3>Despesas</h3>
        <p class="valor">R$ ${despesas.toFixed(2)}</p>
      </div>
      <div class="resumo-card saldo ${saldoClass}">
        <h3>Saldo</h3>
        <p class="valor">R$ ${saldo.toFixed(2)}</p>
      </div>
    </div>
    
    <div class="caixa-chart">
      <div class="chart-bar">
        <div class="bar-receita" style="width: ${receitas > 0 ? (receitas / (receitas + despesas) * 100) : 0}%">
          <span>${receitas > 0 ? ((receitas / (receitas + despesas) * 100).toFixed(1)) : 0}%</span>
        </div>
        <div class="bar-despesa" style="width: ${despesas > 0 ? (despesas / (receitas + despesas) * 100) : 0}%">
          <span>${despesas > 0 ? ((despesas / (receitas + despesas) * 100).toFixed(1)) : 0}%</span>
        </div>
      </div>
    </div>
  `;
}

// ===================== RENDER LISTA =====================
function renderCaixaLista() {
  const tbody = document.getElementById('caixa-tbody');
  if(!tbody) return;
  
  let filtered = state.caixa;
  if(currentCaixaFilter !== 'todos') {
    filtered = state.caixa.filter(l => l.tipo === currentCaixaFilter);
  }
  
  if(filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="empty-state">Nenhum lançamento encontrado</td></tr>';
    return;
  }
  
  // Sort by date (most recent first)
  filtered.sort((a, b) => {
    const dateA = new Date(a.data || '2000-01-01');
    const dateB = new Date(b.data || '2000-01-01');
    return dateB - dateA;
  });
  
  tbody.innerHTML = filtered.map((lanc, idx) => {
    const realIdx = state.caixa.indexOf(lanc);
    const tipoClass = lanc.tipo === 'receita' ? 'row-receita' : 'row-despesa';
    const valorFormatado = parseFloat(lanc.valor || 0).toFixed(2);
    
    return `
      <tr class="${tipoClass}">
        <td>${formatDateStrBR(lanc.data)}</td>
        <td><span class="badge-tipo badge-${lanc.tipo}">${lanc.tipo}</span></td>
        <td>${lanc.descricao}</td>
        <td>${lanc.categoria || '-'}</td>
        <td class="valor-cell">R$ ${valorFormatado}</td>
        <td>
          <button class="btn-icon" onclick="editLanc(${realIdx})" title="Editar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
          <button class="btn-icon" onclick="delLanc(${realIdx})" title="Excluir">
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

// ===================== FILTER CAIXA =====================
function filterCaixa(tipo) {
  currentCaixaFilter = tipo;
  
  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === tipo);
  });
  
  renderCaixa();
}

// ===================== TOGGLE VIEW =====================
function toggleCaixaView(view) {
  currentCaixaView = view;
  
  // Update view buttons
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
  
  // Show/hide containers
  document.getElementById('caixa-grafico-container').style.display = view === 'grafico' ? 'block' : 'none';
  document.getElementById('caixa-lista-container').style.display = view === 'lista' ? 'block' : 'none';
  
  renderCaixa();
}

// ===================== SAVE LANCAMENTO =====================
function saveLancamento() {
  const data = document.getElementById('lanc-data').value.trim();
  const tipo = document.getElementById('lanc-tipo').value;
  const descricao = document.getElementById('lanc-desc').value.trim();
  const categoria = document.getElementById('lanc-cat').value.trim();
  const valor = parseFloat(document.getElementById('lanc-valor').value) || 0;
  
  if(!data || !descricao || valor <= 0) {
    showToast('Preencha data, descrição e valor válido');
    return;
  }
  
  const lanc = {data, tipo, descricao, categoria, valor};
  
  if(window.editingLancIdx >= 0) {
    state.caixa[window.editingLancIdx] = lanc;
    showToast('Lançamento atualizado');
  } else {
    state.caixa.push(lanc);
    showToast('Lançamento adicionado');
  }
  
  withModalSaveLoading(fbSaveSection('caixa')).then(() => {
    closeModals();
    renderCaixa();
  });
}

// ===================== EDIT LANCAMENTO =====================
function editLanc(idx) {
  window.editingLancIdx = idx;
  const lanc = state.caixa[idx];
  
  document.getElementById('modal-lanc-title').textContent = 'Editar lançamento';
  document.getElementById('lanc-data').value = lanc.data || '';
  document.getElementById('lanc-tipo').value = lanc.tipo || 'receita';
  document.getElementById('lanc-desc').value = lanc.descricao || '';
  document.getElementById('lanc-cat').value = lanc.categoria || '';
  document.getElementById('lanc-valor').value = lanc.valor || '';
  
  openModal('modal-lanc');
}

// ===================== DELETE LANCAMENTO =====================
function delLanc(idx) {
  if(!confirm('Excluir este lançamento?')) return;
  state.caixa.splice(idx, 1);
  fbSaveSection('caixa');
  showToast('Lançamento excluído');
  renderCaixa();
}

// ===================== OPEN ADD MODAL =====================
function openAddLancamento() {
  window.editingLancIdx = -1;
  document.getElementById('modal-lanc-title').textContent = 'Novo lançamento';
  document.getElementById('lanc-data').value = todayStr();
  document.getElementById('lanc-tipo').value = 'receita';
  document.getElementById('lanc-desc').value = '';
  document.getElementById('lanc-cat').value = '';
  document.getElementById('lanc-valor').value = '';
  openModal('modal-lanc');
}

// Exporta funções para uso global
window.renderCaixa = renderCaixa;
window.renderCaixaGrafico = renderCaixaGrafico;
window.renderCaixaLista = renderCaixaLista;
window.filterCaixa = filterCaixa;
window.toggleCaixaView = toggleCaixaView;
window.saveLancamento = saveLancamento;
window.editLanc = editLanc;
window.delLanc = delLanc;
window.openAddLancamento = openAddLancamento;

// Made with Bob