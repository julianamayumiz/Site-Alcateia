// ===================== MATILHAS MODULE =====================
// Ranking visual, cards de pontuação por sábado e composição das matilhas

const MATILHA_COLORS = { Amarela: 'amarela', Branca: 'branca', Cinza: 'cinza', Preta: 'preta' };
const MAT_DOT_COLORS = { Amarela: '#f5c200', Branca: '#bbb', Cinza: '#888', Preta: '#222' };
const MEDAL_EMOJIS  = ['🥇','🥈','🥉'];

// ===================== DATA / SEMESTRE =====================
let _pontDate = null;
let _showPontHistory = false;

function isDateKey(k) {
  return /^\d{4}-\d{2}-\d{2}$/.test(k);
}

function nearestSaturdayStr() {
  const d = new Date();
  const day = d.getDay(); // 0=Dom, 6=Sáb
  d.setDate(d.getDate() - ((day + 1) % 7));
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const da = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${da}`;
}

function getPontDate() {
  if(!_pontDate) _pontDate = nearestSaturdayStr();
  return _pontDate;
}

function setPontDate(d) {
  _pontDate = d;
  renderMatilhas();
}

function togglePontHistory() {
  _showPontHistory = !_showPontHistory;
  renderMatilhas();
}

function currentSemesterBounds() {
  const now = new Date();
  const year = now.getFullYear();
  const m = now.getMonth();
  if(m < 6) return { start: `${year}-01-01`, end: `${year}-06-30`, label: `${year} · 1º semestre` };
  return { start: `${year}-07-01`, end: `${year}-12-31`, label: `${year} · 2º semestre` };
}

function formatDateStrBR(dateStr) {
  if(!dateStr) return '';
  const parts = dateStr.split('-');
  if(parts.length !== 3) return '';
  const [y, m, d] = parts;
  const days = ['dom','seg','ter','qua','qui','sex','sáb'];
  const dt = new Date(+y, +m - 1, +d);
  return `${d}/${m}/${y} (${days[dt.getDay()]})`;
}

// ===================== PONTUAÇÃO =====================
function getPontuacaoDate(mat, date) {
  if(!isDateKey(date)) return { jogos: 0, formacao: 0, comportamento: 0, total: 0 };
  const entry = (state.pontuacao[date] || {})[mat] || { jogos: 0, formacao: 0, comportamento: 0 };
  const jogos = entry.jogos || 0;
  const formacao = entry.formacao || 0;
  const comportamento = entry.comportamento || 0;
  return { jogos, formacao, comportamento, total: jogos + formacao - comportamento };
}

function getPontuacaoSemestre(mat) {
  const b = currentSemesterBounds();
  let jogos = 0, formacao = 0, comportamento = 0;
  Object.entries(state.pontuacao).forEach(([date, dd]) => {
    if(!isDateKey(date)) return;
    if(date < b.start || date > b.end) return;
    const e = dd[mat] || {};
    jogos += e.jogos || 0;
    formacao += e.formacao || 0;
    comportamento += e.comportamento || 0;
  });
  return { jogos, formacao, comportamento, total: jogos + formacao - comportamento };
}

function getPontuacao(mat) {
  return getPontuacaoSemestre(mat);
}

function addPont(mat, cat, delta) {
  const date = getPontDate();
  if(!state.pontuacao[date]) state.pontuacao[date] = {};
  if(!state.pontuacao[date][mat]) state.pontuacao[date][mat] = { jogos: 0, formacao: 0, comportamento: 0 };
  state.pontuacao[date][mat][cat] = Math.max(0, (state.pontuacao[date][mat][cat] || 0) + delta);
  fbSaveSection('pontuacao');
  renderMatilhas();
}

function confirmResetPontuacaoDate() {
  const date = getPontDate();
  if(!confirm(`⚠️ Limpar a pontuação de ${formatDateStrBR(date)}?\n\nEssa ação não pode ser desfeita.`)) return;
  delete state.pontuacao[date];
  fbSaveSection('pontuacao');
  renderMatilhas();
  showToast('Pontuação do dia removida');
}

function confirmResetPontuacao() {
  const b = currentSemesterBounds();
  if(!confirm(`⚠️ Resetar TODA a pontuação do semestre (${b.label})?\n\nEssa ação não pode ser desfeita.`)) return;
  Object.keys(state.pontuacao).forEach(date => {
    if(isDateKey(date) && date >= b.start && date <= b.end) delete state.pontuacao[date];
  });
  fbSaveSection('pontuacao');
  renderMatilhas();
  showToast('Pontuação do semestre resetada');
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
  const dateCtrl = document.getElementById('pont-date-controls');
  const histToggle = document.getElementById('pont-history-toggle');
  const histDiv = document.getElementById('pont-history');
  const semLabel = document.getElementById('mat-semester-label');
  const stats = document.getElementById('matilhas-stats');
  const grid = document.getElementById('matilhas-container');
  if(!grid) return;

  const semBounds = currentSemesterBounds();
  if(semLabel) semLabel.textContent = semBounds.label;

  const pageSub = document.querySelector('#p-matilhas .page-header-left p');
  if(pageSub) pageSub.textContent = `${semBounds.label} — lideranças e pontuação`;

  const matKeys = Object.keys(state.matilhas);
  const allTotals = matKeys.map(m => getPontuacaoSemestre(m).total);
  const maxPts = Math.max(...allTotals, 1);

  // ---- RANKING (semestre) ----
  if(ranking) {
    const ranked = matKeys
      .map(mat => ({ mat, ...getPontuacaoSemestre(mat) }))
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

  // ---- DATE SELECTOR ----
  const selDate = getPontDate();
  if(dateCtrl) {
    dateCtrl.innerHTML = `<input type="date" value="${selDate}" aria-label="Data do sábado" style="padding:4px 8px;border:1px solid var(--border);border-radius:6px;font-size:13px;font-family:inherit;background:var(--surface);color:var(--text)" onchange="setPontDate(this.value)">
      <button class="btn" onclick="confirmResetPontuacaoDate()" style="font-size:11px;color:var(--red);border-color:var(--red-light);padding:4px 10px">Limpar dia</button>`;
  }

  // ---- PONTUAÇÃO CARDS (dia selecionado) ----
  if(pontGrid) {
    pontGrid.innerHTML = matKeys.map(mat => {
      const cls = MATILHA_COLORS[mat] || '';
      const { total, jogos, formacao, comportamento } = getPontuacaoDate(mat, selDate);
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

    if(!pontGrid.dataset.delegationSetup) {
      pontGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action="pont"]');
        if(!btn) return;
        addPont(btn.dataset.mat, btn.dataset.cat, parseInt(btn.dataset.delta, 10));
      });
      pontGrid.dataset.delegationSetup = 'true';
    }
  }

  // ---- HISTÓRICO ----
  const histDates = Object.keys(state.pontuacao).filter(isDateKey).sort().reverse();
  if(histToggle) {
    histToggle.innerHTML = histDates.length === 0
      ? '<span style="font-size:12px;color:var(--text3)">Nenhum registro ainda.</span>'
      : `<button class="btn" onclick="togglePontHistory()" style="font-size:12px">${
          _showPontHistory ? '▲ Ocultar histórico' : `▼ Ver histórico (${histDates.length} dias)`
        }</button>`;
  }

  if(histDiv) {
    histDiv.style.display = (_showPontHistory && histDates.length > 0) ? '' : 'none';
    if(_showPontHistory && histDates.length > 0) {
      histDiv.innerHTML = `<div class="card" style="padding:0;overflow:hidden">${
        histDates.map(date => {
          const rows = matKeys.map(mat => {
            const e = (state.pontuacao[date] || {})[mat] || {};
            const j = e.jogos || 0, f = e.formacao || 0, c = e.comportamento || 0;
            const t = j + f - c;
            if(j === 0 && f === 0 && c === 0) return '';
            const dotColor = MAT_DOT_COLORS[mat] || '#999';
            return `<div style="display:flex;align-items:center;gap:8px;padding:6px 18px;border-top:1px solid var(--border)">
              <span class="rank-dot" style="background:${dotColor};width:8px;height:8px;border-radius:50%;flex-shrink:0"></span>
              <span style="font-size:13px;font-weight:600;min-width:60px">${mat}</span>
              <span style="font-size:12px;color:var(--text2)">🎮${j} 📚${f} ⚠️-${c}</span>
              <span style="font-size:13px;font-weight:700;margin-left:auto;color:${t >= 0 ? 'var(--accent)' : 'var(--red)'}">${t >= 0 ? '+' : ''}${t}</span>
            </div>`;
          }).join('');
          const hasData = rows.trim() !== '';
          const editingBadge = date === selDate ? '<span style="font-size:11px;background:var(--accent);color:#fff;padding:1px 7px;border-radius:20px">editando</span>' : '';
          return `<div>
            <div style="display:flex;align-items:center;gap:10px;padding:10px 18px;background:var(--bg2);cursor:pointer" onclick="setPontDate('${date}')" title="Editar este dia">
              <span style="font-size:13px;font-weight:700">${formatDateStrBR(date)}</span>
              ${editingBadge}
              <span style="font-size:11px;color:var(--text3);margin-left:auto">clique para editar</span>
            </div>
            ${hasData ? rows : '<div style="padding:8px 18px;font-size:12px;color:var(--text3)">—</div>'}
          </div>`;
        }).join('')
      }</div>`;
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
window.getPontuacaoSemestre = getPontuacaoSemestre;
window.getPontuacaoDate = getPontuacaoDate;
window.addPont = addPont;
window.setPontDate = setPontDate;
window.togglePontHistory = togglePontHistory;
window.confirmResetPontuacao = confirmResetPontuacao;
window.confirmResetPontuacaoDate = confirmResetPontuacaoDate;
window.toggleCargo = toggleCargo;
window.saveCargos = saveCargos;
