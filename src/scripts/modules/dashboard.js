// ===================== DASHBOARD MODULE =====================
// Gerencia a página inicial com resumos e avisos

function renderDashboard() {
  renderDashGreeting();
  renderDashKPIs();
  renderTodosChefia();
  renderAvisosInternos();
  renderProximasAtividades();
  renderPresencaExtremes();
  renderEspPendentes();
}

// ===================== GREETING =====================
function renderDashGreeting() {
  const now = new Date();
  const h = now.getHours();
  const greet = h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
  const g = document.getElementById('dash-greeting');
  const d = document.getElementById('dash-date');
  if(g) g.textContent = `${greet}, Chefia!`;
  if(d) {
    const dias = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
    const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    d.textContent = `${dias[now.getDay()]}, ${now.getDate()} de ${meses[now.getMonth()]} de ${now.getFullYear()}`;
  }
}

// ===================== KPIs =====================
function renderDashKPIs() {
  const el = document.getElementById('dash-kpis');
  if(!el) return;

  const membros = state.presenca.membros || [];
  const totalMembros = membros.length;
  // Passagem única: conta preenchidos, presenças e faltas sem alocar arrays intermediários
  let filled = 0, presencas = 0, faltas = 0;
  for(const m of membros) {
    for(const r of (m.reg || [])) {
      if(r === '') continue;
      filled++;
      if(r === 'P') presencas++;
      else if(r === 'A') faltas++;
    }
  }
  const pctGeral = filled ? Math.round(presencas / filled * 100) : 0;
  const totalEsp = state.especialidades.length;
  const espPendentes = state.especialidades.filter(e => !['OK','Ok','ok','Sim'].includes(e.entregue)).length;

  const pctColor = pctGeral >= 75 ? 'var(--accent)' : pctGeral >= 50 ? 'var(--accent2)' : 'var(--red)';
  const pctBg = pctGeral >= 75 ? 'var(--accent-light)' : pctGeral >= 50 ? 'var(--accent2-light)' : 'var(--red-light)';

  el.innerHTML = `
    <button class="dash-kpi" type="button" onclick="goTo('presenca')">
      <div class="kpi-icon" style="background:var(--accent-light)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </div>
      <div class="kpi-val">${totalMembros}</div>
      <div class="kpi-lbl">Lobinhos</div>
      <div class="kpi-sub">Alcateia Kotick</div>
    </button>
    <button class="dash-kpi" type="button" onclick="goTo('presenca')">
      <div class="kpi-icon" style="background:${pctBg}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${pctColor}" stroke-width="2" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      </div>
      <div class="kpi-val" style="color:${pctColor}">${pctGeral}%</div>
      <div class="kpi-lbl">Presença geral</div>
      <div class="kpi-sub">${faltas} faltas registradas</div>
    </button>
    <button class="dash-kpi" type="button" onclick="goTo('especialidades')">
      <div class="kpi-icon" style="background:#f3eeff">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8e24aa" stroke-width="2" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      </div>
      <div class="kpi-val">${totalEsp}</div>
      <div class="kpi-lbl">Especialidades</div>
      <div class="kpi-sub">${espPendentes} pendentes</div>
    </button>
  `;
}

// ===================== PROXIMAS ATIVIDADES =====================
function renderProximasAtividades() {
  const container = document.getElementById('proximas-atividades');
  if(!container) return;

  const proximas = getProxAtividades(5);

  if(proximas.length === 0) {
    container.innerHTML = '<div class="empty-state-small">Nenhuma atividade próxima</div>';
    return;
  }

  container.innerHTML = proximas.map((ev, i) => {
    const rowCls = getRowClass ? getRowClass(ev) : '';
    const dotColor = rowCls === 'row-feriado' ? '#ef5350'
      : rowCls === 'row-local' ? '#1e88e5'
      : rowCls === 'row-regional' ? '#8e24aa'
      : rowCls === 'row-externa' ? '#f9a825'
      : '#4caf50';
    const badge = i === 0 ? 'next' : '';
    return `<div class="dash-row">
      <span class="dash-date-badge ${badge}">${ev.data}</span>
      <span style="width:8px;height:8px;border-radius:50%;background:${dotColor};flex-shrink:0"></span>
      <span class="dash-activity-name">${ev.atividade}</span>
      <span class="dash-activity-chefe">${ev.chefe || ''}</span>
    </div>`;
  }).join('');
}

function getProxAtividades(n) {
  const hoje = new Date();
  hoje.setHours(0,0,0,0);
  const anoAtual = hoje.getFullYear();

  const atividades = state.calendario.map(ev => {
    const [dia, mes] = (ev.data || '01/01').split('/').map(Number);
    const mesNum = MES_NUM[ev.mes] || mes || 1;
    const data = new Date(anoAtual, mesNum - 1, dia);
    return { ...ev, dataObj: data };
  });

  return atividades
    .filter(ev => ev.dataObj >= hoje)
    .sort((a, b) => a.dataObj - b.dataObj)
    .slice(0, n);
}

// ===================== PRESENÇA — top-3 + bottom-3 =====================
function renderPresencaExtremes() {
  const el = document.getElementById('dash-presenca-chart');
  if(!el) return;

  const membros = (state.presenca.membros || []).map(m => {
    // Passagem única em vez de dois .filter() sobre o mesmo array
    let filled = 0, pres = 0;
    for(const r of (m.reg || [])) {
      if(r === '') continue;
      filled++;
      if(r === 'P') pres++;
    }
    const pct = filled > 0 ? Math.round(pres / filled * 100) : null;
    return { nome: (m.nome || '').split(' ')[0], pct };
  }).filter(m => m.pct !== null);

  if(membros.length === 0) {
    el.innerHTML = '<div class="empty-state-small">Sem dados de presença ainda</div>';
    return;
  }

  const sorted = [...membros].sort((a, b) => b.pct - a.pct);
  const n = Math.min(3, Math.ceil(sorted.length / 2));
  const top = sorted.slice(0, n);
  const bot = sorted.slice(-n).reverse();

  const barRow = (m, color) => `
    <div class="pres-bar-wrap">
      <span class="pres-bar-name">${esc(m.nome)}</span>
      <div class="pres-bar-track"><div class="pres-bar-fill" style="width:${m.pct}%;background:${color}"></div></div>
      <span class="pres-bar-pct" style="color:${color}">${m.pct}%</span>
    </div>`;

  el.innerHTML = `
    <div class="pres-extreme-label" style="color:var(--accent)">↑ Maior frequência</div>
    ${top.map(m => barRow(m, 'var(--accent)')).join('')}
    <div class="pres-extreme-divider"></div>
    <div class="pres-extreme-label" style="color:var(--red)">↓ Menor frequência</div>
    ${bot.map(m => barRow(m, 'var(--red)')).join('')}
  `;
}

// ===================== ESPECIALIDADES PENDENTES =====================
function renderEspPendentes() {
  const el = document.getElementById('dash-esp-pendentes');
  if(!el) return;

  const pendentes = state.especialidades.filter(e => !['OK','Ok','ok','Sim'].includes(e.entregue));
  const visiveis = pendentes.slice(0, 6);

  if(visiveis.length === 0) {
    el.innerHTML = '<div class="empty-state-small" style="color:var(--accent)">Todas entregues!</div>';
    return;
  }

  el.innerHTML = visiveis.map(e => {
    const compOK = e.comprado === 'OK';
    return `<div class="dash-row">
      <span class="nivel-badge nivel-${e.nivel}" style="flex-shrink:0">${e.nivel}</span>
      <span style="flex:1;font-weight:500;font-size:13px">${esc(e.nome)}</span>
      <span style="font-size:12px;color:var(--text2)">${esc(e.esp)}</span>
      <span class="badge ${compOK ? 'badge-green' : 'badge-red'}" style="flex-shrink:0">${compOK ? 'Comprado' : 'Falta'}</span>
    </div>`;
  }).join('') + (pendentes.length > 6 ? `<div style="padding:10px 18px;font-size:12px;color:var(--text3)">+ ${pendentes.length - 6} outras pendências</div>` : '');
}

// ===================== AVISOS INTERNOS =====================
function renderAvisosInternos() {
  const container = document.getElementById('avisos-internos-list');
  if(!container) return;

  if(!state.avisos_internos || state.avisos_internos.length === 0) {
    container.innerHTML = '<div class="empty-state-small">Nenhum aviso cadastrado</div>';
    return;
  }

  container.innerHTML = state.avisos_internos.map((aviso, idx) => {
    const texto = typeof aviso === 'string' ? aviso : (aviso.texto || '');
    const data = typeof aviso === 'object' && aviso.data ? formatDateStrBR(aviso.data) : '';
    return `
    <div class="aviso-item">
      <span class="aviso-bullet"></span>
      <span class="aviso-text">${esc(texto)}${data ? `<span class="aviso-data"> · ${esc(data)}</span>` : ''}</span>
      <button class="aviso-remove" onclick="removeAvisoInterno(${idx})" aria-label="Remover aviso">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>`;
  }).join('');
}

function addAvisoInterno() {
  const input = document.getElementById('novo-aviso-interno');
  if(!input) return;
  const texto = input.value.trim();
  if(!texto) { showToast('Digite um aviso'); return; }
  if(!state.avisos_internos) state.avisos_internos = [];
  state.avisos_internos.push({ texto, data: todayStr(), timestamp: Date.now() });
  fbSaveSection('avisos_internos');
  input.value = '';
  renderAvisosInternos();
  showToast('Aviso adicionado');
}

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
    container.innerHTML = '<div class="empty-state-small">Nenhuma tarefa pendente</div>';
    return;
  }

  container.innerHTML = state.todos_chefia.map((todo, idx) => `
    <div class="todo-item ${todo.concluido ? 'todo-concluido' : ''}">
      <div class="todo-checkbox ${todo.concluido ? 'checked' : ''}" onclick="toggleTodoChefia(${idx})" role="checkbox" tabindex="0" aria-checked="${todo.concluido ? 'true' : 'false'}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleTodoChefia(${idx});}"></div>
      <span class="todo-text">${esc(todo.texto)}</span>
      <button class="todo-remove" onclick="removeTodoChefia(${idx})" aria-label="Remover tarefa">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  `).join('');
}

function addTodoChefia() {
  const input = document.getElementById('novo-todo-chefia');
  if(!input) return;
  const texto = input.value.trim();
  if(!texto) { showToast('Digite uma tarefa'); return; }
  if(!state.todos_chefia) state.todos_chefia = [];
  state.todos_chefia.push({ texto, concluido: false, data: todayStr() });
  fbSaveSection('todos_chefia');
  input.value = '';
  renderTodosChefia();
  showToast('Tarefa adicionada');
}

function toggleTodoChefia(idx) {
  state.todos_chefia[idx].concluido = !state.todos_chefia[idx].concluido;
  fbSaveSection('todos_chefia');
  renderTodosChefia();
}

function removeTodoChefia(idx) {
  if(!confirm('Remover esta tarefa?')) return;
  state.todos_chefia.splice(idx, 1);
  fbSaveSection('todos_chefia');
  renderTodosChefia();
  showToast('Tarefa removida');
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
