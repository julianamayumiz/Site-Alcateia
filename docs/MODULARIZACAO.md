# Guia de Modularização do Sistema Chefia

## Visão Geral

O sistema foi reorganizado em módulos JavaScript separados para reduzir acoplamento, facilitar manutenção e permitir evolução incremental. A arquitetura atual já possui implementação funcional em todos os arquivos presentes em [`src/scripts/modules/`](src/scripts/modules/), ainda que alguns pontos permaneçam em evolução.

A modularização adotada continua baseada em scripts clássicos carregados no HTML, com APIs públicas expostas em `window` para manter compatibilidade com o restante da aplicação.

## Estrutura Atual de Módulos

```text
src/scripts/
├── chefia.js (arquivo principal - orquestrador)
└── modules/
    ├── state.js
    ├── utils.js
    ├── navigation.js
    ├── modals.js
    ├── firebase.js
    ├── calendario.js
    ├── presenca.js
    ├── especialidades.js
    ├── matilhas.js
    ├── comunicados.js
    ├── caixa.js
    ├── dashboard.js
    ├── import-export.js
    └── README.md
```

## Status dos Módulos

| Módulo | Status | Responsabilidade principal |
|--------|--------|----------------------------|
| `state.js` | ✅ Implementado | Estado global e dados iniciais |
| `utils.js` | ✅ Implementado | Utilitários compartilhados |
| `navigation.js` | ✅ Implementado | Navegação, hash e sidebar |
| `modals.js` | ✅ Implementado | Controle de modais |
| `firebase.js` | ✅ Implementado | Persistência e sincronização |
| `calendario.js` | ✅ Implementado | Calendário e CRUD de atividades |
| `presenca.js` | ✅ Implementado | Presença e faltas justificadas |
| `especialidades.js` | ✅ Implementado | Especialidades e filtros |
| `matilhas.js` | ✅ Implementado | Matilhas, cargos e pontuação |
| `comunicados.js` | ✅ Implementado | Comunicados e confirmações |
| `caixa.js` | ✅ Implementado | Fluxo de caixa |
| `dashboard.js` | ✅ Implementado | Resumos, avisos e tarefas |
| `import-export.js` | ✅ Implementado | Importação/exportação Excel |

## Módulos Implementados

### 1. `state.js`

**Responsabilidade:** gerencia o estado global da aplicação.

Contém dados e coleções usadas pelos demais módulos, incluindo:

- calendário de atividades
- presença
- especialidades
- matilhas e cargos
- comunicados e confirmações
- fluxo de caixa
- pontuação
- avisos internos
- tarefas da chefia

Observação: além das chaves iniciais, o sistema também usa `state.justificativas` em integração com [`presenca.js`](src/scripts/modules/presenca.js) e [`firebase.js`](src/scripts/modules/firebase.js).

### 2. `utils.js`

**Responsabilidade:** centraliza funções utilitárias compartilhadas.

Principais itens expostos:

- [`showToast()`](src/scripts/modules/utils.js:5)
- constantes de meses e dias
- [`excelSerialToDate()`](src/scripts/modules/utils.js:20)
- [`formatDateBR()`](src/scripts/modules/utils.js:26)
- [`todayStr()`](src/scripts/modules/utils.js:32)
- [`formatDateStrBR()`](src/scripts/modules/utils.js:37)
- [`isDateKey()`](src/scripts/modules/utils.js:43)
- [`currentSemesterBounds()`](src/scripts/modules/utils.js:47)
- [`s2ab()`](src/scripts/modules/utils.js:55)
- [`toggleTheme()`](src/scripts/modules/utils.js:63) e inicialização automática do tema a partir de `localStorage`/`prefers-color-scheme`

### 3. `navigation.js`

**Responsabilidade:** controla a navegação da interface.

Principais recursos:

- [`goTo()`](src/scripts/modules/navigation.js:30) para trocar a página ativa
- [`toggleSidebar()`](src/scripts/modules/navigation.js:17)
- [`closeSidebar()`](src/scripts/modules/navigation.js:24)
- atualização de hash
- destaque de item ativo na navegação

### 4. `modals.js`

**Responsabilidade:** gerencia abertura e fechamento de modais.

Principais recursos:

- [`openAdd()`](src/scripts/modules/modals.js:4) contextual por página
- [`closeModals()`](src/scripts/modules/modals.js:43)
- [`initModals()`](src/scripts/modules/modals.js:48)

### 5. `firebase.js`

**Responsabilidade:** integra o sistema ao Firebase Realtime Database.

Principais recursos:

- [`initFirebase()`](src/scripts/modules/firebase.js:7)
- [`fbSet()`](src/scripts/modules/firebase.js:30)
- [`listenAll()`](src/scripts/modules/firebase.js:37)
- [`fbSaveSection()`](src/scripts/modules/firebase.js:88)
- [`showSyncStatus()`](src/scripts/modules/firebase.js:96)

Observações:

- o arquivo contém credenciais diretamente no código
- o módulo depende de `state` e da função global `render()`

### 6. `calendario.js`

**Responsabilidade:** gerencia o calendário de atividades.

Funções principais implementadas:

- [`renderCal()`](src/scripts/modules/calendario.js:7)
- [`filterCal()`](src/scripts/modules/calendario.js:53)
- [`editCal()`](src/scripts/modules/calendario.js:65)
- [`saveCalEvent()`](src/scripts/modules/calendario.js:83)
- [`delCal()`](src/scripts/modules/calendario.js:125)
- [`getRowClass()`](src/scripts/modules/calendario.js:134)
- [`isFeriado()`](src/scripts/modules/calendario.js:141)

### 7. `presenca.js`

**Responsabilidade:** gerencia a lista de presença.

Funções principais implementadas:

- [`renderPresenca()`](src/scripts/modules/presenca.js:7)
- [`togglePresencaSort()`](src/scripts/modules/presenca.js:42)
- [`openCellDropdown()`](src/scripts/modules/presenca.js:53)
- [`setCell()`](src/scripts/modules/presenca.js:88)
- [`openFJModal()`](src/scripts/modules/presenca.js:105)
- [`saveFJ()`](src/scripts/modules/presenca.js:127)
- [`cancelFJ()`](src/scripts/modules/presenca.js:155)

Recursos adicionais:

- ordenação alfabética
- marcação de presença, ausência e falta justificada
- persistência de justificativas

### 8. `especialidades.js`

**Responsabilidade:** gerencia especialidades dos lobinhos.

Funções principais implementadas:

- [`renderEsp()`](src/scripts/modules/especialidades.js:7)
- [`filterEsp()`](src/scripts/modules/especialidades.js:52)
- [`populateEspLobinhos()`](src/scripts/modules/especialidades.js:64)
- [`editEsp()`](src/scripts/modules/especialidades.js:76)
- [`saveEsp()`](src/scripts/modules/especialidades.js:97)
- [`delEsp()`](src/scripts/modules/especialidades.js:127)

### 9. `matilhas.js`

**Responsabilidade:** gerencia matilhas, cargos e pontuação.

Funções principais implementadas:

- [`renderMatilhas()`](src/scripts/modules/matilhas.js:5)
- [`getPontuacao()`](src/scripts/modules/matilhas.js:90)
- [`addPont()`](src/scripts/modules/matilhas.js:97)
- [`confirmResetPontuacao()`](src/scripts/modules/matilhas.js:113)
- [`toggleCargo()`](src/scripts/modules/matilhas.js:126)
- [`saveCargos()`](src/scripts/modules/matilhas.js:143)

Observação: a assinatura real de [`toggleCargo()`](src/scripts/modules/matilhas.js:126) recebe `mat`, `nome` e `cargo`.

### 10. `comunicados.js`

**Responsabilidade:** gerencia comunicados e confirmações.

Funções principais implementadas:

- [`renderComunicados()`](src/scripts/modules/comunicados.js:5)
- [`renderConfirmacoes()`](src/scripts/modules/comunicados.js:76)
- [`saveComunicado()`](src/scripts/modules/comunicados.js:111)
- [`editCom()`](src/scripts/modules/comunicados.js:148)
- [`delCom()`](src/scripts/modules/comunicados.js:163)
- [`toggleFixarCom()`](src/scripts/modules/comunicados.js:179)
- [`getConfirmacoesCount()`](src/scripts/modules/comunicados.js:187)
- [`verConfirmacoes()`](src/scripts/modules/comunicados.js:193)

Observação: [`verConfirmacoes()`](src/scripts/modules/comunicados.js:193) ainda está como placeholder funcional.

### 11. `caixa.js`

**Responsabilidade:** gerencia fluxo de caixa.

Funções principais implementadas:

- [`renderCaixa()`](src/scripts/modules/caixa.js:8)
- [`renderCaixaGrafico()`](src/scripts/modules/caixa.js:17)
- [`renderCaixaLista()`](src/scripts/modules/caixa.js:67)
- [`filterCaixa()`](src/scripts/modules/caixa.js:120)
- [`toggleCaixaView()`](src/scripts/modules/caixa.js:132)
- [`saveLancamento()`](src/scripts/modules/caixa.js:148)
- [`editLanc()`](src/scripts/modules/caixa.js:176)
- [`delLanc()`](src/scripts/modules/caixa.js:191)
- [`openAddLancamento()`](src/scripts/modules/caixa.js:200)

Recursos adicionais:

- visão gráfica de receitas, despesas e saldo
- visão em lista com filtros
- CRUD de lançamentos financeiros

### 12. `dashboard.js`

**Responsabilidade:** gerencia a página inicial com indicadores e resumos.

Funções principais implementadas:

- [`renderDashboard()`](src/scripts/modules/dashboard.js:5)
- [`renderProximasAtividades()`](src/scripts/modules/dashboard.js:13)
- [`getProxAtividades()`](src/scripts/modules/dashboard.js:43)
- [`renderAvisosInternos()`](src/scripts/modules/dashboard.js:66)
- [`addAvisoInterno()`](src/scripts/modules/dashboard.js:97)
- [`removeAvisoInterno()`](src/scripts/modules/dashboard.js:122)
- [`renderTodosChefia()`](src/scripts/modules/dashboard.js:131)
- [`addTodoChefia()`](src/scripts/modules/dashboard.js:158)
- [`toggleTodoChefia()`](src/scripts/modules/dashboard.js:183)
- [`removeTodoChefia()`](src/scripts/modules/dashboard.js:190)
- [`renderResumoGeral()`](src/scripts/modules/dashboard.js:199)

### 13. `import-export.js`

**Responsabilidade:** gerencia importação e exportação de dados em Excel.

Funções principais implementadas:

- [`importFile()`](src/scripts/modules/import-export.js:5)
- [`importCal()`](src/scripts/modules/import-export.js:49)
- [`importPresenca()`](src/scripts/modules/import-export.js:96)
- [`importEsp()`](src/scripts/modules/import-export.js:129)
- [`importMat()`](src/scripts/modules/import-export.js:161)
- [`exportarExcel()`](src/scripts/modules/import-export.js:189)
- [`exportCalendario()`](src/scripts/modules/import-export.js:203)
- [`exportPresenca()`](src/scripts/modules/import-export.js:220)
- [`exportEspecialidades()`](src/scripts/modules/import-export.js:238)
- [`exportMatilhas()`](src/scripts/modules/import-export.js:254)
- [`exportarCaixa()`](src/scripts/modules/import-export.js:271)
- exportações individuais por seção

Recursos adicionais:

- detecção automática de abas existentes
- importação incremental de algumas coleções
- geração de arquivo único de backup

## Como Integrar no HTML

### Scripts Separados

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

<!-- Inicialização -->
<script src="../scripts/chefia.js"></script>
```

## Dependências Atuais Entre Módulos

A modularização adotada não elimina dependências globais. Na implementação atual:

- [`firebase.js`](src/scripts/modules/firebase.js:37) depende de [`state.js`](src/scripts/modules/state.js) e de `render()`
- [`navigation.js`](src/scripts/modules/navigation.js:30) depende de `render()` e da estrutura HTML
- [`dashboard.js`](src/scripts/modules/dashboard.js:25) usa [`getRowClass()`](src/scripts/modules/calendario.js:134) e utilitários globais
- [`import-export.js`](src/scripts/modules/import-export.js:13) depende de `XLSX`, utilitários e persistência Firebase
- [`modals.js`](src/scripts/modules/modals.js:48) depende de modais existentes no HTML e, em um caso, de [`cancelFJ()`](src/scripts/modules/presenca.js:155)

Por isso, a ordem de carregamento dos scripts continua sendo parte importante da arquitetura.

## Benefícios Observados

### ✅ Manutenibilidade

- cada módulo concentra uma responsabilidade principal
- documentação e leitura do código ficaram mais simples
- alterações pontuais tendem a exigir menos contexto

### ✅ Escalabilidade

- novas funcionalidades podem ser adicionadas por domínio
- a separação facilita evolução incremental
- módulos podem ser revisados isoladamente

### ✅ Colaboração

- a divisão por responsabilidade reduz conflitos de edição
- revisão de código fica mais focada
- documentação por módulo melhora o entendimento compartilhado

### ✅ Reutilização

- utilitários e partes da lógica podem ser reaproveitados
- a separação em APIs globais facilita migração gradual
- a base atual prepara terreno para refatorações futuras

## Pontos de Atenção Atuais

- [`firebase.js`](src/scripts/modules/firebase.js:8) mantém credenciais diretamente no código
- [`state.js`](src/scripts/modules/state.js:4) mistura estrutura de estado com dados iniciais completos
- `state.justificativas` é usado em [`presenca.js`](src/scripts/modules/presenca.js:117) e [`firebase.js`](src/scripts/modules/firebase.js:49), mas não aparece explicitamente no objeto inicial de [`state.js`](src/scripts/modules/state.js:4)
- [`comunicados.js`](src/scripts/modules/comunicados.js:193) ainda não implementa visualização detalhada de confirmações
- a aplicação ainda depende fortemente de variáveis e funções globais em `window`

## Próximos Passos Recomendados

1. declarar `justificativas` explicitamente em [`state.js`](src/scripts/modules/state.js)
2. mover credenciais do Firebase para configuração externa
3. reduzir dependência de variáveis globais compartilhadas
4. documentar a API pública real de [`src/scripts/chefia.js`](src/scripts/chefia.js)
5. revisar consistência entre dados iniciais, Firebase e interfaces
6. avaliar migração futura para módulos ES ou bundling

## Migração Futura

Uma evolução natural desta arquitetura seria migrar de scripts clássicos para módulos ES, reduzindo o uso de `window` e deixando dependências mais explícitas.

Exemplo futuro:

```html
<script type="module" src="../scripts/chefia.js"></script>
```

Essa transição, porém, exigiria adaptação dos módulos atuais, remoção gradual de globais compartilhadas e reorganização das importações.

## Conclusão

A modularização já está efetivamente implementada em [`src/scripts/modules/`](src/scripts/modules/). O cenário atual não é mais de módulos pendentes, mas sim de uma base funcional que ainda pode passar por refinamentos arquiteturais.

Para detalhes operacionais dos módulos, consulte [`src/scripts/modules/README.md`](src/scripts/modules/README.md).