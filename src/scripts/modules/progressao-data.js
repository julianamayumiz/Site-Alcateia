// ===================== PROGRESSÃO — DADOS ESTÁTICOS =====================
// Mapeia o modelo ANTIGO de progressão do Ramo Lobinho para o modelo NOVO
// (eixos e blocos da Progressão Pessoal). Fonte: documento de equivalência
// oficial "Equivalencia - Ramo Lobinho".
//
// - PROG_ATIVIDADES_ANTIGAS: cada atividade antiga (código + descrição) e o
//   bloco do modelo novo para o qual ela conta como uma AÇÃO VARIÁVEL.
//   bloco === '' significa que ainda não há equivalência definida.
// - PROG_BLOCOS: os 18 blocos do modelo novo, agrupados por eixo, com suas
//   AÇÕES FIXAS (marcadas manualmente) e o mínimo de variáveis exigido.

const PROG_ATIVIDADES_ANTIGAS = [
  // ----- A — Caminho do Crescer / Integrar -----
  {codigo:'A01', bloco:'Vínculos Saudáveis', desc:'Conversar e brincar com todos os (as) lobinhos (as) e com os Velhos Lobos.'},
  {codigo:'A02', bloco:'Vínculos Saudáveis', desc:'Cumprimentar outros membros do Grupo Escoteiro por meio da saudação do lobinho e do aperto de mão.'},
  {codigo:'A03', bloco:'Vínculos Saudáveis', desc:'Trazer um amigo ou parente para participar de uma reunião e conhecer a Alcateia.'},
  {codigo:'A04', bloco:'Vínculos Saudáveis', desc:'Trazer fotos de sua família e mostrar à Alcateia contando algo sobre cada pessoa e sobre as coisas que mais gosta de fazer com elas.'},
  {codigo:'A05', bloco:'Vínculos Saudáveis', desc:'Participar de um acampamento ou acantonamento com sua Alcateia sem a presença de seus pais.'},
  {codigo:'A06', bloco:'Saúde Mental', desc:'Fazer uma lista com 5 coisas que o (a) deixam alegre, 5 que o (a) deixam triste e 5 que lhe dão medo e mostrá-la a um Velho Lobo ou compartilhar com os companheiros em uma roda.'},
  {codigo:'A07', bloco:'Saúde Mental', desc:'Conhecer a história de Rikki Tikki Tavi.'},
  {codigo:'A08', bloco:'Valores', desc:'Contar para um Velho Lobo sobre três boas ações que praticou em casa ou na escola.'},
  {codigo:'A09', bloco:'Valores', desc:'Participar com sua Alcateia ou Grupo Escoteiro de uma campanha de ajuda ao próximo, doando algo seu para a campanha.'},
  {codigo:'A10', bloco:'Promoção da Paz', desc:'Conhecer a família de um (a) lobinho (a) da Alcateia e convidar um (a) lobinho (a) para um momento de convivência com sua família.'},
  {codigo:'A11', bloco:'Promoção da Paz', desc:'Anotar durante duas semanas todas as boas ações que praticou diariamente e apresentar para um Velho Lobo.'},
  {codigo:'A12', bloco:'Promoção da Paz', desc:'Fazer uma economia para comprar algo útil para a Alcateia ou para alguém à sua escolha.'},
  {codigo:'A13', bloco:'Promoção da Paz', desc:'Visitar com sua Matilha um asilo / creche ou outra entidade de assistência e ajudar a fazer algo de que necessitam.'},
  {codigo:'A14', bloco:'Vínculos Saudáveis', desc:'Ter uma agenda com telefone e/ou e-mail dos seus amigos (as) e manter contato com eles.'},
  {codigo:'A15', bloco:'Vínculos Saudáveis', desc:'Ajudar algum amigo (a) com algo que seja difícil para ele (a) e relatar esta experiência a um Velho Lobo.'},
  {codigo:'A16', bloco:'Vínculos Saudáveis', desc:'Receber com alegria os lobinhos (as) novos (as) e ajudá-los a se integrarem à Alcateia, contando-lhes sobre as tradições e ensinando algo do Caminho do Integrar.'},
  {codigo:'A17', bloco:'Inteligência Emocional', desc:'Pedir para a sua Matilha e para os Velhos Lobos escreverem algumas qualidades e defeitos seus e refletir sobre isso.'},
  {codigo:'A18', bloco:'Vínculos Saudáveis', desc:'Conhecer as principais diferenças físicas entre homens e mulheres e perguntar a seus pais ou aos Velhos Lobos sobre curiosidades que tenha a respeito de sexo.'},
  {codigo:'A19', bloco:'Vínculos Saudáveis', desc:'Pesquisar sobre as realizações de três homens e de três mulheres que foram importantes para a humanidade.'},

  // ----- C — Caráter -----
  {codigo:'C01', bloco:'Valores', desc:'Saber quem é Baloo e porque ensina a viver de acordo com a Lei da Jângal. Conhecer a Lei do Lobinho e a Promessa, compreendendo os seus significados.'},
  {codigo:'C02', bloco:'Valores', desc:'Trazer para a Alcateia a ideia de um jogo agradável e divertido ou contar uma história engraçada.'},
  {codigo:'C03', bloco:'Valores', desc:'Demonstrar que é capaz de manter o bom humor em um momento de dificuldade.'},
  {codigo:'C04', bloco:'Valores', desc:'Contar para um Velho Lobo uma situação em que disse a verdade, mesmo correndo o risco de ser repreendido (a).'},
  {codigo:'C05', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Encarregar-se de um dos serviços da Alcateia durante um Ciclo de Programa e realizar bem essa tarefa.'},
  {codigo:'C06', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Mostrar a um Velho Lobo os melhores trabalhos ou tarefas que realizou nos últimos seis meses.'},
  {codigo:'C07', bloco:'', desc:'Planejar, organizar e executar um pequeno projeto científico, artístico ou utilitário.'},
  {codigo:'C08', bloco:'Inteligência Emocional', desc:'Contar para um Velho Lobo sobre os conselhos recebidos de seus pais e professores e como está se esforçando para atendê-los.'},
  {codigo:'C09', bloco:'Inteligência Emocional', desc:'Analisar o comportamento das personagens em Caçadas de Kaa, percebendo as ações certas e as erradas e suas consequências.'},
  {codigo:'C10', bloco:'Inteligência Emocional', desc:'Fazer uma lista com coisas que pode fazer e coisas que não pode fazer e discutir sobre elas em roda de conversa da Alcateia.'},
  {codigo:'C11', bloco:'Vínculos Saudáveis', desc:'Narrar ou representar a história de uma pessoa cujo trabalho seja ajudar os demais.'},
  {codigo:'C12', bloco:'Vínculos Saudáveis', desc:'Aplaudir, por meio de um Bravo verdadeiramente alegre, a vitória de seu adversário numa competição.'},
  {codigo:'C13', bloco:'Valores', desc:'Conhecer a história "Tigre Tigre" e comparar a promessa de Mowgli com a sua Promessa de Lobinho. Discutir isso com um Velho Lobo.'},
  {codigo:'C14', bloco:'Valores', desc:'Fazer uma lista com suas atitudes no dia a dia que mostram que você fez o Melhor Possível para cumprir a Lei do Lobinho e a sua Promessa.'},
  {codigo:'C15', bloco:'Inteligência Emocional', desc:'Empenhar-se para fazer alguma coisa que tenha encontrado dificuldade ou que não tenha conseguido fazer.'},
  {codigo:'C16', bloco:'Inteligência Emocional', desc:'Listar os seus pontos fortes e fracos, identificar o que mais precisa melhorar em você e esforçar-se para isso.'},

  // ----- E — Espiritualidade -----
  {codigo:'E01', bloco:'Espiritualidade', desc:'Em um passeio com a Alcateia, observar as belas coisas da natureza e agradecer por existirem.'},
  {codigo:'E02', bloco:'Espiritualidade', desc:'Fazer um cartaz com coisas criadas por Deus e afixar na gruta.'},
  {codigo:'E03', bloco:'Espiritualidade', desc:'Pesquisar uma oração de agradecimento em livros de sua religião e anotá-la no livro de orações da Alcateia.'},
  {codigo:'E04', bloco:'Espiritualidade', desc:'Fazer as orações da Alcateia em duas reuniões semanais.'},
  {codigo:'E05', bloco:'Espiritualidade', desc:'Representar artisticamente um símbolo de sua religião e apresentar à Alcateia, explicando o seu significado.'},
  {codigo:'E06', bloco:'Espiritualidade', desc:'Perguntar para sua família sobre o que ela acredita serem os deveres para com Deus, explicando depois para um Velho Lobo.'},
  {codigo:'E07', bloco:'Promoção da Paz', desc:'Fazer uma lista com as religiões de todos os lobinhos, colocando os nomes que elas dão àquele que entendem como o Ser Superior.'},
  {codigo:'E08', bloco:'Promoção da Paz', desc:'Visitar um templo de outra religião e manter uma atitude de respeito.'},
  {codigo:'E09', bloco:'Comunidade', desc:'Participar de uma roda da Alcateia em que todos agradecem pelo que têm e pela ajuda recebida uns dos outros ou de terceiros.'},
  {codigo:'E10', bloco:'Comunidade', desc:'Procurar uma forma de praticar uma boa ação em seu Grupo Escoteiro ou em sua escola e realizá-la.'},
  {codigo:'E11', bloco:'Espiritualidade', desc:'Criar uma oração e conduzí-la em um momento especial com a sua família ou na Alcateia.'},
  {codigo:'E12', bloco:'Espiritualidade', desc:'Pesquisar uma oração em forma de canção e ensiná-la para a Alcateia.'},
  {codigo:'E13', bloco:'Valores', desc:'Dizer para um Velho Lobo quais são os principais preceitos de sua fé.'},
  {codigo:'E14', bloco:'Valores', desc:'Escrever ou desenhar uma história em quadrinhos que mostre uma situação em que você agiu de acordo com os ensinamentos de sua fé.'},
  {codigo:'E15', bloco:'Promoção da Paz', desc:'Conhecer a história de Francisco de Assis e sua visão da natureza e das pessoas, inclusive o episódio com o Lobo de Gubbio.'},
  {codigo:'E16', bloco:'Promoção da Paz', desc:'Fazer uma lista com 5 atitudes positivas que percebeu em outras pessoas.'},

  // ----- F — Físico -----
  {codigo:'F01', bloco:'Hábitos Saudáveis', desc:'Conhecer e praticar os cuidados básicos de higiene que protegem a sua saúde.'},
  {codigo:'F02', bloco:'Hábitos Saudáveis', desc:'Saber vestir-se, manter-se arrumado (a) e usar corretamente o uniforme / traje de lobinho.'},
  {codigo:'F03', bloco:'Hábitos Saudáveis', desc:'Saber arrumar a sua cama, a sua mochila escolar e manter sua mochila em ordem durante um acampamento; contribuir com a limpeza e arrumação dos lugares que usar.'},
  {codigo:'F04', bloco:'Hábitos Saudáveis', desc:'Demonstrar que conhece e pratica as regras de circulação de pedestres ou ciclistas e os principais sinais de trânsito.'},
  {codigo:'F05', bloco:'Hábitos Saudáveis', desc:'Demonstrar conhecer os cuidados básicos para a prevenção de acidentes domésticos com facas, fogo, eletricidade, gás, janelas etc.'},
  {codigo:'F06', bloco:'Hábitos Saudáveis', desc:'Saber os primeiros socorros em cortes, queimaduras e outros pequenos ferimentos.'},
  {codigo:'F07', bloco:'Cuidado com o Corpo', desc:'Fazer as três principais refeições do dia: desjejum, almoço e jantar em horários adequados.'},
  {codigo:'F08', bloco:'Cuidado com o Corpo', desc:'Conhecer a importância de uma boa alimentação para a saúde e consumir alimentos variados, praticando cuidados com a higiene.'},
  {codigo:'F09', bloco:'Hábitos Saudáveis', desc:'Conhecer Bagheera e compreender porque ela ensina a viver uma vida saudável.'},
  {codigo:'F10', bloco:'Vida ao Ar Livre', desc:'Participar de duas excursões ao ar livre com a Alcateia.'},
  {codigo:'F11', bloco:'Hábitos Saudáveis', desc:'Escolher um esporte, aprender algumas coisas sobre ele e praticá-lo. Relatar essa experiência para um Velho Lobo.'},
  {codigo:'F12', bloco:'Cuidado com o Corpo', desc:'Desenhar uma silhueta humana com os principais órgãos e sistemas e explicar o seu funcionamento.'},
  {codigo:'F13', bloco:'Cuidado com o Corpo', desc:'Conhecer os sinais das doenças mais comuns da infância e avisar seus pais caso perceba algum desses sinais em você.'},
  {codigo:'F14', bloco:'Cuidado com o Corpo', desc:'Saber utilizar um termômetro, ter cuidados com a exposição ao sol / friagem e conhecer e respeitar os limites de seu corpo.'},
  {codigo:'F15', bloco:'Saúde Mental', desc:'Fazer um diário relatando as atividades que fez durante cada dia de uma semana e analisar como tem utilizado o seu tempo.'},
  {codigo:'F16', bloco:'Saúde Mental', desc:'Cuidar da limpeza do seu corpo; dormir, comer e brincar nas horas certas.'},
  {codigo:'F17', bloco:'Cuidado com o Corpo', desc:'Percorrer uma pista de obstáculos preparada por um Velho Lobo.'},
  {codigo:'F18', bloco:'Cuidado com o Corpo', desc:'Passar em uma Falsa Baiana ou subir em uma árvore ou virar cambalhota / estrela.'},
  {codigo:'F19', bloco:'Cuidado com o Corpo', desc:'Praticar um esporte com regularidade, relatando as suas atividades a um Velho Lobo.'},
  {codigo:'F20', bloco:'Vida ao Ar Livre', desc:'Participar de dois acampamentos ou acantonamentos, de duas excursões e de uma caminhada de 1 km a 3 km com a Alcateia.'},
  {codigo:'F21', bloco:'Cuidado com o Corpo', desc:'Saber aplicar ataduras e tipoias.'},
  {codigo:'F22', bloco:'Cuidado com o Corpo', desc:'Identificar as situações que oferecem perigo nas atividades escoteiras e apontar os cuidados que se deve tomar para evitá-los.'},
  {codigo:'F23', bloco:'Hábitos Saudáveis', desc:'Conhecer a pirâmide dos Alimentos, os grupos alimentares e suas funções e consumir alimentos de todos os grupos.'},
  {codigo:'F24', bloco:'Hábitos Saudáveis', desc:'Preparar uma refeição simples e saudável em atividade da Alcateia.'},

  // ----- I — Intelectual -----
  {codigo:'I01', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Conhecer o material individual para um acampamento / acantonamento, arrumar a sua mochila e enrolar um saco de dormir.'},
  {codigo:'I02', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Aprender cinco frases úteis em outro idioma.'},
  {codigo:'I03', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Acertar a maioria dos objetos num jogo do Kim (de visão, audição, tato, olfato ou paladar).'},
  {codigo:'I04', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Ler no Guia do Lobinho a história das Caçadas de Kaa.'},
  {codigo:'I05', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Contar resumidamente para a Alcateia um livro que tenha lido por recomendação de seus pais ou professores.'},
  {codigo:'I06', bloco:'Vida ao Ar Livre', desc:'Fazer os nós direito, direito alceado, aselha, de correr, saber para que servem e aplicá-los numa atividade.'},
  {codigo:'I07', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Encapar um livro.'},
  {codigo:'I08', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Embrulhar um presente.'},
  {codigo:'I09', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Costurar um botão ou um distintivo em seu uniforme ou manta de Conselho.'},
  {codigo:'I10', bloco:'Criatividade e Inovação', desc:'Participar da criação e apresentação de um esquete em uma Flor Vermelha.'},
  {codigo:'I11', bloco:'Criatividade e Inovação', desc:'Fazer uma pintura, modelagem, colagem ou outro trabalho em arte visual e expor na gruta da Alcateia.'},
  {codigo:'I12', bloco:'Criatividade e Inovação', desc:'Saber cantar três canções típicas da Alcateia e participar de uma dança da Jângal.'},
  {codigo:'I13', bloco:'Vida ao Ar Livre', desc:'Acender uma fogueira simples e saber apagá-la.'},
  {codigo:'I14', bloco:'Vida ao Ar Livre', desc:'Conhecer a Rosa dos Ventos e o Cruzeiro do Sul, reconhecê-lo no céu e saber se orientar por ele.'},
  {codigo:'I15', bloco:'Autonomia e Liderança', desc:'Fazer uma compra e prestar contas do pagamento.'},
  {codigo:'I16', bloco:'Autonomia e Liderança', desc:'Fazer os nós de escota, escota alceado, volta do fiel, saber para que servem e aplicá-los numa atividade.'},
  {codigo:'I17', bloco:'Inteligência Emocional', desc:'Dar corretamente um recado da Alcateia para seus pais ou vice-versa.'},
  {codigo:'I18', bloco:'Inteligência Emocional', desc:'Ensinar um jogo para os (as) lobinhos (as).'},
  {codigo:'I19', bloco:'Inteligência Emocional', desc:'Escrever uma carta para um Velho Lobo e colocá-la no correio ou passar um telegrama ou mandar uma mensagem por e-mail.'},
  {codigo:'I20', bloco:'Inteligência Emocional', desc:'Demonstrar para a Alcateia um conhecimento ou uma habilidade que possui.'},
  {codigo:'I21', bloco:'Inteligência Emocional', desc:'Avaliar uma atividade de que tenha participado, identificando os pontos positivos e negativos e fazer sugestões de melhoria.'},
  {codigo:'I22', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Ler ou ouvir um dos episódios do Livro da Selva: "Os Cães Vermelhos", "O aguilhão do rei" ou "Como apareceu o medo" e expressar suas conclusões.'},
  {codigo:'I23', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Conhecer os personagens da Jângal e suas características, relacionando suas qualidades com as das pessoas com as quais convive.'},
  {codigo:'I24', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Participar de uma roda de conversa da Alcateia sobre um fato ocorrido ou sobre um filme / livro e emitir a sua opinião.'},
  {codigo:'I25', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Possuir uma pequena biblioteca de livros infantis tendo lido a maioria deles.'},
  {codigo:'I26', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Conhecer e usar uma bússola e outras três novas ferramentas.'},
  {codigo:'I27', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Saber como usar os recursos da farmácia da Alcateia e os cuidados que deve ter com eles.'},
  {codigo:'I28', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Descobrir o que as pessoas fazem em cinco profissões diferentes.'},
  {codigo:'I29', bloco:'Aprendizagem Contínua e Desenvolvimento Vocacional', desc:'Entrevistar alguém que tenha uma profissão de seu interesse, saber o que é preciso para bem desempenhá-la e contar para a Alcateia.'},

  // ----- S — Social -----
  {codigo:'S01', bloco:'Vínculos Saudáveis', desc:'Saber como é organizada a Alcateia, conhecer as pessoas que dela fazem parte, saber fazer as formações e atender as vozes de comando dos Velhos Lobos.'},
  {codigo:'S02', bloco:'Vínculos Saudáveis', desc:'Ouvir o episódio "Irmãos de Mowgli" (1ª parte) do Livro da Selva de Rudyard Kipling.'},
  {codigo:'S03', bloco:'Vínculos Saudáveis', desc:'Usar o Lema do Lobinho, a Saudação, o Aperto de Mão e participar do Grande Uivo, compreendendo seus significados.'},
  {codigo:'S04', bloco:'Vínculos Saudáveis', desc:'Conhecer o uniforme de lobinho ou traje escoteiro usado por sua Seção e os distintivos que irá receber neste período.'},
  {codigo:'S05', bloco:'Democracia', desc:'Ouvir o episódio "Flor Vermelha" — 2ª parte de "Irmãos de Mowgli".'},
  {codigo:'S06', bloco:'Democracia', desc:'Contar para um Velho Lobo quais são as principais regras de sua escola, de sua casa e da Alcateia.'},
  {codigo:'S07', bloco:'Democracia', desc:'Participar da eleição do Primo e do Segundo de sua Matilha.'},
  {codigo:'S08', bloco:'Democracia', desc:'Participar ativamente de um Jogo Democrático e de uma Roca do Conselho, expressando as suas opiniões com franqueza e respeito.'},
  {codigo:'S09', bloco:'Comunidade', desc:'Ter uma lista com telefones úteis e dos serviços de atendimento a emergências.'},
  {codigo:'S10', bloco:'Herança Cultural', desc:'Conhecer os elementos que constituem a Bandeira Nacional, o seu simbolismo e respeitá-la.'},
  {codigo:'S11', bloco:'Herança Cultural', desc:'Conhecer o Hino Nacional Brasileiro e cantá-lo com seus companheiros, adotando uma postura de respeito.'},
  {codigo:'S12', bloco:'Herança Cultural', desc:'Participar de um desfile cívico.'},
  {codigo:'S13', bloco:'Vínculos Saudáveis', desc:'Saber quais são as diversas Seções do seu Grupo Escoteiro e participar de atividade com alguma delas ou com todo o Grupo.'},
  {codigo:'S14', bloco:'Vínculos Saudáveis', desc:'Visitar outro Grupo Escoteiro e participar de atividade com a Alcateia.'},
  {codigo:'S15', bloco:'Vínculos Saudáveis', desc:'Participar de uma atividade distrital ou intergrupos do Ramo Lobinho.'},
  {codigo:'S16', bloco:'Consumo Responsável', desc:'Ajudar a cuidar de uma planta ou de um animal de estimação em casa.'},
  {codigo:'S17', bloco:'Consumo Responsável', desc:'Selecionar e classificar materiais para coleta seletiva do lixo em sua casa.'},
  {codigo:'S18', bloco:'Consumo Responsável', desc:'Fazer economia de água e de energia elétrica, relatando a um Velho Lobo os resultados.'},
  {codigo:'S19', bloco:'Valores', desc:'Manter seu quarto e os seus pertences em ordem.'},
  {codigo:'S20', bloco:'Valores', desc:'Desempenhar as tarefas de serviço que lhe couberem durante um acampamento e nas reuniões da Alcateia.'},
  {codigo:'S21', bloco:'Democracia', desc:'Fazer com sua Matilha um cartaz ilustrado com os Direitos Universais da Criança (ONU — 1959).'},
  {codigo:'S22', bloco:'Preservação da Biodiversidade', desc:'Fazer uma pesquisa sobre as características da região onde mora (relevo, clima, hidrografia, fauna, flora) e sobre a história de sua cidade ou bairro.'},
  {codigo:'S23', bloco:'Herança Cultural', desc:'Participar de atividade sobre a cultura popular brasileira com sua Alcateia ou escola e demonstrar que conhece uma canção, uma dança e uma brincadeira folclórica do Brasil.'},
  {codigo:'S24', bloco:'', desc:'Confeccionar um objeto reutilizando embalagens vazias e outros resíduos sólidos.'},
  {codigo:'S25', bloco:'Mudanças Climáticas', desc:'Ajudar na manutenção de um jardim ou de uma horta.'},
  {codigo:'S26', bloco:'Preservação da Biodiversidade', desc:'Visitar um Zoológico e/ou um Jardim Botânico (ou Horto Florestal, Viveiro de plantas, propriedade rural de produção agrícola etc.).'},
  {codigo:'S27', bloco:'Comunidade', desc:'Localizar em um guia de ruas a sua casa, a escola, a sede do Grupo Escoteiro e outros pontos de interesse: farmácia, padaria, papelaria, correio, hospital, supermercado, ponto de ônibus.'},
  {codigo:'S28', bloco:'Comunidade', desc:'Visitar um lugar público como: grupamento de bombeiros, redação de jornal, emissora de rádio ou TV, museu, biblioteca pública etc.'},
  {codigo:'S29', bloco:'Promoção da Paz', desc:'Conhecer a história de Kotick, a foca branca.'},
  {codigo:'S30', bloco:'Promoção da Paz', desc:'Ler ou ouvir a história resumida da vida de Robert Baden-Powell e da criação do Movimento Escoteiro.'},
  {codigo:'S31', bloco:'Promoção da Paz', desc:'Participar de uma atividade distrital ou regional do Ramo Lobinho ou JOTA / JOTI.'},
  {codigo:'S32', bloco:'', desc:'Conhecer a organização de um Grupo Escoteiro e divulgar o seu Grupo Escoteiro na escola onde estuda por meio de cartazes ou por depoimentos, vídeos, folders.'}
];

// Blocos do modelo novo, por eixo. minVar = mínimo de ações variáveis exigido.
// Campos por bloco:
//   fixas[]         — ações fixas (marcadas manualmente)
//   variaveis[]     — ações variáveis descritivas (marcadas manualmente)
//   especialidades[]— especialidades que contam como 1 ação variável cada
//   substitutas[]   — especialidades/insígnias que substituem TODO o requisito
//                     de variáveis (basta uma para satisfazer o mínimo)
const PROG_BLOCOS = [
  // ===== HABILIDADES PARA A VIDA =====
  {
    eixo:'Habilidades para a Vida', nome:'Aprendizagem Contínua e Desenvolvimento Vocacional', minVar:5,
    fixas:['Conquistar uma especialidade sobre um tema de seu interesse e que seja um conhecimento novo.'],
    variaveis:[
      'Escolher um novo idioma e aprender cinco frases úteis.',
      'Contar para a alcateia a história de um livro que tenha lido.',
      'Conhecer uma biblioteca e pedir a recomendação de um livro ao bibliotecário, sobre temas de seu interesse.',
      'Demonstrar para a alcateia um conhecimento ou habilidade que possui.',
      'Ouvir a história "O aguilhão do rei" e contar suas conclusões.',
      'Com a ajuda dos responsáveis, escrever uma carta para um Velho Lobo e enviá-la pelo correio ou por e-mail.',
      'Apresentar à alcateia uma profissão de seu interesse, explicando os requisitos necessários para exercê-la.',
      'Demonstrar para a alcateia uma habilidade que aprendeu com outra pessoa (familiares, amigos ou convidados).',
      'Montar um "diário de curiosidades" com cinco coisas novas aprendidas e contar para a alcateia.'
    ],
    especialidades:['Arquitetura e Urbanismo','Astronáutica','Astronomia','Aeromodelismo','Biblioteconomia','Cartografia','Comunicações','Confeitaria','Construção Civil','Criptografia','Culinária','Design de Interiores','E-Sports','Etiqueta','Ferramentas de Corte','Fiscalização de Pátio de Aeródromo','Informática','Investimentos','Jornalismo','Manicure','Manutenção Elétrica','Marcenaria','Marinharia','Matemática','Mecânica Aérea','Mecânica de Automóveis','Navegação Aérea','Observação Aérea','Planador','Prevenção de Incêndio','Produção Gráfica','Programação','Química','Radioamadorismo','Radioescuta','Redes de Computadores','Segurança e Emergência Náutica','Segurança no Trânsito','Simulação Aérea','Sinalização','Técnica Aeronáutica','Vendas','Web Design'],
    substitutas:['Insígnia do Aprender']
  },
  {
    eixo:'Habilidades para a Vida', nome:'Autonomia e Liderança', minVar:4,
    fixas:['Organizar os materiais individuais e arrumar sua mochila para um acampamento de alcateia.'],
    variaveis:[
      'Avaliar as atividades das quais participou, identificando pontos positivos e negativos e sugerindo melhorias.',
      'Fazer uma compra e prestar contas do pagamento.',
      'Conhecer os meios de transporte, farmácias, correios, hospitais, supermercados, pontos de ônibus/estações de trem/metrô, igrejas e parques próximos à sua casa.',
      'Participar de uma atividade sobre o uso do dinheiro de forma responsável.',
      'Identificar riscos domésticos (facas, fogo, eletricidade, gás, janelas etc.) e realizar uma ação para prevenir acidentes (cartaz, panfleto, entre outros).',
      'Registrar em um quadro ou tabela simples como usou o dinheiro da mesada.'
    ],
    especialidades:[],
    substitutas:['Empreendedorismo','Educação Financeira','Administração','Reparos Domésticos','Oratória']
  },
  {
    eixo:'Habilidades para a Vida', nome:'Criatividade e Inovação', minVar:5,
    fixas:['Construir uma engenhoca simples (varal, suporte de panela).'],
    variaveis:[
      'Em uma atividade de trabalhos manuais, utilizar a técnica de embrulho de presente e encapar um livro para sua melhor conservação.',
      'Costurar um distintivo em seu uniforme ou vestuário escoteiro.',
      'Criar e apresentar com sua matilha uma esquete em uma Flor Vermelha.',
      'Divulgar sua UEL na escola por meio de cartazes, depoimentos, vídeos e folders.',
      'Apresentar um trabalho artístico para sua alcateia, como: pintura, modelagem, colagem etc.',
      'Planejar, organizar e executar um pequeno projeto científico, artístico ou utilitário.',
      'Ensinar um jogo para outros lobinhos.',
      'Durante uma Flor Vermelha, utilizar diversos materiais para criar uma caracterização.',
      'Criar um código simples (cores, símbolos ou sons) para enviar uma mensagem para outro lobinho decifrar.'
    ],
    especialidades:[],
    substitutas:['Arte Digital','Artes Visuais','Artesanato','Comédia','Costura e Estilismo','Encadernação','Grafite','HQ','Maquete','Pintura','Propaganda e Marketing','Robótica','Videomaker']
  },
  {
    eixo:'Habilidades para a Vida', nome:'Inteligência Emocional', minVar:3,
    fixas:[],
    variaveis:[
      'Conversar com a família, responsáveis ou Velhos Lobos sobre pontos que gosta e não gosta em si mesmo e como melhorá-los.',
      'Contar a um Velho Lobo sobre um momento difícil recente e descrever o que ajudou a melhorar a situação.',
      'Cantar canções com a alcateia e participar de uma dança da Jângal.',
      'Identificar situações perigosas, sabendo como agir e a quem recorrer.',
      'Escolher um pequeno desafio que dá insegurança (ex.: falar em público) e tentar superá-lo: depois contar a um Velho Lobo o que mudou.',
      'Aprender e ensinar para a alcateia uma atividade de relaxamento.'
    ],
    especialidades:[],
    substitutas:[]
  },

  // ===== MEIO AMBIENTE =====
  {
    eixo:'Meio Ambiente', nome:'Consumo Responsável', minVar:5,
    fixas:['Participar de um piquenique, excursão ou acampamento com a alcateia, sem a utilização de plásticos descartáveis.'],
    variaveis:[
      'Separar e classificar materiais para coleta seletiva do lixo em casa.',
      'Observar os rótulos e as embalagens dos produtos usados no dia a dia, entender sua origem e destino, e conversar com os Velhos Lobos sobre o tema.',
      'Consertar roupas ou brinquedos com a ajuda de adultos.',
      'Adotar diariamente práticas sustentáveis, como apagar luzes, separar o lixo e reduzir o uso de plástico, motivando o seu entorno a fazer o mesmo.',
      'Escolher frutas e vegetais da estação e produzidos localmente e utilizá-los em um lanche coletivo da alcateia.',
      'Nas refeições, colocar apenas a quantidade de comida que vai consumir e aproveitar as sobras quando possível.',
      'Selecionar brinquedos e roupas em bom estado e doar para uma campanha, ação comunitária ou instituição de caridade.',
      'Reutilizar cadernos com folhas sobrando e outros materiais escolares, como mochilas ou estojos em bom estado.',
      'Cuidar dos materiais da sua alcateia.',
      'Evitar desperdício de água, fechando a torneira ao escovar os dentes ou lavar a louça e reduzindo o tempo de banho.'
    ],
    especialidades:['Agricultura','Aquicultura','Energia'],
    substitutas:['Horticultura','Reduzir, Reciclar e Reutilizar']
  },
  {
    eixo:'Meio Ambiente', nome:'Mudanças Climáticas', minVar:4,
    fixas:[],
    variaveis:[
      'Reconhecer na natureza os sinais de mudança do tempo.',
      'Cultivar uma horta sozinho ou com a alcateia, promovendo o cuidado com a natureza.',
      'Realizar uma experiência de condensação do vapor da água, relacionando-a com as nuvens e as chuvas.',
      'Participar de uma caçada urbana para identificar práticas prejudiciais e sustentáveis para a natureza, e sugerir soluções.',
      'Participar de um plantio de árvores em áreas urbanas e discutir com os Velhos Lobos sobre a importância da arborização.',
      'Conversar com os Velhos Lobos sobre como as ações cotidianas afetam as mudanças climáticas.',
      'Visitar um local que use energia renovável para entender seu impacto.',
      'Ser bem avaliado pelos pais e responsáveis sobre o consumo consciente de água e energia elétrica em casa.',
      'Em uma atividade ao ar livre, observar as nuvens no céu, reconhecendo diferentes aparências e altitudes.'
    ],
    especialidades:['Energia','Agricultura','Jardinagem','Paisagismo'],
    substitutas:['Meteorologia','Escoteiros pela Energia Solar']
  },
  {
    eixo:'Meio Ambiente', nome:'Preservação da Biodiversidade', minVar:5,
    fixas:['Explorar a fauna e a flora local em uma atividade com a alcateia, compreendendo a importância da preservação.'],
    variaveis:[
      'Cuidar de uma planta ou de um animal de estimação em casa, demonstrando estes cuidados para a alcateia.',
      'Em uma atividade ao ar livre com a alcateia, identificar as características da região onde mora, como relevo, clima, hidrografia, bioma, fauna e flora.',
      'Criar um "diário da biodiversidade", registrando plantas, animais e insetos encontrados na vizinhança.',
      'Participar, com a alcateia, da limpeza de praias, rios ou parques.',
      'Visitar um zoológico, jardim botânico, abrigo de animais, horto florestal, viveiro de plantas ou propriedade rural de produção agrícola.',
      'Plantar flores que atraem abelhas e borboletas, discutindo com os Velhos Lobos sobre o papel desses insetos na reprodução das plantas.',
      'Ler ou ouvir histórias sobre animais em ameaça de extinção, florestas e a importância dos ecossistemas e explicar a um Velho Lobo.',
      'Montar comedouros simples para atrair aves para o quintal/varanda ou para a sua unidade escoteira local (UEL).',
      'Criar ecossistemas em miniatura, como terrários ou aquários, e observar a convivência entre os seres.',
      'Pesquisar um animal nativo ameaçado da região, fazer um cartaz para a alcateia e sugerir como ajudar sua preservação.'
    ],
    especialidades:['Animais Venenosos e Peçonhentos','Aquarismo','Biologia','Cuidados com Animais de Estimação','Entomologia','Geologia','Meliponicultura','Microbiologia'],
    substitutas:['Ciências da Terra','Zoologia','Oceanologia','Botânica','Campeões da Natureza']
  },
  {
    eixo:'Meio Ambiente', nome:'Vida ao Ar Livre', minVar:4,
    fixas:[
      'Aplicar os nós direito, escota alceado, aselha, de correr e volta do fiel, sabendo suas funções, durante um acampamento com a alcateia.',
      'Montar, pernoitar, desmontar e acondicionar corretamente a barraca durante um acampamento.',
      'Acender uma pequena fogueira para fazer uma bebida quente ou lanche, demonstrando as técnicas de segurança no uso de fósforos e acendedores.',
      'Conhecer a Rosa dos Ventos e a constelação do Cruzeiro do Sul, usando-os para sua orientação.',
      'Participar de pelo menos dois acampamentos ou acantonamentos com a alcateia.',
      'Cozinhar um prato de comida mateira com a alcateia.'
    ],
    variaveis:[
      'Percorrer uma pista de obstáculos em uma atividade da alcateia.',
      'Participar de caçadas ao ar livre com a alcateia, seguindo as regras de etiqueta e de segurança para trilhas.',
      'Participar de jogos ao ar livre com a alcateia.',
      'Em uma caminhada com a alcateia, observar a natureza, identificar diferentes sons e agradecer por sua existência.'
    ],
    especialidades:['Corrida de Orientação','Culinária Mateira','Escalada','Espeleoturismo','Ferramentas de Corte','Mountain Bike','Pesca','Rastreamento'],
    substitutas:['Acampamento','Excursões','Montanhismo','Pioneiria','Sobrevivência']
  },

  // ===== PAZ E DESENVOLVIMENTO =====
  {
    eixo:'Paz e Desenvolvimento', nome:'Comunidade', minVar:3,
    fixas:[
      'Identificar, com sua alcateia, uma necessidade da unidade escoteira local e participar de uma ação coletiva de melhoria.',
      'Conhecer os hospitais próximos à sua casa e os contatos de emergência (Bombeiros, SAMU, Polícia).'
    ],
    variaveis:[
      'Participar ativamente com sua alcateia ou grupo escoteiro, de uma campanha de ajuda ao próximo.',
      'Visitar um lar de idosos, creche ou entidade assistencial, prestando apoio conforme necessidade.',
      'Identificar uma forma de praticar uma Boa Ação e realizá-la.',
      'Conhecer ações solidárias realizadas por instituições de sua comunidade.',
      'Preparar e entregar cartinhas, desenhos ou mensagens de carinho para pessoas em hospitais ou instituições.',
      'Participar de uma ação de apoio a animais, como arrecadação de ração para abrigos.',
      'Com a ajuda de sua família, separar brinquedos ou roupas em bom estado para doação e relatar para onde foram.'
    ],
    especialidades:['Inclusão','Libras'],
    substitutas:['Defesa Civil','Mensageiros da Paz','Insígnia da Boa Ação']
  },
  {
    eixo:'Paz e Desenvolvimento', nome:'Democracia', minVar:2,
    fixas:[
      'Participar ativamente de uma Roca de Conselho, expressando opiniões de forma respeitosa.',
      'Conhecer a história "Caçadas de Kaa" e discutir com os companheiros a conduta dos personagens.',
      'Participar da eleição de primo e segundo da matilha e combinar suas responsabilidades.'
    ],
    variaveis:[
      'Visitar a câmara dos vereadores ou prefeitura, discutindo com os Velhos Lobos o que aprendeu.',
      'Participar de um fórum de grupo escoteiro.',
      'Participar de um debate com a alcateia, sobre um tema de interesse dos lobinhos.',
      'Participar de um jogo democrático com a alcateia.',
      'Participar da criação de um "acordo de convivência" da alcateia (ou conhecê-lo) e assiná-lo.'
    ],
    especialidades:['Prevenção de Fake News','Geografia','Paz e Justiça'],
    substitutas:[]
  },
  {
    eixo:'Paz e Desenvolvimento', nome:'Herança Cultural', minVar:5,
    fixas:['Realizar o hasteamento ou arriamento da Bandeira Nacional em cerimônia de abertura ou de encerramento de atividade.'],
    variaveis:[
      'Criar um álbum com fotos (ou desenhos), histórias e tradições familiares ou de onde vive.',
      'Aprender e cantar o Hino Nacional Brasileiro com a alcateia e conhecer os elementos e o simbolismo da Bandeira Nacional, demonstrando respeito por estes símbolos.',
      'Contar ou encenar, em uma Flor Vermelha, a história de uma pessoa que teve destaque na história do Brasil ou da sua cidade.',
      'Participar de atividades sobre a cultura popular brasileira.',
      'Visitar um museu histórico com a alcateia e contar o que mais chamou a atenção.',
      'Preparar e degustar, com a sua alcateia, uma receita típica de sua cidade ou região.',
      'Reproduzir jogos e brincadeiras típicas de diferentes épocas ou culturas, como amarelinha ou pião.',
      'Conversar com avós ou membros mais velhos da comunidade sobre histórias do passado.',
      'Participar de feiras, festas ou eventos que celebrem tradições locais.',
      'Aprender alguma técnica de artesanato local e produzir um presente.',
      'Apresentar uma canção, dança ou brincadeira folclórica do Brasil em uma Flor Vermelha.'
    ],
    especialidades:['Anime','Arqueologia','Arte da Marinharia','Artes Cênicas','Capoeira','Civilizações da Antiguidade','Cosplay','Culinária Típica','Danças Folclóricas','História Aeroespacial','História da Aviação','História Brasileira','História da Arte','História do Escotismo','História Local','História Marítima','Literatura','Mitologias','Museologia','Origami','Paleontologia','Poesia','Tradições dos Povos Indígenas'],
    substitutas:['Brasilidades','Genealogia','Informações Turísticas','Tradições dos Povos Indígenas']
  },
  {
    eixo:'Paz e Desenvolvimento', nome:'Promoção da Paz', minVar:5,
    fixas:['Ouvir as histórias "Flor Vermelha" e "Os Irmãos de Mowgli", do Livro da Jângal.'],
    variaveis:[
      'Participar de jogos e atividades relacionados ao diálogo e a cultura de paz.',
      'Visitar um templo de uma religião diferente da sua e, após a visita, expressar suas impressões por meio de um desenho ou depoimento.',
      'Organizar e apresentar um jogo tradicional de outro país, promovendo troca cultural e cooperação.',
      'Visitar outra UEL e refletir sobre o que é a Fraternidade Escoteira.',
      'Participar de uma "feira cultural" com comidas, músicas, danças e vestimentas típicas de diferentes países, envolvendo a matilha e as famílias ou responsáveis.',
      'Criar com sua alcateia um mural sobre as religiões do mundo, expressando artisticamente as principais características (símbolos, datas comemorativas etc).',
      'Conhecer uma festa ou celebração de uma religião diferente da sua e apresentar para sua alcateia.',
      'Apresentar com a alcateia, em uma Flor Vermelha, um esquete sobre a cultura de outro país.',
      'Registrar no calendário as celebrações religiosas e as festividades das crenças ou religiões dos membros da alcateia.'
    ],
    especialidades:['Geografia','História Mundial','Inclusão','Libras','Línguas','Paz e Justiça'],
    substitutas:['Insígnia da Lusofonia','Insígnia do Cone-Sul','Diálogos pela Paz']
  },
  {
    eixo:'Paz e Desenvolvimento', nome:'Valores', minVar:5,
    fixas:['Ouvir a história "Tigre Tigre" e comparar a conduta de Mowgli com a sua Promessa de Lobinho.'],
    variaveis:[
      'Contar a um Velho Lobo sobre três boas ações que praticou.',
      'Explicar o significado da Lei e da Promessa do Lobinho a um novo lobinho ou lobinha na alcateia.',
      'Ensinar aos novos membros da alcateia o aperto de mão e a Saudação do Lobinho.',
      'Participar com a alcateia de jogos distintos, respeitando as suas regras e agindo com cordialidade.',
      'Escrever ou desenhar uma história sobre uma situação em que agiu conforme os ensinamentos da Lei e da Promessa do Lobinho.',
      'Saber quem é Baloo e o motivo dele ensinar a viver de acordo com a Lei da Jângal.',
      'Discutir com um Velho Lobo as principais regras dos locais onde convive, compreendendo a importância do respeito.'
    ],
    especialidades:['Fogo de Conselho','História do Escotismo'],
    substitutas:['Escotismo Mundial']
  },

  // ===== SAÚDE E BEM-ESTAR =====
  {
    eixo:'Saúde e Bem-Estar', nome:'Cuidado com o Corpo', minVar:4,
    fixas:[
      'Saber realizar os primeiros socorros em cortes, queimaduras e outros pequenos ferimentos.',
      'Saber utilizar ataduras e tipoias.',
      'Saber usar um termômetro.',
      'Cuidar de sua segurança e dos demais nas atividades da alcateia, seguindo as orientações dos Velhos Lobos.'
    ],
    variaveis:[
      'Em atividades da alcateia, mostrar que conhece os limites do próprio corpo e dos demais, respeitando a privacidade de cada um.',
      'Participar de atividades voltadas à prevenção das doenças mais comuns na infância (viroses, febre, gripe, dengue, catapora, caxumba, sarampo etc.), identificando seus sintomas e aprendendo formas de prevenção.',
      'Proteger-se do calor e do frio nas atividades da alcateia, utilizando boné, protetor solar, blusas para o frio, beber água e respeitar os limites do seu corpo.',
      'Realizar atividades físicas desafiadoras como passar por uma falsa baiana, subir em uma árvore, dar cambalhota ou fazer estrela.',
      'Durante o Jogo do Kim, acertar a maioria dos objetos usando visão, audição, tato, olfato ou paladar.',
      'Conhecer e saber utilizar os recursos da caixa de primeiros socorros da alcateia.',
      'Fazer um checklist de segurança para a próxima atividade ao ar livre (hidratação, protetor, boné, calçado).',
      'Simular como pedir ajuda: quem chamar, o que dizer, onde estamos e como manter a calma.'
    ],
    especialidades:['Babá','Cuidados com Idosos','Vigilância Epidemiológica','Salvamento','Segurança'],
    substitutas:['Anatomia Humana','Prevenção em Saúde','Primeiros Socorros']
  },
  {
    eixo:'Saúde e Bem-Estar', nome:'Espiritualidade', minVar:4,
    fixas:[],
    variaveis:[
      'Realizar orações de agradecimento ou momento de reflexão nas atividades da alcateia.',
      'Representar artisticamente um símbolo de sua religião e explicá-lo à alcateia.',
      'Participar das celebrações e compromissos com sua crença ou religião regularmente.',
      'Durante um momento de reflexão, fazer a leitura de um texto de sua crença ou religião.',
      'Participar de uma atividade que expressa gratidão sobre coisas da vida e da natureza.',
      'Criar uma mandala com elementos da natureza, representando a união e harmonia, e explicar a importância de cada elemento.'
    ],
    especialidades:[],
    substitutas:['Yoga','Diálogo inter-religioso']
  },
  {
    eixo:'Saúde e Bem-Estar', nome:'Hábitos Saudáveis', minVar:5,
    fixas:[
      'Auxiliar na preparação de uma refeição saudável em um acampamento ou acantonamento da alcateia e experimentá-la.',
      'Preparar um lanche saudável para uma caçada, contendo pelo menos três tipos de legumes e dois tipos de frutas.',
      'Participar de pelo menos uma caminhada ao ar livre com a alcateia (entre 2 e 3 km), registrando três observações sobre o local durante o percurso.'
    ],
    variaveis:[
      'Utilizar o vestuário ou uniforme de lobinho adequadamente, demonstrando aplicação correta dos distintivos.',
      'Participar de atividades que demonstrem a importância de uma boa alimentação para a saúde, consumindo alimentos variados e cuidando da higiene.',
      'Escolher um esporte, aprender sobre ele e praticá-lo. Contar para a alcateia sobre o esporte que você pratica, suas características e regras.',
      'Cuidar da limpeza do corpo, manter uma boa rotina de sono, alimentação e brincadeiras e dedicar um tempo adequado aos estudos.',
      'Manter seu quarto e pertences em ordem.',
      'Fazer refeições saudáveis nos horários estabelecidos por sua família.',
      'Conhecer Bagheera e entender como ela ensina a viver de forma saudável.',
      'Preparar um espetinho com pelo menos quatro legumes diferentes e assá-lo em uma fogueira para seu consumo.'
    ],
    especialidades:['Artes Marciais','Canoagem','Ciclismo','Corrida de Rua','Culinária Vegetariana','Cuidados Bucais','Dança','Desportos Inclusivos','Esportes de Quadra','Futebol','Ginásticas','Hipismo','Mergulho','Natação','Patinação','Plantas Medicinais','Remo','Skateboard','Slackline','Técnicas Verticais','Tênis','Tênis de Mesa','Tiro com Arco','Triatlo','Vela','Yoga'],
    substitutas:['Noções Desportivas','Nutrição']
  },
  {
    eixo:'Saúde e Bem-Estar', nome:'Saúde Mental', minVar:4,
    fixas:[],
    variaveis:[
      'Representar de maneira artística, com a sua alcateia, quais emoções está sentindo e que coisas te deixam feliz.',
      'Ajudar um amigo com alguma dificuldade e relatar a experiência a um Velho Lobo.',
      'Elogiar os lobinhos da alcateia e agradecer pela ajuda recebida.',
      'Saber a quem pedir ajuda quando sentir que algo está incomodando.',
      'Propor momentos divertidos e de relaxamento com a sua família, como ir ao parque, praticar esportes, ler um livro, montar um quebra-cabeça etc. e relatar para os Velhos Lobos como foi essa experiência.',
      'Identificar suas atividades favoritas e separar um tempo para praticá-las.',
      'Praticar uma atividade que te faça sentir feliz e relaxado, encaixando na sua rotina e vendo quanto tempo gasta em suas atividades diárias.'
    ],
    especialidades:['Canto','Coleções','Cubo Mágico','Expressão Musical','Ioiô','Jogos de Cartas Colecionáveis','Jogos de Tabuleiro','Mágica e Ilusionismo','Pipas','Plastimodelismo','Quebra-Cabeças','RPG','Xadrez'],
    substitutas:['Prevenção aos Vícios']
  },
  {
    eixo:'Saúde e Bem-Estar', nome:'Vínculos Saudáveis', minVar:5,
    fixas:[
      'Participar com entusiasmo das atividades da alcateia, brincando, conversando e respeitando os lobinhos e os Velhos Lobos.',
      'Cumprimentar membros do grupo com a Saudação do Lobinho e o aperto de mão.'
    ],
    variaveis:[
      'Conhecer a história "Como apareceu o medo".',
      'Com sua alcateia, ir ao cinema ou teatro, se divertir com outros lobinhos e os Velhos Lobos.',
      'Participar de uma atividade sobre bullying e formas para evitar essa prática.',
      'Convidar um amigo ou parente para conhecer e participar de uma atividade da alcateia.',
      'Participar de uma atividade da alcateia que conte com a presença das famílias.',
      'Participar de um jogo ou atividade de expressão de sentimentos.',
      'Acolher os novos lobinhos e ajudá-los a se integrar na alcateia.',
      'Conhecer as seções do seu grupo escoteiro e participar de uma atividade com outra seção.',
      'Participar de uma atividade entre diferentes Unidades Escoteiras ou atividade regional do Ramo Lobinho.',
      'Participar de uma atividade com outra alcateia.',
      'Manter contato com amigos da alcateia, além da atividade semanal.'
    ],
    especialidades:[],
    substitutas:['Prevenção ao Bullying']
  }
];

// Categorias do modelo antigo (prefixo do código → rótulo)
const PROG_CATEGORIAS = {
  A: 'Caminho do Crescer / Integrar',
  C: 'Caráter',
  E: 'Espiritualidade',
  F: 'Físico',
  I: 'Intelectual',
  S: 'Social'
};

// Ordem dos eixos para exibição
const PROG_EIXOS = ['Habilidades para a Vida', 'Meio Ambiente', 'Paz e Desenvolvimento', 'Saúde e Bem-Estar'];

window.PROG_ATIVIDADES_ANTIGAS = PROG_ATIVIDADES_ANTIGAS;
window.PROG_BLOCOS = PROG_BLOCOS;
window.PROG_CATEGORIAS = PROG_CATEGORIAS;
window.PROG_EIXOS = PROG_EIXOS;
