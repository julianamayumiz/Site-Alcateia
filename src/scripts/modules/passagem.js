// ===================== PASSAGEM MODULE =====================
// Controle de datas de passagem de nível dos lobinhos:
// Integração · Promessa · Pata Tenra · Saltador · Rastreador · Caçador
//
// Persistência (Firebase: alcateia/passagem):
//   passagem[nomeLobinho] = {
//     integracao: "DD/MM/AAAA",
//     promessa:   "DD/MM/AAAA",
//     pata_tenra: "DD/MM/AAAA",
//     saltador:   "DD/MM/AAAA",
//     rastreador: "DD/MM/AAAA",
//     cacador:    "DD/MM/AAAA"
//   }

const PASS_NIVEIS = [
  { key: 'integracao', label: 'Integração' },
  { key: 'promessa',   label: 'Promessa'   },
  { key: 'pata_tenra', label: 'Pata Tenra' },
  { key: 'saltador',   label: 'Saltador'   },
  { key: 'rastreador', label: 'Rastreador' },
  { key: 'cacador',    label: 'Caçador'    }
];

// Lobinho ativo sendo editado: { nome, key }
let _passEdit = null;

function passGetLobinhos() {
  return (state.presenca?.membros || [])
    .map(m => m.nome)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, 'pt-BR'));
}

function passGetData(nome) {
  return state.passagem?.[nome] || {};
}

// Converte "DD/MM/AAAA" → "AAAA-MM-DD" para o input[type=date]
function passToInput(val) {
  if (!val) return '';
  const p = val.split('/');
  if (p.length !== 3) return '';
  return `${p[2]}-${p[1]}-${p[0]}`;
}

// Converte "AAAA-MM-DD" → "DD/MM/AAAA" para exibição e armazenamento
function passFromInput(val) {
  if (!val) return '';
  const p = val.split('-');
  if (p.length !== 3) return '';
  return `${p[2]}/${p[1]}/${p[0]}`;
}

function passSaveDate(nome, key, inputVal) {
  if (!state.passagem) state.passagem = {};
  if (!state.passagem[nome]) state.passagem[nome] = {};
  const formatted = passFromInput(inputVal);
  if (formatted) state.passagem[nome][key] = formatted;
  else delete state.passagem[nome][key];
  fbSaveSection('passagem');
  _passEdit = null;
  renderPassagem();
}

function passClearDate(nome, key) {
  if (state.passagem?.[nome]?.[key]) {
    delete state.passagem[nome][key];
    fbSaveSection('passagem');
  }
  _passEdit = null;
  renderPassagem();
}

function passStartEdit(nome, key) {
  _passEdit = { nome, key };
  renderPassagem();
  setTimeout(() => {
    const inp = document.getElementById('pass-edit-input');
    if (inp) inp.focus();
  }, 0);
}

function passCancelEdit() {
  _passEdit = null;
  renderPassagem();
}

// ===================== RENDER =====================
function renderPassagem() {
  const wrap = document.getElementById('pass-content');
  const stats = document.getElementById('pass-stats');
  if (!wrap) return;

  const lobinhos = passGetLobinhos();

  if (stats) {
    const counts = {};
    PASS_NIVEIS.forEach(n => { counts[n.key] = 0; });
    lobinhos.forEach(nome => {
      const d = passGetData(nome);
      PASS_NIVEIS.forEach(n => { if (d[n.key]) counts[n.key]++; });
    });
    stats.innerHTML = `
      <div class="stat-mini"><div class="val">${lobinhos.length}</div><div class="lbl">Lobinhos</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--accent)">${counts.integracao}</div><div class="lbl">Integração</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--accent)">${counts.promessa}</div><div class="lbl">Promessa</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--green)">${counts.pata_tenra}</div><div class="lbl">Pata Tenra</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--accent2)">${counts.saltador}</div><div class="lbl">Saltador</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--accent2)">${counts.rastreador}</div><div class="lbl">Rastreador</div></div>
      <div class="stat-mini"><div class="val" style="color:var(--accent2)">${counts.cacador}</div><div class="lbl">Caçador</div></div>
    `;
  }

  if (!lobinhos.length) {
    wrap.innerHTML = `<div class="card" style="padding:40px;text-align:center;color:var(--text3)">
      Nenhum lobinho cadastrado.
    </div>`;
    return;
  }

  const colHeaders = PASS_NIVEIS.map(n =>
    `<th style="text-align:center;padding:8px 10px;font-size:11px;font-weight:600;color:var(--text2);white-space:nowrap">${n.label}</th>`
  ).join('');

  const rows = lobinhos.map(nome => {
    const d = passGetData(nome);
    const allDone = PASS_NIVEIS.every(n => !!d[n.key]);

    const cells = PASS_NIVEIS.map(n => {
      const isEditing = _passEdit && _passEdit.nome === nome && _passEdit.key === n.key;
      const val = d[n.key] || '';

      if (isEditing) {
        return `<td style="padding:6px 8px;text-align:center">
          <div style="display:flex;align-items:center;gap:4px;justify-content:center;flex-wrap:wrap">
            <input id="pass-edit-input" type="date" value="${passToInput(val)}"
              style="font-size:12px;padding:3px 6px;border:1px solid var(--border2);border-radius:6px;background:var(--bg);color:var(--text1);width:130px">
            <button onclick="passSaveFromInput('${nome.replace(/'/g,"\\'").replace(/"/g,'&quot;')}','${n.key}')"
              style="font-size:11px;padding:3px 8px;border-radius:5px;border:none;background:var(--accent);color:#fff;cursor:pointer;font-weight:600">✓</button>
            ${val ? `<button onclick="passClearDate('${nome.replace(/'/g,"\\'").replace(/"/g,'&quot;')}','${n.key}')"
              style="font-size:11px;padding:3px 8px;border-radius:5px;border:1px solid var(--border2);background:var(--bg);color:var(--red);cursor:pointer">✕</button>` : ''}
            <button onclick="passCancelEdit()"
              style="font-size:11px;padding:3px 8px;border-radius:5px;border:1px solid var(--border2);background:var(--bg);color:var(--text2);cursor:pointer">Cancelar</button>
          </div>
        </td>`;
      }

      if (val) {
        return `<td style="padding:8px 10px;text-align:center">
          <button onclick="passStartEdit('${nome.replace(/'/g,"\\'").replace(/"/g,'&quot;')}','${n.key}')"
            style="font-size:12px;color:var(--text1);background:none;border:none;cursor:pointer;padding:2px 6px;border-radius:4px"
            title="Clique para editar">${val}</button>
        </td>`;
      }

      return `<td style="padding:8px 10px;text-align:center">
        <button onclick="passStartEdit('${nome.replace(/'/g,"\\'").replace(/"/g,'&quot;')}','${n.key}')"
          style="font-size:18px;color:var(--border2);background:none;border:none;cursor:pointer;padding:2px 8px;border-radius:4px;line-height:1"
          title="Registrar data">+</button>
      </td>`;
    }).join('');

    const rowBg = allDone ? 'background:rgba(39,174,96,0.08)' : '';

    return `<tr style="border-bottom:1px solid var(--border);${rowBg}">
      <td style="padding:10px 14px;font-weight:600;color:var(--text1);white-space:nowrap;font-size:13px">${nome}</td>
      ${cells}
    </tr>`;
  }).join('');

  wrap.innerHTML = `<div class="card" style="overflow-x:auto;padding:0">
    <table style="width:100%;border-collapse:collapse;min-width:680px">
      <thead>
        <tr style="border-bottom:2px solid var(--border)">
          <th style="text-align:left;padding:10px 14px;font-size:11px;font-weight:600;color:var(--text2);white-space:nowrap">Lobinho</th>
          ${colHeaders}
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
  <div style="margin-top:10px;font-size:11px;color:var(--text3)">
    Clique em <b>+</b> para registrar uma data · Clique numa data existente para editar · Linha verde = todos os níveis completos
  </div>`;

  const progWrap = document.getElementById('pass-prog-content');
  const progStats = document.getElementById('pass-prog-stats');
  if (progWrap && typeof window.renderProgDashboardGeral === 'function') {
    window.renderProgDashboardGeral(progWrap, progStats);
  }
}

function passSaveFromInput(nome, key) {
  const inp = document.getElementById('pass-edit-input');
  if (inp) passSaveDate(nome, key, inp.value);
}

window.renderPassagem = renderPassagem;
window.passStartEdit = passStartEdit;
window.passCancelEdit = passCancelEdit;
window.passSaveFromInput = passSaveFromInput;
window.passClearDate = passClearDate;
