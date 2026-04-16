# Módulos do Sistema Chefia

Este diretório contém os módulos JavaScript do sistema de gestão da Alcateia Kotick.

## Visão Geral

A arquitetura foi dividida em módulos com responsabilidade única para facilitar manutenção, evolução e testes. O carregamento continua baseado em scripts clássicos, com APIs públicas expostas em `window` para compatibilidade com o restante da aplicação.

Atualmente, os arquivos do diretório já possuem implementação funcional. Alguns módulos ainda têm pontos de evolução, mas não estão mais apenas como estrutura prevista.

## Estrutura Atual

| Arquivo | Status | Responsabilidade |
|--------|--------|------------------|
| `state.js` | ✅ Implementado | Estado global e dados iniciais da aplicação |
| `utils.js` | ✅ Implementado | Funções utilitárias, datas, constantes e helper de download |
| `navigation.js` | ✅ Implementado | Navegação entre páginas, hash e sidebar mobile |
| `modals.js` | ✅ Implementado | Abertura, fechamento e inicialização de modais |
| `firebase.js` | ✅ Implementado | Integração com Firebase Realtime Database |
| `calendario.js` | ✅ Implementado | Renderização, filtro e CRUD do calendário |
| `presenca.js` | ✅ Implementado | Lista de presença, ordenação e faltas justificadas |
| `especialidades.js` | ✅ Implementado | Filtros e CRUD de especialidades |
| `matilhas.js` | ✅ Implementado | Matilhas, cargos e pontuação |
| `comunicados.js` | ✅ Implementado | Comunicados, fixação e visão de confirmações |
| `caixa.js` | ✅ Implementado | Resumo financeiro, lista, filtros e CRUD |
| `dashboard.js` | ✅ Implementado | Resumos, próximas atividades, avisos e tarefas |
| `import-export.js` | ✅ Implementado | Importação e exportação de dados via Excel |

## Dependências Entre Módulos

A implementação atual usa dependências globais entre módulos. Em especial:

- `firebase.js` depende de `state` e de funções como `render()`
- `navigation.js` depende de `render()` e da estrutura HTML das páginas
- `modals.js` depende de funções de módulos específicos, como cancelamento de FJ
- `dashboard.js` usa utilitários e helpers de outros módulos, como classificação do calendário
- `import-export.js` depende de `XLSX`, `state`, `fbSaveSection()` e utilitários de data

Por isso, a ordem de carregamento continua importante.

## APIs Públicas por Módulo

### `state.js`

Responsável por centralizar o estado global da aplicação e fornecer dados iniciais.

```javascript
window.state = {
  calendario: [],
  presenca: { datas: [], membros: [] },
  especialidades: [],
  matilhas: {},
  cargos: {},
  comunicados: [],
  confirmacoes: {},
  caixa: [],
  pontuacao: {},
  avisos_internos: [],
  todos_chefia: []
}
```

Observação: durante a execução, o estado também pode receber `justificativas`, utilizado por [`openFJModal()`](src/scripts/modules/presenca.js:105) e [`saveFJ()`](src/scripts/modules/presenca.js:127), além da sincronização em [`listenAll()`](src/scripts/modules/firebase.js:37).

### `utils.js`

Funções utilitárias reutilizadas em diferentes partes do sistema.

```javascript
showToast(msg)
excelSerialToDate(serial)
formatDateBR(date)
todayStr()
formatDateStrBR(dateStr)
isDateKey(k)
currentSemesterBounds()
s2ab(s)
```

Também expõe constantes globais:

```javascript
MESES_PT
DIAS_PT
MES_ORDER
MES_NUM
```

### `navigation.js`

Gerencia navegação entre seções, atualização do hash e comportamento da sidebar mobile.

```javascript
toggleSidebar()
closeSidebar()
goTo(page)
pageNames
pageList
```

### `modals.js`

Centraliza a lógica de modais do sistema.

```javascript
openAdd()
closeModals()
initModals()
```

Observação: [`openAdd()`](src/scripts/modules/modals.js:4) abre modais diferentes conforme a página ativa e inicializa estados globais como `window.editingCalIdx`, `window.editingEspIdx` e `window.editingComIdx`.

### `firebase.js`

Encapsula persistência e sincronização com Firebase.

```javascript
initFirebase()
fbSet(path, data)
listenAll()
fbSaveSection(section)
showSyncStatus(status)
```

Também publica:

```javascript
db
fbReady
```

Observação: em [`firebase.js`](src/scripts/modules/firebase.js), `window.db` e `window.fbReady` recebem o valor das variáveis no momento da exportação.

### `calendario.js`

Gerencia o calendário de atividades.

```javascript
renderCal()
filterCal(filter)
editCal(idx)
saveCalEvent()
delCal(idx)
getRowClass(ev)
isFeriado(ev)
```

Principais recursos:
- filtro por `todos`, `feriados`, `externos` e `sede`
- ordenação por mês e dia ao salvar
- classificação visual de linhas

### `presenca.js`

Gerencia a lista de presença e faltas justificadas.

```javascript
renderPresenca()
togglePresencaSort()
openCellDropdown(e, mi, ri)
setCell(mi, ri, val)
openFJModal(mi, ri)
saveFJ()
cancelFJ()
```

Principais recursos:
- ordenação alfabética ascendente/descendente
- marcação de `P`, `A` e `FJ`
- registro de justificativas em `state.justificativas`

### `especialidades.js`

Gerencia especialidades dos lobinhos.

```javascript
renderEsp()
filterEsp(filter)
populateEspLobinhos()
editEsp(idx)
saveEsp()
delEsp(idx)
```

Principais recursos:
- filtro por `todos`, `pendentes` e `concluidas`
- preenchimento automático de nomes a partir de [`state.presenca.membros`](src/scripts/modules/state.js:72)
- CRUD completo da lista

### `matilhas.js`

Gerencia matilhas, cargos e pontuação.

```javascript
renderMatilhas()
getPontuacao(mat)
addPont(mat, cat, delta)
confirmResetPontuacao()
toggleCargo(mat, nome, cargo)
saveCargos()
```

Observação importante: a assinatura real de [`toggleCargo()`](src/scripts/modules/matilhas.js:134) recebe três parâmetros: `mat`, `nome` e `cargo`.

### `comunicados.js`

Gerencia comunicados e confirmações.

```javascript
renderComunicados()
renderConfirmacoes()
saveComunicado()
editCom(idx)
delCom(idx)
toggleFixarCom(idx)
getConfirmacoesCount(idx)
verConfirmacoes(idx)
```

Principais recursos:
- ordenação por fixação e `timestamp`
- distinção entre aviso e evento
- exibição resumida de confirmações por comunicado

Observação: [`verConfirmacoes()`](src/scripts/modules/comunicados.js:193) ainda está como placeholder funcional, exibindo toast.

### `caixa.js`

Gerencia fluxo de caixa com visualização gráfica e em lista.

```javascript
renderCaixa()
renderCaixaGrafico()
renderCaixaLista()
filterCaixa(tipo)
toggleCaixaView(view)
saveLancamento()
editLanc(idx)
delLanc(idx)
openAddLancamento()
```

Principais recursos:
- visão por gráfico resumido
- visão em lista com filtro por tipo
- CRUD de lançamentos
- alternância entre `grafico` e `lista`

### `dashboard.js`

Gerencia a página inicial com indicadores e componentes auxiliares.

```javascript
renderDashboard()
renderProximasAtividades()
getProxAtividades(n)
renderAvisosInternos()
addAvisoInterno()
removeAvisoInterno(idx)
renderTodosChefia()
addTodoChefia()
toggleTodoChefia(idx)
removeTodoChefia(idx)
renderResumoGeral()
```

Principais recursos:
- cálculo de próximas atividades
- controle de avisos internos
- lista de tarefas da chefia
- resumo com estatísticas gerais e taxa de presença

### `import-export.js`

Gerencia importação e exportação de dados em Excel usando `XLSX`.

```javascript
importFile(event)
importCal(wb)
importPresenca(wb)
importEsp(wb)
importMat(wb)
exportarExcel()
exportCalendario(wb)
exportPresenca(wb)
exportEspecialidades(wb)
exportMatilhas(wb)
exportarCaixa(wb)
exportarCalendario()
exportarPresenca()
exportarEspecialidades()
exportarMatilhas()
```

Principais recursos:
- importação seletiva por aba existente
- exportação completa em um único arquivo
- exportação individual por seção

## Como Usar

### 1. Incluir no HTML

Adicione os scripts na ordem correta:

```html
<!-- Dependências externas -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>

<!-- Módulos da aplicação -->
<script src="../scripts/modules/state.js"></script>
<script src="../scripts/modules/utils.js"></script>
<script src="../scripts/modules/firebase.js"></script>
<script src="../scripts/modules/navigation.js"></script>
<script src="../scripts/modules/modals.js"></script>
<script src="../scripts/modules/calendario.js"></script>
<script src="../scripts/modules/presenca.js"></script>
<script src="../scripts/modules/especialidades.js"></script>
<script src="../scripts/modules/matilhas.js"></script>
<script src="../scripts/modules/comunicados.js"></script>
<script src="../scripts/modules/caixa.js"></script>
<script src="../scripts/modules/dashboard.js"></script>
<script src="../scripts/modules/import-export.js"></script>

<!-- Inicialização principal -->
<script src="../scripts/chefia.js"></script>
```

### 2. Inicializar

```javascript
initFirebase()
initModals()

const initPage = window.location.hash.replace('#', '') || 'dashboard'
goTo(initPage)
```

## Estruturas de Dados Relevantes

### Calendário

```javascript
{
  mes: "janeiro",
  data: "24/01",
  dia: "sáb.",
  atividade: "Indaba de Chefes",
  categoria: "",
  chefe: "",
  datas: "",
  obs: ""
}
```

### Presença

```javascript
{
  datas: ["31/01", "07/02"],
  membros: [
    {
      nome: "NOME DO LOBINHO",
      reg: ["P", "A", "FJ", ""]
    }
  ]
}
```

### Especialidade

```javascript
{
  nome: "Nome do Lobinho",
  esp: "Nome da Especialidade",
  nivel: 1,
  data: "DD/MM/YYYY",
  comprado: "OK",
  entregue: "OK",
  avaliador: "Nome do Avaliador"
}
```

### Matilhas

```javascript
{
  Amarela: ["NOME1", "NOME2"],
  Branca: ["NOME1", "NOME2"],
  Cinza: ["NOME1", "NOME2"],
  Preta: ["NOME1", "NOME2"]
}
```

### Cargos

```javascript
{
  Amarela: { primo: "", segundo: "" },
  Branca: { primo: "", segundo: "" },
  Cinza: { primo: "", segundo: "" },
  Preta: { primo: "", segundo: "" }
}
```

### Pontuação

```javascript
{
  Amarela: { jogos: 0, formacao: 0, comportamento: 0 },
  Branca: { jogos: 0, formacao: 0, comportamento: 0 },
  Cinza: { jogos: 0, formacao: 0, comportamento: 0 },
  Preta: { jogos: 0, formacao: 0, comportamento: 0 }
}
```

### Comunicado

```javascript
{
  titulo: "Título",
  categoria: "aviso",
  dataEvento: "",
  texto: "Conteúdo do comunicado",
  fixado: false,
  timestamp: 0
}
```

### Lançamento de Caixa

```javascript
{
  data: "YYYY-MM-DD",
  tipo: "receita",
  descricao: "Descrição",
  categoria: "Categoria",
  valor: 0
}
```

### Aviso Interno

```javascript
{
  texto: "Mensagem interna",
  data: "YYYY-MM-DD",
  timestamp: 0
}
```

### Todo da Chefia

```javascript
{
  texto: "Tarefa",
  concluido: false,
  data: "YYYY-MM-DD"
}
```

## Boas Práticas

- Use `const` e `let` no lugar de `var`
- Mantenha funções pequenas e focadas
- Exporte apenas a API pública necessária para `window`
- Preserve a ordem de carregamento dos scripts
- Teste cada módulo isoladamente antes de integrar
- Evite assumir que todos os módulos são independentes, pois a implementação atual usa dependências globais explícitas
- Ao documentar APIs, confira a assinatura real exportada no arquivo

## Pontos de Atenção Atuais

- [`firebase.js`](src/scripts/modules/firebase.js:8) contém credenciais diretamente no código
- [`state.js`](src/scripts/modules/state.js:4) inclui dados iniciais extensos, não apenas estrutura vazia
- [`firebase.js`](src/scripts/modules/firebase.js:49) e [`presenca.js`](src/scripts/modules/presenca.js:117) usam `state.justificativas`, mas essa chave não aparece no objeto inicial exportado em [`state.js`](src/scripts/modules/state.js:4)
- [`dashboard.js`](src/scripts/modules/dashboard.js:1) exporta mais funções do que a versão anterior do README documentava
- [`import-export.js`](src/scripts/modules/import-export.js:188) possui funções de exportação em lote e também exportações individuais
- [`comunicados.js`](src/scripts/modules/comunicados.js:193) ainda não implementa a visualização detalhada de confirmações

## Troubleshooting

### Erro: `"X is not defined"`

- Verifique a ordem de carregamento dos scripts
- Confirme se a função foi exportada para `window`
- Certifique-se de que dependências externas foram carregadas antes dos módulos
- Verifique se a função depende de outro módulo já carregado

### Firebase não conecta

- Verifique credenciais e configuração em [`firebase.js`](src/scripts/modules/firebase.js)
- Confirme carregamento do SDK do Firebase
- Inspecione erros no console do navegador

### Página não renderiza

- Verifique se a função global `render()` existe
- Confirme se o módulo correspondente foi carregado
- Revise erros JavaScript no console
- Confira se os elementos HTML esperados pelo módulo existem na página

## Referência

Para contexto arquitetural e estratégia de modularização, consulte [`docs/MODULARIZACAO.md`](docs/MODULARIZACAO.md).