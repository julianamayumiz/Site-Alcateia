// ===================== IMPORT/EXPORT MODULE =====================
// Gerencia importação e exportação de dados em Excel

// ===================== IMPORT FILE =====================
function importFile(event) {
  const file = event.target.files[0];
  if(!file) return;

  const activePage = document.querySelector('.page.active');
  const currentPage = activePage ? activePage.id.replace('p-','') : '';

  const pageToSheet = {
    calendario: 'Calendario',
    presenca: 'Presenca',
    especialidades: 'Especialidades',
    matilhas: 'Matilhas',
    caixa: 'Caixa'
  };

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, {type: 'array'});
      const sheetNames = workbook.SheetNames;
      const expectedSheet = pageToSheet[currentPage];

      if(!expectedSheet) {
        showToast('Esta página não suporta importação');
        return;
      }

      if(!sheetNames.includes(expectedSheet)) {
        showToast(`Arquivo não contém aba "${expectedSheet}"`);
        return;
      }

      if(currentPage === 'calendario') importCal(workbook);
      else if(currentPage === 'presenca') importPresenca(workbook);
      else if(currentPage === 'especialidades') importEsp(workbook);
      else if(currentPage === 'matilhas') importMat(workbook);
      else if(currentPage === 'caixa') importCaixaSheet(workbook);

      render(currentPage);

    } catch(err) {
      console.error('Import error:', err);
      showToast('Erro ao importar arquivo');
    }
  };
  reader.readAsArrayBuffer(file);

  event.target.value = '';
}

// ===================== IMPORT CALENDARIO =====================
function importCal(wb) {
  const sheet = wb.Sheets['Calendario'];
  if(!sheet) return;
  
  const rows = XLSX.utils.sheet_to_json(sheet);
  
  rows.forEach(row => {
    // Convert Excel date if needed
    let data = row.Data || row.data || '';
    if(typeof data === 'number') {
      const d = excelSerialToDate(data);
      data = formatDateBR(d);
    }
    
    const ev = {
      mes: (row.Mes || row.mes || '').toLowerCase(),
      data: data,
      dia: (row.Dia || row.dia || '').toLowerCase(),
      atividade: row.Atividade || row.atividade || '',
      categoria: row.Categoria || row.categoria || '',
      chefe: row.Chefe || row.chefe || '',
      datas: row.Datas || row.datas || '',
      obs: row.Obs || row.obs || ''
    };
    
    // Check if event already exists (by date and activity)
    const exists = state.calendario.some(e => 
      e.data === ev.data && e.atividade === ev.atividade
    );
    
    if(!exists && ev.atividade) {
      state.calendario.push(ev);
    }
  });
  
  // Sort by month
  state.calendario.sort((a,b) => {
    const ma = MES_NUM[a.mes] || 99;
    const mb = MES_NUM[b.mes] || 99;
    return ma - mb;
  });
  
  fbSaveSection('calendario');
  showToast('Calendário importado');
}

// ===================== IMPORT PRESENCA =====================
function importPresenca(wb) {
  const sheet = wb.Sheets['Presenca'];
  if(!sheet) return;
  
  const rows = XLSX.utils.sheet_to_json(sheet, {header: 1});
  if(rows.length < 2) return;
  
  // First row is dates
  const datas = rows[0].slice(1).map(d => {
    if(typeof d === 'number') {
      return formatDateBR(excelSerialToDate(d));
    }
    return d;
  }).filter(d => d);
  
  // Remaining rows are members
  const membros = [];
  for(let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if(!row[0]) continue; // Skip empty rows
    
    const nome = row[0];
    const reg = row.slice(1, datas.length + 1).map(v => v || '');
    
    membros.push({nome, reg});
  }
  
  state.presenca = {datas, membros};
  fbSaveSection('presenca');
  showToast('Presença importada');
}

// ===================== IMPORT ESPECIALIDADES =====================
function importEsp(wb) {
  const sheet = wb.Sheets['Especialidades'];
  if(!sheet) return;
  
  const rows = XLSX.utils.sheet_to_json(sheet);
  
  rows.forEach(row => {
    const esp = {
      nome: row.Nome || row.nome || '',
      esp: row.Especialidade || row.especialidade || row.esp || '',
      nivel: parseInt(row.Nivel || row.nivel || 1),
      data: row.Data || row.data || '',
      comprado: row.Comprado || row.comprado || '',
      entregue: row.Entregue || row.entregue || '',
      avaliador: row.Avaliador || row.avaliador || ''
    };
    
    // Check if already exists
    const exists = state.especialidades.some(e => 
      e.nome === esp.nome && e.esp === esp.esp && e.nivel === esp.nivel
    );
    
    if(!exists && esp.nome && esp.esp) {
      state.especialidades.push(esp);
    }
  });
  
  fbSaveSection('especialidades');
  showToast('Especialidades importadas');
}

// ===================== IMPORT MATILHAS =====================
function importMat(wb) {
  const sheet = wb.Sheets['Matilhas'];
  if(!sheet) return;
  
  const rows = XLSX.utils.sheet_to_json(sheet);
  
  // Reset matilhas
  state.matilhas = {
    Amarela: [],
    Branca: [],
    Cinza: [],
    Preta: []
  };
  
  rows.forEach(row => {
    const matilha = row.Matilha || row.matilha || '';
    const nome = row.Nome || row.nome || '';
    
    if(matilha && nome && state.matilhas[matilha]) {
      state.matilhas[matilha].push(nome);
    }
  });
  
  fbSaveSection('matilhas');
  showToast('Matilhas importadas');
}

// ===================== IMPORT CAIXA =====================
function importCaixaSheet(wb) {
  const sheet = wb.Sheets['Caixa'];
  if(!sheet) return;

  const rows = XLSX.utils.sheet_to_json(sheet);

  rows.forEach(row => {
    const lanc = {
      data: row.Data || row.data || '',
      tipo: row.Tipo || row.tipo || '',
      descricao: row.Descricao || row.descricao || '',
      categoria: row.Categoria || row.categoria || '',
      valor: parseFloat(row.Valor || row.valor || 0)
    };

    const exists = state.caixa.some(l =>
      l.data === lanc.data && l.descricao === lanc.descricao && l.valor === lanc.valor
    );

    if(!exists && lanc.descricao) {
      state.caixa.push(lanc);
    }
  });

  fbSaveSection('caixa');
  showToast('Caixa importada');
}

// ===================== EXPORT EXCEL =====================
function exportarExcel() {
  const activePage = document.querySelector('.page.active');
  const currentPage = activePage ? activePage.id.replace('p-','') : '';

  const wb = XLSX.utils.book_new();

  if(currentPage === 'calendario') {
    exportCalendario(wb);
    downloadXlsx(wb, `calendario_${todayStr()}.xlsx`, 'Calendário exportado');
  } else if(currentPage === 'presenca') {
    exportPresenca(wb);
    downloadXlsx(wb, `presenca_${todayStr()}.xlsx`, 'Presença exportada');
  } else if(currentPage === 'especialidades') {
    exportEspecialidades(wb);
    downloadXlsx(wb, `especialidades_${todayStr()}.xlsx`, 'Especialidades exportadas');
  } else if(currentPage === 'matilhas') {
    exportMatilhas(wb);
    downloadXlsx(wb, `matilhas_${todayStr()}.xlsx`, 'Matilhas exportadas');
  } else if(currentPage === 'caixa') {
    exportarCaixa(wb);
    downloadXlsx(wb, `caixa_${todayStr()}.xlsx`, 'Caixa exportada');
  } else {
    showToast('Esta página não suporta exportação');
  }
}

// ===================== EXPORT CALENDARIO =====================
function exportCalendario(wb) {
  const data = state.calendario.map(ev => ({
    Mes: ev.mes,
    Data: ev.data,
    Dia: ev.dia,
    Atividade: ev.atividade,
    Categoria: ev.categoria,
    Chefe: ev.chefe,
    Datas: ev.datas,
    Obs: ev.obs
  }));
  
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Calendario');
}

// ===================== EXPORT PRESENCA =====================
function exportPresenca(wb) {
  const data = [];
  
  // Header row with dates
  const header = ['Nome', ...state.presenca.datas];
  data.push(header);
  
  // Member rows
  state.presenca.membros.forEach(m => {
    const row = [m.nome, ...(m.reg || [])];
    data.push(row);
  });
  
  const ws = XLSX.utils.aoa_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Presenca');
}

// ===================== EXPORT ESPECIALIDADES =====================
function exportEspecialidades(wb) {
  const data = state.especialidades.map(e => ({
    Nome: e.nome,
    Especialidade: e.esp,
    Nivel: e.nivel,
    Data: e.data,
    Comprado: e.comprado,
    Entregue: e.entregue,
    Avaliador: e.avaliador
  }));
  
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Especialidades');
}

// ===================== EXPORT MATILHAS =====================
function exportMatilhas(wb) {
  const data = [];
  
  Object.keys(state.matilhas).forEach(mat => {
    state.matilhas[mat].forEach(nome => {
      data.push({
        Matilha: mat,
        Nome: nome
      });
    });
  });
  
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Matilhas');
}

// ===================== EXPORT CAIXA =====================
function exportarCaixa(wb) {
  const data = state.caixa.map(lanc => ({
    Data: lanc.data,
    Tipo: lanc.tipo,
    Descricao: lanc.descricao,
    Categoria: lanc.categoria,
    Valor: lanc.valor
  }));
  
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Caixa');
}

// ===================== HELPER: DOWNLOAD XLSX =====================
function downloadXlsx(wb, filename, toastMsg) {
  const wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
  const blob = new Blob([s2ab(wbout)], {type: 'application/octet-stream'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  if(toastMsg) showToast(toastMsg);
}

// ===================== EXPORT INDIVIDUAL SECTIONS =====================
function exportarCalendario() {
  const wb = XLSX.utils.book_new();
  exportCalendario(wb);
  downloadXlsx(wb, `calendario_${todayStr()}.xlsx`, 'Calendário exportado');
}

function exportarPresenca() {
  const wb = XLSX.utils.book_new();
  exportPresenca(wb);
  downloadXlsx(wb, `presenca_${todayStr()}.xlsx`, 'Presença exportada');
}

function exportarEspecialidades() {
  const wb = XLSX.utils.book_new();
  exportEspecialidades(wb);
  downloadXlsx(wb, `especialidades_${todayStr()}.xlsx`, 'Especialidades exportadas');
}

function exportarMatilhas() {
  const wb = XLSX.utils.book_new();
  exportMatilhas(wb);
  downloadXlsx(wb, `matilhas_${todayStr()}.xlsx`, 'Matilhas exportadas');
}

// Exporta funções para uso global
window.importFile = importFile;
window.importCaixaSheet = importCaixaSheet;
window.importCal = importCal;
window.importPresenca = importPresenca;
window.importEsp = importEsp;
window.importMat = importMat;
window.exportarExcel = exportarExcel;
window.exportCalendario = exportCalendario;
window.exportPresenca = exportPresenca;
window.exportEspecialidades = exportEspecialidades;
window.exportMatilhas = exportMatilhas;
window.exportarCaixa = exportarCaixa;
window.exportarCalendario = exportarCalendario;
window.exportarPresenca = exportarPresenca;
window.exportarEspecialidades = exportarEspecialidades;
window.exportarMatilhas = exportarMatilhas;

// Made with Bob