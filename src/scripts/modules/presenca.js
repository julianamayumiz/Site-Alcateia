// ===================== PRESENCA MODULE =====================
// Gerencia a lista de presença dos lobinhos (render rico + sort + filtro <75%)

// Estado de ordenação: null (ordem original) | 'desc' | 'asc'
let presencaSortDir = null;
// Estado do sub-tab: 'todos' | 'alerta'
let presencaSubtab = 'todos';

// ===================== CONSTANTES =====================
const PRESENCE_THRESHOLDS = { EXCELLENT: 75, GOOD: 50 };

function getPresencePercentageColor(percentage) {
  if(percentage === null) return 'var(--text3)';
  if(percentage >= PRESENCE_THRESHOLDS.EXCELLENT) return 'var(--accent)';
  if(percentage >= PRESENCE_THRESHOLDS.GOOD) return 'var(--accent2)';
  return 'var(--red)';
}

function calculateMemberStats(member) {
  const reg = member.reg || [];
  const filled = reg.filter(r => r !== '').length;
  const present = reg.filter(r => r === 'P').length;
  const percentage = filled > 0 ? Math.round(present / filled * 100) : null;
  return { filled, present, percentage };
}

function getJustificativa(mi, ri) {
  if(!state.justificativas) return '';
  return state.justificativas[`${mi}-${ri}`] || '';
}

// ===================== RENDER =====================
function renderPresenca() {
  const head = document.getElementById('presenca-thead');
  const body = document.getElementById('presenca-tbody');
  const stats = document.getElementById('presence-stats');
  if(!head || !body) return;

  const datas = state.presenca.datas || [];
  const membros = state.presenca.membros || [];

  // Header: Nome + datas verticais + coluna %
  const sortArrow = presencaSortDir === 'desc' ? '↓' : presencaSortDir === 'asc' ? '↑' : '↕';
  head.innerHTML = `
    <th class="name-col">Nome</th>
    ${datas.map(dt => `<th class="date-col">${dt}</th>`).join('')}
    <th class="sort-header" style="min-width:60px;text-align:center;cursor:pointer" title="Ordenar por presença" onclick="togglePresencaSort()">
      % <span>${sortArrow}</span>
    </th>
  `;

  // Pré-calcula stats por membro preservando índice original
  const membersWithStats = membros.map((m, originalIndex) => ({
    ...m,
    stats: calculateMemberStats(m),
    originalIndex
  }));

  // Filtro do sub-tab (alerta = <75% com pelo menos 1 registro)
  let visible = membersWithStats;
  if(presencaSubtab === 'alerta') {
    visible = visible.filter(m => m.stats.percentage !== null && m.stats.percentage < 75);
  }

  // Ordenação: por % quando solicitado, senão alfabética (padrão)
  if(presencaSortDir) {
    visible = [...visible].sort((a, b) => {
      const pa = a.stats.percentage !== null ? a.stats.percentage : -1;
      const pb = b.stats.percentage !== null ? b.stats.percentage : -1;
      return presencaSortDir === 'desc' ? pb - pa : pa - pb;
    });
  } else {
    visible = [...visible].sort((a, b) =>
      (a.nome || '').localeCompare(b.nome || '', 'pt-BR', { sensitivity: 'base' })
    );
  }

  // Render linhas
  body.innerHTML = visible.map(m => {
    const mi = m.originalIndex;
    const reg = m.reg || [];
    const cells = datas.map((d, ri) => {
      const val = reg[ri] || '';
      const justif = val === 'FJ' ? getJustificativa(mi, ri) : '';
      const label = val === 'FJ' ? (justif ? '★' : 'FJ') : (val || '·');
      const cls = val ? 'cell-' + val : 'cell-empty';
      if(val === 'FJ') {
        const tip = justif ? `<div class="fj-tooltip">${justif.replace(/</g,'&lt;')}</div>` : '';
        return `<td class="date-col"><div class="cell-FJ-wrap" tabindex="0">${tip}<button class="presence-cell ${cls}" onclick="openCellDropdown(event,${mi},${ri})">${label}</button></div></td>`;
      }
      return `<td class="date-col"><button class="presence-cell ${cls}" onclick="openCellDropdown(event,${mi},${ri})">${label}</button></td>`;
    }).join('');
    const pct = m.stats.percentage;
    const pctColor = getPresencePercentageColor(pct);
    const pctText = pct !== null ? pct + '%' : '—';
    return `<tr><td class="name-col">${esc(m.nome)}</td>${cells}<td class="percentage-cell" style="color:${pctColor}">${pctText}</td></tr>`;
  }).join('');

  // Stats gerais
  if(stats) {
    const allRegs = membros.flatMap(m => (m.reg || [])).filter(r => r !== '');
    const agg = allRegs.reduce((acc, r) => {
      if(r === 'P') acc.present++;
      else if(r === 'A') acc.absent++;
      else if(r === 'FJ') acc.justified++;
      return acc;
    }, { present:0, absent:0, justified:0 });
    const total = allRegs.length || 1;
    const pct = Math.round(agg.present / total * 100);
    stats.innerHTML = `
      <div class="stat-mini"><div class="val" style="color:var(--accent)">${pct}%</div><div class="lbl">Presença geral</div></div>
      <div class="stat-mini"><div class="val">${membros.length}</div><div class="lbl">Membros</div></div>
      <div class="stat-mini"><div class="val">${datas.length}</div><div class="lbl">Reuniões</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--red)">${agg.absent}</div><div class="lbl">Faltas</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--accent2)">${agg.justified}</div><div class="lbl">F. justificadas</div></div>
    `;
  }

  // Badges dos sub-tabs
  const todosBadge = document.getElementById('pres-badge-todos');
  const alertaBadge = document.getElementById('pres-badge-alerta');
  if(todosBadge) todosBadge.textContent = membros.length;
  if(alertaBadge) alertaBadge.textContent = membersWithStats.filter(m => m.stats.percentage !== null && m.stats.percentage < 75).length;
}

// ===================== SUB-TAB =====================
function showPresencaSubtab(tab) {
  presencaSubtab = tab;
  document.querySelectorAll('.presenca-subtabs .com-subtab').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  const btn = document.getElementById('pres-subtab-' + tab);
  if(btn) { btn.classList.add('active'); btn.setAttribute('aria-selected', 'true'); }
  renderPresenca();
}

// ===================== SORT =====================
function togglePresencaSort() {
  presencaSortDir = presencaSortDir === null ? 'desc' : presencaSortDir === 'desc' ? 'asc' : null;
  renderPresenca();
}

// ===================== CELL DROPDOWN =====================
const ATTENDANCE_OPTIONS = [
  { val:'P',  label:'Presente',          color:'var(--accent)',  bg:'var(--accent-light)' },
  { val:'A',  label:'Ausente',           color:'var(--red)',     bg:'var(--red-light)' },
  { val:'FJ', label:'Falta Justificada', color:'var(--accent2)', bg:'var(--accent2-light)' },
  { val:'',   label:'Limpar',            color:'var(--text3)',   bg:'var(--surface2)' }
];

function closeCellDropdown() {
  const dd = document.getElementById('cell-dd-menu');
  if(dd) dd.remove();
}

function openCellDropdown(e, mi, ri) {
  e.stopPropagation();
  closeCellDropdown();

  const trigger = e.currentTarget;
  const rect = trigger.getBoundingClientRect();
  const currentVal = (state.presenca.membros[mi]?.reg || [])[ri] || '';
  const justif = getJustificativa(mi, ri);
  const firstName = (state.presenca.membros[mi]?.nome || '').split(' ')[0];
  const date = state.presenca.datas[ri] || '';

  const menu = document.createElement('div');
  menu.className = 'cell-dropdown-menu open';
  menu.id = 'cell-dd-menu';

  // Header
  const header = document.createElement('div');
  header.style.cssText = 'padding:8px 14px 6px;font-size:11px;color:var(--text3);border-bottom:1px solid var(--border);font-weight:600;letter-spacing:0.04em;text-transform:uppercase';
  header.textContent = `${firstName} · ${date}`;
  menu.appendChild(header);

  // Opções
  ATTENDANCE_OPTIONS.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'cell-dropdown-opt';
    btn.innerHTML = `<span class="opt-dot" style="background:${opt.color}"></span>${opt.label}`;
    if(currentVal === opt.val) {
      const chk = document.createElement('span');
      chk.style.cssText = 'margin-left:auto;font-size:10px;opacity:0.6';
      chk.textContent = '✓';
      btn.appendChild(chk);
    }
    btn.onclick = (ev) => {
      ev.stopPropagation();
      closeCellDropdown();
      setCell(mi, ri, opt.val);
    };
    menu.appendChild(btn);
  });

  // Editar justificativa (se já é FJ)
  if(currentVal === 'FJ') {
    const editBtn = document.createElement('button');
    editBtn.className = 'cell-dropdown-opt';
    editBtn.style.borderTop = '1px solid var(--border)';
    editBtn.style.color = 'var(--accent)';
    editBtn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> ${justif ? 'Editar justificativa' : 'Adicionar justificativa'}`;
    editBtn.onclick = (ev) => {
      ev.stopPropagation();
      closeCellDropdown();
      openFJModal(mi, ri);
    };
    menu.appendChild(editBtn);
  }

  // Posicionar
  document.body.appendChild(menu);
  const menuRect = menu.getBoundingClientRect();
  let top = rect.bottom + 4;
  if(top + menuRect.height > window.innerHeight) top = rect.top - menuRect.height - 4;
  let left = rect.left;
  if(left + menuRect.width > window.innerWidth - 8) left = window.innerWidth - menuRect.width - 8;
  menu.style.position = 'fixed';
  menu.style.top = top + 'px';
  menu.style.left = left + 'px';

  // Fecha ao clicar fora
  setTimeout(() => {
    document.addEventListener('click', function closeOnce() {
      closeCellDropdown();
      document.removeEventListener('click', closeOnce);
    }, { once: true });
  }, 10);
}

// ===================== SET CELL =====================
function setCell(mi, ri, val) {
  if(!state.presenca.membros[mi]) return;
  if(!state.presenca.membros[mi].reg) state.presenca.membros[mi].reg = [];

  if(val === 'FJ') {
    openFJModal(mi, ri);
    return;
  }

  // Se desmarcou FJ, remove a justificativa
  const prev = state.presenca.membros[mi].reg[ri];
  if(prev === 'FJ' && val !== 'FJ') {
    if(state.justificativas) delete state.justificativas[`${mi}-${ri}`];
    fbSet('justificativas', state.justificativas || {});
  }

  state.presenca.membros[mi].reg[ri] = val;
  fbSaveSection('presenca');
  renderPresenca();
  showToast(val ? `Marcado como ${val}` : 'Presença limpa');
}

// ===================== FJ MODAL =====================
function openFJModal(mi, ri) {
  window.currentFJMembro = mi;
  window.currentFJData = ri;
  const membro = state.presenca.membros[mi];
  const data = state.presenca.datas[ri];

  document.getElementById('fj-membro-nome').textContent = membro.nome;
  document.getElementById('fj-data').textContent = data;
  document.getElementById('fj-motivo').value = getJustificativa(mi, ri);

  openModal('modal-fj');
}

function saveFJ() {
  const mi = window.currentFJMembro;
  const ri = window.currentFJData;
  const motivo = document.getElementById('fj-motivo').value.trim();

  if(!motivo) {
    showToast('Digite o motivo da falta');
    return;
  }

  if(!state.justificativas) state.justificativas = {};
  state.justificativas[`${mi}-${ri}`] = motivo;

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

function cancelFJ() {
  closeModals();
}

// ===================== GERENCIAR LOBINHOS =====================
function openLobinhosModal() {
  const input = document.getElementById('lobinho-novo-nome');
  if(input) input.value = '';
  renderLobinhosList();
  openModal('modal-lobinhos');
}

function renderLobinhosList() {
  const cont = document.getElementById('lobinhos-list');
  const count = document.getElementById('lobinhos-count');
  if(!cont) return;
  const membros = state.presenca.membros || [];
  if(count) count.textContent = membros.length;
  if(membros.length === 0) {
    cont.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text3);font-size:13px">Nenhum lobinho cadastrado.</div>';
    return;
  }
  // Ordena alfabeticamente preservando o índice original (usado pelas ações)
  const ordenado = membros
    .map((m, i) => ({ m, i }))
    .sort((a, b) => (a.m.nome || '').localeCompare(b.m.nome || '', 'pt-BR', { sensitivity: 'base' }));
  cont.innerHTML = ordenado.map(({ m, i }, displayIdx) => {
    const nome = (m.nome || '').replace(/"/g, '&quot;');
    return `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;border-bottom:1px solid var(--border)">
      <span style="font-size:11px;color:var(--text3);min-width:22px;font-family:'DM Mono',monospace">${displayIdx+1}</span>
      <input type="text" value="${nome}" data-idx="${i}" style="flex:1;padding:6px 10px;border:1px solid var(--border);border-radius:6px;font-size:13px;background:var(--surface);color:var(--text);font-family:inherit" onchange="renameLobinho(${i}, this.value)" onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}" aria-label="Editar nome do lobinho">
      <button class="btn" onclick="deleteLobinho(${i})" style="color:var(--red);border-color:var(--red-light);padding:4px 10px;font-size:14px;line-height:1" title="Remover lobinho" aria-label="Remover lobinho">✕</button>
    </div>`;
  }).join('');
}

function addLobinho() {
  const input = document.getElementById('lobinho-novo-nome');
  if(!input) return;
  const nome = input.value.trim().toUpperCase();
  if(!nome) { showToast('Digite um nome'); return; }
  const datas = state.presenca.datas || [];
  if(!state.presenca.membros) state.presenca.membros = [];
  state.presenca.membros.push({ nome, reg: new Array(datas.length).fill('') });
  input.value = '';
  fbSaveSection('presenca');
  renderLobinhosList();
  renderPresenca();
  showToast('Lobinho adicionado');
  input.focus();
}

function renameLobinho(idx, novoNome) {
  const m = state.presenca.membros[idx];
  if(!m) return;
  const nome = (novoNome || '').trim().toUpperCase();
  if(!nome) { showToast('Nome não pode ser vazio'); renderLobinhosList(); return; }
  if(m.nome === nome) return;
  m.nome = nome;
  fbSaveSection('presenca');
  renderPresenca();
  showToast('Nome atualizado');
}

function deleteLobinho(idx) {
  const m = state.presenca.membros[idx];
  if(!m) return;
  if(!confirm(`Remover "${m.nome}" da lista de presença?\n\nO histórico de presença e as justificativas desse lobinho serão apagados.`)) return;
  state.presenca.membros.splice(idx, 1);

  // Reindexa justificativas (chaves "mi-ri")
  if(state.justificativas) {
    const novas = {};
    Object.entries(state.justificativas).forEach(([key, val]) => {
      const [miStr, riStr] = key.split('-');
      const mi = parseInt(miStr, 10);
      if(isNaN(mi)) { novas[key] = val; return; }
      if(mi === idx) return;
      const novoMi = mi > idx ? mi - 1 : mi;
      novas[`${novoMi}-${riStr}`] = val;
    });
    state.justificativas = novas;
  }

  // Grava presença + justificativas atomicamente para evitar que o
  // listener do Firebase sobrescreva uma parte enquanto a outra ainda não foi salva
  fbUpdate({
    presenca: state.presenca,
    justificativas: state.justificativas || {}
  });

  renderLobinhosList();
  renderPresenca();
  showToast('Lobinho removido');
}

// Exporta funções para uso global
window.renderPresenca = renderPresenca;
window.togglePresencaSort = togglePresencaSort;
window.showPresencaSubtab = showPresencaSubtab;
window.openCellDropdown = openCellDropdown;
window.setCell = setCell;
window.openFJModal = openFJModal;
window.saveFJ = saveFJ;
window.cancelFJ = cancelFJ;
window.openLobinhosModal = openLobinhosModal;
window.renderLobinhosList = renderLobinhosList;
window.addLobinho = addLobinho;
window.renameLobinho = renameLobinho;
window.deleteLobinho = deleteLobinho;
