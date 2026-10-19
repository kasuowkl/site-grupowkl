// Textos dos modais da página desenvolvimento.html (motor em detalhes.js).
// Regra do repositório público: sem IP, sem nome de cliente, sem link para repositório privado.
window.DETALHES = {
  portal: {
    titulo: "Portal WKL", icone: "🌐", status: "No ar", statusClasse: "ar",
    resumo: "A porta de entrada única para os sistemas internos da empresa: uma senha só, e cada pessoa vê o que o seu setor usa.",
    secoes: [
      { titulo: "O que tem dentro", itens: [
        "Chamados de TI com fila, responsável e histórico",
        "Agendas de tarefas e de reuniões",
        "Aprovações com trilha de quem aprovou e quando",
        "Agendas financeira e contábil",
        "Projetos e tarefas em níveis (projeto, etapa, tarefa)",
        "Patrimônio e inventário de TI",
        "Checklists e tutoriais compartilhados"
      ] },
      { titulo: "Como funciona", itens: [
        "Login próprio ou com o usuário do domínio da empresa",
        "Permissões por departamento, cargo e perfil",
        "Avisos por e-mail, WhatsApp e Telegram",
        "Relatórios com escolha de período e exportação para planilha",
        "Dois ambientes com o mesmo código, sincronizados pelo GitHub"
      ] },
      { titulo: "O que aprendi", texto: "Permissão por perfil do jeito certo — e que tela servida sem login é furo, mesmo quando “ninguém sabe o endereço”." }
    ],
    stack: ["Node.js", "Express", "SQL Server", "HTML / CSS / JS"],
    links: [{ rotulo: "Abrir o portal", url: "https://portal.grupowkl.com.br/portal" }]
  },

  nalevada: {
    titulo: "Na Levada", icone: "🥁", status: "No ar", statusClasse: "ar",
    resumo: "Treinador de bateria em forma de jogo. A bateria eletrônica se liga ao computador pelo cabo MIDI e o jogo avalia cada batida: se veio no tempo e com a força certa. Brasil como diferencial — forró, samba, pagode, xote — sem deixar de lado o rock e o pop.",
    secoes: [
      { titulo: "Para quem toca", itens: [
        "Levadas, variações e exercícios por nível (iniciante, intermediário, avançado)",
        "Avaliação de tempo e de dinâmica: acento, nota fantasma, chimbal aberto",
        "Músicas importadas de arquivos MIDI, com partes e trechos em laço",
        "Calibração da latência da bateria e do fone, para o “no tempo” ser de verdade",
        "Funciona também pelo teclado, para quem ainda não tem bateria"
      ] },
      { titulo: "Para quem ensina", itens: [
        "Turmas, lições e conversa com o aluno",
        "Planos de estudo por etapas, com o progresso de cada aluno",
        "Relatórios de treino exportáveis para planilha"
      ] },
      { titulo: "Estúdio", texto: "Editor de levadas linha por linha, com quantização para alinhar à grade o que foi gravado tocando." },
      { titulo: "O que aprendi", texto: "Áudio, imagem e toque andam em relógios diferentes — sincronizar os três é medir, não chutar." }
    ],
    stack: ["Web MIDI", "Web Audio", "Canvas", "Node.js", "SQL Server"],
    links: [{ rotulo: "Conhecer o Na Levada", url: "https://nalevada.grupowkl.com.br" }]
  },

  whatsapp: {
    titulo: "Central de WhatsApp", icone: "💬", status: "No ar", statusClasse: "ar",
    resumo: "O WhatsApp como porta de entrada do portal: quem tem cadastro responde aprovações e manda comandos pela própria conversa, sem abrir o computador.",
    secoes: [
      { titulo: "O que faz", itens: [
        "Reconhece a pessoa pelo número de telefone cadastrado",
        "Aprovações respondidas direto na conversa",
        "Avisos saindo do portal para o celular de quem precisa receber"
      ] },
      { titulo: "Como é feito", texto: "Dois serviços separados: um cuida da conexão com o WhatsApp, o outro entende os comandos e conversa com o portal. O bot não mexe no banco de dados — ele pede ao portal." },
      { titulo: "O que aprendi", texto: "Integração tem duas camadas: o serviço que fala com o mundo e o sistema que só pede." }
    ],
    stack: ["Node.js", "Express", "Baileys", "Socket.IO"]
  },

  explorador: {
    titulo: "Explorador de Banco de Dados", icone: "🔍", status: "No ar", statusClasse: "ar",
    resumo: "Ferramenta para navegar e entender o banco de dados de um ERP de mercado — milhares de tabelas com nomes em código — e aprender com ele.",
    secoes: [
      { titulo: "O que faz", itens: [
        "Traduz os nomes em código das tabelas e colunas para português",
        "“Explicar com a IA”: uma tabela, coluna ou consulta explicada em modo resumo ou em modo aula",
        "Mapa visual das relações entre tabelas — deduzidas pelo significado dos campos, porque o ERP não declara as ligações",
        "Busca em português: “quanto o cliente me deve?” e a IA encontra a tabela",
        "Favoritas, recentes, filtro por módulo e consulta SQL"
      ] },
      { titulo: "O que aprendi", texto: "Ler um banco que outra pessoa desenhou — e que ferramenta de estudo também é sistema." }
    ],
    stack: ["Node.js", "Express", "SQL Server", "IA"]
  },

  monitor: {
    titulo: "Monitor de Rede", icone: "📡", status: "No ar", statusClasse: "ar",
    resumo: "Acompanha os equipamentos da rede — switches e firewall — pelo protocolo SNMP e mostra num painel quem está de pé e quem caiu.",
    secoes: [
      { titulo: "O que faz", itens: [
        "Consulta periódica dos equipamentos por SNMP",
        "Painel com a situação de cada um",
        "Histórico guardado localmente"
      ] },
      { titulo: "Como é feito", texto: "Foi um dos primeiros sistemas, anterior ao padrão atual — por isso guarda os dados num banco local (SQLite) em vez do SQL Server." },
      { titulo: "O que aprendi", texto: "Serviço que reinicia sozinho em loop precisa de alarme, não de paciência." }
    ],
    stack: ["Node.js", "Express", "SNMP", "SQLite"]
  },

  plantas: {
    titulo: "Análise de Plantas", icone: "📐", status: "Pausado", statusClasse: "teste",
    resumo: "Assistente de engenharia que lê plantas e levanta o quantitativo de material. É copiloto, não calculista: mostra de onde veio cada número e onde ficou em dúvida — quem confere e assina é o engenheiro.",
    secoes: [
      { titulo: "O que lê", itens: [
        "PDF, DWG e DXF de projetos estruturais",
        "Modelos IFC (BIM), com peso e volume lidos do arquivo ou calculados pela geometria",
        "Tabelas de resumo de materiais desenhadas na própria prancha"
      ] },
      { titulo: "O que entrega", itens: [
        "Quantitativo de aço: ferragem por bitola e estrutura metálica por perfil",
        "A origem de cada número: arquivo e linha de onde saiu",
        "Conferência cruzada: a mesma prancha em formatos diferentes, comparada célula a célula",
        "Comparação com o resumo declarado pelo projetista, apontando divergências",
        "Projetos com várias plantas, somadas num levantamento único",
        "Chat com IA por projeto, com o custo de cada pergunta na tela"
      ] },
      { titulo: "O que aprendi", texto: "O sistema nunca diz “correto” — diz o que conferiu e onde ficou em dúvida. A decisão final é sempre humana." }
    ],
    stack: ["Node.js", "Express", "SQL Server", "IA", "IFC / DXF / PDF"]
  },

  inventario: {
    titulo: "Ferramentas de TI — Inventário", icone: "🖥️", status: "Em teste", statusClasse: "teste",
    resumo: "Inventário de TI que se preenche sozinho: um coletor roda na máquina e envia a ficha completa do equipamento para o portal.",
    secoes: [
      { titulo: "O que faz", itens: [
        "Ficha do equipamento: hardware, sistema e rede",
        "Envio automático e seguro para o portal, sem copiar e colar",
        "Descoberta de rede: lista o que está ligado e identifica pelo fabricante e pelas portas abertas",
        "Varredura agendada, que pode ser ligada e desligada pela tela",
        "Anotação do técnico em cada equipamento"
      ] },
      { titulo: "O que aprendi", texto: "O que precisa rodar na máquina do usuário envia sozinho — a tela só recebe." }
    ],
    stack: ["PowerShell", "Node.js", "SQL Server"]
  },

  prizma: {
    titulo: "Videoconferência (Prizma)", icone: "🎥", status: "Em teste", statusClasse: "teste",
    resumo: "Comunicação interna ligada ao portal: voz, vídeo, tela compartilhada e canais de texto num lugar só — no navegador ou num programa para Windows que avisa quando chega mensagem ou chamada.",
    secoes: [
      { titulo: "O que tem dentro", itens: [
        "Canais de texto com menção, prints colados e mensagens fixadas",
        "Salas de voz da equipe, salas de reunião e chamada particular",
        "Uma pasta por departamento: cada pessoa entra na do seu setor",
        "Tela compartilhada com o som, em tela cheia ou em outra janela",
        "Gravação da voz e da tela, com aviso a todos da sala",
        "Status (café, almoço, ausente) que fecha o microfone sozinho"
      ] },
      { titulo: "Atendimento remoto", itens: [
        "Convite por link para quem é de fora, inclusive pelo celular",
        "Controle remoto próprio: só funciona depois que a pessoa ajudada permite",
        "Ligado ao registro de atendimentos e à agenda de tarefas do portal"
      ] },
      { titulo: "O que aprendi", texto: "Restrição que ninguém pediu é decisão de produto, não detalhe técnico — os casos que eu excluí por conta própria eram justamente os que a equipe usava." }
    ],
    stack: ["Node.js", "Express", "WebRTC", "SQL Server", "Electron"]
  },

  monitorinfra: {
    titulo: "Monitor de Infraestrutura de TI", icone: "📊", status: "Em teste", statusClasse: "teste",
    resumo: "Um painel só para a infraestrutura inteira de vários locais: internet, VPNs, tráfego, serviços e equipamentos — com alerta no WhatsApp quando algo cai e quando volta.",
    secoes: [
      { titulo: "O que faz", itens: [
        "Links de internet de cada firewall, com o tráfego ao vivo",
        "VPNs entre a matriz e as filiais",
        "Servidores, switches, pontos de acesso Wi-Fi e serviços, por local",
        "Cadastro por equipamento, com descoberta de rede",
        "Histórico de quedas e disponibilidade por dia e por hora, com exportação",
        "Alertas no WhatsApp para pessoas e grupos escolhidos pela tela"
      ] },
      { titulo: "O que aprendi", texto: "Monitor que mede a coisa errada fica verde com o link fora: o alerta tem que olhar o mesmo endereço que o usuário usa para sair." }
    ],
    stack: ["Node.js", "Express", "SQL Server", "SNMP", "SSH"]
  },

  homeoffice: {
    titulo: "Atendimento Home Office", icone: "🏠", status: "Em teste", statusClasse: "teste",
    resumo: "Registro dos atendimentos de TI feitos a distância, com o tempo de cada um e as provas do que foi feito — para justificar a carga horária com números.",
    secoes: [
      { titulo: "O que faz", itens: [
        "Cronômetro por atendimento, com pausa",
        "Prints colados direto na tela (Ctrl+V)",
        "O que foi pedido, o que foi feito e se resolveu",
        "Relatório por período em planilha e em PDF",
        "Entrada com o login do portal, liberada por grupo"
      ] },
      { titulo: "O que aprendi", texto: "Sistema ligado ao portal entra com o login do portal — nunca com uma senha própria a mais." }
    ],
    stack: ["Node.js", "Express", "SQL Server"]
  },

  djwkl: {
    titulo: "DJ WKL", icone: "🎛️", status: "Em construção", statusClasse: "obra",
    resumo: "Sistema de DJ que roda no navegador: dois decks, mixer, efeitos e gravação do set, com a biblioteca de músicas do próprio computador.",
    secoes: [
      { titulo: "O que já faz", itens: [
        "Dois decks com pitch, SYNC, CUE e barra da música clicável",
        "Mixer com equalizador, filtro e efeitos (eco, reverb, flanger e outros)",
        "Fila de músicas e Automix com transições",
        "Samples e pads",
        "Gravação do set em WAV, MP3 ou WebM",
        "Controladora MIDI e atalhos de teclado"
      ] },
      { titulo: "O que aprendi", texto: "Som se prova medindo o sinal, não só ouvindo: cada efeito foi conferido pelo que mudou no áudio." }
    ],
    stack: ["Web Audio", "Web MIDI", "Node.js", "SQL Server"]
  },

  tutoriais: {
    titulo: "Tutoriais de TI", icone: "📘", status: "Conteúdo", statusClasse: "obra",
    resumo: "Tutoriais curtos e objetivos de infraestrutura, cada um montado e conferido em laboratório antes de ser escrito.",
    secoes: [
      { titulo: "Trilhas", itens: [
        "pfSense: instalação, multi-WAN, VLANs, VPN, backup e dicas avançadas",
        "Nginx: publicação, HTTPS, balanceamento, segurança e dicas",
        "Samba AD: domínio, usuários, DNS, estações no domínio e backup"
      ] },
      { titulo: "Como é feito", texto: "Sempre na mesma ordem: o que é, o que pode ser configurado, como fazer, como confirmar e os erros comuns." }
    ],
    stack: ["Documentação", "pfSense", "Nginx", "Samba AD"]
  },

  bim: {
    titulo: "Análise de Plantas BIM", icone: "🏗️", status: "Pausado", statusClasse: "teste",
    resumo: "Irmão do Análise de Plantas, dedicado a modelos IFC (BIM): em vez de ler desenho, lê o modelo 3D da obra.",
    secoes: [
      { titulo: "O que faz", itens: [
        "Quantitativo por peça, material e família",
        "Visualizador 3D do modelo no navegador",
        "Peso e volume lidos do arquivo ou calculados pela geometria, respeitando a unidade do modelo (metro ou pé)",
        "Chat com IA por projeto, com o custo na tela",
        "Referência de composições de custo da construção civil por item"
      ] },
      { titulo: "O que aprendi", texto: "Conferir a leitura pela física: peso dividido por volume tem que dar a densidade do aço ou do concreto." }
    ],
    stack: ["Node.js", "Express", "SQL Server", "IFC", "Three.js"]
  },

  fluxo: {
    titulo: "FluxoModular", icone: "🧩", status: "Em construção", statusClasse: "obra",
    resumo: "Modelador visual de sistemas: arrastar e ligar blocos que representam telas, tabelas, rotas, serviços e integrações — e ver se as ligações respeitam o padrão.",
    secoes: [
      { titulo: "O que faz", itens: [
        "Desenho do sistema com blocos que falam a língua da documentação padrão",
        "Validação das ligações contra as regras do padrão",
        "Árvore de telas de cada sistema",
        "Mostra como uma tela chega à rota e à tabela"
      ] },
      { titulo: "Para onde vai", itens: [
        "Descrever também o processo (“como se faz”)",
        "Gerar o esqueleto do código a partir do desenho",
        "Executar automações do tipo “quando acontecer X, faça Y”"
      ] }
    ],
    stack: ["Node.js", "Express", "SQL Server", "SVG"]
  },

  entrega: {
    titulo: "Entrega Segura", icone: "📦", status: "Em construção", statusClasse: "obra",
    resumo: "Entregas com cadeia de custódia digital: cada passagem da encomenda — da empresa ao entregador, do entregador ao cliente — fica registrada.",
    secoes: [
      { titulo: "O que já faz", itens: [
        "Cadastro de empresas, entregadores e clientes, com aprovação",
        "Entrega com código próprio e acompanhamento",
        "Registro de cada etapa da custódia",
        "Avaliação da entrega"
      ] },
      { titulo: "O que falta", itens: [
        "Proteção contra cadastro falso",
        "Confirmação de cadastro por e-mail ou WhatsApp",
        "Pagamento real (hoje é simulado)"
      ] }
    ],
    stack: ["Node.js", "Express", "SQL Server"]
  },

  laboratorio: {
    titulo: "Portais de laboratório", icone: "🔬", status: "Laboratório", statusClasse: "obra",
    resumo: "Cópias do portal usadas para desenvolver e testar módulos novos sem arriscar o portal que está em uso.",
    secoes: [
      { titulo: "Para que servem", itens: [
        "Desenvolver módulos novos sem impactar quem usa o portal",
        "Validar integrações com outros sistemas da empresa",
        "Levar para o portal principal só o que ficou estável e aprovado",
        "Um portal mínimo, só com o essencial, para testar a ideia de integrador"
      ] },
      { titulo: "O que aprendi", texto: "Laboratório só vale se o caminho de volta para a produção estiver escrito." }
    ],
    stack: ["Node.js", "Express", "SQL Server"]
  },

  metodo: {
    titulo: "Método Norte", icone: "🧭", status: "Público", statusClasse: "ar",
    resumo: "A documentação padrão que orienta a IA a desenvolver com consistência — sem inventar tabelas, sem duplicar código, sem misturar projetos. Nasceu do uso real nestes sistemas e foi aberta para a comunidade.",
    secoes: [
      { titulo: "Como funciona", itens: [
        "Um ponto de entrada único que diz à IA o que ler para cada tipo de tarefa",
        "Regras de ouro, cada uma nascida de um erro real",
        "Decisões de arquitetura registradas com o porquê",
        "Estado atual e histórico, para a próxima sessão saber o que a anterior fez",
        "Validador automático da própria documentação"
      ] },
      { titulo: "Licença", texto: "Aberto, licença MIT — pode usar, adaptar e distribuir." }
    ],
    stack: ["Markdown", "Node.js", "IA"],
    links: [{ rotulo: "Ver no GitHub", url: "https://github.com/kasuowkl/metodo-norte-kit" }]
  },

  cleitim: {
    titulo: "Cleitim", icone: "🤖", status: "Ideia", statusClasse: "ideia",
    resumo: "Uma IA que roda no próprio computador, com personalidade: bem-humorada, com jeito de cidade do interior, mas respeitosa nas brincadeiras.",
    secoes: [
      { titulo: "A ideia", itens: [
        "O Cleitim é sempre quem conversa, rodando no computador — sem depender da internet para existir",
        "Quando a pergunta passa do que ele sabe, consulta o “cumpadre inteligente”: uma IA maior, pela internet",
        "No futuro, ouvir e falar com sotaque"
      ] },
      { titulo: "Onde está", texto: "Registrada, sem código. O computador de casa já comporta o modelo local; a primeira versão seria só texto." }
    ],
    stack: ["Node.js", "IA local"]
  }
};
