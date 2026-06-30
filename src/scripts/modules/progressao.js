// ===================== PROGRESSÃO MODULE =====================
// Acompanha a progressão de cada lobinho no modelo ANTIGO e mostra,
// junto, o modelo NOVO (eixos e blocos) — com equivalência automática do
// antigo e marcação direta das ações do novo.
//
// Contagem de ações VARIÁVEIS de um bloco:
//   antigo  — atividades antigas cumpridas mapeadas para o bloco (automático)
//   novo    — ações variáveis descritivas marcadas + especialidades marcadas
//   total   = antigo + novo  (cada uma conta 1)
// Uma SUBSTITUTA marcada (especialidade/insígnia) satisfaz sozinha todo o
// requisito de variáveis do bloco.
//
// Persistência (Firebase: alcateia/progressao):
//   progressao[nomeLobinho] = {
//     antigo:    { "A01": true, ... },
//     fixas:     { "<bloco>": { "0": true } },
//     variaveis: { "<bloco>": { "0": true } },
//     esp:       { "<bloco>": { "2": true } },
//     subs:      { "<bloco>": { "0": true } }
//   }

// ===================== HELPERS DE DADOS =====================
function progGetLobinhos() {
  return (state.presenca?.membros || [])
    .map(m => m.nome)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, 'pt-BR'));
}

function progGetData(nome) {
  const d = state.progressao[nome] || {};
  return {
    antigo: d.antigo || {},
    fixas: d.fixas || {},
    variaveis: d.variaveis || {},
    esp: d.esp || {},
    subs: d.subs || {}
  };
}

function progEnsure(nome) {
  const d = state.progressao[nome] || (state.progressao[nome] = {});
  ['antigo', 'fixas', 'variaveis', 'esp', 'subs'].forEach(k => { if (!d[k]) d[k] = {}; });
  return d;
}

// ----- Cruzamento com a aba Especialidades (dica "já tem") -----
// Normaliza texto: minúsculas, sem acentos, espaços colapsados.
function progNorm(s) {
  return (s || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/\s+/g, ' ').trim();
}

// Casa o nome informal da especialidade com o nome completo do lobinho:
// todos os tokens (>=2 letras) do nome informal devem aparecer como token
// do nome completo (igual ou prefixo).
function progNameMatches(espNome, fullName) {
  const ft = progNorm(fullName).split(' ').filter(Boolean);
  const et = progNorm(espNome).split(' ').filter(t => t.length >= 2);
  if (!et.length) return false;
  return et.every(tok => ft.some(f => f === tok || f.startsWith(tok)));
}

// Conjunto de especialidades (nome normalizado) que o lobinho já possui.
function progEspSet(fullName) {
  const set = new Set();
  (state.especialidades || []).forEach(e => {
    if (e.nome && e.esp && progNameMatches(e.nome, fullName)) set.add(progNorm(e.esp));
  });
  return set;
}

// Conta marcações true dentro de um sub-objeto { idx: true }
function progCountMarks(obj) {
  return obj ? Object.values(obj).filter(Boolean).length : 0;
}

// Atividades antigas cumpridas que apontam para um bloco
function progVarAntigo(blocoNome, antigo) {
  return PROG_ATIVIDADES_ANTIGAS.filter(a => a.bloco === blocoNome && antigo[a.codigo]).map(a => a.codigo);
}

// Equivalência item-a-item: códigos antigos CUMPRIDOS que satisfazem uma ação
// variável NOVA específica (mesmo bloco + texto igual em PROG_EQUIVALENCIAS).
function progEquivCodes(blocoNome, varTexto, antigo) {
  if (typeof PROG_EQUIVALENCIAS === 'undefined') return [];
  return PROG_ATIVIDADES_ANTIGAS
    .filter(a => a.bloco === blocoNome && antigo[a.codigo] && PROG_EQUIVALENCIAS[a.codigo] === varTexto)
    .map(a => a.codigo);
}

// Índices das ações variáveis de um bloco já satisfeitas por equivalência antiga.
function progAutoVarIdx(bloco, antigo) {
  const set = new Set();
  bloco.variaveis.forEach((t, i) => {
    if (progEquivCodes(bloco.nome, t, antigo).length) set.add(i);
  });
  return set;
}

function progFixasDone(bloco, fixas) {
  return progCountMarks(fixas[bloco.nome]);
}

// Resumo de variáveis de um bloco
function progVarResumo(bloco, data) {
  const antigo = progVarAntigo(bloco.nome, data.antigo).length;
  // Marcações manuais nas variáveis, exceto as já satisfeitas por equivalência
  // antiga (essas já estão contadas no lado "antigo" — evita contar em dobro).
  const autoIdx = progAutoVarIdx(bloco, data.antigo);
  const varMarks = data.variaveis[bloco.nome] || {};
  const novoVar = Object.keys(varMarks).filter(k => varMarks[k] && !autoIdx.has(Number(k))).length;
  const novoEsp = progCountMarks(data.esp[bloco.nome]);
  const subs = progCountMarks(data.subs[bloco.nome]);
  const total = antigo + novoVar + novoEsp;
  const satisfeito = subs > 0 || total >= bloco.minVar;
  return { antigo, novo: novoVar + novoEsp, total, subs, satisfeito };
}

// Status do bloco: 'completo' | 'andamento' | 'nao-iniciado'
function progBlocoStatus(bloco, data) {
  const v = progVarResumo(bloco, data);
  const fixasDone = progFixasDone(bloco, data.fixas);
  const fixasOk = fixasDone >= bloco.fixas.length;
  if (v.satisfeito && fixasOk) return 'completo';
  if (v.total > 0 || v.subs > 0 || fixasDone > 0) return 'andamento';
  return 'nao-iniciado';
}

// ===================== SELETOR DE LOBINHO =====================
function progPopulateSelect() {
  const sel = document.getElementById('prog-lobinho');
  if (!sel) return;
  const nomes = progGetLobinhos();
  const cur = window.progSelected || sel.value || '';
  sel.innerHTML = '<option value="">Selecione um lobinho...</option>' +
    nomes.map(n => `<option value="${n}"${n === cur ? ' selected' : ''}>${n}</option>`).join('');
}

function progSelectLobinho() {
  const sel = document.getElementById('prog-lobinho');
  window.progSelected = sel ? sel.value : '';
  renderProgressao();
}

// ===================== TOGGLES =====================
function progToggleMark(group, blocoNome, idx) {
  const nome = window.progSelected;
  if (!nome) return;
  const d = progEnsure(nome);
  if (!d[group][blocoNome]) d[group][blocoNome] = {};
  if (d[group][blocoNome][idx]) delete d[group][blocoNome][idx];
  else d[group][blocoNome][idx] = true;
  fbSaveSection('progressao');
  renderProgressao();
}

function progToggleAntigo(codigo) {
  const nome = window.progSelected;
  if (!nome) return;
  const d = progEnsure(nome);
  if (d.antigo[codigo]) delete d.antigo[codigo];
  else d.antigo[codigo] = true;
  fbSaveSection('progressao');
  renderProgressao();
}

// blocoIdx → nome do bloco (evita problemas de aspas no onclick)
function progToggle(group, blocoIdx, idx) {
  const bloco = PROG_BLOCOS[blocoIdx];
  if (bloco) progToggleMark(group, bloco.nome, idx);
}

// ===================== DASHBOARD GERAL =====================
function renderProgDashboardGeral(wrap, stats) {
  const lobinhos = progGetLobinhos();

  if (stats) {
    if (!lobinhos.length) {
      stats.innerHTML = '';
    } else {
      let totalCompletos = 0, totalAndamento = 0, totalNaoIniciado = 0;
      lobinhos.forEach(nome => {
        const data = progGetData(nome);
        PROG_BLOCOS.forEach(b => {
          const s = progBlocoStatus(b, data);
          if (s === 'completo') totalCompletos++;
          else if (s === 'andamento') totalAndamento++;
          else totalNaoIniciado++;
        });
      });
      stats.innerHTML = `
        <div class="stat-mini"><div class="val">${lobinhos.length}</div><div class="lbl">Lobinhos</div></div>
        <div class="stat-mini"><div class="val" style="color:var(--green)">${totalCompletos}</div><div class="lbl">Blocos completos</div></div>
        <div class="stat-mini"><div class="val" style="color:var(--accent2)">${totalAndamento}</div><div class="lbl">Em andamento</div></div>
        <div class="stat-mini"><div class="val" style="color:var(--text3)">${totalNaoIniciado}</div><div class="lbl">Não iniciados</div></div>
      `;
    }
  }

  if (!lobinhos.length) {
    wrap.innerHTML = `<div class="card" style="padding:40px;text-align:center;color:var(--text3)">
      Nenhum lobinho cadastrado.
    </div>`;
    return;
  }

  const STATUS_ICON = { 'completo': '✓', 'andamento': '◑', 'nao-iniciado': '○' };
  const STATUS_COLOR = { 'completo': 'var(--green)', 'andamento': 'var(--accent2)', 'nao-iniciado': 'var(--text3)' };

  const colHeaders = PROG_BLOCOS.map(b =>
    `<th style="font-size:10px;font-weight:600;color:var(--text2);padding:6px 8px;white-space:nowrap;max-width:90px;overflow:hidden;text-overflow:ellipsis" title="${b.nome}">${b.nome}</th>`
  ).join('');

  const rows = lobinhos.map(nome => {
    const data = progGetData(nome);
    const cells = PROG_BLOCOS.map(b => {
      const s = progBlocoStatus(b, data);
      const v = progVarResumo(b, data);
      const fixasDone = progFixasDone(b, data.fixas);
      const tooltip = `Fixas: ${fixasDone}/${b.fixas.length} | Variáveis: ${v.total}/${b.minVar}`;
      return `<td style="text-align:center;padding:6px 4px" title="${tooltip}">
        <span style="color:${STATUS_COLOR[s]};font-size:15px;line-height:1">${STATUS_ICON[s]}</span>
      </td>`;
    }).join('');

    const completos = PROG_BLOCOS.filter(b => progBlocoStatus(b, data) === 'completo').length;
    const pct = Math.round(completos / PROG_BLOCOS.length * 100);
    const barFill = `<div style="height:4px;border-radius:2px;background:var(--green);width:${pct}%"></div>`;
    const bar = `<div style="width:48px;height:4px;border-radius:2px;background:var(--border);margin:3px auto 0">${barFill}</div>`;

    return `<tr style="border-bottom:1px solid var(--border)">
      <td style="padding:8px 12px;white-space:nowrap">
        <button class="lanc-btn" style="font-size:13px;font-weight:600;color:var(--text1);background:none;border:none;cursor:pointer;padding:0;text-align:left"
          onclick="progSelectDashboard('${nome.replace(/'/g, "\\'")}')">${nome}</button>
        <div style="font-size:10px;color:var(--text3)">${completos}/${PROG_BLOCOS.length} blocos${bar}</div>
      </td>
      ${cells}
    </tr>`;
  }).join('');

  const legend = `<div style="display:flex;gap:16px;font-size:11px;color:var(--text3);margin-top:12px;flex-wrap:wrap">
    <span><span style="color:var(--green)">✓</span> Completo</span>
    <span><span style="color:var(--accent2)">◑</span> Em andamento</span>
    <span><span style="color:var(--text3)">○</span> Não iniciado</span>
  </div>`;

  wrap.innerHTML = `<div class="card" style="overflow-x:auto;padding:16px">
    <table style="width:100%;border-collapse:collapse;min-width:600px">
      <thead>
        <tr style="border-bottom:2px solid var(--border)">
          <th style="text-align:left;padding:6px 12px;font-size:12px;color:var(--text2);white-space:nowrap">Lobinho</th>
          ${colHeaders}
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    ${legend}
  </div>`;
}

// ===================== RENDER =====================
function renderProgressao() {
  progPopulateSelect();
  const wrap = document.getElementById('prog-content');
  const stats = document.getElementById('prog-stats');
  if (!wrap) return;

  const nome = window.progSelected || '';
  if (!nome) {
    renderProgDashboardGeral(wrap, stats);
    return;
  }

  const data = progGetData(nome);

  if (stats) {
    const totalAntigo = PROG_ATIVIDADES_ANTIGAS.length;
    const feitasAntigo = PROG_ATIVIDADES_ANTIGAS.filter(a => data.antigo[a.codigo]).length;
    let completos = 0, andamento = 0;
    PROG_BLOCOS.forEach(b => {
      const s = progBlocoStatus(b, data);
      if (s === 'completo') completos++;
      else if (s === 'andamento') andamento++;
    });
    stats.innerHTML = `
      <div class="stat-mini"><div class="val">${feitasAntigo}/${totalAntigo}</div><div class="lbl">Atividades antigas</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--green)">${completos}</div><div class="lbl">Blocos completos</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--accent2)">${andamento}</div><div class="lbl">Blocos em andamento</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--text3)">${PROG_BLOCOS.length - completos - andamento}</div><div class="lbl">Não iniciados</div></div>
    `;
  }

  const espSet = progEspSet(nome);

  wrap.innerHTML = `<div class="prog-grid">
    <div class="prog-col">
      <p class="section-label">📋 Modelo antigo — marque o que o lobinho cumpriu</p>
      ${renderProgAntigo(data)}
    </div>
    <div class="prog-col">
      <p class="section-label">⭐ Modelo novo — progresso por bloco</p>
      ${renderProgNovo(data, espSet)}
    </div>
  </div>`;
}

function renderProgAntigo(data) {
  return Object.keys(PROG_CATEGORIAS).map(cat => {
    const items = PROG_ATIVIDADES_ANTIGAS.filter(a => a.codigo[0] === cat);
    if (!items.length) return '';
    const feitas = items.filter(a => data.antigo[a.codigo]).length;
    const rows = items.map(a => {
      const checked = !!data.antigo[a.codigo];
      const badge = a.bloco
        ? `<span class="badge badge-blue" style="font-size:10px">${a.bloco}</span>`
        : `<span class="badge badge-gray" style="font-size:10px">sem equivalência</span>`;
      return `<label class="prog-item${checked ? ' done' : ''}">
        <input type="checkbox" ${checked ? 'checked' : ''} onchange="progToggleAntigo('${a.codigo}')">
        <span class="prog-cod">${a.codigo}</span>
        <span class="prog-desc">${a.desc}<br>${badge}</span>
      </label>`;
    }).join('');
    return `<div class="card prog-cat">
      <div class="prog-cat-head">
        <b>${cat} · ${PROG_CATEGORIAS[cat]}</b>
        <span class="badge badge-gray">${feitas}/${items.length}</span>
      </div>
      ${rows}
    </div>`;
  }).join('');
}

function renderProgNovo(data, espSet) {
  return PROG_EIXOS.map(eixo => {
    const cards = PROG_BLOCOS
      .map((b, bi) => ({ b, bi }))
      .filter(x => x.b.eixo === eixo)
      .map(x => renderProgBloco(x.b, x.bi, data, espSet))
      .join('');
    if (!cards) return '';
    return `<div style="margin-bottom:18px">
      <p class="section-label" style="margin-top:0">${eixo}</p>
      ${cards}
    </div>`;
  }).join('');
}

function progCheckItem(group, bi, idx, texto, checked, extra) {
  return `<label class="prog-item${checked ? ' done' : ''}">
    <input type="checkbox" ${checked ? 'checked' : ''} onchange="progToggle('${group}', ${bi}, ${idx})">
    <span class="prog-desc">${texto}${extra || ''}</span>
  </label>`;
}

const PROG_BADGE_TEM = ' <span class="badge badge-green" style="font-size:10px">✓ já tem</span>';

function renderProgBloco(bloco, bi, data, espSet) {
  espSet = espSet || new Set();
  const v = progVarResumo(bloco, data);
  const codigos = progVarAntigo(bloco.nome, data.antigo);
  const fixasDone = progFixasDone(bloco, data.fixas);
  const status = progBlocoStatus(bloco, data);

  const statusMap = {
    'completo':     { txt: '✓ Completo',   cls: 'badge-green' },
    'andamento':    { txt: 'Em andamento', cls: 'badge-yellow' },
    'nao-iniciado': { txt: 'Não iniciado', cls: 'badge-gray' }
  };
  const st = statusMap[status];

  const pct = v.subs > 0 ? 100 : (bloco.minVar ? Math.min(100, Math.round((v.total / bloco.minVar) * 100)) : 100);
  const varColor = v.satisfeito ? 'var(--green)' : 'var(--accent)';

  // Resumo das variáveis
  const resumoVar = v.subs > 0
    ? `<div class="prog-sub"><b style="color:var(--green)">Requisito de variáveis substituído</b> por especialidade/insígnia.</div>`
    : `<div class="prog-sub">Ações variáveis — mínimo ${bloco.minVar}
        <b style="color:${varColor}">${v.total}/${bloco.minVar}</b>
        <span style="color:var(--text3);font-size:10.5px">(antigo ${v.antigo} · novo ${v.novo})</span>
      </div>`;

  // Contribuições do modelo antigo
  const antigoHtml = codigos.length
    ? `<div class="prog-var-codes"><span style="font-size:10.5px;color:var(--text3)">do antigo:</span> ${codigos.map(c => `<span class="badge badge-blue" style="font-size:10px">${c}</span>`).join(' ')}</div>`
    : '';

  // Variáveis descritivas (sempre visíveis). As que têm equivalência com uma
  // atividade antiga já cumprida aparecem marcadas e travadas, com selo do antigo.
  const varMarks = data.variaveis[bloco.nome] || {};
  const variaveisHtml = bloco.variaveis.length
    ? bloco.variaveis.map((t, i) => {
        const equivCodes = progEquivCodes(bloco.nome, t, data.antigo);
        if (equivCodes.length) {
          const badge = ` <span class="badge badge-blue" style="font-size:10px">✓ do antigo ${equivCodes.join(', ')}</span>`;
          return `<label class="prog-item done" title="Concluído automaticamente pela atividade antiga equivalente (${equivCodes.join(', ')})">
            <input type="checkbox" checked disabled>
            <span class="prog-desc">${t}${badge}</span>
          </label>`;
        }
        return progCheckItem('variaveis', bi, i, t, !!varMarks[i]);
      }).join('')
    : '';

  // Especialidades (recolhíveis) — destaca as que o lobinho já tem
  const espMarks = data.esp[bloco.nome] || {};
  const espDone = progCountMarks(espMarks);
  const espTem = bloco.especialidades.filter(e => espSet.has(progNorm(e))).length;
  const especialidadesHtml = bloco.especialidades.length ? `
    <details class="prog-details" open>
      <summary>Conquistar especialidade — conta como variável
        <span class="badge badge-gray" style="font-size:10px">${espDone}/${bloco.especialidades.length}</span>
        ${espTem ? `<span class="badge badge-green" style="font-size:10px">${espTem} já tem</span>` : ''}
      </summary>
      ${bloco.especialidades.map((e, i) => progCheckItem('esp', bi, i, e, !!espMarks[i], espSet.has(progNorm(e)) ? PROG_BADGE_TEM : '')).join('')}
    </details>` : '';

  // Substitutas (recolhíveis) — uma satisfaz todo o requisito
  const subMarks = data.subs[bloco.nome] || {};
  const subTem = bloco.substitutas.filter(s => espSet.has(progNorm(s))).length;
  const substitutasHtml = bloco.substitutas.length ? `
    <details class="prog-details" open>
      <summary>Substitui o requisito de variáveis
        <span class="badge badge-gray" style="font-size:10px">${v.subs}/${bloco.substitutas.length}</span>
        ${subTem ? `<span class="badge badge-green" style="font-size:10px">${subTem} já tem</span>` : ''}
      </summary>
      ${bloco.substitutas.map((s, i) => progCheckItem('subs', bi, i, s, !!subMarks[i], espSet.has(progNorm(s)) ? PROG_BADGE_TEM : '')).join('')}
    </details>` : '';

  // Fixas
  const fixaMarks = data.fixas[bloco.nome] || {};
  const fixasHtml = bloco.fixas.length ? `
    <div class="prog-fixas">
      <div class="prog-sub">Ações fixas <span class="badge badge-gray" style="font-size:10px">${fixasDone}/${bloco.fixas.length}</span></div>
      ${bloco.fixas.map((f, i) => progCheckItem('fixas', bi, i, f, !!fixaMarks[i])).join('')}
    </div>` : `<div class="prog-sub" style="color:var(--text3)">Sem ações fixas.</div>`;

  return `<div class="card prog-bloco">
    <div class="prog-bloco-head">
      <b>${bloco.nome}</b>
      <span class="badge ${st.cls}">${st.txt}</span>
    </div>
    ${resumoVar}
    <div class="prog-bar"><div class="prog-bar-fill" style="width:${pct}%;background:${varColor}"></div></div>
    ${antigoHtml}
    ${variaveisHtml}
    ${especialidadesHtml}
    ${substitutasHtml}
    ${fixasHtml}
  </div>`;
}

function progSelectDashboard(nome) {
  window.progSelected = nome;
  const sel = document.getElementById('prog-lobinho');
  if (sel) sel.value = nome;
  if (!document.getElementById('prog-content')) {
    if (typeof goTo === 'function') goTo('progressao');
    return;
  }
  renderProgressao();
}

// Exporta funções para uso global
window.renderProgressao = renderProgressao;
window.renderProgDashboardGeral = renderProgDashboardGeral;
window.progSelectLobinho = progSelectLobinho;
window.progSelectDashboard = progSelectDashboard;
window.progToggleAntigo = progToggleAntigo;
window.progToggle = progToggle;
