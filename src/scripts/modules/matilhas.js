// ===================== MATILHAS MODULE =====================
// Gerencia matilhas, cargos e pontuação

// ===================== RENDER MATILHAS =====================
function renderMatilhas() {
  const container = document.getElementById('matilhas-container');
  if(!container) return;
  
  const matilhasNomes = Object.keys(state.matilhas);
  
  container.innerHTML = matilhasNomes.map(mat => {
    const membros = state.matilhas[mat] || [];
    const cargos = state.cargos[mat] || {primo: '', segundo: ''};
    const pont = getPontuacao(mat);
    
    return `
      <div class="matilha-card matilha-${mat.toLowerCase()}">
        <div class="matilha-header">
          <h3>Matilha ${mat}</h3>
          <div class="matilha-pontuacao">
            <strong>${pont}</strong> pontos
          </div>
        </div>
        
        <div class="matilha-cargos">
          <div class="cargo-item">
            <strong>Primo:</strong> ${cargos.primo || 'Não definido'}
          </div>
          <div class="cargo-item">
            <strong>Segundo:</strong> ${cargos.segundo || 'Não definido'}
          </div>
        </div>
        
        <div class="matilha-membros">
          <h4>Membros (${membros.length})</h4>
          <ul>
            ${membros.map(m => `
              <li>
                <span>${m}</span>
                <div class="cargo-btns">
                  <button class="btn-cargo ${cargos.primo === m ? 'active' : ''}" 
                          onclick="toggleCargo('${mat}', '${m}', 'primo')" 
                          title="Primo">P</button>
                  <button class="btn-cargo ${cargos.segundo === m ? 'active' : ''}" 
                          onclick="toggleCargo('${mat}', '${m}', 'segundo')" 
                          title="Segundo">S</button>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
        
        <div class="matilha-pontuacao-detalhes">
          <h4>Pontuação por Categoria</h4>
          <div class="pont-grid">
            <div class="pont-item">
              <label>Jogos</label>
              <div class="pont-controls">
                <button onclick="addPont('${mat}', 'jogos', -1)">-</button>
                <span>${state.pontuacao[mat]?.jogos || 0}</span>
                <button onclick="addPont('${mat}', 'jogos', 1)">+</button>
              </div>
            </div>
            <div class="pont-item">
              <label>Formação</label>
              <div class="pont-controls">
                <button onclick="addPont('${mat}', 'formacao', -1)">-</button>
                <span>${state.pontuacao[mat]?.formacao || 0}</span>
                <button onclick="addPont('${mat}', 'formacao', 1)">+</button>
              </div>
            </div>
            <div class="pont-item">
              <label>Comportamento</label>
              <div class="pont-controls">
                <button onclick="addPont('${mat}', 'comportamento', -1)">-</button>
                <span>${state.pontuacao[mat]?.comportamento || 0}</span>
                <button onclick="addPont('${mat}', 'comportamento', 1)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Botão de reset já está no page-header do HTML
}

// ===================== GET PONTUACAO TOTAL =====================
function getPontuacao(mat) {
  const p = state.pontuacao[mat];
  if(!p) return 0;
  return (p.jogos || 0) + (p.formacao || 0) + (p.comportamento || 0);
}

// ===================== ADD PONTUACAO =====================
function addPont(mat, cat, delta) {
  if(!state.pontuacao[mat]) {
    state.pontuacao[mat] = {jogos: 0, formacao: 0, comportamento: 0};
  }
  
  state.pontuacao[mat][cat] = (state.pontuacao[mat][cat] || 0) + delta;
  
  // Don't allow negative values
  if(state.pontuacao[mat][cat] < 0) state.pontuacao[mat][cat] = 0;
  
  fbSaveSection('pontuacao');
  renderMatilhas();
  showToast(`Pontuação atualizada: ${mat} - ${cat}`);
}

// ===================== RESET PONTUACAO =====================
function confirmResetPontuacao() {
  if(!confirm('Tem certeza que deseja zerar a pontuação de todas as matilhas? Esta ação não pode ser desfeita.')) return;
  
  Object.keys(state.pontuacao).forEach(mat => {
    state.pontuacao[mat] = {jogos: 0, formacao: 0, comportamento: 0};
  });
  
  fbSaveSection('pontuacao');
  renderMatilhas();
  showToast('Pontuação zerada');
}

// ===================== TOGGLE CARGO =====================
function toggleCargo(mat, nome, cargo) {
  if(!state.cargos[mat]) {
    state.cargos[mat] = {primo: '', segundo: ''};
  }
  
  // If already assigned, remove
  if(state.cargos[mat][cargo] === nome) {
    state.cargos[mat][cargo] = '';
  } else {
    // Assign new cargo
    state.cargos[mat][cargo] = nome;
  }
  
  saveCargos();
}

// ===================== SAVE CARGOS =====================
function saveCargos() {
  fbSaveSection('cargos');
  renderMatilhas();
  showToast('Cargos atualizados');
}

// ===================== SAVE MAT (adicionar membro) =====================
function saveMat() {
  const nomeInput = document.getElementById('mat-nome');
  const matilhaSelect = document.getElementById('mat-matilha');
  if(!nomeInput || !matilhaSelect || !window.state) return;

  const nome = nomeInput.value.trim().toUpperCase();
  const matilha = matilhaSelect.value;

  if(!nome || !matilha || !state.matilhas?.[matilha]) {
    showToast('Preencha nome e matilha');
    return;
  }

  state.matilhas[matilha].push(nome);

  withModalSaveLoading(fbSaveSection('matilhas')).then(() => {
    closeModals();
    renderMatilhas();
    showToast('Membro adicionado');
  });
}

// Exporta funções para uso global
window.renderMatilhas = renderMatilhas;
window.saveMat = saveMat;
window.getPontuacao = getPontuacao;
window.addPont = addPont;
window.confirmResetPontuacao = confirmResetPontuacao;
window.toggleCargo = toggleCargo;
window.saveCargos = saveCargos;

// Made with Bob