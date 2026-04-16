// ===================== COMUNICADOS MODULE =====================
// Gerencia comunicados e confirmações de presença

// ===================== RENDER COMUNICADOS =====================
function renderComunicados() {
  const container = document.getElementById('comunicados-list');
  if(!container) return;
  
  if(!state.comunicados || state.comunicados.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhum comunicado cadastrado</div>';
    return;
  }
  
  // Sort: fixados primeiro, depois por data
  const sorted = [...state.comunicados].sort((a, b) => {
    if(a.fixado && !b.fixado) return -1;
    if(!a.fixado && b.fixado) return 1;
    return (b.timestamp || 0) - (a.timestamp || 0);
  });
  
  container.innerHTML = sorted.map((com, idx) => {
    const realIdx = state.comunicados.indexOf(com);
    const catClass = `com-${com.categoria || 'aviso'}`;
    const fixadoClass = com.fixado ? 'com-fixado' : '';
    
    return `
      <div class="comunicado-card ${catClass} ${fixadoClass}">
        <div class="com-header">
          <div class="com-title-row">
            <h3>${com.titulo}</h3>
            ${com.fixado ? '<span class="badge-fixado">📌 Fixado</span>' : ''}
          </div>
          <div class="com-meta">
            <span class="com-categoria">${com.categoria || 'aviso'}</span>
            ${com.dataEvento ? `<span class="com-data">📅 ${com.dataEvento}</span>` : ''}
          </div>
        </div>
        
        <div class="com-body">
          <p>${com.texto}</p>
        </div>
        
        <div class="com-footer">
          <div class="com-actions">
            <button class="btn-icon" onclick="toggleFixarCom(${realIdx})" title="${com.fixado ? 'Desafixar' : 'Fixar'}">
              📌
            </button>
            <button class="btn-icon" onclick="editCom(${realIdx})" title="Editar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button class="btn-icon" onclick="delCom(${realIdx})" title="Excluir">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
          
          ${com.categoria === 'evento' ? `
            <div class="com-confirmacoes">
              <button class="btn-secondary btn-sm" onclick="verConfirmacoes(${realIdx})">
                Ver Confirmações (${getConfirmacoesCount(realIdx)})
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// ===================== RENDER CONFIRMACOES =====================
function renderConfirmacoes() {
  const container = document.getElementById('confirmacoes-container');
  if(!container) return;
  
  // Get all eventos
  const eventos = state.comunicados.filter(c => c.categoria === 'evento');
  
  if(eventos.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhum evento com confirmações</div>';
    return;
  }
  
  container.innerHTML = eventos.map((ev, idx) => {
    const realIdx = state.comunicados.indexOf(ev);
    const confirmacoes = state.confirmacoes[realIdx] || {};
    const total = Object.keys(confirmacoes).length;
    const confirmados = Object.values(confirmacoes).filter(v => v === 'sim').length;
    
    return `
      <div class="confirmacao-card">
        <h3>${ev.titulo}</h3>
        <p class="conf-data">${ev.dataEvento || 'Data não definida'}</p>
        <div class="conf-stats">
          <span class="conf-stat">✅ ${confirmados} confirmados</span>
          <span class="conf-stat">📊 ${total} respostas</span>
        </div>
        <button class="btn-secondary btn-sm" onclick="verConfirmacoes(${realIdx})">
          Ver Detalhes
        </button>
      </div>
    `;
  }).join('');
}

// ===================== SAVE COMUNICADO =====================
function saveComunicado() {
  const titulo = document.getElementById('com-titulo').value.trim();
  const categoria = document.getElementById('com-cat').value;
  const dataEvento = document.getElementById('com-data-evento').value.trim();
  const texto = document.getElementById('com-texto').value.trim();
  const fixado = document.getElementById('com-fixado').checked;
  
  if(!titulo || !texto) {
    showToast('Preencha título e texto');
    return;
  }
  
  const com = {
    titulo,
    categoria,
    dataEvento,
    texto,
    fixado,
    timestamp: Date.now()
  };
  
  if(window.editingComIdx >= 0) {
    // Preserve timestamp on edit
    com.timestamp = state.comunicados[window.editingComIdx].timestamp;
    state.comunicados[window.editingComIdx] = com;
    showToast('Comunicado atualizado');
  } else {
    state.comunicados.push(com);
    showToast('Comunicado criado');
  }
  
  fbSaveSection('comunicados');
  closeModals();
  renderComunicados();
}

// ===================== EDIT COMUNICADO =====================
function editCom(idx) {
  window.editingComIdx = idx;
  const com = state.comunicados[idx];
  
  document.getElementById('modal-com-title').textContent = 'Editar comunicado';
  document.getElementById('com-titulo').value = com.titulo || '';
  document.getElementById('com-cat').value = com.categoria || 'aviso';
  document.getElementById('com-data-evento').value = com.dataEvento || '';
  document.getElementById('com-texto').value = com.texto || '';
  document.getElementById('com-fixado').checked = com.fixado || false;
  
  document.getElementById('modal-com').classList.add('open');
}

// ===================== DELETE COMUNICADO =====================
function delCom(idx) {
  if(!confirm('Excluir este comunicado?')) return;
  state.comunicados.splice(idx, 1);
  
  // Remove confirmações associadas
  if(state.confirmacoes[idx]) {
    delete state.confirmacoes[idx];
    fbSet('confirmacoes', state.confirmacoes);
  }
  
  fbSaveSection('comunicados');
  showToast('Comunicado excluído');
  renderComunicados();
}

// ===================== TOGGLE FIXAR =====================
function toggleFixarCom(idx) {
  state.comunicados[idx].fixado = !state.comunicados[idx].fixado;
  fbSaveSection('comunicados');
  showToast(state.comunicados[idx].fixado ? 'Comunicado fixado' : 'Comunicado desafixado');
  renderComunicados();
}

// ===================== HELPERS =====================
function getConfirmacoesCount(idx) {
  const conf = state.confirmacoes[idx];
  if(!conf) return 0;
  return Object.keys(conf).length;
}

function verConfirmacoes(idx) {
  // This would open a modal or navigate to confirmations view
  showToast('Funcionalidade de visualização de confirmações');
  // TODO: Implement detailed confirmations view
}

// Exporta funções para uso global
window.renderComunicados = renderComunicados;
window.renderConfirmacoes = renderConfirmacoes;
window.saveComunicado = saveComunicado;
window.editCom = editCom;
window.delCom = delCom;
window.toggleFixarCom = toggleFixarCom;
window.getConfirmacoesCount = getConfirmacoesCount;
window.verConfirmacoes = verConfirmacoes;

// Made with Bob