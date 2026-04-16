// ===================== STATE =====================
var state = {
  calendario: [
    {mes:"janeiro",data:"24/01",dia:"sáb.",atividade:"Indaba de Chefes",categoria:"",chefe:"",datas:"",obs:""},
    {mes:"janeiro",data:"31/01",dia:"sáb.",atividade:"Início das Atividades/Normal Sede",categoria:"",chefe:"",datas:"",obs:""},
    {mes:"fevereiro",data:"07/02",dia:"sáb.",atividade:"Normal Sede - Recepcao Novos",categoria:"",chefe:"",datas:"",obs:"EVENTO ASSOCIACAO: Yokai Festival"},
    {mes:"fevereiro",data:"14/02",dia:"sáb.",atividade:"Emenda - Feriado Carnaval",categoria:"",chefe:"",datas:"",obs:""},
    {mes:"fevereiro",data:"16/02",dia:"seg.",atividade:"Feriado Carnaval",categoria:"",chefe:"",datas:"",obs:""},
    {mes:"fevereiro",data:"17/02",dia:"ter.",atividade:"Feriado Carnaval",categoria:"",chefe:"",datas:"",obs:""},
    {mes:"fevereiro",data:"18/02",dia:"qua.",atividade:"Feriado Carnaval",categoria:"",chefe:"",datas:"",obs:""},
    {mes:"fevereiro",data:"21/02",dia:"sáb.",atividade:"Normal Sede (Passagem Lobinhos)",categoria:"",chefe:"Marly e Julia",datas:"",obs:"BAILE ASSOCIACAO"},
    {mes:"fevereiro",data:"28/02",dia:"sáb.",atividade:"Normal Sede/Habilidades Escoteiras/Transiçao Lobinho",categoria:"",chefe:"Sampei e Mariana",datas:"",obs:"CT Vivência Lobinho (28 a 1/03)"},
    {mes:"março",data:"07/03",dia:"sáb.",atividade:"Normal Sede",categoria:"",chefe:"Carol e Juliana",datas:"8 - Dia Internacional da Mulher",obs:""},
    {mes:"março",data:"14/03",dia:"sáb.",atividade:"Externa (Cinema)",categoria:"",chefe:"Angelita e Jefferson",datas:"Início MUTEPT",obs:""},
    {mes:"março",data:"15/03",dia:"dom.",atividade:"Festa do Sorvete",categoria:"Local",chefe:"",datas:"",obs:""},
    {mes:"março",data:"21/03",dia:"sáb.",atividade:"Normal Sede",categoria:"",chefe:"Marly e Julia",datas:"21 - Dia Internacional das Florestas / 22 - Dia Mundial da Água / 23 - Hora do Planeta",obs:"BAILE ASSOCIACAO"},
    {mes:"março",data:"28/03",dia:"sáb.",atividade:"Normal Sede/Habilidades Escoteiras/Transiçao Lobinho",categoria:"",chefe:"Sampei e Mariana",datas:"27 - Dia do circo",obs:""},
    {mes:"abril",data:"03/04",dia:"sex.",atividade:"Feriado Páscoa",categoria:"",chefe:"",datas:"",obs:""},
    {mes:"abril",data:"04/04",dia:"sáb.",atividade:"Emenda - Feriado Páscoa",categoria:"",chefe:"",datas:"",obs:""},
    {mes:"abril",data:"11/04",dia:"sáb.",atividade:"Externa - Caçada Distrital",categoria:"Distrital",chefe:"Todos",datas:"13 - Dia do Hino Nacional",obs:""},
    {mes:"abril",data:"18/04",dia:"sáb.",atividade:"Normal Sede (Reunião Acampamento)",categoria:"",chefe:"Carol e Juliana",datas:"18 - Dia Nacional do Livro Infantil / 19 - Dia do índio",obs:""},
    {mes:"abril",data:"21/04",dia:"ter.",atividade:"Feriado Tiradentes",categoria:"",chefe:"",datas:"22 - Dia da Terra",obs:""},
    {mes:"abril",data:"25/04",dia:"sáb.",atividade:"Normal sede/Transiçao Lobinho",categoria:"",chefe:"Angelita e Jefferson",datas:"",obs:"BAILE ASSOCIACAO"},
    {mes:"maio",data:"01/05",dia:"sex.",atividade:"Acampamento de Grupo",categoria:"Local",chefe:"Todos",datas:"",obs:""},
    {mes:"maio",data:"02/05",dia:"sáb.",atividade:"Acampamento de Grupo",categoria:"",chefe:"Todos",datas:"Início EducAÇÃO Escoteira",obs:""},
    {mes:"maio",data:"03/05",dia:"dom.",atividade:"Acampamento de Grupo",categoria:"",chefe:"Todos",datas:"",obs:""},
    {mes:"maio",data:"09/05",dia:"sáb.",atividade:"Normal Sede (Dia do Amigo)",categoria:"",chefe:"Marly e Julia",datas:"",obs:""},
    {mes:"maio",data:"16/05",dia:"sáb.",atividade:"Externa (a confirmar)",categoria:"",chefe:"Sampei e Mariana",datas:"15 - Dia Internacional da Família",obs:"BAILE ASSOCIACAO"},
    {mes:"maio",data:"23/05",dia:"sáb.",atividade:"Noite Escoteira Italiana",categoria:"Local",chefe:"Todos",datas:"22 - Dia do Abraço",obs:""},
    {mes:"maio",data:"30/05",dia:"sáb.",atividade:"Normal Sede/Habilidades Escoteiras",categoria:"",chefe:"Carol e Juliana",datas:"Fim EducAÇÃO Escoteira / Fim MutEPT",obs:""},
    {mes:"junho",data:"04/06",dia:"qui.",atividade:"Jangalcamp",categoria:"Regional",chefe:"",datas:"",obs:"Feriado Corpus Christi"},
    {mes:"junho",data:"05/06",dia:"sex.",atividade:"Jangalcamp",categoria:"",chefe:"",datas:"5 - Dia Mundial do Meio Ambiente",obs:""},
    {mes:"junho",data:"06/06",dia:"sáb.",atividade:"Jangalcamp",categoria:"",chefe:"",datas:"Início MutECO",obs:""},
    {mes:"junho",data:"07/06",dia:"dom.",atividade:"Jangalcamp",categoria:"",chefe:"",datas:"",obs:""},
    {mes:"junho",data:"13/06",dia:"sáb.",atividade:"Normal sede/Transiçao Lobinho",categoria:"",chefe:"Angelita e Jefferson",datas:"",obs:""},
    {mes:"junho",data:"20/06",dia:"sáb.",atividade:"Externa (a confirmar)",categoria:"",chefe:"Carol e Juliana",datas:"20 -Dia Internacional da Amizade",obs:"BAILE ASSOCIACAO Intermediário Lobinho (Distrito) - 27 e 28"},
    {mes:"junho",data:"27/06",dia:"sáb.",atividade:"Normal Sede/Habilidades Escoteiras",categoria:"",chefe:"Marly e Julia",datas:"26 - Dia dos Avós / Fim MutECO",obs:"Evento: WKS Cult Ainu de Hokkaido"},
    {mes:"julho",data:"04/07",dia:"sáb.",atividade:"Fogo de Conselho",categoria:"Local",chefe:"",datas:"",obs:""},
    {mes:"julho",data:"10/07",dia:"sex.",atividade:"Festival do Japão",categoria:"Local",chefe:"",datas:"",obs:""},
    {mes:"julho",data:"11/07",dia:"sáb.",atividade:"Festival do Japão",categoria:"Local",chefe:"",datas:"",obs:""},
    {mes:"julho",data:"12/07",dia:"dom.",atividade:"Festival do Japão",categoria:"Local",chefe:"",datas:"",obs:""},
    {mes:"agosto",data:"01/08",dia:"sáb.",atividade:"Normal Sede",categoria:"",chefe:"Marly e Julia",datas:"",obs:""},
    {mes:"agosto",data:"08/08",dia:"sáb.",atividade:"Normal Sede - recepcao novos",categoria:"",chefe:"Sampei e Mariana",datas:"12 - Dia Nacional das Artes",obs:""},
    {mes:"agosto",data:"15/08",dia:"sáb.",atividade:"Normal Sede",categoria:"",chefe:"Carol e Juliana",datas:"",obs:"Intermediário Lobinho (CEJ) - 15 e 16"},
    {mes:"agosto",data:"22/08",dia:"sáb.",atividade:"Externa (a confirmar)",categoria:"",chefe:"Angelita e Jefferson",datas:"22 - Dia do Folclore",obs:"BAILE ASSOCIACAO"},
    {mes:"agosto",data:"29/08",dia:"sáb.",atividade:"Normal Sede/Habilidades Escoteiras",categoria:"",chefe:"Marly e Julia",datas:"",obs:""},
    {mes:"setembro",data:"05/09",dia:"sáb.",atividade:"Acanto",categoria:"",chefe:"Todos",datas:"Início MutCOM",obs:""},
    {mes:"setembro",data:"06/09",dia:"dom.",atividade:"Acanto",categoria:"",chefe:"Todos",datas:"",obs:""},
    {mes:"setembro",data:"07/09",dia:"seg.",atividade:"Acanto",categoria:"",chefe:"Todos",datas:"",obs:""},
    {mes:"setembro",data:"12/09",dia:"sáb.",atividade:"Normal Sede",categoria:"",chefe:"Sampei e Mariana",datas:"",obs:"BAILE ASSOCIACAO Intermediário Lobinho (Distrito) - 12 e 13"},
    {mes:"setembro",data:"19/09",dia:"sáb.",atividade:"Normal Sede",categoria:"",chefe:"Carol e Juliana",datas:"21 - Dia da Árvore",obs:""},
    {mes:"setembro",data:"26/09",dia:"sáb.",atividade:"Normal Sede/Habilidades Escoteiras",categoria:"",chefe:"Angelita e Jefferson",datas:"Fim MutCOM",obs:"Avançado Lobinho 1 (CEJ) 26 e 27"},
    {mes:"outubro",data:"03/10",dia:"sáb.",atividade:"Externa - Rally de Lobinhos",categoria:"Distrital",chefe:"Todos",datas:"1 - Dia Internacional da Música / 4 -Dia dos Animais",obs:""},
    {mes:"outubro",data:"10/10",dia:"sáb.",atividade:"Emenda Feriado",categoria:"",chefe:"",datas:"",obs:""},
    {mes:"outubro",data:"12/10",dia:"seg.",atividade:"Feriado Nossa Senhora Aparecida",categoria:"",chefe:"",datas:"Dia das Crianças",obs:""},
    {mes:"outubro",data:"17/10",dia:"sáb.",atividade:"Preparaçao Scout Matsuri (JOTA-JOTI)",categoria:"Local",chefe:"Todos",datas:"",obs:""},
    {mes:"outubro",data:"18/10",dia:"dom.",atividade:"Scout Matsuri",categoria:"Local",chefe:"Todos",datas:"",obs:""},
    {mes:"outubro",data:"24/10",dia:"sáb.",atividade:"Normal Sede (Dia do Amigo)",categoria:"",chefe:"Marly e Julia",datas:"",obs:"BAILE ASSOCIACAO"},
    {mes:"outubro",data:"31/10",dia:"sáb.",atividade:"Emenda Feriado",categoria:"",chefe:"",datas:"Halloween",obs:""},
    {mes:"novembro",data:"02/11",dia:"seg.",atividade:"Feriado Finados",categoria:"",chefe:"",datas:"",obs:""},
    {mes:"novembro",data:"07/11",dia:"sáb.",atividade:"Normal Sede",categoria:"",chefe:"Sampei e Mariana",datas:"",obs:""},
    {mes:"novembro",data:"14/11",dia:"sáb.",atividade:"Externa (a confirmar)",categoria:"",chefe:"",datas:"15 - Proclamação da República",obs:"BAILE ASSOCIACAO"},
    {mes:"novembro",data:"20/11",dia:"sex.",atividade:"Feriado Consciência Negra",categoria:"",chefe:"",datas:"Consciência Negra",obs:""},
    {mes:"novembro",data:"21/11",dia:"sáb.",atividade:"Emenda Feriado",categoria:"",chefe:"",datas:"",obs:""},
    {mes:"novembro",data:"28/11",dia:"sáb.",atividade:"Normal Sede - Roca de Conselho",categoria:"",chefe:"Angelita e Jefferson",datas:"",obs:""},
    {mes:"dezembro",data:"06/12",dia:"dom.",atividade:"Bonenkai",categoria:"Local",chefe:"",datas:"",obs:""}
  ],
  // SECURITY WARNING: This data contains personal information of minors (full names).
  // Ensure Firebase Security Rules are properly configured to restrict access.
  // Compliance with LGPD/GDPR required for handling children's personal data.
  // Consider implementing data minimization and encryption for sensitive information.
  presenca: {
    datas: ["31/01","07/02","14/02","21/02","28/02","07/03","14/03","21/03","28/03","04/04","11/04","18/04","25/04","02/05","09/05","16/05","23/05","30/05","06/06","13/06","20/06","27/06","01/08","08/08","15/08","22/08","29/08","05/09","12/09","19/09","26/09","03/10","10/10","17/10","24/10","31/10","07/11","14/11","21/11","28/11"],
    membros: [
      {nome:"ALEX HWANG",reg:["P","A","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"ANA BEATRIZ",reg:["P","P","P","P","P","A","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"CAIO UKON",reg:["P","P","A","A","P","A","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"CAIO ISHIY",reg:["","P","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"CAROLINA HARUMI",reg:["","P","A","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"CAROLINA NAOMI",reg:["P","P","P","A","P","P","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"DANIEL SOUSA",reg:["P","P","P","P","P","P","P","FJ","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"ENZO NAGADO",reg:["A","A","P","P","FJ","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"ERIC RYU",reg:["P","P","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"HENRY RYU",reg:["P","P","P","P","A","P","A","P","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"JULIA TACHIBANA",reg:["","P","A","A","P","P","P","P","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LETICIA LUMI",reg:["P","P","P","P","A","P","P","P","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LIA TAGINI",reg:["P","P","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LÍVIA AKAMINE",reg:["P","P","A","A","P","P","P","A","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUCAS SOUSA",reg:["P","P","P","P","P","P","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUCAS MASAKI",reg:["P","P","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUCAS NORIO",reg:["P","P","P","P","P","P","P","P","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUCAS SUBARU",reg:["P","P","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUCCA JUN",reg:["A","P","P","P","P","FJ","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUIZA KIMI",reg:["P","P","P","P","P","P","P","P","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUIZA NAOMI",reg:["P","FJ","A","A","P","A","P","FJ","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"MIA TANIGUCHI",reg:["P","A","P","P","A","P","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"MIGUEL KNISS",reg:["FJ","P","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"OLIVIA NAOMI",reg:["P","P","P","P","P","A","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"PEDRO UKON",reg:["P","P","A","A","P","P","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"RAFAEL KENZO",reg:["","P","A","A","A","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"SABRINA SAYURI",reg:["","P","P","P","A","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"THOMAS MIYAGI",reg:["P","P","P","P","P","A","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"TIAGO JUN",reg:["P","P","P","P","FJ","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]}
    ]
  },
  especialidades: [
    {nome:'Alex',esp:'Natação',nivel:1,data:'',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Ana Beatriz Harasaki',esp:'Grafite',nivel:2,data:'',comprado:'OK',entregue:'Ok',avaliador:''},
    {nome:'Analu',esp:'Plantas Medicinais',nivel:3,data:'',comprado:'OK',entregue:'Sim',avaliador:''},
    {nome:'Mariana Harasaki',esp:'Maquete',nivel:2,data:'',comprado:'OK',entregue:'Sim',avaliador:''},
    {nome:'Caio',esp:'Maquete',nivel:1,data:'29/03',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Lucas Masaki',esp:'Video Game',nivel:2,data:'29/03',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Lucca',esp:'Volei',nivel:1,data:'26/04/2025',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Lucca Jun',esp:'Ciclismo',nivel:1,data:'',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Luisa Hina',esp:'Prevencao de Saude',nivel:1,data:'',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Mari Harasaki',esp:'Danca',nivel:2,data:'26/04/2025',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Mariana Harasaki',esp:'Grafite',nivel:2,data:'',comprado:'OK',entregue:'ok',avaliador:''},
    {nome:'Mariana Harasaki',esp:'Ciclismo',nivel:1,data:'29/03',comprado:'OK',entregue:'ok',avaliador:''},
    {nome:'Masaki',esp:'Animais Peconhentos',nivel:2,data:'26/04/2025',comprado:'OK',entregue:'',avaliador:''},
    {nome:'Mia',esp:'Natação',nivel:1,data:'',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Thomas',esp:'Origami',nivel:1,data:'29/03',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Yui',esp:'Babá',nivel:1,data:'',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Yui',esp:'Genealogia',nivel:1,data:'29/03',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Luisa Hina',esp:'Ciclismo',nivel:1,data:'29/03',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Luisa Hina',esp:'Insígnia do Aprender',nivel:0,data:'',comprado:'OK',entregue:'OK',avaliador:''},
    {nome:'Lucca Jun',esp:'Tênis',nivel:1,data:'05/07',comprado:'NÃO',entregue:'OK',avaliador:''},
    {nome:'Lucca Jun',esp:'Compostagem',nivel:1,data:'05/07',comprado:'NÃO',entregue:'OK',avaliador:''},
    {nome:'Lucas Kenzo',esp:'História do Escotismo',nivel:1,data:'05/07',comprado:'NÃO',entregue:'OK',avaliador:''},
    {nome:'Mariana Harasaki',esp:'Cone Sul',nivel:0,data:'05/07',comprado:'OK',entregue:'OK',avaliador:''}
  ],
  matilhas: {
    Amarela: ['THOMAS','CAIO UKON','LUCCA','MASAKI','DANIEL S.','NORIO','PEDRO','RAFAEL'],
    Branca: ['ALEX','ERIC','MIA','LUCAS S.','HENRY','ENZO','CAIO ISHIY'],
    Cinza: ['LUIZA KIMI','LIA','OLIVIA','YUI','CAROL NAOMI','JULIA','CAROL'],
    Preta: ['SUBARU','TIAGO','LETICIA','LUIZA NAOMI','BIA','MIGUEL','SABRINA']
  },
  cargos: {
    Amarela: {primo:'', segundo:''},
    Branca:  {primo:'', segundo:''},
    Cinza:   {primo:'', segundo:''},
    Preta:   {primo:'', segundo:''}
  },
  comunicados: [],
  confirmacoes: {},
  caixa: [],
  pontuacao: {
    Amarela: {jogos: 0, formacao: 0, comportamento: 0},
    Branca:  {jogos: 0, formacao: 0, comportamento: 0},
    Cinza:   {jogos: 0, formacao: 0, comportamento: 0},
    Preta:   {jogos: 0, formacao: 0, comportamento: 0}
  },
  avisos_internos: [],
  todos_chefia: []
};

var calFilter = 'todos';

// ===================== SIDEBAR MOBILE =====================
function toggleSidebar() {
  var s = document.getElementById('sidebar');
  var o = document.getElementById('sidebar-overlay');
  s.classList.toggle('open');
  o.classList.toggle('open');
}

function closeSidebar() {
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('sidebar-overlay');
  if(sidebar) sidebar.classList.remove('open');
  if(overlay) overlay.classList.remove('open');
}

// ===================== NAVIGATION =====================
var pageNames = {dashboard:'Dashboard',calendario:'Calendário',presenca:'Presença',especialidades:'Especialidades',matilhas:'Matilhas',comunicados:'Comunicados',caixa:'Fluxo de Caixa'};
var pageList = ['dashboard','calendario','presenca','especialidades','matilhas','comunicados','caixa'];

function goTo(page, updateHash = true) {
  console.log('goTo chamado:', page, 'updateHash:', updateHash);
  if(!pageList.includes(page)) page = 'dashboard';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
    n.removeAttribute('aria-current');
  });
  document.getElementById('p-'+page).classList.add('active');
  var activeNavItem = document.querySelectorAll('.nav-item')[pageList.indexOf(page)];
  if(activeNavItem) {
    activeNavItem.classList.add('active');
    activeNavItem.setAttribute('aria-current', 'page');
  }
  document.getElementById('topbar-title').textContent = pageNames[page];
  var addBtn = document.getElementById('btn-add');
  addBtn.style.display = (page === 'presenca' || page === 'dashboard' || page === 'caixa') ? 'none' : 'inline-flex';
  closeMaisMenu();
  closeSidebar();
  render(page);
  // Update URL hash AFTER rendering
  if (updateHash) {
    var newUrl = page === 'dashboard' ? window.location.pathname : window.location.pathname + '#' + page;
    console.log('Atualizando URL de', window.location.href, 'para', newUrl);
    if (window.location.href !== window.location.origin + newUrl) {
      window.history.pushState({page: page}, '', newUrl);
      console.log('URL atualizada para:', window.location.href);
    } else {
      console.log('URL já está correta, não atualizando');
    }
  }
}

// Handle browser back/forward and direct hash links
window.addEventListener('hashchange', function() {
  var hash = window.location.hash.replace('#','') || 'dashboard';
  goTo(hash, false);
});

// Handle popstate (browser back/forward buttons)
window.addEventListener('popstate', function(e) {
  var hash = window.location.hash.replace('#','') || 'dashboard';
  goTo(hash, false);
});

// ===================== MODALS =====================
function openAdd() {
  var active = document.querySelector('.page.active').id;
  if(active==='p-calendario') {
    editingCalIdx = -1;
    document.getElementById('modal-cal-title').textContent = 'Nova atividade';
    // clear fields
    ['add-mes','add-data','add-dia','add-ativ','add-cat','add-chefe','add-datas','add-obs'].forEach(id => {
      var el = document.getElementById(id);
      if(el.tagName==='SELECT') el.selectedIndex=0; else el.value='';
    });
    document.getElementById('modal-cal').classList.add('open');
  }
  else if(active==='p-especialidades') {
    editingEspIdx = -1;
    document.getElementById('modal-esp-title').textContent = 'Nova especialidade';
    ['esp-nome','esp-esp','esp-data','esp-avaliador'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('esp-nivel').value = '1';
    document.getElementById('esp-comp').value = 'OK';
    document.getElementById('esp-entregue').value = 'OK';
    document.getElementById('modal-esp').classList.add('open');
  }
  else if(active==='p-matilhas') document.getElementById('modal-mat').classList.add('open');
  else if(active==='p-comunicados') {
    editingComIdx = -1;
    document.getElementById('modal-com-title').textContent = 'Novo comunicado';
    document.getElementById('com-titulo').value = '';
    document.getElementById('com-cat').value = 'aviso';
    document.getElementById('com-data-evento').value = '';
    document.getElementById('com-texto').value = '';
    document.getElementById('com-fixado').checked = false;
    document.getElementById('modal-com').classList.add('open');
  }
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
}

document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => {
    if(e.target===m) {
      if(m.id === 'modal-fj') cancelFJ();
      else closeModals();
    }
  });
});

// ===================== TOAST =====================
function showToast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===================== CALENDÁRIO =====================

/**
 * Parse event date string into month and day components
 * @param {string} dateStr - Date string in format "DD/MM"
 * @returns {Object|null} Object with day and month, or null if invalid
 */
function parseEventDate(dateStr) {
  const parts = (dateStr || '').split('/');
  if (parts.length < 2) return null;
  return {
    day: parseInt(parts[0], 10),
    month: parseInt(parts[1], 10)
  };
}

/**
 * Filter calendar events based on category and date criteria
 * @param {Array} events - Array of calendar events
 * @param {string} filter - Filter type ('todos', 'feriado', or category name)
 * @param {number} currentMonth - Current month (1-12)
 * @param {number} currentYear - Current year
 * @returns {Array} Filtered events
 */
function filterCalendarEvents(events, filter, currentMonth, currentYear) {
  return events.filter(ev => {
    // Category filter
    if (filter === 'feriado' && !isFeriado(ev)) return false;
    if (filter !== 'todos' && filter !== 'feriado' && ev.categoria !== filter) return false;
    
    // Date filter - hide events from past months
    const parsed = parseEventDate(ev.data);
    if (!parsed) return true; // Keep events without valid dates
    
    const { month: evMonth } = parsed;
    // Assume same year, hide past months
    if (evMonth < currentMonth) return false;
    
    return true;
  });
}

/**
 * Group events by month
 * @param {Array} events - Array of calendar events
 * @returns {Object} Events grouped by month name
 */
function groupEventsByMonth(events) {
  const groups = {};
  events.forEach(ev => {
    if (!groups[ev.mes]) groups[ev.mes] = [];
    groups[ev.mes].push(ev);
  });
  return groups;
}

/**
 * Render a single event row
 * @param {Object} ev - Event object
 * @param {number} index - Index in state.calendario array
 * @returns {string} HTML string for the event row
 */
function renderEventRow(ev, index) {
  const rowCls = getRowClass(ev);
  const chefeBadge = ev.chefe
    ? `<span class="badge badge-gray">${ev.chefe}</span>`
    : '';
  
  return `<tr class="event-row ${rowCls}" data-event-index="${index}">
    <td><b>${ev.data}</b></td>
    <td style="color:var(--text2)">${ev.dia}</td>
    <td>${ev.atividade}</td>
    <td>${chefeBadge}</td>
    <td style="font-size:12px;color:var(--text2)">${ev.datas}</td>
    <td style="font-size:12px;color:var(--text2)">${ev.obs}</td>
    <td style="white-space:nowrap">
      <button class="btn btn-sm btn-edit" data-action="edit" style="padding:3px 8px;font-size:11px;margin-right:4px" title="Editar">✏️</button>
      <button class="btn btn-sm btn-delete" data-action="delete" style="color:var(--red);border-color:transparent;padding:3px 8px;font-size:11px" title="Excluir">✕</button>
    </td>
  </tr>`;
}

function render(page) {
  if(page==='dashboard')       renderDashboard();
  else if(page==='calendario') renderCal();
  else if(page==='presenca')   renderPresenca();
  else if(page==='especialidades') renderEsp();
  else if(page==='matilhas')   renderMatilhas();
  else if(page==='comunicados') renderComunicados();
  else if(page==='caixa')      renderCaixa();
}

var FERIADO_WORDS = ['feriado','emenda'];
var EXTERNA_WORDS = ['externa','caçada','rally','cinema'];
var NORMAL_WORDS  = ['normal sede','normal sede'];

function getRowClass(ev) {
  var a = ev.atividade.toLowerCase();
  var cat = (ev.categoria||'').toLowerCase();
  if(FERIADO_WORDS.some(w => a.includes(w))) return 'row-feriado';
  if(cat==='regional' || cat==='distrital') return 'row-regional';
  if(cat==='local') return 'row-local';
  if(EXTERNA_WORDS.some(w => a.includes(w))) return 'row-externa';
  if(a.includes('normal sede') || a.includes('normal sede')) return 'row-normal';
  return '';
}

function isFeriado(ev) {
  return FERIADO_WORDS.some(w => ev.atividade.toLowerCase().includes(w));
}

function filterCal(f, btn) {
  calFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCal();
}

/**
 * Render the calendar view with filtered and grouped events
 */
function renderCal() {
  const body = document.getElementById('cal-body');
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // 1-12
  const currentYear = today.getFullYear();

  // Filter events based on current filter and date
  const filtered = filterCalendarEvents(
    state.calendario,
    calFilter,
    currentMonth,
    currentYear
  );

  // Group events by month
  const monthGroups = groupEventsByMonth(filtered);

  // Build HTML using array for better performance
  const rows = [];
  Object.entries(monthGroups).forEach(([mes, evs]) => {
    rows.push(`<tr class="month-header"><td colspan="7">${mes.toUpperCase()}</td></tr>`);
    
    evs.forEach(ev => {
      const index = state.calendario.indexOf(ev);
      rows.push(renderEventRow(ev, index));
    });
  });

  // Set innerHTML with joined array or empty message
  body.innerHTML = rows.length > 0
    ? rows.join('')
    : '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--text3)">Nenhuma atividade encontrada.</td></tr>';
}

var editingCalIdx = -1;

function editCal(idx) {
  var ev = state.calendario[idx];
  editingCalIdx = idx;
  document.getElementById('modal-cal-title').textContent = 'Editar atividade';
  document.getElementById('add-mes').value = ev.mes;
  document.getElementById('add-data').value = ev.data;
  document.getElementById('add-dia').value = ev.dia;
  document.getElementById('add-ativ').value = ev.atividade;
  document.getElementById('add-cat').value = ev.categoria || '';
  document.getElementById('add-chefe').value = ev.chefe || '';
  document.getElementById('add-datas').value = ev.datas || '';
  document.getElementById('add-obs').value = ev.obs || '';
  document.getElementById('modal-cal').classList.add('open');
}

function saveCalEvent() {
  var ev = {
    mes: document.getElementById('add-mes').value,
    data: document.getElementById('add-data').value,
    dia: document.getElementById('add-dia').value,
    atividade: document.getElementById('add-ativ').value,
    categoria: document.getElementById('add-cat').value,
    chefe: document.getElementById('add-chefe').value,
    datas: document.getElementById('add-datas').value,
    obs: document.getElementById('add-obs').value
  };
  if(editingCalIdx >= 0) {
    state.calendario[editingCalIdx] = ev;
    showToast('Atividade atualizada!');
  } else {
    state.calendario.push(ev);
    showToast('Atividade adicionada!');
  }
  editingCalIdx = -1;
  closeModals();
  fbSaveSection('calendario');
  renderCal();
}

function delCal(i) {
  state.calendario.splice(i,1);
  fbSaveSection('calendario');
  renderCal();
  showToast('Atividade removida.');
}

// ===================== PRESENÇA =====================
var CYCLE = ['P','A','FJ',''];
var fjPending = null;
var activeDropdown = null;
var presencaSortDir = null; // null = default, 'desc' = maior, 'asc' = menor

if(!state.justificativas) state.justificativas = {};

// Cache DOM elements for presence table to avoid repeated lookups
let presenceDOMCache = null;

/**
 * Get cached DOM elements for presence table
 * @returns {Object} Object containing head, body, and stats elements
 */
function getPresenceDOMElements() {
  if (!presenceDOMCache) {
    presenceDOMCache = {
      head: document.getElementById('pres-head'),
      body: document.getElementById('pres-body'),
      stats: document.getElementById('presence-stats')
    };
  }
  return presenceDOMCache;
}

/**
 * Calculate attendance statistics for a member
 * @param {Object} member - Member object with reg array
 * @returns {Object} Statistics object with filled, present, and percentage
 */
function calculateMemberStats(member) {
  const filled = member.reg.filter(r => r !== '').length;
  const present = member.reg.filter(r => r === 'P').length;
  const percentage = filled > 0 ? Math.round(present / filled * 100) : null;
  return { filled, present, percentage };
}

/**
 * Create a presence cell element with proper styling and data attributes
 * @param {string} registro - Registration status (P, A, FJ, or empty)
 * @param {number} memberIndex - Index of the member
 * @param {number} regIndex - Index of the registration
 * @param {string} justificativa - Justification text for FJ status
 * @returns {HTMLElement} Table cell element
 */
function createPresenceCellElement(registro, memberIndex, regIndex, justificativa) {
  const td = document.createElement('td');
  td.className = 'date-col';
  
  const wrapper = document.createElement('div');
  wrapper.style.position = 'relative';
  wrapper.style.display = 'inline-block';
  
  let label, cellCls;
  if (registro === 'FJ') {
    label = justificativa ? '★' : 'FJ';
    cellCls = 'cell-FJ';
    wrapper.className = 'cell-FJ-wrap';
    wrapper.tabIndex = 0;
    
    if (justificativa) {
      const tooltip = document.createElement('div');
      tooltip.className = 'fj-tooltip';
      tooltip.textContent = justificativa;
      wrapper.appendChild(tooltip);
    }
  } else {
    label = registro || '·';
    cellCls = registro ? 'cell-' + registro : 'cell-empty';
  }
  
  const button = document.createElement('button');
  button.className = 'presence-cell ' + cellCls;
  button.textContent = label;
  button.dataset.memberIndex = memberIndex;
  button.dataset.regIndex = regIndex;
  
  wrapper.appendChild(button);
  td.appendChild(wrapper);
  
  return td;
}
// ===================== PRESENCE RENDERING CONSTANTS =====================

/**
 * Thresholds for presence percentage color coding
 */
const PRESENCE_THRESHOLDS = {
  EXCELLENT: 75,  // >= 75% shows accent color (green)
  GOOD: 50        // >= 50% shows accent2 color (yellow), < 50% shows red
};

/**
 * Determines the appropriate color for a presence percentage
 * @param {number|null} percentage - Presence percentage (0-100) or null
 * @returns {string} CSS color variable
 */
function getPresencePercentageColor(percentage) {
  if (percentage === null) return 'var(--text3)';
  if (percentage >= PRESENCE_THRESHOLDS.EXCELLENT) return 'var(--accent)';
  if (percentage >= PRESENCE_THRESHOLDS.GOOD) return 'var(--accent2)';
  return 'var(--red)';
}

/**
 * Generates the HTML for the presence table header
 * @param {Array<string>} dates - Array of date strings
 * @param {string} sortDirection - Current sort direction (null, 'asc', or 'desc')
 * @returns {string} HTML string for table header
 */
function buildPresenceTableHeader(dates, sortDirection) {
  const sortArrow = sortDirection === 'desc' ? '↓' : sortDirection === 'asc' ? '↑' : '↕';
  
  const headerCells = [
    '<th class="name-col">Nome</th>',
    ...dates.map(dt => `<th class="date-col">${dt}</th>`),
    `<th class="sort-header" style="min-width:60px;text-align:center;cursor:pointer;user-select:none" title="Ordenar por presença">% <span id="pres-sort-arrow">${sortArrow}</span></th>`
  ];
  
  return headerCells.join('');
}

/**
 * Creates a percentage cell element for the presence table
 * @param {Object} stats - Member statistics object with percentage property
 * @returns {HTMLElement} Table cell element
 */
function createPercentageCell(stats) {
  const pct = stats.percentage;
  const color = getPresencePercentageColor(pct);
  
  const pctCell = document.createElement('td');
  pctCell.className = 'percentage-cell';
  pctCell.style.color = color;
  pctCell.textContent = pct !== null ? pct + '%' : '—';
  
  return pctCell;
}

/**
 * Generates the HTML for overall presence statistics
 * @param {Object} statsData - Object containing present, absent, justified counts
 * @param {number} presencePercentage - Overall presence percentage
 * @param {number} membersCount - Total number of members
 * @param {number} datesCount - Total number of dates/meetings
 * @returns {string} HTML string for statistics display
 */
function buildPresenceStatsHTML(statsData, presencePercentage, membersCount, datesCount) {
  return `
    <div class="stat-mini"><div class="val" style="color:var(--accent)">${presencePercentage}%</div><div class="lbl">Presença geral</div></div>
    <div class="stat-mini"><div class="val">${membersCount}</div><div class="lbl">Membros</div></div>
    <div class="stat-mini"><div class="val">${datesCount}</div><div class="lbl">Reuniões</div></div>
    <div class="stat-mini"><div class="val" style="color:var(--red)">${statsData.absent}</div><div class="lbl">Faltas</div></div>
    <div class="stat-mini"><div class="val" style="color:var(--accent2)">${statsData.justified}</div><div class="lbl">F. justificadas</div></div>
  `;
}

/**
 * Creates a table row for a member with attendance data
 * @param {Object} member - Member object with stats and originalIndex
 * @param {number} memberIndex - Index in original members array
 * @returns {HTMLElement} Table row element
 */
function createMemberRow(member, memberIndex) {
  const row = document.createElement('tr');
  
  // Name cell
  const nameCell = document.createElement('td');
  nameCell.className = 'name-col';
  nameCell.textContent = member.nome;
  row.appendChild(nameCell);
  
  // Registration cells
  member.reg.forEach((r, regIndex) => {
    const justificativa = state.justificativas[memberIndex]?.[regIndex] || '';
    const cell = createPresenceCellElement(r, memberIndex, regIndex, justificativa);
    row.appendChild(cell);
  });
  
  // Percentage cell
  const pctCell = createPercentageCell(member.stats);
  row.appendChild(pctCell);
  
  return row;
}

/**
 * Renders the presence table with member attendance data
 * Includes sorting functionality and overall statistics
 */
function renderPresenca() {
  const d = state.presenca;
  const { head, body, stats } = getPresenceDOMElements();

  // Render table header using helper function
  head.innerHTML = buildPresenceTableHeader(d.datas, presencaSortDir);

  // Pre-compute stats and preserve original indices
  const membersWithStats = d.membros.map((m, originalIndex) => ({
    ...m,
    stats: calculateMemberStats(m),
    originalIndex
  }));

  // Sort members if needed (using pre-computed stats)
  let membrosRender = [...membersWithStats];
  if (presencaSortDir) {
    membrosRender.sort((a, b) => {
      const pctA = a.stats.percentage !== null ? a.stats.percentage : -1;
      const pctB = b.stats.percentage !== null ? b.stats.percentage : -1;
      return presencaSortDir === 'desc' ? pctB - pctA : pctA - pctB;
    });
  }

  // Build table body using DocumentFragment for better performance
  const fragment = document.createDocumentFragment();
  
  membrosRender.forEach(m => {
    const row = createMemberRow(m, m.originalIndex);
    fragment.appendChild(row);
  });
  
  // Single DOM update
  body.innerHTML = '';
  body.appendChild(fragment);

  // Calculate overall statistics (optimized with single reduce)
  const allRegs = d.membros.flatMap(m => m.reg).filter(r => r !== '');
  const statsData = allRegs.reduce((acc, r) => {
    if (r === 'P') acc.present++;
    else if (r === 'A') acc.absent++;
    else if (r === 'FJ') acc.justified++;
    return acc;
  }, { present: 0, absent: 0, justified: 0 });
  
  const total = allRegs.length || 1;
  const presencePercentage = Math.round(statsData.present / total * 100);
  
  // Render statistics using helper function
  stats.innerHTML = buildPresenceStatsHTML(
    statsData,
    presencePercentage,
    d.membros.length,
    d.datas.length
  );
}

function togglePresencaSort() {
  presencaSortDir = presencaSortDir === null ? 'desc' : presencaSortDir === 'desc' ? 'asc' : null;
  renderPresenca();
}

// ---- Dropdown ----
// Configuration constants for dropdown positioning and sizing
const DROPDOWN_CONFIG = {
  OPTION_HEIGHT: 38,
  HEADER_HEIGHT: 60,
  MIN_WIDTH: 140,
  MENU_PADDING: 4,
  MENU_EDGE_OFFSET: 144
};

// Attendance options configuration
const ATTENDANCE_OPTIONS = [
  {val: 'P',  label: 'Presente',          color: 'var(--accent)',  bg: 'var(--accent-light)'},
  {val: 'A',  label: 'Ausente',           color: 'var(--red)',     bg: 'var(--red-light)'},
  {val: 'FJ', label: 'Falta Justificada', color: 'var(--accent2)', bg: 'var(--accent2-light)'},
  {val: '',   label: 'Limpar',            color: 'var(--text3)',   bg: 'var(--surface2)'}
];

/**
 * Creates the dropdown header element
 * @param {string} memberName - First name of the member
 * @param {string} date - Date string
 * @returns {HTMLElement} Header element
 */
function createDropdownHeader(memberName, date) {
  const header = document.createElement('div');
  header.style.cssText = 'padding:8px 14px 6px;font-size:11px;color:var(--text3);border-bottom:1px solid var(--border);font-weight:600;letter-spacing:0.04em;text-transform:uppercase';
  header.textContent = `${memberName} · ${date}`;
  return header;
}

/**
 * Creates an option button for the dropdown
 * @param {Object} option - Option configuration object
 * @param {boolean} isCurrentValue - Whether this option is currently selected
 * @param {Function} onClick - Click handler function
 * @returns {HTMLElement} Button element
 */
function createOptionButton(option, isCurrentValue, onClick) {
  const btn = document.createElement('button');
  btn.className = 'cell-dropdown-opt';
  
  const dot = document.createElement('span');
  dot.className = 'opt-dot';
  dot.style.background = option.color;
  
  const label = document.createTextNode(option.label);
  
  btn.appendChild(dot);
  btn.appendChild(label);
  
  if (isCurrentValue) {
    const checkmark = document.createElement('span');
    checkmark.style.cssText = 'margin-left:auto;font-size:10px;opacity:0.6';
    checkmark.textContent = '✓';
    btn.appendChild(checkmark);
  }
  
  btn.onclick = onClick;
  return btn;
}

/**
 * Creates the edit justification button
 * @param {boolean} hasJustification - Whether a justification already exists
 * @param {Function} onClick - Click handler function
 * @returns {HTMLElement} Button element
 */
function createEditJustificationButton(hasJustification, onClick) {
  const editBtn = document.createElement('button');
  editBtn.className = 'cell-dropdown-opt';
  editBtn.style.borderTop = '1px solid var(--border)';
  editBtn.style.color = 'var(--accent)';
  
  const icon = document.createElement('span');
  icon.style.fontSize = '13px';
  icon.textContent = '✏️';
  
  const text = document.createTextNode(
    hasJustification ? ' Editar justificativa' : ' Adicionar justificativa'
  );
  
  editBtn.appendChild(icon);
  editBtn.appendChild(text);
  editBtn.onclick = onClick;
  
  return editBtn;
}

/**
 * Calculates the optimal position for the dropdown menu
 * @param {DOMRect} triggerRect - Bounding rectangle of the trigger element
 * @param {number} menuHeight - Height of the menu
 * @returns {Object} Position object with top and left properties
 */
function calculateDropdownPosition(triggerRect, menuHeight) {
  let top = triggerRect.bottom + DROPDOWN_CONFIG.MENU_PADDING;
  
  // Flip above if would overflow bottom
  if (top + menuHeight > window.innerHeight) {
    top = triggerRect.top - menuHeight - DROPDOWN_CONFIG.MENU_PADDING;
  }
  
  let left = triggerRect.left;
  
  // Adjust if would overflow right edge
  if (left + DROPDOWN_CONFIG.MIN_WIDTH > window.innerWidth) {
    left = window.innerWidth - DROPDOWN_CONFIG.MENU_EDGE_OFFSET;
  }
  
  return { top, left };
}

/**
 * Builds the dropdown menu DOM structure
 * @param {string} memberFirstName - Member's first name
 * @param {string} date - Date string
 * @param {string} currentValue - Current attendance value
 * @param {string} justification - Justification text if exists
 * @param {number} mi - Member index
 * @param {number} ri - Registration/date index
 * @returns {HTMLElement} Menu element
 */
function buildDropdownMenu(memberFirstName, date, currentValue, justification, mi, ri) {
  const menu = document.createElement('div');
  menu.className = 'cell-dropdown-menu open';
  menu.id = 'cell-dd-menu';
  
  menu.appendChild(createDropdownHeader(memberFirstName, date));
  
  ATTENDANCE_OPTIONS.forEach(opt => {
    const isCurrentValue = currentValue === opt.val;
    const button = createOptionButton(opt, isCurrentValue, (ev) => {
      ev.stopPropagation();
      closeDropdown();
      setCell(mi, ri, opt.val);
    });
    menu.appendChild(button);
  });
  
  if (currentValue === 'FJ') {
    const editButton = createEditJustificationButton(!!justification, (ev) => {
      ev.stopPropagation();
      closeDropdown();
      openFJModal(mi, ri);
    });
    menu.appendChild(editButton);
  }
  
  return menu;
}

/**
 * Calculates the total height of the dropdown menu
 * @returns {number} Menu height in pixels
 */
function calculateMenuHeight() {
  return ATTENDANCE_OPTIONS.length * DROPDOWN_CONFIG.OPTION_HEIGHT +
         DROPDOWN_CONFIG.HEADER_HEIGHT;
}

/**
 * Opens a dropdown menu for cell attendance selection
 * @param {Event} e - Click event
 * @param {number} mi - Member index
 * @param {number} ri - Registration/date index
 */
function openCellDropdown(e, mi, ri) {
  e.stopPropagation();
  closeDropdown();

  const member = state.presenca.membros[mi];
  const currentValue = member.reg[ri];
  const memberFirstName = member.nome.split(' ')[0];
  const date = state.presenca.datas[ri];
  const justification = state.justificativas?.[mi]?.[ri] || '';

  const menu = buildDropdownMenu(memberFirstName, date, currentValue, justification, mi, ri);
  
  document.body.appendChild(menu);
  activeDropdown = menu;

  const triggerRect = e.currentTarget.getBoundingClientRect();
  const menuHeight = calculateMenuHeight();
  const position = calculateDropdownPosition(triggerRect, menuHeight);
  
  menu.style.top = `${position.top}px`;
  menu.style.left = `${position.left}px`;
}

function closeDropdown() {
  if(activeDropdown) { activeDropdown.remove(); activeDropdown = null; }
}

document.addEventListener('click', closeDropdown);
document.addEventListener('scroll', closeDropdown, true);
// ===================== PRESENCE EVENT DELEGATION =====================
/**
 * Event delegation for presence table cell clicks
 * Handles clicks on presence cell buttons to open dropdown
 */
document.addEventListener('DOMContentLoaded', () => {
  const presBody = document.getElementById('pres-body');
  if (presBody) {
    presBody.addEventListener('click', (e) => {
      const button = e.target.closest('.presence-cell');
      if (!button) return;
      
      const memberIndex = parseInt(button.dataset.memberIndex);
      const regIndex = parseInt(button.dataset.regIndex);
      
      if (!isNaN(memberIndex) && !isNaN(regIndex)) {
        openCellDropdown(e, memberIndex, regIndex);
      }
    });
  }
});
/**
 * Event delegation for presence table sort header
 * Handles clicks on the percentage column header to toggle sort order
 */
document.addEventListener('DOMContentLoaded', () => {
  const presHead = document.getElementById('pres-head');
  if (presHead) {
    presHead.addEventListener('click', (e) => {
      const sortHeader = e.target.closest('.sort-header');
      if (sortHeader) {
        togglePresencaSort();
      }
    });
  }
});



// ===================== CALENDAR EVENT DELEGATION =====================
/**
 * Event delegation for calendar table actions (edit/delete)
 * Handles clicks on edit and delete buttons within calendar rows
 */
document.addEventListener('DOMContentLoaded', () => {
  const calBody = document.getElementById('cal-body');
  if (calBody) {
    calBody.addEventListener('click', (e) => {
      const button = e.target.closest('button[data-action]');
      if (!button) return;
      
      const row = button.closest('tr[data-event-index]');
      if (!row) return;
      
      const index = parseInt(row.dataset.eventIndex, 10);
      const action = button.dataset.action;
      
      if (action === 'edit') {
        editCal(index);
      } else if (action === 'delete') {
        delCal(index);
      }
    });
  }
});

function setCell(mi, ri, val) {
  var cur = state.presenca.membros[mi].reg[ri];

  if(cur === 'FJ' && val !== 'FJ') {
    if(!state.justificativas[mi]) state.justificativas[mi] = {};
    delete state.justificativas[mi][ri];
    fbSaveSection('justificativas');
  }

  state.presenca.membros[mi].reg[ri] = val;
  fbSaveSection('presenca');

  if(val === 'FJ') {
    renderPresenca();
    openFJModal(mi, ri);
  } else {
    renderPresenca();
  }
}

function openFJModal(mi, ri) {
  fjPending = {mi, ri};
  var nome = state.presenca.membros[mi].nome;
  var data = state.presenca.datas[ri];
  document.getElementById('fj-subtitle').textContent = nome + ' — ' + data;
  var existing = (state.justificativas[mi] && state.justificativas[mi][ri]) || '';
  document.getElementById('fj-texto').value = existing;
  document.getElementById('modal-fj').classList.add('open');
}

function toggleCell(mi, ri) {
  // kept for compatibility — now opens dropdown
  openCellDropdown({currentTarget: document.querySelector('.cell-FJ'), stopPropagation:()=>{}}, mi, ri);
}

function saveFJ() {
  if(!fjPending) return;
  var {mi, ri} = fjPending;
  var texto = document.getElementById('fj-texto').value.trim();
  if(!state.justificativas[mi]) state.justificativas[mi] = {};
  state.justificativas[mi][ri] = texto;
  fjPending = null;
  document.getElementById('modal-fj').classList.remove('open');
  fbSaveSection('justificativas');
  renderPresenca();
  showToast('Falta justificada registrada!');
}

function cancelFJ() {
  if(fjPending) {
    // revert back to previous value (A)
    state.presenca.membros[fjPending.mi].reg[fjPending.ri] = 'A';
    fjPending = null;
  }
  document.getElementById('modal-fj').classList.remove('open');
  renderPresenca();
}

// ===================== ESPECIALIDADES =====================
var espFilter = {};

// Constants for especialidades
const DELIVERY_STATUS_VALUES = new Set(['OK', 'Ok', 'ok', 'Sim']);

/**
 * Check if an especialidade has been delivered
 * @param {string} entregue - Delivery status value
 * @returns {boolean} True if delivered
 */
function isDelivered(entregue) {
  return DELIVERY_STATUS_VALUES.has(entregue);
}

/**
 * Check if an especialidade matches all active filters
 * @param {Object} especialidade - The especialidade object to check
 * @param {Object} filters - Filter criteria object
 * @returns {boolean} True if matches all filters
 */
function matchesEspFilters(especialidade, filters) {
  const { txt, lobinho, nivel, comprado, entregue } = filters;
  
  if (txt && !especialidade.nome.toLowerCase().includes(txt) &&
      !especialidade.esp.toLowerCase().includes(txt)) {
    return false;
  }
  
  if (lobinho && especialidade.nome !== lobinho) return false;
  if (nivel !== '' && String(especialidade.nivel) !== nivel) return false;
  if (comprado === 'ok' && especialidade.comprado !== 'OK') return false;
  if (comprado === 'nao' && especialidade.comprado === 'OK') return false;
  
  const delivered = isDelivered(especialidade.entregue);
  if (entregue === 'sim' && !delivered) return false;
  if (entregue === 'nao' && delivered) return false;
  
  return true;
}

/**
 * Calculate statistics for especialidades in a single pass
 * @param {Array} especialidades - Array of especialidade objects
 * @returns {Object} Statistics object with total, entregues, and nivel0 counts
 */
function calculateEspStatistics(especialidades) {
  return especialidades.reduce((stats, esp) => {
    stats.total++;
    if (isDelivered(esp.entregue)) stats.entregues++;
    if (esp.nivel === 0) stats.nivel0++;
    return stats;
  }, { total: 0, entregues: 0, nivel0: 0 });
}

/**
 * Create HTML for a single especialidade table row
 * @param {Object} especialidade - The especialidade object
 * @param {number} index - Index in the state.especialidades array
 * @returns {string} HTML string for the table row
 */
function createEspRow(especialidade, index) {
  const compOK = especialidade.comprado === 'OK';
  const entOK = isDelivered(especialidade.entregue);
  
  return `<tr data-esp-index="${index}">
    <td><b>${especialidade.nome}</b></td>
    <td>${especialidade.esp}</td>
    <td><span class="nivel-badge nivel-${especialidade.nivel}">${especialidade.nivel}</span></td>
    <td style="font-family:'DM Mono',monospace;font-size:12px">${especialidade.data || '—'}</td>
    <td><span class="badge ${compOK ? 'badge-green' : 'badge-red'}">${especialidade.comprado}</span></td>
    <td><span class="badge ${entOK ? 'badge-green' : 'badge-red'}">${especialidade.entregue || '—'}</span></td>
    <td style="color:var(--text2);font-size:12px">${especialidade.avaliador || '—'}</td>
    <td style="white-space:nowrap">
      <button class="btn btn-sm btn-edit" data-action="edit" style="padding:3px 8px;font-size:11px;margin-right:4px" title="Editar">✏️</button>
      <button class="btn btn-sm btn-delete" data-action="delete" style="color:var(--red);border-color:var(--red-light);padding:3px 8px;font-size:11px" title="Excluir">✕</button>
    </td>
  </tr>`;
}

/**
 * Create HTML for statistics display
 * @param {Object} stats - Statistics object with total, entregues, nivel0
 * @returns {string} HTML string for statistics
 */
function renderEspStatsHTML(stats) {
  const pendentes = stats.total - stats.entregues;
  return `
    <div class="stat-mini"><div class="val">${stats.total}</div><div class="lbl">Total</div></div>
    <div class="stat-mini"><div class="val" style="color:var(--accent)">${stats.entregues}</div><div class="lbl">Entregues</div></div>
    <div class="stat-mini"><div class="val" style="color:var(--red)">${pendentes}</div><div class="lbl">Pendentes</div></div>
    <div class="stat-mini"><div class="val" style="color:#7c3aed">${stats.nivel0}</div><div class="lbl">Insígnias</div></div>
  `;
}

/**
 * Setup event delegation for especialidades table buttons
 * @param {HTMLElement} bodyElement - The table body element
 */
function setupEspEventListeners(bodyElement) {
  bodyElement.addEventListener('click', (e) => {
    const button = e.target.closest('button[data-action]');
    if (!button) return;
    
    const row = button.closest('tr');
    const index = parseInt(row.dataset.espIndex, 10);
    const action = button.dataset.action;
    
    if (action === 'edit') {
      editEsp(index);
    } else if (action === 'delete') {
      delEsp(index);
    }
  });
}

function populateEspLobinhos() {
  var sel = document.getElementById('esp-filter-lobinho');
  if(!sel) return;
  var nomes = [...new Set(state.especialidades.map(e=>e.nome))].sort();
  var cur = sel.value;
  sel.innerHTML = '<option value="">Todos os lobinhos</option>' +
    nomes.map(n=>`<option value="${n}"${n===cur?' selected':''}>${n}</option>`).join('');
}

function filterEsp() {
  renderEsp();
}

function limparFiltrosEsp() {
  document.getElementById('esp-search').value = '';
  document.getElementById('esp-filter-lobinho').value = '';
  document.getElementById('esp-filter-nivel').value = '';
  document.getElementById('esp-filter-comprado').value = '';
  document.getElementById('esp-filter-entregue').value = '';
  renderEsp();
}

function renderEsp() {
  populateEspLobinhos();
  
  // Cache DOM elements
  const body = document.getElementById('esp-body');
  const stats = document.getElementById('esp-stats');
  
  // Extract filter values once
  const filters = {
    txt: (document.getElementById('esp-search')?.value || '').toLowerCase(),
    lobinho: document.getElementById('esp-filter-lobinho')?.value || '',
    nivel: document.getElementById('esp-filter-nivel')?.value || '',
    comprado: document.getElementById('esp-filter-comprado')?.value || '',
    entregue: document.getElementById('esp-filter-entregue')?.value || ''
  };
  
  // Filter data using extracted helper function
  const filteredData = state.especialidades.filter(esp => matchesEspFilters(esp, filters));
  
  // Render rows with original indices preserved
  const html = filteredData.length > 0
    ? filteredData.map(esp => {
        const originalIndex = state.especialidades.indexOf(esp);
        return createEspRow(esp, originalIndex);
      }).join('')
    : '<tr><td colspan="8" style="text-align:center;padding:32px;color:var(--text3)">Nenhum resultado.</td></tr>';
  
  body.innerHTML = html;
  
  // Setup event delegation (only once)
  if (!body.dataset.listenersAttached) {
    setupEspEventListeners(body);
    body.dataset.listenersAttached = 'true';
  }
  
  // Calculate and render statistics in a single pass
  const statistics = calculateEspStatistics(state.especialidades);
  stats.innerHTML = renderEspStatsHTML(statistics);
}

var editingEspIdx = -1;

function editEsp(idx) {
  var e = state.especialidades[idx];
  editingEspIdx = idx;
  document.getElementById('modal-esp-title').textContent = 'Editar especialidade';
  document.getElementById('esp-nome').value = e.nome;
  document.getElementById('esp-esp').value = e.esp;
  document.getElementById('esp-nivel').value = String(e.nivel);
  document.getElementById('esp-data').value = e.data || '';
  document.getElementById('esp-comp').value = e.comprado || 'OK';
  document.getElementById('esp-entregue').value = e.entregue || 'OK';
  document.getElementById('esp-avaliador').value = e.avaliador || '';
  document.getElementById('modal-esp').classList.add('open');
}

function saveEsp() {
  var item = {
    nome: document.getElementById('esp-nome').value,
    esp: document.getElementById('esp-esp').value,
    nivel: parseInt(document.getElementById('esp-nivel').value),
    data: document.getElementById('esp-data').value,
    comprado: document.getElementById('esp-comp').value,
    entregue: document.getElementById('esp-entregue').value,
    avaliador: document.getElementById('esp-avaliador').value
  };
  if(editingEspIdx >= 0) {
    state.especialidades[editingEspIdx] = item;
    showToast('Especialidade atualizada!');
  } else {
    state.especialidades.push(item);
    showToast('Especialidade adicionada!');
  }
  editingEspIdx = -1;
  closeModals();
  fbSaveSection('especialidades');
  renderEsp();
}

function delEsp(i) {
  state.especialidades.splice(i,1);
  fbSaveSection('especialidades');
  renderEsp();
  showToast('Especialidade removida.');
}

// ===================== MATILHAS =====================
var MATILHA_COLORS = {Amarela:'amarela',Branca:'branca',Cinza:'cinza',Preta:'preta'};
var MAT_DOT_COLORS = {Amarela:'#f5c200', Branca:'#bbb', Cinza:'#888', Preta:'#222'};

function getPontuacao(mat) {
  var p = state.pontuacao[mat] || {jogos:0, formacao:0, comportamento:0};
  var jogos       = p.jogos       || 0;
  var formacao    = p.formacao    || 0;
  var comportamento = p.comportamento || 0;
  var total = jogos + formacao - comportamento;
  return {jogos, formacao, comportamento, total};
}

/**
 * Helper function to create a pontuacao button row
 * @param {string} label - Category label
 * @param {string} emoji - Category emoji
 * @param {number} value - Current value
 * @param {string} mat - Matilha name
 * @param {string} category - Category key (jogos, formacao, comportamento)
 * @param {Object} options - Optional styling and behavior options
 * @returns {string} HTML string for the button row
 */
function createPontButtonRow(label, emoji, value, mat, category, options = {}) {
  const {
    valueColor = 'var(--accent)',
    minusStyle = '',
    plusStyle = '',
    minusTitle = '',
    plusTitle = '',
    showNegative = false,
    rowStyle = '',
    subtitle = ''
  } = options;

  const displayValue = showNegative ? `-${value}` : value;
  const rowStyleAttr = rowStyle ? ` style="${rowStyle}"` : '';
  const minusStyleAttr = minusStyle ? ` style="${minusStyle}"` : '';
  const plusStyleAttr = plusStyle ? ` style="${plusStyle}"` : '';
  const minusTitleAttr = minusTitle ? ` title="${minusTitle}"` : '';
  const plusTitleAttr = plusTitle ? ` title="${plusTitle}"` : '';

  return `<div class="pont-cat-row"${rowStyleAttr}>
    <span class="pont-cat-label">${emoji} ${label}${subtitle}</span>
    <div class="pont-btns">
      <button class="pont-btn minus" data-action="pont" data-mat="${mat}" data-cat="${category}" data-delta="-1"${minusStyleAttr}${minusTitleAttr}>−</button>
      <span class="pont-val" style="color:${valueColor}">${displayValue}</span>
      <button class="pont-btn plus" data-action="pont" data-mat="${mat}" data-cat="${category}" data-delta="1"${plusStyleAttr}${plusTitleAttr}>+</button>
    </div>
  </div>`;
}

function renderMatilhas() {
  var grid     = document.getElementById('matilhas-grid');
  var stats    = document.getElementById('matilhas-stats');
  var ranking  = document.getElementById('ranking-visual');
  var pontGrid = document.getElementById('pontuacao-grid');

  var totalMembros  = Object.values(state.matilhas).flat().length;
  var nMatilhas     = Object.keys(state.matilhas).length;
  var totalComCargo = Object.values(state.cargos).filter(c=>c.primo||c.segundo).length;
  var allTotals = Object.keys(state.matilhas).map(m => getPontuacao(m).total);
  var maxPts = Math.max(...allTotals, 1);

  stats.innerHTML = '';

  // ---- RANKING ----
  var ranked = Object.keys(state.matilhas)
    .map(mat => ({mat, ...getPontuacao(mat)}))
    .sort((a,b) => b.total - a.total);

  var medalColors = ['#f5c200','#aaa','#cd7f32'];
  var medals = ['🥇','🥈','🥉'];

  ranking.innerHTML = `<div class="card" style="padding:20px 22px">` +
    ranked.map((r, i) => {
      var barPct = maxPts > 0 ? Math.max(0, Math.round(r.total / maxPts * 100)) : 0;
      var dotColor = MAT_DOT_COLORS[r.mat] || '#999';
      var barColor = i===0 ? '#f5c200' : i===1 ? '#aaa' : i===2 ? '#cd7f32' : 'var(--accent)';
      var posClass = i < 3 ? `pos-${i+1}` : '';
      return `<div class="ranking-row">
        <span class="rank-pos ${posClass}">${medals[i]||i+1}</span>
        <span class="rank-dot" style="background:${dotColor}"></span>
        <span class="rank-name">${r.mat}</span>
        <div class="rank-bar-wrap">
          <div class="rank-bar" style="width:${barPct}%;background:${barColor}"></div>
        </div>
        <span class="rank-pts">${r.total} pts
          <span class="rank-breakdown">🎮${r.jogos} 📚${r.formacao} ⚠️-${r.comportamento}</span>
        </span>
      </div>`;
    }).join('') + `</div>`;

  // ---- PONTUAÇÃO CARDS ----
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
        ${createPontButtonRow('Jogos', '🎮', jogos, mat, 'jogos')}
        ${createPontButtonRow('Formação', '📚', formacao, mat, 'formacao')}
        ${createPontButtonRow('Comportamento', '⚠️', comportamento, mat, 'comportamento', {
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

  // Setup event delegation for pontuacao buttons (only once)
  if (!pontGrid.dataset.delegationSetup) {
    pontGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="pont"]');
      if (!btn) return;

      const { mat, cat, delta } = btn.dataset;
      addPont(mat, cat, parseInt(delta, 10));
    });
    pontGrid.dataset.delegationSetup = 'true';
  }

  // ---- MATILHA CARDS ----
  var gh = '';
  Object.entries(state.matilhas).forEach(([mat, members]) => {
    var cls = MATILHA_COLORS[mat]||'';
    var cargo = state.cargos[mat] || {primo:'',segundo:''};

    var chips = members.map(m => {
      var isPrimo   = cargo.primo   === m;
      var isSegundo = cargo.segundo === m;
      var chipCls   = isPrimo ? 'cargo-primo' : isSegundo ? 'cargo-segundo' : '';
      var tag       = isPrimo
        ? `<span class="cargo-tag primo">1º</span>`
        : isSegundo
        ? `<span class="cargo-tag segundo">2º</span>`
        : '';
      return `<span class="member-chip ${chipCls}" onclick="toggleCargo('${mat}','${m}')" title="Clique para designar cargo">${tag}${m}</span>`;
    }).join('');

    var primoLabel   = cargo.primo   ? `<span style="font-size:12px;color:var(--text2)">1º <b>${cargo.primo}</b></span>`   : `<span style="font-size:12px;color:var(--text3)">1º —</span>`;
    var segundoLabel = cargo.segundo ? `<span style="font-size:12px;color:var(--text2)">2º <b>${cargo.segundo}</b></span>` : `<span style="font-size:12px;color:var(--text3)">2º —</span>`;

    gh += `<div class="matilha-card ${cls}">
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
  });
  grid.innerHTML = gh;
}

function addPont(mat, cat, delta) {
  if(!state.pontuacao[mat]) state.pontuacao[mat] = {jogos:0, formacao:0, comportamento:0};
  state.pontuacao[mat][cat] = Math.max(0, (state.pontuacao[mat][cat]||0) + delta);
  fbSaveSection('pontuacao');
  renderMatilhas();
}

function confirmResetPontuacao() {
  if(confirm('⚠️ Tem certeza que quer resetar TODA a pontuação das matilhas?\n\nEssa ação não pode ser desfeita.')) {
    Object.keys(state.pontuacao).forEach(mat => {
      state.pontuacao[mat] = {jogos:0, formacao:0, comportamento:0};
    });
    fbSaveSection('pontuacao');
    renderMatilhas();
    showToast('Pontuação resetada!');
  }
}

function toggleCargo(mat, nome) {
  if(!state.cargos[mat]) state.cargos[mat] = {primo:'', segundo:''};
  var c = state.cargos[mat];

  if(c.primo === nome) {
    c.primo = '';
  } else if(c.segundo === nome) {
    c.segundo = '';
  } else if(!c.primo) {
    c.primo = nome;
  } else if(!c.segundo) {
    c.segundo = nome;
  } else {
    c.segundo = c.primo;
    c.primo = nome;
  }
  saveCargos();
  renderMatilhas();
}

function saveCargos() {
  fbSet('cargos', state.cargos);
}

function loadCargos() {
  // cargos are loaded via Firebase listener in initFirebase()
}

// ===================== FIREBASE =====================
var db = null;
var fbReady = false;

function initFirebase() {
  var config = {
    apiKey: window.FIREBASE_API_KEY || "",
    authDomain: "alcateiakotick-db12b.firebaseapp.com",
    databaseURL: "https://alcateiakotick-db12b-default-rtdb.firebaseio.com",
    projectId: "alcateiakotick-db12b",
    storageBucket: "alcateiakotick-db12b.firebasestorage.app",
    messagingSenderId: "1038585867031",
    appId: "1:1038585867031:web:7ca99aa4523c4beda36552"
  };

  try {
    firebase.initializeApp(config);
    db = firebase.database();
    fbReady = true;
    showSyncStatus('conectando');
    listenAll();
  } catch(e) {
    console.warn('Firebase init failed:', e);
    showSyncStatus('offline');
    alert('⚠️ Falha ao conectar com o servidor.\n\nO aplicativo está em modo offline. Suas alterações NÃO serão salvas automaticamente.\n\nPor favor, verifique sua conexão com a internet e recarregue a página.');
  }
}

function fbSet(path, data) {
  if(!fbReady || !db) return;
  db.ref('alcateia/' + path).set(data)
    .then(() => showSyncStatus('salvo'))
    .catch(e => {
      console.warn('fbSet error', e);
      showSyncStatus('erro');
      showToast('Erro ao salvar dados. Verifique sua conexão e tente novamente.');
    });
}

// Configuration for Firebase state synchronization
const STATE_CONFIG = [
  { key: 'calendario', validate: (v) => Array.isArray(v) },
  { key: 'presenca', validate: (v) => v && v.datas },
  { key: 'especialidades', validate: (v) => Array.isArray(v) },
  { key: 'matilhas' },
  { key: 'cargos' },
  { key: 'justificativas' },
  { key: 'comunicados', validate: (v) => Array.isArray(v) },
  { key: 'confirmacoes' },
  { key: 'caixa', validate: (v) => Array.isArray(v) },
  { key: 'pontuacao' },
  { key: 'avisos_internos', validate: (v) => Array.isArray(v) },
  { key: 'todos_chefia', validate: (v) => Array.isArray(v) }
];

function listenAll() {
  if (!db) return;
  
  const ref = db.ref('alcateia');
  let activePageId = null;
  
  // Cleanup previous listener if exists to prevent memory leaks
  if (window.firebaseListener) {
    ref.off('value', window.firebaseListener);
    window.firebaseListener = null;
  }

  // Helper to get current active page ID (cached for performance)
  const getActivePageId = () => {
    const current = document.querySelector('.page.active');
    const currentId = current ? current.id.replace('p-', '') : null;
    if (currentId !== activePageId) {
      activePageId = currentId;
    }
    return activePageId;
  };

  // Optimized hash function with early exit for null/undefined
  function computeHash(obj) {
    if (!obj) return 0;
    
    // For arrays, use length as quick check before full hash
    if (Array.isArray(obj) && obj.length === 0) return 1;
    
    const str = JSON.stringify(obj);
    let hash = 0;
    const len = str.length;
    
    // Optimized loop with bitwise operations
    for (let i = 0; i < len; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
  }

  // Initial data load
  ref.once('value').then(snap => {
    const d = snap.val();
    if (d) {
      // Consolidated state assignment using configuration
      STATE_CONFIG.forEach(({ key, validate }) => {
        if (d[key] && (!validate || validate(d[key]))) {
          state[key] = d[key];
        }
      });
    }
    showSyncStatus('ok');
    
    // Re-render active page with fresh data
    const currentPageId = getActivePageId();
    if (currentPageId) render(currentPageId);
  }).catch(e => {
    console.warn('Firebase read error:', e);
    showSyncStatus('offline');
  });

  // Real-time change detection using hash comparison
  const stateHashes = {};
  
  // Value listener with error handling
  const valueListener = (snap) => {
    const d = snap.val();
    if (!d) return;
    
    let hasChanges = false;
    
    // Check for changes using configuration with early exit optimization
    for (const { key } of STATE_CONFIG) {
      if (d[key]) {
        const newHash = computeHash(d[key]);
        const oldHash = stateHashes[key];
        
        // Initialize hash on first run or detect change
        if (oldHash === undefined) {
          stateHashes[key] = newHash;
        } else if (newHash !== oldHash) {
          state[key] = d[key];
          stateHashes[key] = newHash;
          hasChanges = true;
          // Early exit: since we re-render entire page, no need to check other keys
          break;
        }
      }
    }
    
    if (hasChanges) {
      const currentPageId = getActivePageId();
      if (currentPageId) render(currentPageId);
    }
  };
  
  // Error handler for Firebase listener
  const errorHandler = (error) => {
    console.error('Firebase listener error:', error);
    showSyncStatus('erro');
    showToast('Erro na sincronização. Reconectando...');
  };
  
  // Store listener reference globally for cleanup
  window.firebaseListener = valueListener;
  
  // Listen for real-time changes with error handling
  ref.on('value', valueListener, errorHandler);
  
  // Return cleanup function for proper resource management
  return () => {
    if (window.firebaseListener) {
      ref.off('value', window.firebaseListener);
      window.firebaseListener = null;
    }
  };
}

// Save entire state section to Firebase
function fbSaveSection(section) {
  if(!fbReady || !db) return;
  db.ref('alcateia/' + section).set(state[section])
    .then(() => showSyncStatus('salvo'))
    .catch(e => {
      console.warn('fbSaveSection error', e);
      showSyncStatus('erro');
      showToast('Erro ao salvar dados. Verifique sua conexão e tente novamente.');
    });
}

// Sync indicator
function showSyncStatus(status) {
  var el = document.getElementById('sync-status');
  if(!el) return;
  var map = {
    'conectando': {txt:'Conectando...', color:'var(--text3)'},
    'ok':         {txt:'● Sincronizado',  color:'var(--accent)'},
    'salvo':      {txt:'● Salvo',         color:'var(--accent)'},
    'offline':    {txt:'○ Offline',       color:'var(--accent2)'},
    'erro':       {txt:'✕ Erro sync',     color:'var(--red)'}
  };
  var s = map[status] || map['offline'];
  el.textContent = s.txt;
  el.style.color = s.color;
  if(status==='salvo') setTimeout(()=>showSyncStatus('ok'), 2000);
}

function saveMat() {
  var nome = document.getElementById('mat-nome').value.trim().toUpperCase();
  var mat = document.getElementById('mat-matilha').value;
  if(nome && mat) {
    state.matilhas[mat].push(nome);
    closeModals();
    fbSaveSection('matilhas');
    renderMatilhas();
    showToast('Membro adicionado!');
  }
}

// ===================== IMPORTAÇÃO =====================
function importFile(event) {
  var file = event.target.files[0];
  if(!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var wb = XLSX.read(e.target.result, {type:'binary'});
      var sheetName = wb.SheetNames[0];
      var ws = wb.Sheets[sheetName];
      var data = XLSX.utils.sheet_to_json(ws, {header:1});

      var active = document.querySelector('.page.active').id;
      if(active==='p-calendario') importCal(data);
      else if(active==='p-presenca') importPresenca(wb);
      else if(active==='p-especialidades') importEsp(data);
      else if(active==='p-matilhas') importMat(data);

      showToast('Planilha importada com sucesso!');
    } catch(err) {
      showToast('Erro ao importar: '+err.message);
    }
    event.target.value = '';
  };
  reader.readAsBinaryString(file);
}

var MESES_PT = ['','janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
var DIAS_PT = ['dom.','seg.','ter.','qua.','qui.','sex.','sáb.'];

function excelSerialToDate(serial) {
  // Excel serial: days since 1900-01-01 (with leap year bug on 1900)
  var d = new Date(Math.round((serial - 25569) * 86400 * 1000));
  return d;
}

function formatDateBR(d) {
  var day = String(d.getUTCDate()).padStart(2,'0');
  var month = String(d.getUTCMonth()+1).padStart(2,'0');
  return day+'/'+month;
}

function importCal(rows) {
  if(rows.length<2) return;
  var newItems = [];
  rows.slice(1).forEach(r => {
    if(!r[3]) return; // must have atividade
    var dataVal = r[1];
    var mes='', dataStr='', dia='';
    if(typeof dataVal === 'number' && dataVal > 40000) {
      // Excel date serial
      var d = excelSerialToDate(dataVal);
      mes = MESES_PT[d.getUTCMonth()+1];
      dataStr = formatDateBR(d);
      dia = DIAS_PT[d.getUTCDay()];
    } else if(dataVal instanceof Date) {
      mes = MESES_PT[dataVal.getMonth()+1];
      dataStr = String(dataVal.getDate()).padStart(2,'0')+'/'+String(dataVal.getMonth()+1).padStart(2,'0');
      dia = DIAS_PT[dataVal.getDay()];
    } else {
      // already a string like "03/04"
      dataStr = String(dataVal||'');
      mes = String(r[0]||'').toLowerCase();
      dia = String(r[2]||'');
    }
    newItems.push({
      mes, data:dataStr, dia,
      atividade: String(r[3]||'').trim(),
      categoria: String(r[4]||'').trim(),
      chefe: String(r[5]||'').trim(),
      datas: String(r[7]||'').trim().replace(/\n/g,' / '),
      obs: String(r[8]||'').trim().replace(/\n/g,' ')
    });
  });
  if(newItems.length) state.calendario = newItems;
  fbSaveSection('calendario');
  renderCal();
}

function importPresenca(wb) {
  var ws = wb.Sheets[wb.SheetNames[0]];
  var rows = XLSX.utils.sheet_to_json(ws, {header:1});
  if(rows.length<2) return;
  var headerRow = rows[1];
  var datas = [];
  for(var i=2; i<headerRow.length; i++) {
    if(headerRow[i]) datas.push(String(headerRow[i]));
  }
  var membros = [];
  rows.slice(2).forEach(r => {
    if(!r[1]) return;
    var reg = datas.map((_, i) => String(r[i+2]||'').trim());
    membros.push({nome: String(r[1]), reg});
  });
  if(datas.length && membros.length) {
    state.presenca = {datas, membros};
    fbSaveSection('presenca');
    renderPresenca();
  }
}

function importEsp(rows) {
  if(rows.length<2) return;
  var newItems = [];
  rows.slice(1).forEach(r => {
    if(!r[0]) return;
    newItems.push({
      nome: String(r[0]||''),
      esp: String(r[1]||''),
      nivel: parseInt(r[2])||1,
      data: String(r[3]||''),
      comprado: String(r[4]||''),
      entregue: String(r[5]||''),
      avaliador: String(r[6]||'')
    });
  });
  state.especialidades = newItems;
  fbSaveSection('especialidades');
  renderEsp();
}

function importMat(rows) {
  var mats = {Amarela:[],Branca:[],Cinza:[],Preta:[]};
  if(rows.length<2) return;
  var header = rows[1];
  rows.slice(2).forEach(r => {
    if(r[0]) mats.Amarela.push(String(r[0]));
    if(r[1]) mats.Branca.push(String(r[1]));
    if(r[2]) mats.Cinza.push(String(r[2]));
    if(r[3]) mats.Preta.push(String(r[3]));
  });
  state.matilhas = mats;
  fbSaveSection('matilhas');
  renderMatilhas();
}

// ===================== EXPORTAR EXCEL =====================
function exportarExcel() {
  var active = document.querySelector('.page.active').id;
  if(active==='p-calendario')      exportCalendario();
  else if(active==='p-presenca')   exportPresenca();
  else if(active==='p-especialidades') exportEspecialidades();
  else if(active==='p-matilhas')   exportMatilhas();
}

function downloadWB(wb, filename) {
  var wbout = XLSX.write(wb, {bookType:'xlsx', type:'binary'});
  var buf = new ArrayBuffer(wbout.length);
  var view = new Uint8Array(buf);
  for(var i=0; i<wbout.length; i++) view[i] = wbout.charCodeAt(i) & 0xFF;
  var blob = new Blob([buf], {type:'application/octet-stream'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
  showToast('Exportado: ' + filename);
}

function styleHeader(ws, range, color) {
  // XLSX community edition doesn't support styling — keep it clean
  return ws;
}

function exportCalendario() {
  var wb = XLSX.utils.book_new();
  var rows = [['Mês','Data','Dia','Atividade','Categoria','Chefe Responsável','Datas Especiais','OBS']];
  state.calendario.forEach(ev => {
    rows.push([ev.mes, ev.data, ev.dia, ev.atividade, ev.categoria, ev.chefe, ev.datas, ev.obs]);
  });
  var ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = [{wch:10},{wch:7},{wch:6},{wch:40},{wch:12},{wch:22},{wch:35},{wch:30}];
  XLSX.utils.book_append_sheet(wb, ws, 'Calendário');
  downloadWB(wb, 'Calendario_Escoteiro.xlsx');
}

function exportPresenca() {
  var wb = XLSX.utils.book_new();
  var d = state.presenca;

  // Header row 1: name + dates
  var header = ['Nome'].concat(d.datas).concat(['Presença','Falta Justificada','Ausência']);
  var rows = [header];

  d.membros.forEach((m, mi) => {
    var row = [m.nome];
    m.reg.forEach((r, ri) => {
      var cell = r || '';
      // append justificativa note if FJ
      if(r === 'FJ' && state.justificativas[mi] && state.justificativas[mi][ri]) {
        cell = 'FJ: ' + state.justificativas[mi][ri];
      }
      row.push(cell);
    });
    // summary counts
    var totalP  = m.reg.filter(r=>r==='P').length;
    var totalFJ = m.reg.filter(r=>r==='FJ').length;
    var totalA  = m.reg.filter(r=>r==='A').length;
    row.push(totalP, totalFJ, totalA);
    rows.push(row);
  });

  var ws = XLSX.utils.aoa_to_sheet(rows);
  // Set column widths: name wide, date cols narrow
  var cols = [{wch:35}];
  d.datas.forEach(() => cols.push({wch:7}));
  cols.push({wch:10},{wch:16},{wch:10});
  ws['!cols'] = cols;
  XLSX.utils.book_append_sheet(wb, ws, 'Presença');
  downloadWB(wb, 'Presenca_Alcateia.xlsx');
}

function exportEspecialidades() {
  var wb = XLSX.utils.book_new();
  var rows = [['Nome do Lobinho','Especialidade','Nível','Data Apresentação','Comprado','Entregue','Chefe Avaliador']];
  state.especialidades.forEach(e => {
    rows.push([e.nome, e.esp, e.nivel, e.data, e.comprado, e.entregue, e.avaliador]);
  });
  var ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = [{wch:25},{wch:25},{wch:7},{wch:16},{wch:10},{wch:10},{wch:20}];
  XLSX.utils.book_append_sheet(wb, ws, 'Especialidades');
  downloadWB(wb, 'Especialidades_Alcateia.xlsx');
}

function exportMatilhas() {
  var wb = XLSX.utils.book_new();

  // Sheet 1: each matilha as columns
  var nomes = Object.keys(state.matilhas);
  var maxLen = Math.max(...nomes.map(n => state.matilhas[n].length));
  var rows = [nomes];
  for(var i=0; i<maxLen; i++) {
    var row = nomes.map(n => state.matilhas[n][i] || '');
    rows.push(row);
  }
  // Add count row
  rows.push(nomes.map(n => state.matilhas[n].length + ' membros'));
  var ws1 = XLSX.utils.aoa_to_sheet(rows);
  ws1['!cols'] = nomes.map(() => ({wch:28}));
  XLSX.utils.book_append_sheet(wb, ws1, 'Matilhas');

  // Sheet 2: full member list with matilha
  var rows2 = [['Nome','Matilha']];
  Object.entries(state.matilhas).forEach(([mat, members]) => {
    members.forEach(nome => rows2.push([nome, mat]));
  });
  var ws2 = XLSX.utils.aoa_to_sheet(rows2);
  ws2['!cols'] = [{wch:35},{wch:12}];
  XLSX.utils.book_append_sheet(wb, ws2, 'Lista Completa');

  downloadWB(wb, 'Matilhas_Alcateia.xlsx');
}

// ===================== DASHBOARD =====================
var MES_ORDER = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
var MES_NUM = {'janeiro':1,'fevereiro':2,'março':3,'abril':4,'maio':5,'junho':6,'julho':7,'agosto':8,'setembro':9,'outubro':10,'novembro':11,'dezembro':12};

function renderDashboard() {
  var today = new Date();
  var hours = today.getHours();
  var greeting = hours < 12 ? 'Bom dia' : hours < 18 ? 'Boa tarde' : 'Boa noite';
  document.getElementById('dash-greeting').textContent = greeting + ', Chefia! 👋';
  var dias = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
  var meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  document.getElementById('dash-date').textContent =
    dias[today.getDay()] + ', ' + today.getDate() + ' de ' + meses[today.getMonth()] + ' de ' + today.getFullYear();

  // ---- KPIs ----
  var totalMembros = state.presenca.membros.length;
  var allRegs = state.presenca.membros.flatMap(m=>m.reg).filter(r=>r!=='');
  var pctGeral = allRegs.length ? Math.round(allRegs.filter(r=>r==='P').length / allRegs.length * 100) : 0;
  var totalEsp = state.especialidades.length;
  var espPendentes = state.especialidades.filter(e=>!['OK','Ok','ok','Sim'].includes(e.entregue)).length;
  var proxAtiv = getProxAtividades(3);

  document.getElementById('dash-kpis').innerHTML = `
    <div class="dash-kpi" onclick="goTo('presenca')">
      <div class="kpi-icon" style="background:var(--accent-light)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
      </div>
      <div class="kpi-val">${totalMembros}</div>
      <div class="kpi-lbl">Lobinhos</div>
      <div class="kpi-sub">Alcateia Kotick</div>
    </div>
    <div class="dash-kpi" onclick="goTo('presenca')">
      <div class="kpi-icon" style="background:${pctGeral>=75?'var(--accent-light)':pctGeral>=50?'var(--accent2-light)':'var(--red-light)'}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${pctGeral>=75?'var(--accent)':pctGeral>=50?'var(--accent2)':'var(--red)'}" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      </div>
      <div class="kpi-val" style="color:${pctGeral>=75?'var(--accent)':pctGeral>=50?'var(--accent2)':'var(--red)'}">${pctGeral}%</div>
      <div class="kpi-lbl">Presença geral</div>
      <div class="kpi-sub">${allRegs.filter(r=>r==='A').length} faltas registradas</div>
    </div>
    <div class="dash-kpi" onclick="goTo('especialidades')">
      <div class="kpi-icon" style="background:#f3eeff">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8e24aa" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      </div>
      <div class="kpi-val">${totalEsp}</div>
      <div class="kpi-lbl">Especialidades</div>
      <div class="kpi-sub">${espPendentes} pendentes</div>
    </div>
  `;

  // ---- Próximas atividades ----
  var proxEl = document.getElementById('dash-proximas');
  if(!proxAtiv.length) {
    proxEl.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text3);font-size:13px">Nenhuma atividade encontrada</div>';
  } else {
    proxEl.innerHTML = proxAtiv.map((ev, i) => {
      var rowCls = getRowClass(ev);
      var dotColor = rowCls==='row-feriado'?'#ef5350':rowCls==='row-local'?'#1e88e5':rowCls==='row-regional'?'#8e24aa':rowCls==='row-externa'?'#f9a825':'#4caf50';
      var badge = i===0 ? 'next' : '';
      return `<div class="dash-row">
        <span class="dash-date-badge ${badge}">${ev.data}</span>
        <span style="width:8px;height:8px;border-radius:50%;background:${dotColor};flex-shrink:0"></span>
        <span class="dash-activity-name">${ev.atividade}</span>
        <span class="dash-activity-chefe">${ev.chefe||''}</span>
      </div>`;
    }).join('');
  }

  // ---- Presença — top 8 por % ----
  var presEl = document.getElementById('dash-presenca-chart');
  var allMembros = state.presenca.membros.map(m => {
    var filled = m.reg.filter(r=>r!=='').length;
    var pres = m.reg.filter(r=>r==='P').length;
    var pct = filled > 0 ? Math.round(pres/filled*100) : 0;
    return {nome: m.nome.split(' ')[0], pct};
  }).filter(m => m.pct > 0 || state.presenca.membros.find(mb=>mb.nome.split(' ')[0]===m.nome).reg.some(r=>r!==''));

  var sorted = [...allMembros].sort((a,b)=>b.pct-a.pct);
  var top3 = sorted.slice(0,3);
  var bot3 = sorted.slice(-3).reverse();

  function barRow(m, color) {
    return `<div class="pres-bar-wrap">
      <span class="pres-bar-name">${m.nome}</span>
      <div class="pres-bar-track"><div class="pres-bar-fill" style="width:${m.pct}%;background:${color}"></div></div>
      <span class="pres-bar-pct" style="color:${color}">${m.pct}%</span>
    </div>`;
  }

  presEl.innerHTML =
    `<div style="font-size:11px;font-weight:600;color:var(--accent);margin-bottom:6px;letter-spacing:0.04em">↑ MAIOR FREQUÊNCIA</div>` +
    top3.map(m => barRow(m, 'var(--accent)')).join('') +
    `<div style="border-top:1px dashed var(--border);margin:8px 0"></div>` +
    `<div style="font-size:11px;font-weight:600;color:var(--red);margin-bottom:6px;letter-spacing:0.04em">↓ MENOR FREQUÊNCIA</div>` +
    bot3.map(m => barRow(m, 'var(--red)')).join('');

  // ---- Especialidades pendentes ----
  var espEl = document.getElementById('dash-esp-pendentes');
  var pendentes = state.especialidades.filter(e=>!['OK','Ok','ok','Sim'].includes(e.entregue)).slice(0,6);
  if(!pendentes.length) {
    espEl.innerHTML = '<div style="padding:20px;text-align:center;color:var(--accent);font-size:13px">✓ Todas entregues!</div>';
  } else {
    espEl.innerHTML = pendentes.map(e => {
      var compOK = e.comprado==='OK';
      return `<div class="dash-row">
        <span class="nivel-badge nivel-${e.nivel}" style="flex-shrink:0">${e.nivel}</span>
        <span style="flex:1;font-weight:500;font-size:13px">${e.nome}</span>
        <span style="font-size:12px;color:var(--text2)">${e.esp}</span>
        <span class="badge ${compOK?'badge-green':'badge-red'}" style="flex-shrink:0">${compOK?'Comprado':'Falta'}</span>
      </div>`;
    }).join('') + (espPendentes > 6 ? `<div style="padding:10px 18px;font-size:12px;color:var(--text3)">+ ${espPendentes-6} outras pendências</div>` : '');
  }

  // ---- Matilhas e lideranças ----
  var matEl = document.getElementById('dash-matilhas');
  var MCOLORS = {Amarela:'#f5c200',Branca:'#bbb',Cinza:'#888',Preta:'#222'};
  matEl.innerHTML = Object.entries(state.matilhas).map(([mat, members]) => {
    var cargo = state.cargos[mat] || {primo:'',segundo:''};
    var primoTag = cargo.primo ? `<span class="cargo-tag primo" style="font-size:10px">1º</span> <b>${cargo.primo}</b>` : '<span style="color:var(--text3);font-size:12px">1º —</span>';
    var segundoTag = cargo.segundo ? `<span class="cargo-tag segundo" style="font-size:10px">2º</span> <b>${cargo.segundo}</b>` : '<span style="color:var(--text3);font-size:12px">2º —</span>';
    return `<div class="mat-dash-row">
      <span class="mat-dot" style="background:${MCOLORS[mat]||'#999'}"></span>
      <span class="mat-dash-name">${mat}</span>
      <div class="mat-dash-leaders">
        <span style="font-size:12px;color:var(--text2);display:flex;align-items:center;gap:4px">${primoTag}</span>
        <span style="font-size:12px;color:var(--text2);display:flex;align-items:center;gap:4px">${segundoTag}</span>
      </div>
      <span class="mat-dash-count">${members.length}</span>
    </div>`;
  }).join('');

  // ---- Avisos Internos ----
  var avisosEl = document.getElementById('dash-avisos-internos');
  if(!state.avisos_internos || !state.avisos_internos.length) {
    avisosEl.innerHTML = '<div class="empty-state-small">Nenhum aviso cadastrado.<br>Clique em <b>+ Adicionar</b> para criar.</div>';
  } else {
    avisosEl.innerHTML = state.avisos_internos.map((aviso, idx) => {
      return `<div class="aviso-item">
        <span class="aviso-bullet"></span>
        <span class="aviso-text">${aviso}</span>
        <button class="aviso-remove" onclick="removeAvisoInterno(${idx})" title="Remover">✕</button>
      </div>`;
    }).join('');
  }

  // ---- TO-DO Chefia ----
  var todosEl = document.getElementById('dash-todos-chefia');
  if(!state.todos_chefia || !state.todos_chefia.length) {
    todosEl.innerHTML = '<div class="empty-state-small">Nenhuma tarefa cadastrada.<br>Clique em <b>+ Adicionar</b> para criar.</div>';
  } else {
    todosEl.innerHTML = state.todos_chefia.map((todo, idx) => {
      var checked = todo.concluido ? 'checked' : '';
      var completedClass = todo.concluido ? 'completed' : '';
      return `<div class="todo-item">
        <div class="todo-checkbox ${checked}" onclick="toggleTodoChefia(${idx})"></div>
        <span class="todo-text ${completedClass}">${todo.texto}</span>
        <button class="todo-remove" onclick="removeTodoChefia(${idx})" title="Remover">✕</button>
      </div>`;
    }).join('');
  }
}

function getProxAtividades(n) {
  var today = new Date();
  var todayStr = String(today.getDate()).padStart(2,'0') + '/' + String(today.getMonth()+1).padStart(2,'0');
  var todayYear = today.getFullYear();

  return state.calendario
    .filter(ev => {
      if(!ev.data || isFeriado(ev)) return false;
      var parts = ev.data.split('/');
      if(parts.length < 2) return false;
      var evDate = new Date(todayYear, parseInt(parts[1])-1, parseInt(parts[0]));
      return evDate >= today;
    })
    .sort((a,b) => {
      var pa = a.data.split('/'), pb = b.data.split('/');
      var da = new Date(todayYear, parseInt(pa[1])-1, parseInt(pa[0]));
      var db = new Date(todayYear, parseInt(pb[1])-1, parseInt(pb[0]));
      // also sort by month order
      var ma = MES_ORDER.indexOf(a.mes), mb = MES_ORDER.indexOf(b.mes);
      if(ma !== mb) return ma - mb;
      return da - db;
    })
    .slice(0, n);
}

// ===================== AVISOS INTERNOS =====================
function addAvisoInterno() {
  var texto = prompt('Digite o aviso interno:');
  if(texto && texto.trim()) {
    state.avisos_internos.push(texto.trim());
    fbSaveSection('avisos_internos');
    renderDashboard();
    showToast('Aviso adicionado!');
  }
}

function removeAvisoInterno(idx) {
  if(confirm('Remover este aviso?')) {
    state.avisos_internos.splice(idx, 1);
    fbSaveSection('avisos_internos');
    renderDashboard();
    showToast('Aviso removido!');
  }
}

// ===================== TO-DO CHEFIA =====================
function addTodoChefia() {
  var texto = prompt('Digite a tarefa:');
  if(texto && texto.trim()) {
    state.todos_chefia.push({texto: texto.trim(), concluido: false});
    fbSaveSection('todos_chefia');
    renderDashboard();
    showToast('Tarefa adicionada!');
  }
}

function toggleTodoChefia(idx) {
  if(state.todos_chefia[idx]) {
    state.todos_chefia[idx].concluido = !state.todos_chefia[idx].concluido;
    fbSaveSection('todos_chefia');
    renderDashboard();
  }
}

function removeTodoChefia(idx) {
  if(confirm('Remover esta tarefa?')) {
    state.todos_chefia.splice(idx, 1);
    fbSaveSection('todos_chefia');
    renderDashboard();
    showToast('Tarefa removida!');
  }
}

// ===================== COMUNICADOS =====================
var editingComIdx = -1;
var CAT_LABELS = {aviso:'Aviso', externa:'Atividade Externa', reuniao:'Reunião', outros:'Outros'};

// ===================== COMUNICADOS =====================
var comSubtab = 'coms';
var confFilter = {status:'todos', atividade:''};
var editingConfKey = null;

function showComSubtab(tab) {
  comSubtab = tab;
  document.getElementById('subtab-coms').classList.toggle('active', tab==='coms');
  document.getElementById('subtab-confs').classList.toggle('active', tab==='confs');
  document.getElementById('panel-coms').style.display = tab==='coms' ? '' : 'none';
  document.getElementById('panel-confs').style.display = tab==='confs' ? '' : 'none';
  document.getElementById('btn-add').style.display = tab==='coms' ? 'inline-flex' : 'none';
  if(tab==='confs') renderConfirmacoes();
}

function filterConfs(status, btn) {
  if(status !== null) {
    confFilter.status = status;
    document.querySelectorAll('#panel-confs .filter-btn').forEach(b=>b.classList.remove('active'));
    if(btn) btn.classList.add('active');
  }
  confFilter.atividade = (document.getElementById('conf-f-ativ')||{value:''}).value || '';
  renderConfirmacoes();
}

// Helper: Update badge count
function updateBadge(elementId, count) {
  const badge = document.getElementById(elementId);
  if (badge) badge.textContent = count;
}

// Helper: Render empty state for comunicados
function renderEmptyStateComunicados(container) {
  container.innerHTML = `<div class="empty-state" style="text-align:center;padding:60px 20px;color:var(--text3)">
    <div style="font-size:36px;margin-bottom:12px">📢</div>
    <p>Nenhum comunicado publicado ainda.<br>Clique em <b>Novo</b> para criar o primeiro.</p>
  </div>`;
}

// Helper: Create a single comunicado card element
function createComunicadoCard(comunicado, index) {
  const card = document.createElement('div');
  card.className = `com-card${comunicado.fixado ? ' fixado' : ''}`;
  
  const catCls = 'com-cat-' + (comunicado.categoria || 'aviso');
  const catLabel = CAT_LABELS[comunicado.categoria] || '📋 Aviso';
  const dataStr = comunicado.dataEvento ? ` · 📅 ${comunicado.dataEvento}` : '';
  const pubDate = comunicado.ts
    ? new Date(comunicado.ts).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    : '';
  
  // Header
  const header = document.createElement('div');
  header.className = 'com-header';
  header.innerHTML = `
    <span class="com-cat-badge ${catCls}">${catLabel}</span>
    <span class="com-titulo">${comunicado.fixado ? '📌 ' : ''}${comunicado.titulo}</span>
  `;
  
  // Meta
  const meta = document.createElement('div');
  meta.className = 'com-meta';
  meta.textContent = `Publicado em ${pubDate}${dataStr}`;
  
  // Text
  const texto = document.createElement('div');
  texto.className = 'com-texto';
  texto.textContent = comunicado.texto;
  
  // Actions
  const actions = document.createElement('div');
  actions.className = 'com-actions';
  
  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-sm';
  editBtn.dataset.action = 'edit';
  editBtn.dataset.idx = index;
  editBtn.textContent = '✏️ Editar';
  
  const pinBtn = document.createElement('button');
  pinBtn.className = 'btn btn-sm';
  pinBtn.dataset.action = 'toggle-pin';
  pinBtn.dataset.idx = index;
  pinBtn.style.color = 'var(--accent2)';
  pinBtn.textContent = comunicado.fixado ? '📌 Desafixar' : '📌 Fixar';
  
  const delBtn = document.createElement('button');
  delBtn.className = 'btn btn-sm';
  delBtn.dataset.action = 'delete';
  delBtn.dataset.idx = index;
  delBtn.style.color = 'var(--red)';
  delBtn.style.borderColor = 'var(--red-light)';
  delBtn.textContent = '✕ Excluir';
  
  actions.appendChild(editBtn);
  actions.appendChild(pinBtn);
  actions.appendChild(delBtn);
  
  card.appendChild(header);
  card.appendChild(meta);
  card.appendChild(texto);
  card.appendChild(actions);
  
  return card;
}

// Event delegation handler for comunicado actions
function setupComunicadoEventDelegation() {
  const lista = document.getElementById('com-lista');
  if (!lista || lista.dataset.delegationSetup) return;
  
  lista.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    
    const action = btn.dataset.action;
    const idx = parseInt(btn.dataset.idx, 10);
    
    if (isNaN(idx)) return;
    
    switch(action) {
      case 'edit':
        editCom(idx);
        break;
      case 'toggle-pin':
        toggleFixarCom(idx);
        break;
      case 'delete':
        delCom(idx);
        break;
    }
  });
  
  lista.dataset.delegationSetup = 'true';
}

function renderComunicados() {
  const listaElement = document.getElementById('com-lista');
  const statsElement = document.getElementById('com-stats');

  // Single-pass confirmation counting for better performance
  const confirmacoes = state.confirmacoes ? Object.values(state.confirmacoes) : [];
  const confirmationCounts = confirmacoes.reduce((acc, c) => {
    if (c.status === 'sim') acc.sim++;
    else if (c.status === 'nao') acc.nao++;
    else if (c.status === 'talvez') acc.talvez++;
    return acc;
  }, { sim: 0, nao: 0, talvez: 0 });

  // Sort comunicados: pinned first, then by timestamp
  const sortedComunicados = [...state.comunicados].sort((a, b) => {
    if (a.fixado && !b.fixado) return -1;
    if (!a.fixado && b.fixado) return 1;
    return (b.ts || 0) - (a.ts || 0);
  });

  // Update badges
  updateBadge('badge-coms', sortedComunicados.length);
  updateBadge('badge-confs', confirmacoes.length);

  statsElement.innerHTML = '';

  // Handle empty state
  if (!sortedComunicados.length) {
    renderEmptyStateComunicados(listaElement);
    return;
  }

  // Setup event delegation once
  setupComunicadoEventDelegation();

  // Build comunicado cards using DocumentFragment for better performance
  const fragment = document.createDocumentFragment();
  sortedComunicados.forEach(comunicado => {
    const realIdx = state.comunicados.indexOf(comunicado);
    const card = createComunicadoCard(comunicado, realIdx);
    fragment.appendChild(card);
  });

  listaElement.innerHTML = '';
  listaElement.appendChild(fragment);

  if (comSubtab === 'confs') renderConfirmacoes();
}

// Helper: Create status badge for confirmacao
function createConfirmacaoStatusBadge(status) {
  const badges = {
    sim: '<span class="badge badge-green">✅ Vai</span>',
    nao: '<span class="badge badge-red">❌ Não vai</span>',
    talvez: '<span style="background:var(--accent2-light);color:var(--accent2);padding:2px 8px;border-radius:20px;font-size:11.5px;font-weight:500">⚠️ Talvez</span>'
  };
  return badges[status] || badges.talvez;
}

// Helper: Create a single confirmacao card
function createConfirmacaoCard(key, confirmacao) {
  const { nomeLobinho, atividade, dataAtiv, obs, status, ts } = confirmacao;
  const statusBadge = createConfirmacaoStatusBadge(status);
  const date = ts ? new Date(ts).toLocaleDateString('pt-BR') : '';
  const obsHtml = obs
    ? `<div style="font-size:12px;color:var(--text2);margin-top:3px;font-style:italic">"${obs}"</div>`
    : '';
  
  return `<div style="display:flex;align-items:flex-start;gap:10px;padding:12px 16px;border-bottom:1px solid var(--border)">
    <div style="flex:1;min-width:0">
      <div style="font-weight:500;font-size:13px">${nomeLobinho}</div>
      <div style="font-size:12px;color:var(--text3);margin-top:2px">${atividade || ''} · ${dataAtiv || ''}</div>
      ${obsHtml}
    </div>
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0">
      ${statusBadge}
      <span style="font-size:11px;color:var(--text3)">${date}</span>
      <div style="display:flex;gap:4px">
        <button class="btn btn-sm" onclick="editConf('${key}')" style="padding:3px 8px;font-size:11px">✏️</button>
        <button class="btn btn-sm" onclick="delConf('${key}')" style="color:var(--red);border-color:var(--red-light);padding:3px 8px;font-size:11px">✕</button>
      </div>
    </div>
  </div>`;
}

// Helper: Populate atividade filter dropdown
function populateAtividadeFilter(allConfs) {
  const sel = document.getElementById('conf-f-ativ');
  if (!sel) return;
  
  const atividades = [...new Set(allConfs.map(([k, c]) => c.atividade).filter(Boolean))].sort();
  const currentValue = sel.value;
  
  sel.innerHTML = '<option value="">Todas as atividades</option>' +
    atividades.map(a => `<option value="${a}"${a === currentValue ? ' selected' : ''}>${a}</option>`).join('');
}

function renderConfirmacoes() {
  const el = document.getElementById('confs-lista');
  if (!el) return;

  const allConfs = state.confirmacoes ? Object.entries(state.confirmacoes) : [];

  // Populate atividade filter
  populateAtividadeFilter(allConfs);

  // Filter and sort
  const filtered = allConfs
    .filter(([k, c]) => {
      if (confFilter.status !== 'todos' && c.status !== confFilter.status) return false;
      if (confFilter.atividade && c.atividade !== confFilter.atividade) return false;
      return true;
    })
    .sort((a, b) => (b[1].ts || 0) - (a[1].ts || 0));

  // Render empty state
  if (!filtered.length) {
    el.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text3);font-size:13px">Nenhuma confirmação encontrada.</div>';
    return;
  }

  // Render cards
  const cardsHtml = filtered
    .map(([key, c]) => createConfirmacaoCard(key, c))
    .join('');
  
  el.innerHTML = `<div class="card">${cardsHtml}</div>`;
}

function editConf(key) {
  var c = state.confirmacoes[key];
  if(!c) return;
  editingConfKey = key;
  document.getElementById('conf-edit-subtitle').textContent = c.nomeLobinho + ' — ' + c.atividade + ' · ' + c.dataAtiv;
  document.getElementById('conf-edit-status').value = c.status||'sim';
  document.getElementById('conf-edit-obs').value = c.obs||'';
  document.getElementById('modal-conf-edit').classList.add('open');
}

function saveConfEdit() {
  if(!editingConfKey) return;
  var c = state.confirmacoes[editingConfKey];
  if(!c) return;
  c.status = document.getElementById('conf-edit-status').value;
  c.obs    = document.getElementById('conf-edit-obs').value.trim();
  closeModals();
  if(db) db.ref('alcateia/confirmacoes/' + editingConfKey).set(c)
    .then(()=>{ showToast('Confirmação atualizada!'); renderConfirmacoes(); renderComunicados(); });
  editingConfKey = null;
}

function delConf(key) {
  if(!confirm('Excluir esta confirmação?')) return;
  delete state.confirmacoes[key];
  if(db) db.ref('alcateia/confirmacoes/' + key).remove()
    .then(()=>{ showToast('Confirmação removida.'); renderConfirmacoes(); renderComunicados(); });
}

function saveComunicado() {
  var titulo = document.getElementById('com-titulo').value.trim();
  var texto  = document.getElementById('com-texto').value.trim();
  if(!titulo || !texto) { showToast('Preencha título e mensagem!'); return; }
  var item = {
    titulo,
    categoria: document.getElementById('com-cat').value,
    dataEvento: document.getElementById('com-data-evento').value.trim(),
    texto,
    fixado: document.getElementById('com-fixado').checked,
    ts: Date.now()
  };
  if(editingComIdx >= 0) {
    item.ts = state.comunicados[editingComIdx].ts; // preserve original date
    state.comunicados[editingComIdx] = item;
    showToast('Comunicado atualizado!');
  } else {
    state.comunicados.unshift(item);
    showToast('Comunicado publicado!');
  }
  editingComIdx = -1;
  closeModals();
  fbSaveSection('comunicados');
  renderComunicados();
}

function editCom(idx) {
  var c = state.comunicados[idx];
  editingComIdx = idx;
  document.getElementById('modal-com-title').textContent = 'Editar comunicado';
  document.getElementById('com-titulo').value = c.titulo;
  document.getElementById('com-cat').value = c.categoria||'aviso';
  document.getElementById('com-data-evento').value = c.dataEvento||'';
  document.getElementById('com-texto').value = c.texto;
  document.getElementById('com-fixado').checked = !!c.fixado;
  document.getElementById('modal-com').classList.add('open');
}

function delCom(idx) {
  state.comunicados.splice(idx, 1);
  fbSaveSection('comunicados');
  renderComunicados();
  showToast('Comunicado removido.');
}

function toggleFixarCom(idx) {
  state.comunicados[idx].fixado = !state.comunicados[idx].fixado;
  fbSaveSection('comunicados');
  renderComunicados();
  showToast(state.comunicados[idx].fixado ? 'Comunicado fixado!' : 'Comunicado desafixado.');
}

// ===================== FLUXO DE CAIXA =====================
var CATS_ENTRADA = ['Doações','Lucros','Outros'];
var CATS_SAIDA   = ['Compra de materiais','Alimentação','Transporte','Atividades','Outros'];
var caixaFilter  = {tipo:'todos', mes:'', cat:''};
var editingLancIdx = -1;

function updateLancCats() {
  var tipo = document.getElementById('lanc-tipo').value;
  var cats = tipo === 'entrada' ? CATS_ENTRADA : CATS_SAIDA;
  document.getElementById('lanc-cat').innerHTML = cats.map(c=>`<option>${c}</option>`).join('');
}

function openNovoLancamento() {
  editingLancIdx = -1;
  document.getElementById('modal-lanc-title').textContent = 'Novo lançamento';
  document.getElementById('lanc-tipo').value = 'saida';
  updateLancCats();
  document.getElementById('lanc-valor').value = '';
  document.getElementById('lanc-data').value = new Date().toISOString().split('T')[0];
  document.getElementById('lanc-desc').value = '';
  document.getElementById('modal-lancamento').classList.add('open');
}

function editLanc(idx) {
  var l = state.caixa[idx];
  editingLancIdx = idx;
  document.getElementById('modal-lanc-title').textContent = 'Editar lançamento';
  document.getElementById('lanc-tipo').value = l.tipo;
  updateLancCats();
  document.getElementById('lanc-cat').value = l.categoria;
  document.getElementById('lanc-valor').value = l.valor;
  document.getElementById('lanc-data').value = l.data;
  document.getElementById('lanc-desc').value = l.descricao||'';
  document.getElementById('modal-lancamento').classList.add('open');
}

function saveLancamento() {
  var valor = parseFloat(document.getElementById('lanc-valor').value);
  var data  = document.getElementById('lanc-data').value;
  if(!valor || valor <= 0) { showToast('Informe um valor válido!'); return; }
  if(!data) { showToast('Informe a data!'); return; }
  var item = {
    tipo:      document.getElementById('lanc-tipo').value,
    categoria: document.getElementById('lanc-cat').value,
    valor:     valor,
    data:      data,
    descricao: document.getElementById('lanc-desc').value.trim(),
    ts:        Date.now()
  };
  if(editingLancIdx >= 0) {
    state.caixa[editingLancIdx] = item;
    showToast('Lançamento atualizado!');
  } else {
    state.caixa.push(item);
    showToast('Lançamento adicionado!');
  }
  editingLancIdx = -1;
  closeModals();
  fbSaveSection('caixa');
  renderCaixa();
}

function delLanc(idx) {
  if(!confirm('Excluir este lançamento?')) return;
  state.caixa.splice(idx, 1);
  fbSaveSection('caixa');
  renderCaixa();
  showToast('Lançamento removido.');
}

function filterCaixa(tipo, btn) {
  if(tipo !== null) {
    caixaFilter.tipo = tipo;
    document.querySelectorAll('#p-caixa .filter-btn').forEach(b=>b.classList.remove('active'));
    if(btn) btn.classList.add('active');
  }
  caixaFilter.mes = (document.getElementById('caixa-filter-mes')||{value:''}).value||'';
  caixaFilter.cat = (document.getElementById('caixa-filter-cat')||{value:''}).value||'';
  renderCaixaLista();
}

function renderCaixa() {
  var stats = document.getElementById('caixa-stats');
  var lancamentos = state.caixa || [];

  var totalEntradas = lancamentos.filter(l=>l.tipo==='entrada').reduce((s,l)=>s+l.valor,0);
  var totalSaidas   = lancamentos.filter(l=>l.tipo==='saida').reduce((s,l)=>s+l.valor,0);
  var saldo = totalEntradas - totalSaidas;

  stats.innerHTML = `
    <div class="caixa-header-card">
      <div class="caixa-saldo-principal">
        <div class="caixa-saldo-label">Saldo Atual</div>
        <div class="caixa-saldo-valor" style="color:${saldo>=0?'var(--green)':'var(--red)'}">
          R$ ${saldo.toLocaleString('pt-BR',{minimumFractionDigits:2})}
        </div>
      </div>
      <div class="caixa-pills">
        <div class="caixa-pill caixa-pill-entrada">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
          Entradas R$ ${totalEntradas.toLocaleString('pt-BR',{minimumFractionDigits:2})}
        </div>
        <div class="caixa-pill caixa-pill-saida">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          Saídas R$ ${totalSaidas.toLocaleString('pt-BR',{minimumFractionDigits:2})}
        </div>
      </div>
      <button class="btn-novo-lancamento" onclick="openNovoLancamento()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Novo Lançamento
      </button>
    </div>
  `;

  renderCaixaGrafico();
  renderCaixaFiltros();
  renderCaixaLista();
}

function renderCaixaGrafico() {
  var grafico = document.getElementById('caixa-grafico');
  var legend  = document.getElementById('caixa-grafico-legend');

  var totalE = (state.caixa||[]).filter(l=>l.tipo==='entrada').reduce((s,l)=>s+l.valor, 0);
  var totalS = (state.caixa||[]).filter(l=>l.tipo==='saida').reduce((s,l)=>s+l.valor, 0);
  var maxVal = Math.max(totalE, totalS, 1);

  var pctE = Math.max(totalE > 0 ? 4 : 0, Math.round(totalE / maxVal * 100));
  var pctS = Math.max(totalS > 0 ? 4 : 0, Math.round(totalS / maxVal * 100));

  var fmt = v => 'R$ ' + v.toLocaleString('pt-BR', {minimumFractionDigits: 2});

  grafico.innerHTML = `
    <div class="caixa-barra-row">
      <span class="caixa-barra-label">Entradas</span>
      <div class="caixa-barra-track">
        <div class="caixa-barra-fill caixa-barra-entrada" style="width:${pctE}%"></div>
      </div>
      <span class="caixa-barra-valor" style="color:var(--accent)">${fmt(totalE)}</span>
    </div>
    <div class="caixa-barra-row">
      <span class="caixa-barra-label">Saídas</span>
      <div class="caixa-barra-track">
        <div class="caixa-barra-fill caixa-barra-saida" style="width:${pctS}%"></div>
      </div>
      <span class="caixa-barra-valor" style="color:var(--red)">${fmt(totalS)}</span>
    </div>
  `;

  legend.innerHTML = '';
}

function renderCaixaFiltros() {
  var meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  var mesesPresentes = [...new Set((state.caixa||[]).filter(l=>l.data).map(l=>l.data.substring(0,7)))].sort().reverse();

  var selMes = document.getElementById('caixa-filter-mes');
  var selCat = document.getElementById('caixa-filter-cat');
  if(selMes) {
    var curMes = selMes.value;
    selMes.innerHTML = '<option value="">Todos os meses</option>' +
      mesesPresentes.map(m => {
        var [y,mo] = m.split('-');
        return `<option value="${m}"${m===curMes?' selected':''}>${meses[parseInt(mo)-1]} ${y}</option>`;
      }).join('');
  }
  if(selCat) {
    var allCats = [...new Set((state.caixa||[]).map(l=>l.categoria).filter(Boolean))].sort();
    var curCat = selCat.value;
    selCat.innerHTML = '<option value="">Todas as categorias</option>' +
      allCats.map(c=>`<option value="${c}"${c===curCat?' selected':''}>${c}</option>`).join('');
  }
}

function renderCaixaLista() {
  var el = document.getElementById('caixa-lista');
  if(!el) return;

  var filtered = (state.caixa||[]).filter(l => {
    if(caixaFilter.tipo !== 'todos' && l.tipo !== caixaFilter.tipo) return false;
    if(caixaFilter.mes && (!l.data || !l.data.startsWith(caixaFilter.mes))) return false;
    if(caixaFilter.cat && l.categoria !== caixaFilter.cat) return false;
    return true;
  }).sort((a,b) => (b.data||'').localeCompare(a.data||''));

  if(!filtered.length) {
    el.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text3);font-size:13px">Nenhum lançamento encontrado.<br>Clique em <b>+ Novo lançamento</b> para começar.</div>';
    return;
  }

  // Group by month
  var byMonth = {};
  filtered.forEach(l => {
    var key = l.data ? l.data.substring(0,7) : 'sem-data';
    if(!byMonth[key]) byMonth[key] = [];
    byMonth[key].push(l);
  });

  var meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

  el.innerHTML = Object.entries(byMonth).sort((a,b)=>b[0].localeCompare(a[0])).map(([key, items]) => {
    var label = key === 'sem-data' ? 'Sem data' : (() => {
      var [y,m] = key.split('-');
      return meses[parseInt(m)-1] + ' ' + y;
    })();
    var subtotalE = items.filter(l=>l.tipo==='entrada').reduce((s,l)=>s+l.valor,0);
    var subtotalS = items.filter(l=>l.tipo==='saida').reduce((s,l)=>s+l.valor,0);

    var rows = items.map(l => {
      var idx = state.caixa.indexOf(l);
      var isEntrada = l.tipo === 'entrada';
      var dotColor  = isEntrada ? 'var(--accent)' : 'var(--red)';
      var dateStr   = l.data ? new Date(l.data+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'}) : '';
      return `<div class="lanc-row">
        <span class="lanc-tipo-dot" style="background:${dotColor}"></span>
        <div class="lanc-info">
          <div class="lanc-desc">${l.descricao || l.categoria}</div>
          <div class="lanc-meta">${l.categoria} · ${dateStr}</div>
        </div>
        <span class="lanc-valor ${l.tipo}">${isEntrada?'+':'-'}R$ ${l.valor.toLocaleString('pt-BR',{minimumFractionDigits:2})}</span>
        <div class="lanc-actions">
          <button class="lanc-btn" onclick="editLanc(${idx})" aria-label="Editar lançamento">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="lanc-btn lanc-btn-del" onclick="delLanc(${idx})" aria-label="Excluir lançamento">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>
      </div>`;
    }).join('');

    return `<div style="border-bottom:1px solid var(--border)">
      <div class="lanc-mes-header">
        <span class="lanc-mes-titulo">${label}</span>
        <span class="lanc-mes-entrada">+R$ ${subtotalE.toLocaleString('pt-BR',{minimumFractionDigits:2})}</span>
        <span class="lanc-mes-saida">-R$ ${subtotalS.toLocaleString('pt-BR',{minimumFractionDigits:2})}</span>
      </div>
      ${rows}
    </div>`;
  }).join('');
}

function exportarCaixa() {
  var wb = XLSX.utils.book_new();
  var meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

  var rows = [['Data','Tipo','Categoria','Valor (R$)','Descrição']];
  var sorted = [...(state.caixa||[])].sort((a,b)=>(a.data||'').localeCompare(b.data||''));
  sorted.forEach(l => {
    var dateStr = l.data ? new Date(l.data+'T12:00:00').toLocaleDateString('pt-BR') : '';
    rows.push([dateStr, l.tipo==='entrada'?'Entrada':'Saída', l.categoria, l.valor, l.descricao||'']);
  });

  // Summary
  rows.push([]);
  rows.push(['RESUMO']);
  var totalE = sorted.filter(l=>l.tipo==='entrada').reduce((s,l)=>s+l.valor,0);
  var totalS = sorted.filter(l=>l.tipo==='saida').reduce((s,l)=>s+l.valor,0);
  rows.push(['Total Entradas','','','R$ '+totalE.toFixed(2)]);
  rows.push(['Total Saídas','','','R$ '+totalS.toFixed(2)]);
  rows.push(['Saldo','','','R$ '+(totalE-totalS).toFixed(2)]);

  var ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = [{wch:12},{wch:10},{wch:22},{wch:14},{wch:40}];
  XLSX.utils.book_append_sheet(wb, ws, 'Fluxo de Caixa');
  downloadWB(wb, 'FluxoCaixa_Alcateia.xlsx');
}

// ===================== MAIS MENU =====================
function toggleMaisMenu() {
  var tray    = document.getElementById('mais-tray');
  var overlay = document.getElementById('mais-overlay');
  var isOpen  = tray.classList.contains('open');
  if(isOpen) {
    closeMaisMenu();
  } else {
    tray.classList.add('open');
    overlay.classList.add('open');
  }
}

function closeMaisMenu() {
  var tray = document.getElementById('mais-tray');
  var overlay = document.getElementById('mais-overlay');
  if(tray) tray.classList.remove('open');
  if(overlay) overlay.classList.remove('open');
}

// ===================== TEMA =====================
function toggleTheme() {
  var isDark = document.body.classList.toggle('dark');
  localStorage.setItem('chefiaTheme', isDark ? 'dark' : 'light');
  document.getElementById('theme-icon-moon').style.display = isDark ? 'none'  : '';
  document.getElementById('theme-icon-sun').style.display  = isDark ? ''      : 'none';
}

(function initTheme() {
  var saved = localStorage.getItem('chefiaTheme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.body.classList.add('dark');
    document.getElementById('theme-icon-moon').style.display = 'none';
    document.getElementById('theme-icon-sun').style.display  = '';
  }
})();

// ===================== PROTEÇÃO DE ACESSO =====================
// Verifica se o usuário está autenticado
if (sessionStorage.getItem('chefiaAutenticada') !== 'true') {
  // Redireciona para a página de login se não estiver autenticado
  window.location.href = 'chefia-login.html';
}

// ===================== INIT =====================
initFirebase();
// Navigate to hash on load (e.g. #presenca opens presença directly)
var initPage = window.location.hash.replace('#','') || 'dashboard';
