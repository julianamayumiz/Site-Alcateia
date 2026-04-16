// ===================== MATILHAS MODULE =====================
// Ranking visual, cards de pontuação e composição das matilhas

const MATILHA_COLORS = { Amarela: 'amarela', Branca: 'branca', Cinza: 'cinza', Preta: 'preta' };
const MAT_DOT_COLORS = { Amarela: '#f5c200', Branca: '#bbb', Cinza: '#888', Preta: '#222' };
const MEDAL_EMOJIS  = ['🥇','🥈','🥉'];

// ===================== PONTUAÇÃO =====================
function getPontuacao(mat) {
  const p = state.pontuacao[mat] || { jogos: 0, formacao: 0, comportamento: 0 };
  const jogos = p.jogos || 0;
  const formacao = p.formacao || 0;
  const comportamento = p.comportamento || 0;
  const total = jogos + formacao - comportamento;
  return { jogos, formacao, comportamento, total };
}

function addPont(mat, cat, delta) {
  if(!state.pontuacao[mat]) state.pontuacao[mat] = { jogos: 0, formacao: 0, comportamento: 0 };
  state.pontuacao[mat][cat] = Math.max(0, (state.pontuacao[mat][cat] || 0) + delta);
  fbSaveSection('pontuacao');
  renderMatilhas();
}

function confirmResetPontuacao() {
  if(!confirm('Tem certeza que deseja resetar TODA a pontuação das matilhas?\n\nEssa ação não pode ser desfeita.')) return;
  Object.keys(state.pontuacao).forEach(mat => {
    state.pontuacao[mat] = { jogos: 0, formacao: 0, comportamento: 0 };
  });
  fbSaveSection('pontuacao');
  renderMatilhas();
  showToast('Pontuação resetada');
}

// ===================== CARGOS =====================
function toggleCargo(mat, nome) {
  if(!state.cargos[mat]) state.cargos[mat] = { primo: '', segundo: '' };
  const c = state.cargos[mat];
  if(c.primo === nome)        c.primo = '';
  else if(c.segundo === nome) c.segundo = '';
  else if(!c.primo)           c.primo = nome;
  else if(!c.segundo)         c.segundo = nome;
  else {
    c.segundo = c.primo;
    c.primo = nome;
  }
  saveCargos();
}

function saveCargos() {
  fbSaveSection('cargos');
  renderMatilhas();
}

// ===================== HELPERS =====================
function pontCatRow(label, emoji, value, mat, cat, opts = {}) {
  const {
    valueColor = 'var(--accent)',
    minusStyle = '',
    plusStyle = '',
    minusTitle = '',
    plusTitle = '',
    showNegative = false,
    rowStyle = '',
    subtitle = ''
  } = opts;
  const displayValue = showNegative ? `-${value}` : value;
  return `<div class="pont-cat-row"${rowStyle ? ` style="${rowStyle}"` : ''}>
    <span class="pont-cat-label">${emoji} ${label}${subtitle}</span>
    <div class="pont-btns">
      <button class="pont-btn minus" data-action="pont" data-mat="${mat}" data-cat="${cat}" data-delta="-1"${minusStyle ? ` style="${minusStyle}"` : ''}${minusTitle ? ` title="${minusTitle}"` : ''} aria-label="${minusTitle || ('Diminuir ' + label)}">−</button>
      <span class="pont-val" style="color:${valueColor}">${displayValue}</span>
      <button class="pont-btn plus" data-action="pont" data-mat="${mat}" data-cat="${cat}" data-delta="1"${plusStyle ? ` style="${plusStyle}"` : ''}${plusTitle ? ` title="${plusTitle}"` : ''} aria-label="${plusTitle || ('Aumentar ' + label)}">+</button>
    </div>
  </div>`;
}

// ===================== RENDER =====================
function renderMatilhas() {
  const ranking = document.getElementById('ranking-visual');
  const pontGrid = document.getElementById('pontuacao-grid');
  const stats = document.getElementById('matilhas-stats');
  const grid = document.getElementById('matilhas-container');
  if(!grid) return;

  const allTotals = Object.keys(state.matilhas).map(m => getPontuacao(m).total);
  const maxPts = Math.max(...allTotals, 1);

  // ---- RANKING ----
  if(ranking) {
    const ranked = Object.keys(state.matilhas)
      .map(mat => ({ mat, ...getPontuacao(mat) }))
      .sort((a, b) => b.total - a.total);

    ranking.innerHTML = `<div class="card" style="padding:20px 22px">${
      ranked.map((r, i) => {
        const barPct = maxPts > 0 ? Math.max(0, Math.round(r.total / maxPts * 100)) : 0;
        const dotColor = MAT_DOT_COLORS[r.mat] || '#999';
        const barColor = i === 0 ? '#f5c200' : i === 1 ? '#aaa' : i === 2 ? '#cd7f32' : 'var(--accent)';
        const posClass = i < 3 ? `pos-${i+1}` : '';
        const medal = MEDAL_EMOJIS[i] || (i+1);
        return `<div class="ranking-row">
          <span class="rank-pos ${posClass}">${medal}</span>
          <span class="rank-dot" style="background:${dotColor}"></span>
          <span class="rank-name">${r.mat}</span>
          <div class="rank-bar-wrap"><div class="rank-bar" style="width:${barPct}%;background:${barColor}"></div></div>
          <span class="rank-pts">${r.total} pts
            <span class="rank-breakdown">🎮${r.jogos} 📚${r.formacao} ⚠️-${r.comportamento}</span>
          </span>
        </div>`;
      }).join('')
    }</div>`;
  }

  // ---- PONTUAÇÃO CARDS ----
  if(pontGrid) {
    pontGrid.innerHTML = Object.keys(state.matilhas).map(mat => {
      const cls = MATILHA_COLORS[mat] || '';
      const { total, jogos, formacao, comportamento } = getPontuacao(mat);
      const dotColor = MAT_DOT_COLORS[mat] || '#999';
      const totalColor = total >= 0 ? dotColor : 'var(--red)';
      const totalSign = total >= 0 ? '+' : '';
      return `<div class="pont-card ${cls}">
        <div class="pont-header">
          <div class="matilha-dot"></div>
          <span style="font-weight:600;font-size:14px">${mat}</span>
          <span class="pont-total" style="color:${totalColor}">${totalSign}${total}</span>
        </div>
        <div class="pont-cats">
          ${pontCatRow('Jogos', '🎮', jogos, mat, 'jogos')}
          ${pontCatRow('Formação', '📚', formacao, mat, 'formacao')}
          ${pontCatRow('Comportamento', '⚠️', comportamento, mat, 'comportamento', {
            rowStyle: 'border-top:1px dashed var(--border);padding-top:8px;margin-top:2px',
            subtitle: ' <span style="font-size:10px;color:var(--red)">(penalidade)</span>',
            valueColor: 'var(--red)',
            minusStyle: 'border-color:var(--accent);color:var(--accent)',
            plusStyle: 'border-color:var(--red);color:var(--red)',
            minusTitle: 'Remover penalidade',
            plusTitle: 'Adicionar penalidade',
            showNegative: true
          })}
        </div>
      </div>`;
    }).join('');

    // Event delegation só uma vez
    if(!pontGrid.dataset.delegationSetup) {
      pontGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action="pont"]');
        if(!btn) return;
        addPont(btn.dataset.mat, btn.dataset.cat, parseInt(btn.dataset.delta, 10));
      });
      pontGrid.dataset.delegationSetup = 'true';
    }
  }

  // ---- STATS ROW (composição) ----
  if(stats) {
    const totalMembros = Object.values(state.matilhas).flat().length;
    const nMatilhas = Object.keys(state.matilhas).length;
    const totalComCargo = Object.values(state.cargos || {}).filter(c => c.primo || c.segundo).length;
    stats.innerHTML = `
      <div class="stat-mini"><div class="val">${totalMembros}</div><div class="lbl">Lobinhos</div></div>
      <div class="stat-mini"><div class="val">${nMatilhas}</div><div class="lbl">Matilhas</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--accent2)">${totalComCargo}</div><div class="lbl">Com cargo</div></div>
    `;
  }

  // ---- MATILHA CARDS ----
  grid.innerHTML = Object.entries(state.matilhas).map(([mat, members]) => {
    const cls = MATILHA_COLORS[mat] || '';
    const cargo = state.cargos[mat] || { primo: '', segundo: '' };

    const chips = members.map(m => {
      const isPrimo = cargo.primo === m;
      const isSegundo = cargo.segundo === m;
      const chipCls = isPrimo ? 'cargo-primo' : isSegundo ? 'cargo-segundo' : '';
      const tag = isPrimo ? '<span class="cargo-tag primo">1º</span>'
        : isSegundo ? '<span class="cargo-tag segundo">2º</span>' : '';
      const safeName = m.replace(/'/g, "\\'");
      return `<span class="member-chip ${chipCls}" onclick="toggleCargo('${mat}','${safeName}')" title="Clique para designar cargo" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleCargo('${mat}','${safeName}');}">${tag}${m}</span>`;
    }).join('');

    const primoLabel = cargo.primo
      ? `<span style="font-size:12px;color:var(--text2)">1º <b>${cargo.primo}</b></span>`
      : `<span style="font-size:12px;color:var(--text3)">1º —</span>`;
    const segundoLabel = cargo.segundo
      ? `<span style="font-size:12px;color:var(--text2)">2º <b>${cargo.segundo}</b></span>`
      : `<span style="font-size:12px;color:var(--text3)">2º —</span>`;

    return `<div class="matilha-card ${cls}">
      <div class="matilha-header">
        <div class="matilha-dot"></div>
        <span class="matilha-name">${mat}</span>
        <span class="matilha-count">${members.length}</span>
      </div>
      <div style="display:flex;gap:12px;padding:0 18px 10px;border-bottom:1px solid var(--border)">
        ${primoLabel}
        ${segundoLabel}
      </div>
      <div class="matilha-members" style="padding-top:10px">${chips}</div>
    </div>`;
  }).join('');
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
