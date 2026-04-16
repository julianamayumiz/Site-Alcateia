// ===================== DASHBOARD MODULE =====================
// Gerencia a página inicial com resumos e avisos

// ===================== RENDER DASHBOARD =====================
function renderDashboard() {
  renderProximasAtividades();
  renderAvisosInternos();
  renderTodosChefia();
  renderResumoGeral();
}

// ===================== PROXIMAS ATIVIDADES =====================
function renderProximasAtividades() {
  const container = document.getElementById('proximas-atividades');
  if(!container) return;
  
  const proximas = getProxAtividades(5);
  
  if(proximas.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhuma atividade próxima</div>';
    return;
  }
  
  container.innerHTML = proximas.map(ev => {
    const rowClass = getRowClass(ev);
    return `
      <div class="atividade-item ${rowClass}">
        <div class="ativ-data">
          <strong>${ev.data}</strong>
          <span>${ev.dia}</span>
        </div>
        <div class="ativ-info">
          <h4>${ev.atividade}</h4>
          ${ev.categoria ? `<span class="badge">${ev.categoria}</span>` : ''}
          ${ev.chefe ? `<p class="ativ-chefe">Chefe: ${ev.chefe}</p>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// ===================== GET PROXIMAS ATIVIDADES =====================
function getProxAtividades(n) {
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  
  // Convert calendar dates to Date objects
  const atividades = state.calendario.map(ev => {
    const [dia, mes] = (ev.data || '01/01').split('/').map(Number);
    const mesNum = MES_NUM[ev.mes] || 1;
    const data = new Date(anoAtual, mesNum - 1, dia);
    
    return {...ev, dataObj: data};
  });
  
  // Filter future activities and sort by date
  const futuras = atividades
    .filter(ev => ev.dataObj >= hoje)
    .sort((a, b) => a.dataObj - b.dataObj)
    .slice(0, n);
  
  return futuras;
}

// ===================== AVISOS INTERNOS =====================
function renderAvisosInternos() {
  const container = document.getElementById('avisos-internos-list');
  if(!container) return;
  
  if(!state.avisos_internos || state.avisos_internos.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhum aviso interno</div>';
    return;
  }
  
  container.innerHTML = state.avisos_internos.map((aviso, idx) => {
    // Compatibilidade: dado antigo pode ser string simples
    const texto = typeof aviso === 'string' ? aviso : (aviso.texto || '');
    const data  = typeof aviso === 'object' ? formatDateStrBR(aviso.data) : '';
    return `
    <div class="aviso-item">
      <div class="aviso-content">
        <p>${texto}</p>
        ${data ? `<span class="aviso-data">${data}</span>` : ''}
      </div>
      <button class="btn-icon" onclick="removeAvisoInterno(${idx})" title="Remover">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `;
  }).join('');
}

// ===================== ADD AVISO INTERNO =====================
function addAvisoInterno() {
  const input = document.getElementById('novo-aviso-interno');
  if(!input) return;
  
  const texto = input.value.trim();
  if(!texto) {
    showToast('Digite um aviso');
    return;
  }
  
  if(!state.avisos_internos) state.avisos_internos = [];
  
  state.avisos_internos.push({
    texto,
    data: todayStr(),
    timestamp: Date.now()
  });
  
  fbSaveSection('avisos_internos');
  input.value = '';
  renderAvisosInternos();
  showToast('Aviso adicionado');
}

// ===================== REMOVE AVISO INTERNO =====================
function removeAvisoInterno(idx) {
  if(!confirm('Remover este aviso?')) return;
  state.avisos_internos.splice(idx, 1);
  fbSaveSection('avisos_internos');
  renderAvisosInternos();
  showToast('Aviso removido');
}

// ===================== TODOS CHEFIA =====================
function renderTodosChefia() {
  const container = document.getElementById('todos-chefia-list');
  if(!container) return;
  
  if(!state.todos_chefia || state.todos_chefia.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhuma tarefa pendente</div>';
    return;
  }
  
  container.innerHTML = state.todos_chefia.map((todo, idx) => `
    <div class="todo-item ${todo.concluido ? 'todo-concluido' : ''}">
      <input type="checkbox" 
             ${todo.concluido ? 'checked' : ''} 
             onchange="toggleTodoChefia(${idx})"
             id="todo-${idx}">
      <label for="todo-${idx}">${todo.texto}</label>
      <button class="btn-icon" onclick="removeTodoChefia(${idx})" title="Remover">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `).join('');
}

// ===================== ADD TODO CHEFIA =====================
function addTodoChefia() {
  const input = document.getElementById('novo-todo-chefia');
  if(!input) return;
  
  const texto = input.value.trim();
  if(!texto) {
    showToast('Digite uma tarefa');
    return;
  }
  
  if(!state.todos_chefia) state.todos_chefia = [];
  
  state.todos_chefia.push({
    texto,
    concluido: false,
    data: todayStr()
  });
  
  fbSaveSection('todos_chefia');
  input.value = '';
  renderTodosChefia();
  showToast('Tarefa adicionada');
}

// ===================== TOGGLE TODO CHEFIA =====================
function toggleTodoChefia(idx) {
  state.todos_chefia[idx].concluido = !state.todos_chefia[idx].concluido;
  fbSaveSection('todos_chefia');
  renderTodosChefia();
}

// ===================== REMOVE TODO CHEFIA =====================
function removeTodoChefia(idx) {
  if(!confirm('Remover esta tarefa?')) return;
  state.todos_chefia.splice(idx, 1);
  fbSaveSection('todos_chefia');
  renderTodosChefia();
  showToast('Tarefa removida');
}

// ===================== RESUMO GERAL =====================
function renderResumoGeral() {
  const container = document.getElementById('resumo-geral');
  if(!container) return;
  
  // Calculate statistics
  const totalLobinhos = state.presenca.membros.length;
  const totalAtividades = state.calendario.length;
  const totalEspecialidades = state.especialidades.length;
  const comunicadosAtivos = state.comunicados.filter(c => !c.arquivado).length;
  
  // Calculate attendance rate for current semester
  const bounds = currentSemesterBounds();
  const datasRelevantes = state.presenca.datas.filter(d => {
    const [dia, mes] = d.split('/').map(Number);
    const ano = new Date().getFullYear();
    const dataStr = `${ano}-${String(mes).padStart(2,'0')}-${String(dia).padStart(2,'0')}`;
    return dataStr >= bounds.start && dataStr <= bounds.end;
  });
  
  let totalPresencas = 0;
  let totalPossivel = 0;
  
  state.presenca.membros.forEach(m => {
    datasRelevantes.forEach((d, idx) => {
      const globalIdx = state.presenca.datas.indexOf(d);
      if(globalIdx >= 0 && m.reg[globalIdx]) {
        totalPossivel++;
        if(m.reg[globalIdx] === 'P') totalPresencas++;
      }
    });
  });
  
  const taxaPresenca = totalPossivel > 0 ? ((totalPresencas / totalPossivel) * 100).toFixed(1) : 0;
  
  container.innerHTML = `
    <div class="resumo-card">
      <h4>Lobinhos</h4>
      <p class="resumo-numero">${totalLobinhos}</p>
    </div>
    <div class="resumo-card">
      <h4>Atividades</h4>
      <p class="resumo-numero">${totalAtividades}</p>
    </div>
    <div class="resumo-card">
      <h4>Especialidades</h4>
      <p class="resumo-numero">${totalEspecialidades}</p>
    </div>
    <div class="resumo-card">
      <h4>Taxa de Presença</h4>
      <p class="resumo-numero">${taxaPresenca}%</p>
    </div>
    <div class="resumo-card">
      <h4>Comunicados</h4>
      <p class="resumo-numero">${comunicadosAtivos}</p>
    </div>
  `;
}

// Exporta funções para uso global
window.renderDashboard = renderDashboard;
window.renderProximasAtividades = renderProximasAtividades;
window.getProxAtividades = getProxAtividades;
window.renderAvisosInternos = renderAvisosInternos;
window.addAvisoInterno = addAvisoInterno;
window.removeAvisoInterno = removeAvisoInterno;
window.renderTodosChefia = renderTodosChefia;
window.addTodoChefia = addTodoChefia;
window.toggleTodoChefia = toggleTodoChefia;
window.removeTodoChefia = removeTodoChefia;
window.renderResumoGeral = renderResumoGeral;

// Made with Bob