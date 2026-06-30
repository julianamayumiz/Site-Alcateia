// ===================== CONTROLE MODULE =====================
// Gerencia entrada/saída de lobinhos e apelidos

let controleTab = 'ativos';
let editandoLobinhoIndex = null;
let saidaLobinhoIndex = null;

// ===================== HELPERS =====================

function getLobinhos() {
  return state.lobinhos || [];
}

// Deriva lista base dos membros de presença caso lobinhos ainda não exista
function initLobinhosIfNeeded() {
  if (!state.lobinhos) {
    const membros = (state.presenca && state.presenca.membros) || [];
    state.lobinhos = membros.map(m => ({
      nome: m.nome,
      apelido: '',
      ativo: true
    }));
  }
}

// ===================== RENDER =====================

function renderControle() {
  initLobinhosIfNeeded();

  const lista = document.getElementById('controle-lista');
  const label = document.getElementById('ctrl-section-label');
  if (!lista) return;

  const ativos = getLobinhos().filter(l => l.ativo !== false);
  const inativos = getLobinhos().filter(l => l.ativo === false);

  document.getElementById('ctrl-tab-ativos').style.opacity = controleTab === 'ativos' ? '1' : '0.45';
  document.getElementById('ctrl-tab-inativos').style.opacity = controleTab === 'inativos' ? '1' : '0.45';

  const itens = controleTab === 'ativos' ? ativos : inativos;
  if (label) label.textContent = controleTab === 'ativos'
    ? `Lobinhos ativos · ${ativos.length}`
    : `Lobinhos inativos · ${inativos.length}`;

  if (itens.length === 0) {
    lista.innerHTML = `<p style="color:var(--text3);font-size:14px;padding:24px 0">${controleTab === 'ativos' ? 'Nenhum lobinho ativo.' : 'Nenhum lobinho inativo.'}</p>`;
    return;
  }

  lista.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:8px">
      ${itens.map((l, i) => {
        const globalIdx = getLobinhos().indexOf(l);
        const isInativo = l.ativo === false;
        return `
          <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--card);border-radius:10px;border:1px solid var(--border)">
            <div style="flex:1;min-width:0">
              <div style="font-weight:500;font-size:14px;color:${isInativo ? 'var(--text3)' : 'var(--text1)'}">
                ${l.nome}
                ${isInativo ? '<span style="font-size:11px;color:var(--text3);font-weight:400;margin-left:6px">(inativo)</span>' : ''}
              </div>
              ${l.apelido ? `<div style="font-size:12px;color:var(--text3);margin-top:2px">Apelido: ${l.apelido}</div>` : ''}
            </div>
            <div style="display:flex;gap:6px;flex-shrink:0">
              <button class="btn" style="font-size:12px;padding:4px 10px" onclick="abrirEditarLobinho(${globalIdx})" title="Editar apelido">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </button>
              ${isInativo
                ? `<button class="btn" style="font-size:12px;padding:4px 10px;color:var(--accent)" onclick="reativarLobinho(${globalIdx})" title="Reativar">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                   </button>`
                : `<button class="btn" style="font-size:12px;padding:4px 10px;color:var(--red)" onclick="abrirSaidaLobinho(${globalIdx})" title="Registrar saída">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                   </button>`
              }
            </div>
          </div>`;
      }).join('')}
    </div>
  `;
}

// ===================== TABS =====================

function setControleTab(tab) {
  controleTab = tab;
  renderControle();
}

// ===================== MODAL NOVO LOBINHO =====================

function openAddLobinho() {
  document.getElementById('lobinho-nome-input').value = '';
  document.getElementById('lobinho-apelido-input').value = '';
  openModal('modal-add-lobinho');
  setTimeout(() => document.getElementById('lobinho-nome-input').focus(), 50);
}

function salvarNovoLobinho() {
  const nomeRaw = document.getElementById('lobinho-nome-input').value.trim().toUpperCase();
  const apelido = document.getElementById('lobinho-apelido-input').value.trim();
  if (!nomeRaw) { alert('Informe o nome do lobinho.'); return; }

  initLobinhosIfNeeded();

  // Adiciona ao array de lobinhos
  state.lobinhos.push({ nome: nomeRaw, apelido, ativo: true });

  // Adiciona à presença com registros vazios para todas as datas existentes
  const datas = (state.presenca && state.presenca.datas) || [];
  if (!state.presenca.membros) state.presenca.membros = [];
  state.presenca.membros.push({ nome: nomeRaw, reg: datas.map(() => '') });

  fbSet('lobinhos', state.lobinhos);
  fbSet('presenca', state.presenca);

  closeModals();
  controleTab = 'ativos';
  renderControle();
}

// ===================== MODAL EDITAR APELIDO =====================

function abrirEditarLobinho(idx) {
  const l = state.lobinhos[idx];
  if (!l) return;
  editandoLobinhoIndex = idx;
  document.getElementById('edit-lobinho-nome').value = l.nome;
  document.getElementById('edit-lobinho-apelido').value = l.apelido || '';
  openModal('modal-editar-lobinho');
  setTimeout(() => document.getElementById('edit-lobinho-apelido').focus(), 50);
}

function salvarEdicaoLobinho() {
  if (editandoLobinhoIndex === null) return;
  const nomeNovo = document.getElementById('edit-lobinho-nome').value.trim().toUpperCase();
  const apelido = document.getElementById('edit-lobinho-apelido').value.trim();
  if (!nomeNovo) { alert('Informe o nome do lobinho.'); return; }
  const nomeAntigo = state.lobinhos[editandoLobinhoIndex].nome;
  state.lobinhos[editandoLobinhoIndex].nome = nomeNovo;
  state.lobinhos[editandoLobinhoIndex].apelido = apelido;
  // Atualiza o nome na lista de presença também
  if (nomeAntigo !== nomeNovo && state.presenca && state.presenca.membros) {
    const membro = state.presenca.membros.find(m => m.nome === nomeAntigo);
    if (membro) membro.nome = nomeNovo;
    fbSet('presenca', state.presenca);
  }
  fbSet('lobinhos', state.lobinhos);
  closeModals();
  editandoLobinhoIndex = null;
  renderControle();
}

// ===================== MODAL SAÍDA =====================

function abrirSaidaLobinho(idx) {
  saidaLobinhoIndex = idx;
  const l = state.lobinhos[idx];
  document.getElementById('saida-lobinho-nome').textContent = l.apelido || l.nome;
  openModal('modal-saida-lobinho');
}

function confirmarSaida() {
  if (saidaLobinhoIndex === null) return;
  state.lobinhos[saidaLobinhoIndex].ativo = false;
  fbSet('lobinhos', state.lobinhos);
  closeModals();
  saidaLobinhoIndex = null;
  renderControle();
}

function reativarLobinho(idx) {
  state.lobinhos[idx].ativo = true;
  fbSet('lobinhos', state.lobinhos);
  controleTab = 'ativos';
  renderControle();
}

// ===================== EXPORTS =====================
window.renderControle = renderControle;
window.setControleTab = setControleTab;
window.openAddLobinho = openAddLobinho;
window.salvarNovoLobinho = salvarNovoLobinho;
window.abrirEditarLobinho = abrirEditarLobinho;
window.salvarEdicaoLobinho = salvarEdicaoLobinho;
window.abrirSaidaLobinho = abrirSaidaLobinho;
window.confirmarSaida = confirmarSaida;
window.reativarLobinho = reativarLobinho;
