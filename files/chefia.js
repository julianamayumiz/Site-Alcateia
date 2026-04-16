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
  presenca: {
    datas: ["31/01","07/02","14/02","21/02","28/02","07/03","14/03","21/03","28/03","04/04","11/04","18/04","25/04","02/05","09/05","16/05","23/05","30/05","06/06","13/06","20/06","27/06","01/08","08/08","15/08","22/08","29/08","05/09","12/09","19/09","26/09","03/10","10/10","17/10","24/10","31/10","07/11","14/11","21/11","28/11"],
    membros: [
      {nome:"ALEX HWANG",reg:["P","A","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"ANA BEATRIZ MEGUMI HARASAKI",reg:["P","P","P","P","P","A","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"CAIO HIDEKI RODRIGUES UKON",reg:["P","P","A","A","P","A","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"CAIO KAZUKI ISHIY",reg:["","P","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"CAROLINA HARUMI HIRAOKA",reg:["","P","A","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"CAROLINA NAOMI ITIKAWA NAKAMURA",reg:["P","P","P","A","P","P","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"DANIEL MARIANO COUTINHO SOUSA",reg:["P","P","P","P","P","P","P","FJ","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"ENZO NAGADO",reg:["A","A","P","P","FJ","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"ERIC RYU SHINTANI KOJO",reg:["P","P","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"HENRY RYU TAKAHASHI KITAMURA",reg:["P","P","P","P","A","P","A","P","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"JULIA MIE TACHIBANA",reg:["","P","A","A","P","P","P","P","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LETICIA LUMI TAKAHASHI KITAMURA",reg:["P","P","P","P","A","P","P","P","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LIA SAORI TAGINI",reg:["P","P","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LÍVIA YUI AKAMINE",reg:["P","P","A","A","P","P","P","A","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUCAS MARIANO COUTINHO SOUSA",reg:["P","P","P","P","P","P","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUCAS MASAKI ISHIY",reg:["P","P","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUCAS NORIO YAMADA KIMURA",reg:["P","P","P","P","P","P","P","P","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUCAS SUBARU OYAMA",reg:["P","P","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUCCA JUN MAIA YORINORI",reg:["A","P","P","P","P","FJ","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUIZA KIMI COSTIUC YAMACHIRA",reg:["P","P","P","P","P","P","P","P","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"LUIZA NAOMI FERNANDES FUJINO",reg:["P","FJ","A","A","P","A","P","FJ","","","A","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"MARIANA AYUMI HARASAKI",reg:["P","P","P","P","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"MIA TANIGUCHI",reg:["P","A","P","P","A","P","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"MIGUEL KNISS RODRIGUES",reg:["FJ","P","P","P","P","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"OLIVIA NAOMI WATANABE REZZANI",reg:["P","P","P","P","P","A","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"PEDRO SHUNJI RODRIGUES UKON",reg:["P","P","A","A","P","P","P","A","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"RAFAEL KENZO PENIN NISHIZAKI",reg:["","P","A","A","A","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"SABRINA SAYURI KOBAYASHI CAVALCANTE",reg:["","P","P","P","A","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"THOMAS AKIRA KANO MIYAGI",reg:["P","P","P","P","P","A","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},
      {nome:"TIAGO JUN NAKAMURA OKUMA",reg:["P","P","P","P","FJ","P","P","P","","","P","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]}
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

function renderPresenca() {
  var d = state.presenca;
  var head = document.getElementById('pres-head');
  var body = document.getElementById('pres-body');
  var stats = document.getElementById('presence-stats');

  var hh = '<th class="name-col">Nome</th>';
  d.datas.forEach(dt => { hh += `<th class="date-col">${dt}</th>`; });
  hh += `<th style="min-width:60px;text-align:center;cursor:pointer;user-select:none" onclick="togglePresencaSort()" title="Ordenar por presença">% <span id="pres-sort-arrow">${presencaSortDir==='desc'?'↓':presencaSortDir==='asc'?'↑':'↕'}</span></th>`;
  head.innerHTML = hh;

  var membrosRender = [...d.membros];
  if(presencaSortDir) {
    membrosRender.sort((a,b) => {
      var filledA = a.reg.filter(r=>r!=='').length;
      var presA = a.reg.filter(r=>r==='P').length;
      var pctA = filledA > 0 ? Math.round(presA/filledA*100) : -1;
      var filledB = b.reg.filter(r=>r!=='').length;
      var presB = b.reg.filter(r=>r==='P').length;
      var pctB = filledB > 0 ? Math.round(presB/filledB*100) : -1;
      return presencaSortDir === 'desc' ? pctB - pctA : pctA - pctB;
    });
  }

  var html = '';
  membrosRender.forEach((m, mi) => {
    html += `<tr><td class="name-col">${m.nome}</td>`;
    m.reg.forEach((r, ri) => {
      var label, cellCls, extra = '';
      if(r === 'FJ') {
        var just = (state.justificativas[mi] && state.justificativas[mi][ri]) || '';
        label = just ? '★' : 'FJ';
        cellCls = 'cell-FJ';
        if(just) extra = `<div class="fj-tooltip">${just}</div>`;
      } else {
        label = r || '·';
        cellCls = r ? 'cell-'+r : 'cell-empty';
      }
      var wrapCls = r === 'FJ' ? 'cell-FJ-wrap' : '';
      var wrapTabIndex = r === 'FJ' ? 'tabindex="0"' : '';
      html += `<td class="date-col">
        <div class="${wrapCls}" style="position:relative;display:inline-block" ${wrapTabIndex}>
          <button class="presence-cell ${cellCls}" onclick="openCellDropdown(event,${mi},${ri})">${label}</button>
          ${extra}
        </div>
      </td>`;
    });
    var filled = m.reg.filter(r => r !== '').length;
    var pres = m.reg.filter(r => r==='P').length;
    var pct = filled > 0 ? Math.round(pres/filled*100) : null;
    var color = pct===null?'var(--text3)':pct>=75?'var(--accent)':pct>=50?'var(--accent2)':'var(--red)';
    html += `<td style="text-align:center;font-family:'DM Mono',monospace;font-size:12px;font-weight:600;color:${color}">${pct!==null?pct+'%':'—'}</td></tr>`;
  });
  body.innerHTML = html;

  var allRegs = d.membros.flatMap(m=>m.reg).filter(r=>r!=='');
  var total = allRegs.length || 1;
  var totalP = allRegs.filter(r=>r==='P').length;
  var totalA = allRegs.filter(r=>r==='A').length;
  var totalFJ = allRegs.filter(r=>r==='FJ').length;
  stats.innerHTML = `
    <div class="stat-mini"><div class="val" style="color:var(--accent)">${Math.round(totalP/total*100)}%</div><div class="lbl">Presença geral</div></div>
    <div class="stat-mini"><div class="val">${d.membros.length}</div><div class="lbl">Membros</div></div>
    <div class="stat-mini"><div class="val">${d.datas.length}</div><div class="lbl">Reuniões</div></div>
    <div class="stat-mini"><div class="val" style="color:var(--red)">${totalA}</div><div class="lbl">Faltas</div></div>
    <div class="stat-mini"><div class="val" style="color:var(--accent2)">${totalFJ}</div><div class="lbl">F. justificadas</div></div>
  `;
}

function togglePresencaSort() {
  presencaSortDir = presencaSortDir === null ? 'desc' : presencaSortDir === 'desc' ? 'asc' : null;
  renderPresenca();
}

// ---- Dropdown ----
function openCellDropdown(e, mi, ri) {
  e.stopPropagation();
  closeDropdown();

  var cur = state.presenca.membros[mi].reg[ri];
  var nome = state.presenca.membros[mi].nome.split(' ')[0];
  var data = state.presenca.datas[ri];
  var just = (state.justificativas[mi] && state.justificativas[mi][ri]) || '';

  var menu = document.createElement('div');
  menu.className = 'cell-dropdown-menu open';
  menu.id = 'cell-dd-menu';

  var opts = [
    {val:'P',  label:'Presente',          color:'var(--accent)',  bg:'var(--accent-light)'},
    {val:'A',  label:'Ausente',            color:'var(--red)',     bg:'var(--red-light)'},
    {val:'FJ', label:'Falta Justificada',  color:'var(--accent2)', bg:'var(--accent2-light)'},
    {val:'',   label:'Limpar',             color:'var(--text3)',   bg:'var(--surface2)'}
  ];

  var header = document.createElement('div');
  header.style.cssText = 'padding:8px 14px 6px;font-size:11px;color:var(--text3);border-bottom:1px solid var(--border);font-weight:600;letter-spacing:0.04em;text-transform:uppercase';
  header.textContent = nome + ' · ' + data;
  menu.appendChild(header);

  opts.forEach(opt => {
    var btn = document.createElement('button');
    btn.className = 'cell-dropdown-opt';
    var isCur = cur === opt.val;
    btn.innerHTML = `<span class="opt-dot" style="background:${opt.color}"></span>${opt.label}${isCur?' <span style="margin-left:auto;font-size:10px;opacity:0.6">✓</span>':''}`;
    btn.onclick = function(ev) {
      ev.stopPropagation();
      closeDropdown();
      setCell(mi, ri, opt.val);
    };
    menu.appendChild(btn);
  });

  // If FJ and has justificativa, add edit option
  if(cur === 'FJ') {
    var editBtn = document.createElement('button');
    editBtn.className = 'cell-dropdown-opt';
    editBtn.style.borderTop = '1px solid var(--border)';
    editBtn.style.color = 'var(--accent)';
    editBtn.innerHTML = `<span style="font-size:13px">✏️</span> ${just ? 'Editar justificativa' : 'Adicionar justificativa'}`;
    editBtn.onclick = function(ev) {
      ev.stopPropagation();
      closeDropdown();
      openFJModal(mi, ri);
    };
    menu.appendChild(editBtn);
  }

  document.body.appendChild(menu);
  activeDropdown = menu;

  // Position the menu near the button
  var rect = e.currentTarget.getBoundingClientRect();
  var menuH = opts.length * 38 + 60;
  var top = rect.bottom + 4;
  if(top + menuH > window.innerHeight) top = rect.top - menuH - 4;
  var left = rect.left;
  if(left + 140 > window.innerWidth) left = window.innerWidth - 144;
  menu.style.top = top + 'px';
  menu.style.left = left + 'px';
}

function closeDropdown() {
  if(activeDropdown) { activeDropdown.remove(); activeDropdown = null; }
}

document.addEventListener('click', closeDropdown);
document.addEventListener('scroll', closeDropdown, true);

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
  var body = document.getElementById('esp-body');
  var stats = document.getElementById('esp-stats');

  var txt      = ((document.getElementById('esp-search')||{}).value||'').toLowerCase();
  var lobinho  = ((document.getElementById('esp-filter-lobinho')||{}).value||'');
  var nivel    = ((document.getElementById('esp-filter-nivel')||{}).value||'');
  var comprado = ((document.getElementById('esp-filter-comprado')||{}).value||'');
  var entregue = ((document.getElementById('esp-filter-entregue')||{}).value||'');

  var data = state.especialidades.filter(e => {
    if(txt && !e.nome.toLowerCase().includes(txt) && !e.esp.toLowerCase().includes(txt)) return false;
    if(lobinho && e.nome !== lobinho) return false;
    if(nivel !== '' && String(e.nivel) !== nivel) return false;
    if(comprado === 'ok'  && e.comprado !== 'OK') return false;
    if(comprado === 'nao' && e.comprado === 'OK') return false;
    var entOK = ['OK','Ok','ok','Sim'].includes(e.entregue);
    if(entregue === 'sim' && !entOK) return false;
    if(entregue === 'nao' && entOK)  return false;
    return true;
  });

  var html = '';
  data.forEach((e, i) => {
    var compOK = e.comprado==='OK';
    var entOK = ['OK','Ok','ok','Sim'].includes(e.entregue);
    var idx = state.especialidades.indexOf(e);
    html += `<tr>
      <td><b>${e.nome}</b></td>
      <td>${e.esp}</td>
      <td><span class="nivel-badge nivel-${e.nivel}">${e.nivel}</span></td>
      <td style="font-family:'DM Mono',monospace;font-size:12px">${e.data||'—'}</td>
      <td><span class="badge ${compOK?'badge-green':'badge-red'}">${e.comprado}</span></td>
      <td><span class="badge ${entOK?'badge-green':'badge-red'}">${e.entregue||'—'}</span></td>
      <td style="color:var(--text2);font-size:12px">${e.avaliador||'—'}</td>
      <td style="white-space:nowrap">
        <button class="btn btn-sm" onclick="editEsp(${idx})" style="padding:3px 8px;font-size:11px;margin-right:4px" title="Editar">✏️</button>
        <button class="btn btn-sm" onclick="delEsp(${idx})" style="color:var(--red);border-color:var(--red-light);padding:3px 8px;font-size:11px" title="Excluir">✕</button>
      </td>
    </tr>`;
  });

  body.innerHTML = html || '<tr><td colspan="8" style="text-align:center;padding:32px;color:var(--text3)">Nenhum resultado.</td></tr>';

  var total = state.especialidades.length;
  var entregues = state.especialidades.filter(e=>['OK','Ok','ok','Sim'].includes(e.entregue)).length;
  var pendentes = total-entregues;
  var nivel0 = state.especialidades.filter(e=>e.nivel==0).length;
  stats.innerHTML = `
    <div class="stat-mini"><div class="val">${total}</div><div class="lbl">Total</div></div>
    <div class="stat-mini"><div class="val" style="color:var(--accent)">${entregues}</div><div class="lbl">Entregues</div></div>
    <div class="stat-mini"><div class="val" style="color:var(--red)">${pendentes}</div><div class="lbl">Pendentes</div></div>
    <div class="stat-mini"><div class="val" style="color:#7c3aed">${nivel0}</div><div class="lbl">Insígnias</div></div>
  `;
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
    var cls = MATILHA_COLORS[mat]||'';
    var p = getPontuacao(mat);
    var dotColor = MAT_DOT_COLORS[mat]||'#999';
    return `<div class="pont-card ${cls}">
      <div class="pont-header">
        <div class="matilha-dot"></div>
        <span style="font-weight:600;font-size:14px">${mat}</span>
        <span class="pont-total" style="color:${p.total>=0?dotColor:'var(--red)'}">${p.total>=0?'+':''}${p.total}</span>
      </div>
      <div class="pont-cats">
        <div class="pont-cat-row">
          <span class="pont-cat-label">🎮 Jogos</span>
          <div class="pont-btns">
            <button class="pont-btn minus" onclick="addPont('${mat}','jogos',-1)">−</button>
            <span class="pont-val" style="color:var(--accent)">${p.jogos}</span>
            <button class="pont-btn plus"  onclick="addPont('${mat}','jogos',+1)">+</button>
          </div>
        </div>
        <div class="pont-cat-row">
          <span class="pont-cat-label">📚 Formação</span>
          <div class="pont-btns">
            <button class="pont-btn minus" onclick="addPont('${mat}','formacao',-1)">−</button>
            <span class="pont-val" style="color:var(--accent)">${p.formacao}</span>
            <button class="pont-btn plus"  onclick="addPont('${mat}','formacao',+1)">+</button>
          </div>
        </div>
        <div class="pont-cat-row" style="border-top:1px dashed var(--border);padding-top:8px;margin-top:2px">
          <span class="pont-cat-label">⚠️ Comportamento <span style="font-size:10px;color:var(--red)">(penalidade)</span></span>
          <div class="pont-btns">
            <button class="pont-btn minus" onclick="addPont('${mat}','comportamento',-1)" style="border-color:var(--accent);color:var(--accent)" title="Remover penalidade">−</button>
            <span class="pont-val" style="color:var(--red)">-${p.comportamento}</span>
            <button class="pont-btn plus" onclick="addPont('${mat}','comportamento',+1)" style="border-color:var(--red);color:var(--red)" title="Adicionar penalidade">+</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

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
    apiKey: "AIzaSyBqn10ZjuimbifYx_3813caY-s9boS7FKM",
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
  }
}

function fbSet(path, data) {
  if(!fbReady || !db) return;
  db.ref('alcateia/' + path).set(data)
    .then(() => showSyncStatus('salvo'))
    .catch(e => { console.warn('fbSet error', e); showSyncStatus('erro'); });
}

function listenAll() {
  if(!db) return;
  var ref = db.ref('alcateia');

  ref.once('value').then(snap => {
    var d = snap.val();
    if(d) {
      if(d.calendario  && Array.isArray(d.calendario))  state.calendario  = d.calendario;
      if(d.presenca    && d.presenca.datas)              state.presenca    = d.presenca;
      if(d.especialidades && Array.isArray(d.especialidades)) state.especialidades = d.especialidades;
      if(d.matilhas)   state.matilhas  = d.matilhas;
      if(d.cargos)     state.cargos    = d.cargos;
      if(d.justificativas) state.justificativas = d.justificativas;
      if(d.comunicados && Array.isArray(d.comunicados)) state.comunicados = d.comunicados;
      if(d.confirmacoes) state.confirmacoes = d.confirmacoes;
      if(d.caixa && Array.isArray(d.caixa)) state.caixa = d.caixa;
      if(d.pontuacao) state.pontuacao = d.pontuacao;
      if(d.avisos_internos && Array.isArray(d.avisos_internos)) state.avisos_internos = d.avisos_internos;
      if(d.todos_chefia && Array.isArray(d.todos_chefia)) state.todos_chefia = d.todos_chefia;
    }
    showSyncStatus('ok');
    // Re-render active page with fresh data
    var activePage = document.querySelector('.page.active');
    if(activePage) render(activePage.id.replace('p-',''));
  }).catch(e => { console.warn('Firebase read error:', e); showSyncStatus('offline'); });

  // Listen for real-time changes from other devices
  ref.on('value', snap => {
    var d = snap.val();
    if(!d) return;
    var changed = false;
    if(d.calendario  && JSON.stringify(d.calendario)  !== JSON.stringify(state.calendario))  { state.calendario  = d.calendario;  changed=true; }
    if(d.presenca    && JSON.stringify(d.presenca)    !== JSON.stringify(state.presenca))    { state.presenca    = d.presenca;    changed=true; }
    if(d.especialidades && JSON.stringify(d.especialidades) !== JSON.stringify(state.especialidades)) { state.especialidades = d.especialidades; changed=true; }
    if(d.matilhas    && JSON.stringify(d.matilhas)    !== JSON.stringify(state.matilhas))    { state.matilhas    = d.matilhas;    changed=true; }
    if(d.cargos      && JSON.stringify(d.cargos)      !== JSON.stringify(state.cargos))      { state.cargos      = d.cargos;      changed=true; }
    if(d.justificativas && JSON.stringify(d.justificativas) !== JSON.stringify(state.justificativas)) { state.justificativas = d.justificativas; changed=true; }
    if(d.comunicados && JSON.stringify(d.comunicados) !== JSON.stringify(state.comunicados)) { state.comunicados = d.comunicados; changed=true; }
    if(d.confirmacoes && JSON.stringify(d.confirmacoes) !== JSON.stringify(state.confirmacoes)) { state.confirmacoes = d.confirmacoes; changed=true; }
    if(d.caixa && JSON.stringify(d.caixa) !== JSON.stringify(state.caixa)) { state.caixa = d.caixa; changed=true; }
    if(d.pontuacao   && JSON.stringify(d.pontuacao)   !== JSON.stringify(state.pontuacao))   { state.pontuacao   = d.pontuacao;   changed=true; }
    if(d.avisos_internos && JSON.stringify(d.avisos_internos) !== JSON.stringify(state.avisos_internos)) { state.avisos_internos = d.avisos_internos; changed=true; }
    if(d.todos_chefia && JSON.stringify(d.todos_chefia) !== JSON.stringify(state.todos_chefia)) { state.todos_chefia = d.todos_chefia; changed=true; }
    if(changed) {
      var activePage = document.querySelector('.page.active');
      if(activePage) render(activePage.id.replace('p-',''));
    }
  });
}

// Save entire state section to Firebase
function fbSaveSection(section) {
  if(!fbReady || !db) return;
  db.ref('alcateia/' + section).set(state[section])
    .then(() => showSyncStatus('salvo'))
    .catch(() => showSyncStatus('erro'));
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

function renderComunicados() {
  var lista  = document.getElementById('com-lista');
  var stats  = document.getElementById('com-stats');

  var confs    = state.confirmacoes ? Object.values(state.confirmacoes) : [];
  var confSim  = confs.filter(c=>c.status==='sim').length;
  var confNao  = confs.filter(c=>c.status==='nao').length;
  var confTalvez = confs.filter(c=>c.status==='talvez').length;

  var coms    = [...state.comunicados].sort((a,b) => {
    if(a.fixado && !b.fixado) return -1;
    if(!a.fixado && b.fixado) return 1;
    return (b.ts||0) - (a.ts||0);
  });

  // Update badges
  var badgeComs  = document.getElementById('badge-coms');
  var badgeConfs = document.getElementById('badge-confs');
  if(badgeComs)  badgeComs.textContent  = coms.length;
  if(badgeConfs) badgeConfs.textContent = confs.length;

  stats.innerHTML = '';

  if(!coms.length) {
    lista.innerHTML = `<div style="text-align:center;padding:60px 20px;color:var(--text3)">
      <div style="font-size:36px;margin-bottom:12px">📢</div>
      <p>Nenhum comunicado publicado ainda.<br>Clique em <b>Novo</b> para criar o primeiro.</p>
    </div>`;
    return;
  }

  lista.innerHTML = coms.map(c => {
    var realIdx = state.comunicados.indexOf(c);
    var catCls  = 'com-cat-' + (c.categoria||'aviso');
    var catLabel = CAT_LABELS[c.categoria] || '📋 Aviso';
    var dataStr  = c.dataEvento ? ` · 📅 ${c.dataEvento}` : '';
    var pubDate  = c.ts ? new Date(c.ts).toLocaleDateString('pt-BR', {day:'2-digit',month:'2-digit',year:'numeric'}) : '';
    return `<div class="com-card${c.fixado?' fixado':''}">
      <div class="com-header">
        <span class="com-cat-badge ${catCls}">${catLabel}</span>
        <span class="com-titulo">${c.fixado?'📌 ':''}${c.titulo}</span>
      </div>
      <div class="com-meta">Publicado em ${pubDate}${dataStr}</div>
      <div class="com-texto">${c.texto}</div>
      <div class="com-actions">
        <button class="btn btn-sm" onclick="editCom(${realIdx})">✏️ Editar</button>
        <button class="btn btn-sm" onclick="toggleFixarCom(${realIdx})" style="color:var(--accent2)">${c.fixado?'📌 Desafixar':'📌 Fixar'}</button>
        <button class="btn btn-sm" onclick="delCom(${realIdx})" style="color:var(--red);border-color:var(--red-light)">✕ Excluir</button>
      </div>
    </div>`;
  }).join('');

  if(comSubtab === 'confs') renderConfirmacoes();
}

function renderConfirmacoes() {
  var el = document.getElementById('confs-lista');
  if(!el) return;

  var allConfs = state.confirmacoes ? Object.entries(state.confirmacoes) : [];

  // Populate atividade filter
  var sel = document.getElementById('conf-f-ativ');
  if(sel) {
    var ativs = [...new Set(allConfs.map(([k,c])=>c.atividade).filter(Boolean))].sort();
    var curAtiv = sel.value;
    sel.innerHTML = '<option value="">Todas as atividades</option>' +
      ativs.map(a=>`<option value="${a}"${a===curAtiv?' selected':''}>${a}</option>`).join('');
  }

  // Filter
  var filtered = allConfs.filter(([k,c]) => {
    if(confFilter.status !== 'todos' && c.status !== confFilter.status) return false;
    if(confFilter.atividade && c.atividade !== confFilter.atividade) return false;
    return true;
  }).sort((a,b) => (b[1].ts||0) - (a[1].ts||0));

  if(!filtered.length) {
    el.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text3);font-size:13px">Nenhuma confirmação encontrada.</div>';
    return;
  }

  el.innerHTML = `<div class="card">` + filtered.map(([key, c]) => {
    var statusBadge = c.status==='sim'
      ? '<span class="badge badge-green">✅ Vai</span>'
      : c.status==='nao'
      ? '<span class="badge badge-red">❌ Não vai</span>'
      : '<span style="background:var(--accent2-light);color:var(--accent2);padding:2px 8px;border-radius:20px;font-size:11.5px;font-weight:500">⚠️ Talvez</span>';
    var date = c.ts ? new Date(c.ts).toLocaleDateString('pt-BR') : '';
    return `<div style="display:flex;align-items:flex-start;gap:10px;padding:12px 16px;border-bottom:1px solid var(--border)">
      <div style="flex:1;min-width:0">
        <div style="font-weight:500;font-size:13px">${c.nomeLobinho}</div>
        <div style="font-size:12px;color:var(--text3);margin-top:2px">${c.atividade||''} · ${c.dataAtiv||''}</div>
        ${c.obs ? `<div style="font-size:12px;color:var(--text2);margin-top:3px;font-style:italic">"${c.obs}"</div>` : ''}
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
  }).join('') + `</div>`;
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
