// ===================== COMUNICADOS MODULE =====================
// Comunicados + confirmações de presença (cards ricos, badges, filtros)

const CAT_LABELS = {
  aviso:  'Aviso',
  externa: 'Atividade Externa',
  reuniao: 'Reunião',
  outros:  'Outros',
  evento:  'Evento'
};

let comSubtab = 'coms';
const confFilter = { status: 'todos', atividade: '' };
let editingConfKey = null;

// ===================== SUB-TABS =====================
function showComSubtab(tab) {
  comSubtab = tab;
  const tSc = document.getElementById('subtab-coms');
  const tSf = document.getElementById('subtab-confs');
  const pCo = document.getElementById('panel-coms');
  const pCf = document.getElementById('panel-confs');
  const addBtn = document.getElementById('btn-add');

  if(tSc) tSc.classList.toggle('active', tab === 'coms');
  if(tSf) tSf.classList.toggle('active', tab === 'confs');
  if(pCo) pCo.style.display = tab === 'coms' ? '' : 'none';
  if(pCf) pCf.style.display = tab === 'confs' ? '' : 'none';
  if(addBtn) addBtn.style.display = tab === 'coms' ? 'inline-flex' : 'none';

  if(tab === 'confs') renderConfirmacoes();
}

function filterConfs(status, btn) {
  if(status !== null) {
    confFilter.status = status;
    document.querySelectorAll('#panel-confs .filter-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
  }
  const sel = document.getElementById('conf-f-ativ');
  confFilter.atividade = sel ? sel.value : '';
  renderConfirmacoes();
}

// ===================== HELPERS =====================
function updateBadge(id, count) {
  const el = document.getElementById(id);
  if(el) el.textContent = count;
}

function getTimestamp(c) { return c.timestamp || c.ts || 0; }

// ===================== RENDER COMUNICADOS =====================
function renderComunicados() {
  const lista = document.getElementById('comunicados-list');
  const stats = document.getElementById('com-stats');

  const confsArr = state.confirmacoes ? Object.values(state.confirmacoes) : [];
  const counts = confsArr.reduce((acc, c) => {
    if(c.status === 'sim') acc.sim++;
    else if(c.status === 'nao') acc.nao++;
    else if(c.status === 'talvez') acc.talvez++;
    return acc;
  }, { sim: 0, nao: 0, talvez: 0 });

  const sorted = [...(state.comunicados || [])].sort((a, b) => {
    if(a.fixado && !b.fixado) return -1;
    if(!a.fixado && b.fixado) return 1;
    return getTimestamp(b) - getTimestamp(a);
  });

  updateBadge('badge-coms', sorted.length);
  updateBadge('badge-confs', confsArr.length);

  if(stats) {
    stats.innerHTML = `
      <div class="stat-mini"><div class="val">${sorted.length}</div><div class="lbl">Comunicados</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--green)">${counts.sim}</div><div class="lbl">Vão</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--red)">${counts.nao}</div><div class="lbl">Não vão</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--accent2)">${counts.talvez}</div><div class="lbl">Talvez</div></div>
    `;
  }

  if(!lista) return;

  if(!sorted.length) {
    lista.innerHTML = `
      <div class="empty-state" style="text-align:center;padding:60px 20px;color:var(--text3)">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:10px;opacity:0.5" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <p>Nenhum comunicado publicado ainda.<br>Clique em <b>Novo</b> para criar o primeiro.</p>
      </div>`;
    return;
  }

  lista.innerHTML = sorted.map(com => {
    const idx = state.comunicados.indexOf(com);
    const catCls = 'com-cat-' + (com.categoria || 'aviso');
    const catLabel = CAT_LABELS[com.categoria] || 'Aviso';
    const dataStr = com.dataEvento ? ` · ${com.dataEvento}` : '';
    const pubDate = getTimestamp(com)
      ? new Date(getTimestamp(com)).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
      : '';
    const titulo = (com.fixado ? '📌 ' : '') + (com.titulo || '');
    return `
      <div class="com-card${com.fixado ? ' fixado' : ''}">
        <div class="com-header">
          <span class="com-cat-badge ${catCls}">${catLabel}</span>
          <span class="com-titulo">${titulo}</span>
        </div>
        <div class="com-meta">Publicado em ${pubDate}${dataStr}</div>
        <div class="com-texto">${(com.texto || '').replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div>
        <div class="com-actions">
          <button class="btn btn-sm" onclick="editCom(${idx})">Editar</button>
          <button class="btn btn-sm" onclick="toggleFixarCom(${idx})" style="color:var(--accent2)">${com.fixado ? 'Desafixar' : 'Fixar'}</button>
          <button class="btn btn-sm" onclick="delCom(${idx})" style="color:var(--red);border-color:var(--red-light)">Excluir</button>
        </div>
      </div>`;
  }).join('');

  if(comSubtab === 'confs') renderConfirmacoes();
}

// ===================== RENDER CONFIRMAÇÕES =====================
function populateAtividadeFilter(allConfs) {
  const sel = document.getElementById('conf-f-ativ');
  if(!sel) return;
  const atividades = [...new Set(allConfs.map(([k, c]) => c.atividade).filter(Boolean))].sort();
  const cur = sel.value;
  sel.innerHTML = '<option value="">Todas as atividades</option>' +
    atividades.map(a => `<option value="${a}"${a === cur ? ' selected' : ''}>${a}</option>`).join('');
}

function statusBadge(status) {
  if(status === 'sim') return '<span class="badge badge-green">Vai</span>';
  if(status === 'nao') return '<span class="badge badge-red">Não vai</span>';
  return '<span style="background:var(--accent2-light);color:var(--accent2);padding:2px 8px;border-radius:20px;font-size:11.5px;font-weight:500">Talvez</span>';
}

function renderConfirmacoes() {
  const el = document.getElementById('confs-lista');
  if(!el) return;

  const allConfs = state.confirmacoes ? Object.entries(state.confirmacoes) : [];
  populateAtividadeFilter(allConfs);

  const filtered = allConfs
    .filter(([k, c]) => {
      if(confFilter.status !== 'todos' && c.status !== confFilter.status) return false;
      if(confFilter.atividade && c.atividade !== confFilter.atividade) return false;
      return true;
    })
    .sort((a, b) => (b[1].ts || 0) - (a[1].ts || 0));

  if(!filtered.length) {
    el.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text3);font-size:13px">Nenhuma confirmação encontrada.</div>';
    return;
  }

  const cards = filtered.map(([key, c]) => {
    const date = c.ts ? new Date(c.ts).toLocaleDateString('pt-BR') : '';
    const obsHtml = c.obs
      ? `<div style="font-size:12px;color:var(--text2);margin-top:3px;font-style:italic">"${c.obs.replace(/</g,'&lt;')}"</div>`
      : '';
    return `
      <div style="display:flex;align-items:flex-start;gap:10px;padding:12px 16px;border-bottom:1px solid var(--border)">
        <div style="flex:1;min-width:0">
          <div style="font-weight:500;font-size:13px">${c.nomeLobinho || ''}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:2px">${c.atividade || ''} · ${c.dataAtiv || ''}</div>
          ${obsHtml}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0">
          ${statusBadge(c.status)}
          <span style="font-size:11px;color:var(--text3)">${date}</span>
          <div style="display:flex;gap:4px">
            <button class="lanc-btn" onclick="editConf('${key}')" aria-label="Editar confirmação">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <button class="lanc-btn lanc-btn-del" onclick="delConf('${key}')" aria-label="Excluir confirmação">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
            </button>
          </div>
        </div>
      </div>`;
  }).join('');

  el.innerHTML = `<div class="card">${cards}</div>`;
}

// ===================== CRUD COMUNICADO =====================
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

  const com = { titulo, categoria, dataEvento, texto, fixado, timestamp: Date.now() };

  if(window.editingComIdx >= 0) {
    com.timestamp = state.comunicados[window.editingComIdx].timestamp || Date.now();
    state.comunicados[window.editingComIdx] = com;
    showToast('Comunicado atualizado');
  } else {
    state.comunicados.push(com);
    showToast('Comunicado criado');
  }

  withModalSaveLoading(fbSaveSection('comunicados')).then(() => {
    closeModals();
    renderComunicados();
  });
}

function editCom(idx) {
  window.editingComIdx = idx;
  const com = state.comunicados[idx];
  document.getElementById('modal-com-title').textContent = 'Editar comunicado';
  document.getElementById('com-titulo').value = com.titulo || '';
  document.getElementById('com-cat').value = com.categoria || 'aviso';
  document.getElementById('com-data-evento').value = com.dataEvento || '';
  document.getElementById('com-texto').value = com.texto || '';
  document.getElementById('com-fixado').checked = com.fixado || false;
  openModal('modal-com');
}

function delCom(idx) {
  if(!confirm('Excluir este comunicado?')) return;
  state.comunicados.splice(idx, 1);
  fbSaveSection('comunicados');
  showToast('Comunicado excluído');
  renderComunicados();
}

function toggleFixarCom(idx) {
  state.comunicados[idx].fixado = !state.comunicados[idx].fixado;
  fbSaveSection('comunicados');
  showToast(state.comunicados[idx].fixado ? 'Comunicado fixado' : 'Comunicado desafixado');
  renderComunicados();
}

// ===================== EDITAR CONFIRMAÇÃO =====================
function editConf(key) {
  const c = state.confirmacoes?.[key];
  if(!c) return;
  editingConfKey = key;
  document.getElementById('conf-edit-subtitle').textContent = `${c.nomeLobinho} — ${c.atividade} · ${c.dataAtiv}`;
  document.getElementById('conf-edit-status').value = c.status || 'sim';
  document.getElementById('conf-edit-obs').value = c.obs || '';
  openModal('modal-conf-edit');
}

function saveConfEdit() {
  if(!editingConfKey) return;
  const c = state.confirmacoes[editingConfKey];
  if(!c) return;
  c.status = document.getElementById('conf-edit-status').value;
  c.obs = document.getElementById('conf-edit-obs').value.trim();
  withModalSaveLoading(fbSet('confirmacoes/' + editingConfKey, c)).then(() => {
    closeModals();
    showToast('Confirmação atualizada');
    renderConfirmacoes();
    renderComunicados();
    editingConfKey = null;
  });
}

function delConf(key) {
  if(!confirm('Excluir esta confirmação?')) return;
  delete state.confirmacoes[key];
  fbSet('confirmacoes/' + key, null);
  showToast('Confirmação removida');
  renderConfirmacoes();
  renderComunicados();
}

// Exporta funções para uso global
window.renderComunicados = renderComunicados;
window.renderConfirmacoes = renderConfirmacoes;
window.showComSubtab = showComSubtab;
window.filterConfs = filterConfs;
window.saveComunicado = saveComunicado;
window.editCom = editCom;
window.delCom = delCom;
window.toggleFixarCom = toggleFixarCom;
window.editConf = editConf;
window.saveConfEdit = saveConfEdit;
window.delConf = delConf;
