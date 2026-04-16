// ===================== CAIXA MODULE =====================
// Fluxo de caixa: saldo principal, gráfico entrada/saída, lista agrupada por mês
// Mantém o modelo de dados atual (tipo: 'receita' | 'despesa')

const caixaFilter = { tipo: 'todos', mes: '', cat: '' };
const MESES_PT_CAP = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const fmtBRL = v => 'R$ ' + (v || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
const isEntrada = l => l.tipo === 'receita';

// ===================== RENDER =====================
function renderCaixa() {
  renderCaixaStats();
  renderCaixaGrafico();
  renderCaixaFiltros();
  renderCaixaLista();
}

// Header card: saldo atual + pills de entrada/saída + botão novo
function renderCaixaStats() {
  const el = document.getElementById('caixa-stats');
  if(!el) return;

  const lancs = state.caixa || [];
  const totalE = lancs.filter(isEntrada).reduce((s, l) => s + (parseFloat(l.valor) || 0), 0);
  const totalS = lancs.filter(l => !isEntrada(l)).reduce((s, l) => s + (parseFloat(l.valor) || 0), 0);
  const saldo = totalE - totalS;

  el.innerHTML = `
    <div class="caixa-header-card">
      <div class="caixa-saldo-principal">
        <div class="caixa-saldo-label">Saldo Atual</div>
        <div class="caixa-saldo-valor" style="color:${saldo >= 0 ? 'var(--green)' : 'var(--red)'}">${fmtBRL(saldo)}</div>
      </div>
      <div class="caixa-pills">
        <div class="caixa-pill caixa-pill-entrada">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>
          Entradas ${fmtBRL(totalE)}
        </div>
        <div class="caixa-pill caixa-pill-saida">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
          Saídas ${fmtBRL(totalS)}
        </div>
      </div>
      <button class="btn-novo-lancamento" onclick="openAddLancamento()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Novo Lançamento
      </button>
    </div>
  `;
}

// Gráfico: barras horizontais entrada vs saída
function renderCaixaGrafico() {
  const grafico = document.getElementById('caixa-grafico');
  if(!grafico) return;

  const lancs = state.caixa || [];
  const totalE = lancs.filter(isEntrada).reduce((s, l) => s + (parseFloat(l.valor) || 0), 0);
  const totalS = lancs.filter(l => !isEntrada(l)).reduce((s, l) => s + (parseFloat(l.valor) || 0), 0);
  const maxVal = Math.max(totalE, totalS, 1);
  const pctE = Math.max(totalE > 0 ? 4 : 0, Math.round(totalE / maxVal * 100));
  const pctS = Math.max(totalS > 0 ? 4 : 0, Math.round(totalS / maxVal * 100));

  grafico.innerHTML = `
    <div class="caixa-barra-row">
      <span class="caixa-barra-label">Entradas</span>
      <div class="caixa-barra-track"><div class="caixa-barra-fill caixa-barra-entrada" style="width:${pctE}%"></div></div>
      <span class="caixa-barra-valor" style="color:var(--accent)">${fmtBRL(totalE)}</span>
    </div>
    <div class="caixa-barra-row">
      <span class="caixa-barra-label">Saídas</span>
      <div class="caixa-barra-track"><div class="caixa-barra-fill caixa-barra-saida" style="width:${pctS}%"></div></div>
      <span class="caixa-barra-valor" style="color:var(--red)">${fmtBRL(totalS)}</span>
    </div>
  `;
}

// Popula os selects de mês e categoria
function renderCaixaFiltros() {
  const selMes = document.getElementById('caixa-filter-mes');
  const selCat = document.getElementById('caixa-filter-cat');

  if(selMes) {
    const mesesPresentes = [...new Set((state.caixa || [])
      .filter(l => l.data)
      .map(l => (l.data || '').substring(0, 7)))]
      .sort()
      .reverse();
    const cur = selMes.value;
    selMes.innerHTML = '<option value="">Todos os meses</option>' +
      mesesPresentes.map(m => {
        const [y, mo] = m.split('-');
        return `<option value="${m}"${m === cur ? ' selected' : ''}>${MESES_PT_CAP[parseInt(mo) - 1]} ${y}</option>`;
      }).join('');
  }

  if(selCat) {
    const cats = [...new Set((state.caixa || []).map(l => l.categoria).filter(Boolean))].sort();
    const cur = selCat.value;
    selCat.innerHTML = '<option value="">Todas as categorias</option>' +
      cats.map(c => `<option value="${c}"${c === cur ? ' selected' : ''}>${c}</option>`).join('');
  }
}

// Lista agrupada por mês, com subtotais
function renderCaixaLista() {
  const el = document.getElementById('caixa-lista');
  if(!el) return;

  const filtered = (state.caixa || []).filter(l => {
    if(caixaFilter.tipo !== 'todos' && l.tipo !== caixaFilter.tipo) return false;
    if(caixaFilter.mes && (!l.data || !l.data.startsWith(caixaFilter.mes))) return false;
    if(caixaFilter.cat && l.categoria !== caixaFilter.cat) return false;
    return true;
  }).sort((a, b) => (b.data || '').localeCompare(a.data || ''));

  if(!filtered.length) {
    el.innerHTML = '<div class="empty-state">Nenhum lançamento encontrado.<br>Clique em <b>+ Novo Lançamento</b> para começar.</div>';
    return;
  }

  const byMonth = {};
  filtered.forEach(l => {
    const key = l.data ? l.data.substring(0, 7) : 'sem-data';
    (byMonth[key] = byMonth[key] || []).push(l);
  });

  el.innerHTML = Object.entries(byMonth)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([key, items]) => {
      const label = key === 'sem-data' ? 'Sem data' : (() => {
        const [y, m] = key.split('-');
        return MESES_PT_CAP[parseInt(m) - 1] + ' ' + y;
      })();
      const subE = items.filter(isEntrada).reduce((s, l) => s + (parseFloat(l.valor) || 0), 0);
      const subS = items.filter(l => !isEntrada(l)).reduce((s, l) => s + (parseFloat(l.valor) || 0), 0);

      const rows = items.map(l => {
        const idx = state.caixa.indexOf(l);
        const entrada = isEntrada(l);
        const dotColor = entrada ? 'var(--accent)' : 'var(--red)';
        const valorClass = entrada ? 'entrada' : 'saida';
        const sign = entrada ? '+' : '-';
        const dateStr = l.data ? new Date(l.data + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }) : '';
        return `
          <div class="lanc-row">
            <span class="lanc-tipo-dot" style="background:${dotColor}"></span>
            <div class="lanc-info">
              <div class="lanc-desc">${l.descricao || l.categoria || ''}</div>
              <div class="lanc-meta">${l.categoria || ''}${l.categoria && dateStr ? ' · ' : ''}${dateStr}</div>
            </div>
            <span class="lanc-valor ${valorClass}">${sign}${fmtBRL(parseFloat(l.valor) || 0).replace('R$ ','R$ ')}</span>
            <div class="lanc-actions">
              <button class="lanc-btn" onclick="editLanc(${idx})" aria-label="Editar lançamento">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </button>
              <button class="lanc-btn lanc-btn-del" onclick="delLanc(${idx})" aria-label="Excluir lançamento">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
              </button>
            </div>
          </div>`;
      }).join('');

      return `
        <div>
          <div class="lanc-mes-header">
            <span class="lanc-mes-titulo">${label}</span>
            <span class="lanc-mes-entrada">+${fmtBRL(subE)}</span>
            <span class="lanc-mes-saida">-${fmtBRL(subS)}</span>
          </div>
          ${rows}
        </div>`;
    }).join('');
}

// ===================== FILTRO =====================
function filterCaixa(tipo, btn) {
  if(tipo !== null) {
    caixaFilter.tipo = tipo;
    document.querySelectorAll('#p-caixa .filter-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
  }
  const selMes = document.getElementById('caixa-filter-mes');
  const selCat = document.getElementById('caixa-filter-cat');
  caixaFilter.mes = selMes ? selMes.value : '';
  caixaFilter.cat = selCat ? selCat.value : '';
  renderCaixaLista();
}

// ===================== CRUD =====================
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

  const lanc = { data, tipo, descricao, categoria, valor };

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

function delLanc(idx) {
  if(!confirm('Excluir este lançamento?')) return;
  state.caixa.splice(idx, 1);
  fbSaveSection('caixa');
  showToast('Lançamento excluído');
  renderCaixa();
}

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

// ===================== EXPORT =====================
function exportarCaixa() {
  if(typeof XLSX === 'undefined') {
    showToast('Biblioteca de export indisponível');
    return;
  }
  const wb = XLSX.utils.book_new();
  const rows = [['Data','Tipo','Categoria','Valor (R$)','Descrição']];
  const sorted = [...(state.caixa || [])].sort((a, b) => (a.data || '').localeCompare(b.data || ''));
  sorted.forEach(l => {
    const dateStr = l.data ? new Date(l.data + 'T12:00:00').toLocaleDateString('pt-BR') : '';
    rows.push([dateStr, isEntrada(l) ? 'Receita' : 'Despesa', l.categoria || '', parseFloat(l.valor) || 0, l.descricao || '']);
  });
  rows.push([]);
  rows.push(['RESUMO']);
  const totalE = sorted.filter(isEntrada).reduce((s, l) => s + (parseFloat(l.valor) || 0), 0);
  const totalS = sorted.filter(l => !isEntrada(l)).reduce((s, l) => s + (parseFloat(l.valor) || 0), 0);
  rows.push(['Total Receitas','','','R$ ' + totalE.toFixed(2)]);
  rows.push(['Total Despesas','','','R$ ' + totalS.toFixed(2)]);
  rows.push(['Saldo','','','R$ ' + (totalE - totalS).toFixed(2)]);
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = [{wch:12},{wch:10},{wch:22},{wch:14},{wch:40}];
  XLSX.utils.book_append_sheet(wb, ws, 'Fluxo de Caixa');
  XLSX.writeFile(wb, 'FluxoCaixa_Alcateia.xlsx');
  showToast('Exportado!');
}

// Exporta funções para uso global
window.renderCaixa = renderCaixa;
window.renderCaixaGrafico = renderCaixaGrafico;
window.renderCaixaLista = renderCaixaLista;
window.filterCaixa = filterCaixa;
window.saveLancamento = saveLancamento;
window.editLanc = editLanc;
window.delLanc = delLanc;
window.openAddLancamento = openAddLancamento;
window.exportarCaixa = exportarCaixa;
