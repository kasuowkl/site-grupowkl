// Textos dos modais da página index.html (motor em detalhes.js).
// Regra: descrever o serviço sem prometer prazo, preço, cliente ou certificação.
window.DETALHES = {
  // ==================== Servidores e Virtualização ====================
  "servidores-fisicos": {
    titulo: "Servidores físicos", icone: "🖥️",
    resumo: "O servidor certo para a carga que a empresa tem hoje — e para a que vai ter. Da especificação à troca planejada, sem surpresa no meio do caminho.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Levantamento da carga real antes de comprar: usuários, sistemas, volume de dados e crescimento",
        "Especificação de servidores de rack e torre: processador, memória, discos e fontes",
        "Instalação física, sistema operacional e configuração inicial",
        "Discos em RAID, expansão de armazenamento e troca de disco com o servidor no ar",
        "Firmware e drivers atualizados, com controle de garantia de cada equipamento",
        "Planejamento da substituição e descarte com os dados apagados"
      ] },
      { titulo: "Como fazemos", texto: "Nada muda sem plano de retorno: antes de qualquer intervenção, backup conferido e janela de parada combinada." },
      { titulo: "O que você recebe", itens: [
        "Ficha de cada servidor: configuração, garantia e função",
        "Recomendação escrita de compra, quando for o caso"
      ] }
    ],
    stack: ["Windows Server", "Linux", "RAID"]
  },

  "virtualizacao": {
    titulo: "Virtualização", icone: "☁️",
    resumo: "Vários servidores numa máquina física só, cada serviço no seu espaço separado — menos equipamento, menos energia e recuperação mais rápida.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Montagem e configuração do host de virtualização",
        "Criação de máquinas virtuais separadas por função (arquivos, banco de dados, aplicação, domínio)",
        "Migração de servidores físicos antigos para máquinas virtuais",
        "Snapshots antes de atualização e mudança, para voltar atrás se preciso",
        "Ajuste de CPU, memória e disco de cada máquina conforme o uso real",
        "Acompanhamento da capacidade do host para não faltar recurso"
      ] },
      { titulo: "Como fazemos", texto: "Migração com a máquina antiga preservada até a nova ser validada, em janela de manutenção combinada." },
      { titulo: "O que você recebe", itens: [
        "Mapa das máquinas virtuais: o que roda em cada uma e quanto usa",
        "Procedimento de criação, snapshot e restauração"
      ] }
    ],
    stack: ["Proxmox", "VMware", "Hyper-V", "Contêineres"]
  },

  "active-directory": {
    titulo: "Active Directory", icone: "🔒",
    resumo: "Um login por pessoa, que vale para a rede, as pastas e os sistemas — e que some no dia em que a pessoa sai da empresa.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Implantação ou reorganização do domínio corporativo",
        "Estrutura de unidades organizacionais (OUs), grupos e políticas por setor",
        "Rotina de entrada e saída de colaboradores: criar, ajustar e desativar acessos",
        "Pastas compartilhadas com permissão por grupo, não por pessoa",
        "Políticas de senha e de bloqueio de estação",
        "Integração do login do domínio com sistemas internos"
      ] },
      { titulo: "Como fazemos", texto: "Permissão sempre por grupo: quando a pessoa muda de setor, muda o grupo — não é preciso refazer pasta por pasta." },
      { titulo: "O que você recebe", itens: [
        "Mapa de quem acessa o quê",
        "Checklist de entrada e saída de colaboradores"
      ] }
    ],
    stack: ["Active Directory", "Windows Server", "LDAP"]
  },

  "sustentacao-erp": {
    titulo: "Sustentação de ERP", icone: "💻",
    resumo: "O ERP e as plataformas de processo são o coração da operação. Sustentar é manter no ar, atualizado e conversando com os outros sistemas.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Acompanhamento dos serviços de aplicação e do banco de dados",
        "Atualizações testadas antes em ambiente de homologação",
        "Integrações entre o ERP e os sistemas internos",
        "Consultas e relatórios direto do banco de dados",
        "Primeiro atendimento de falhas e contato com o suporte do fabricante"
      ] },
      { titulo: "Como fazemos", texto: "Atualização passa primeiro pela homologação; produção só depois de validada, com backup do banco antes." },
      { titulo: "O que você recebe", itens: [
        "Registro das atualizações aplicadas",
        "Documentação das integrações: o que conversa com o quê"
      ] }
    ],
    stack: ["SQL Server", "Windows Server", "APIs REST"]
  },

  "sala-servidores": {
    titulo: "Sala de servidores", icone: "⚡",
    resumo: "A infraestrutura que ninguém vê até faltar: energia, temperatura e organização física do CPD.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Dimensionamento de nobreak e da autonomia necessária para desligar com segurança",
        "Desligamento automático dos servidores quando a bateria acaba",
        "Climatização e acompanhamento da temperatura",
        "Organização de racks e cabeamento, com identificação em cada ponta",
        "Inspeção periódica: baterias, poeira, ventilação e cabos"
      ] },
      { titulo: "Como fazemos", texto: "Cada cabo identificado nas duas pontas e cada equipamento com etiqueta — o que não está identificado vira adivinhação na hora da emergência." },
      { titulo: "O que você recebe", itens: [
        "Diagrama do rack",
        "Registro das inspeções e da vida útil das baterias"
      ] }
    ],
    stack: ["Nobreak", "Racks", "Cabeamento estruturado"]
  },

  "parque-estacoes": {
    titulo: "Parque de estações", icone: "🖱️",
    resumo: "Notebooks, desktops e periféricos padronizados e inventariados: todo computador sabe de quem é, o que tem e quando foi mexido.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Instalação padronizada: mesma imagem, mesmos programas, mesma configuração",
        "Entrada no domínio e aplicação das políticas da empresa",
        "Inventário automático de hardware e sistema de cada máquina",
        "Controle de patrimônio e termo de responsabilidade",
        "Manutenção preventiva e corretiva",
        "Preparação e formatação na troca de usuário"
      ] },
      { titulo: "Como fazemos", texto: "O inventário é coletado da própria máquina e enviado ao portal — não depende de alguém lembrar de anotar." },
      { titulo: "O que você recebe", itens: [
        "Inventário atualizado do parque",
        "Histórico de manutenção de cada equipamento"
      ] }
    ],
    stack: ["Windows", "Active Directory", "Inventário automático"]
  },

  // ==================== Segurança de Rede ====================
  "firewall": {
    titulo: "Firewall", icone: "🛡️",
    resumo: "Uma porta só de entrada e saída da rede, com regras que alguém entende e revisa — e registro do que passou por ela.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Implantação ou migração do firewall corporativo",
        "Regras de entrada e saída, NAT e publicação de serviços",
        "Filtro de conteúdo e bloqueio por política da empresa",
        "Registro (log) do tráfego e revisão periódica das regras",
        "Painel de administração acessível só por conexão cifrada"
      ] },
      { titulo: "Como fazemos", texto: "Cada regra com o motivo escrito ao lado. Regra que ninguém sabe explicar é candidata a sair na próxima revisão." },
      { titulo: "O que você recebe", itens: [
        "Lista de regras comentada",
        "Backup da configuração do firewall"
      ] }
    ],
    stack: ["pfSense", "NAT", "VLANs"]
  },

  "vpn": {
    titulo: "VPN e acesso remoto", icone: "🔑",
    resumo: "Trabalhar de fora da empresa sem abrir a rede para a internet: túnel cifrado, um usuário por pessoa e acesso só ao que ela precisa.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "VPN para quem trabalha fora e para ligar unidades remotas",
        "Usuário nominal para cada pessoa — nada de acesso compartilhado",
        "Permissão pelo mínimo necessário: cada um alcança só os sistemas do seu trabalho",
        "Acesso a servidores sem deixar porta exposta na internet",
        "Revogação imediata quando o colaborador sai"
      ] },
      { titulo: "Como fazemos", texto: "O acesso sai junto com o desligamento do colaborador, na mesma rotina — não depende de alguém lembrar." },
      { titulo: "O que você recebe", itens: [
        "Lista de quem tem acesso remoto e a quê",
        "Guia de conexão para o usuário"
      ] }
    ],
    stack: ["VPN", "pfSense", "Active Directory"]
  },

  "antivirus": {
    titulo: "Antivírus e proteção", icone: "🦠",
    resumo: "Proteção em cada computador, gerenciada de um console só: o que foi detectado, em qual máquina e o que foi feito.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Implantação do antivírus corporativo em estações e servidores",
        "Console central com a situação de cada máquina",
        "Acompanhamento das detecções e das máquinas desatualizadas",
        "Resposta: isolamento, limpeza e verificação da estação afetada",
        "Orientação ao usuário depois de um incidente"
      ] },
      { titulo: "O que você recebe", itens: [
        "Relatório de detecções e do que foi feito",
        "Lista de máquinas protegidas e das que faltam"
      ] }
    ],
    stack: ["Antivírus corporativo", "Console central"]
  },

  "vlans": {
    titulo: "VLANs e segmentação", icone: "🧱",
    resumo: "A rede dividida por função. Administrativo, produção, câmeras e visitantes não conversam entre si sem uma regra que permita — um problema num lado não se espalha para o outro.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Projeto das VLANs e do endereçamento de cada segmento",
        "Rede de visitantes isolada, só com internet",
        "Câmeras e equipamentos em segmento próprio",
        "Regras no firewall definindo o que pode passar entre segmentos",
        "Configuração dos switches e pontos de acesso"
      ] },
      { titulo: "Como fazemos", texto: "Migração por segmento, um de cada vez, com teste de cada serviço antes de passar ao próximo." },
      { titulo: "O que você recebe", itens: [
        "Mapa dos segmentos e do endereçamento",
        "Matriz do que pode falar com o quê"
      ] }
    ],
    stack: ["VLANs", "pfSense", "Switches gerenciáveis"]
  },

  "links": {
    titulo: "Links e conectividade", icone: "🌐",
    resumo: "Internet que não para quando uma operadora cai: dois caminhos e troca automática entre eles.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Levantamento da necessidade e apoio na contratação dos links",
        "Link principal e link de contingência, de operadoras diferentes",
        "Troca automática (failover) quando um link cai",
        "Acompanhamento da qualidade e do cumprimento do contrato",
        "Abertura e acompanhamento de chamado com a operadora"
      ] },
      { titulo: "O que você recebe", itens: [
        "Histórico de quedas e de qualidade de cada link",
        "Contatos e dados de contrato organizados"
      ] }
    ],
    stack: ["Failover", "pfSense", "Monitor de rede"]
  },

  "credenciais": {
    titulo: "Gestão de credenciais", icone: "🗝️",
    resumo: "Senha fora do código, fora da planilha e fora do chat. Cada pessoa com o seu acesso, guardado num cofre e trocado quando precisa.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Levantamento de onde as senhas estão hoje",
        "Cofre de senhas com acesso por pessoa",
        "Padronização dos acessos administrativos",
        "Rotação periódica e troca imediata quando uma senha vaza",
        "Senha diferente por sistema e por função — uma não abre tudo"
      ] },
      { titulo: "Como fazemos", texto: "Segredo se usa, não se copia: o valor fica no cofre e na configuração do sistema, nunca em documento, mensagem ou código." },
      { titulo: "O que você recebe", itens: [
        "Inventário de acessos sem os valores das senhas",
        "Calendário de rotação"
      ] }
    ],
    stack: ["Cofre de senhas", "Active Directory"]
  },

  // ==================== Backup e Continuidade ====================
  "backup-servidores": {
    titulo: "Backup de servidores", icone: "💾",
    resumo: "Cópia automática das máquinas virtuais e dos bancos de dados, guardada pelo tempo certo — e com alerta quando alguma cópia falha.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Rotina automática, agendada pela importância de cada serviço",
        "Cópia de máquinas virtuais inteiras e de bancos de dados",
        "Retenção diária, semanal e mensal",
        "Alerta quando um job falha — backup que falha em silêncio é o pior caso"
      ] },
      { titulo: "O que você recebe", itens: [
        "Relatório das cópias: o que foi copiado, quando e se deu certo",
        "Política de retenção escrita"
      ] }
    ],
    stack: ["Veeam", "Proxmox", "SQL Server"]
  },

  "storage-externo": {
    titulo: "Storage e cópia externa", icone: "🗄️",
    resumo: "O backup mora longe do original. Se o servidor queima, é invadido ou a sala alaga, a cópia continua de pé.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Storage dedicado só a backup, separado da produção",
        "Segunda cópia em outro destino (outro local ou nuvem)",
        "Controle de espaço e previsão de crescimento",
        "Acesso ao destino restrito, para um ataque não apagar as cópias"
      ] },
      { titulo: "O que você recebe", itens: [
        "Mapa de onde cada cópia fica",
        "Acompanhamento de espaço livre"
      ] }
    ],
    stack: ["NAS / TrueNAS", "Rotina automatizada"]
  },

  "backup-config": {
    titulo: "Configuração de equipamentos", icone: "⚙️",
    resumo: "Firewall, switches, controladoras e gravadores também têm backup. É o que faz a volta depois de uma queima levar minutos, e não dias.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Exportação periódica da configuração de cada equipamento",
        "Versões guardadas: dá para ver o que mudou e quando",
        "Procedimento de restauração escrito para cada tipo de equipamento"
      ] },
      { titulo: "O que você recebe", itens: [
        "Repositório das configurações",
        "Passo a passo de restauração"
      ] }
    ],
    stack: ["pfSense", "Switches gerenciáveis", "Git"]
  },

  "teste-restauracao": {
    titulo: "Teste de restauração", icone: "🔁",
    resumo: "Backup só vale quando restaura. Por isso a restauração é exercitada de verdade, em ambiente separado, antes de precisar dela.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Restauração de arquivos avulsos e de máquinas inteiras",
        "Teste em ambiente separado, sem tocar na produção",
        "Tempo de retorno medido e registrado",
        "Ajuste da rotina quando o teste reprova"
      ] },
      { titulo: "O que você recebe", itens: [
        "Registro de cada teste: o que foi restaurado, quanto tempo levou e se passou"
      ] }
    ],
    stack: ["Veeam", "Proxmox"]
  },

  "continuidade": {
    titulo: "Plano de continuidade", icone: "🧭",
    resumo: "O que fazer quando cai, escrito antes de cair: o que volta primeiro, quem faz o quê e o passo a passo do retorno.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Lista dos sistemas por impacto na operação",
        "Ordem de retorno e responsáveis",
        "Procedimento de contingência para cada cenário provável",
        "Revisão do plano depois de cada incidente real"
      ] },
      { titulo: "O que você recebe", itens: [
        "Plano de continuidade documentado",
        "Contatos de emergência organizados"
      ] }
    ]
  },

  "retencao": {
    titulo: "Retenção e descarte", icone: "🗃️",
    resumo: "Guardar o que precisa ser guardado, pelo tempo certo — e descartar mídia velha sem deixar dado para trás.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Política de retenção por tipo de dado",
        "Arquivamento do histórico que não é mais usado no dia a dia",
        "Descarte seguro de discos e mídias, com os dados apagados antes",
        "Registro do que foi descartado"
      ] },
      { titulo: "O que você recebe", itens: [
        "Política de retenção escrita",
        "Registro de descarte"
      ] }
    ]
  },

  // ==================== Redes, Wi-Fi e Telefonia ====================
  "wifi": {
    titulo: "Wi-Fi corporativo", icone: "📶",
    resumo: "Sinal onde as pessoas trabalham, sem cair ao andar pela empresa, e com visitantes numa rede separada.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Levantamento de cobertura, interferência e canais por área",
        "Posicionamento dos pontos de acesso",
        "Controladora central: todos os pontos gerenciados de um lugar só",
        "Roaming entre pontos, sem derrubar a conexão",
        "Rede de visitantes isolada da rede da empresa"
      ] },
      { titulo: "O que você recebe", itens: [
        "Mapa dos pontos de acesso",
        "Senhas e redes organizadas por finalidade"
      ] }
    ],
    stack: ["UniFi", "VLANs", "Controladora"]
  },

  "rede-cabeada": {
    titulo: "Rede cabeada", icone: "🔌",
    resumo: "Cabeamento estruturado e switches gerenciáveis, com a topologia desenhada e etiqueta em cada ponta.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Projeto e execução de cabeamento estruturado",
        "Switches gerenciáveis configurados com VLANs",
        "Organização de racks e patch panels",
        "Identificação de todos os pontos e cabos",
        "Teste de cada ponto instalado"
      ] },
      { titulo: "O que você recebe", itens: [
        "Planta com os pontos de rede",
        "Documentação dos racks e das portas de cada switch"
      ] }
    ],
    stack: ["Cabeamento estruturado", "Switches gerenciáveis", "VLANs"]
  },

  "telefonia": {
    titulo: "Telefonia IP", icone: "☎️",
    resumo: "A central telefônica rodando sobre a rede de dados: ramais, filas de atendimento e ramal no celular de quem está fora.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Implantação da central IP, ramais e URA (atendimento automático)",
        "Filas de atendimento por setor",
        "Integração com a operadora e troncos",
        "Ramal remoto para quem trabalha fora",
        "Gravação de chamadas quando necessário"
      ] },
      { titulo: "O que você recebe", itens: [
        "Lista de ramais e filas",
        "Fluxo da URA documentado"
      ] }
    ],
    stack: ["Telefonia IP", "VLANs"]
  },

  "campo": {
    titulo: "Conectividade em campo", icone: "📡",
    resumo: "Unidades e frentes de trabalho sem infraestrutura no local, conectadas por rádio, 4G/5G ou satélite.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Escolha da tecnologia pelo local: rádio, 4G/5G ou satélite",
        "Enlace para locais remotos",
        "Rede provisória para frentes de obra",
        "Ligação da unidade à rede da matriz por VPN"
      ] },
      { titulo: "O que você recebe", itens: [
        "Inventário dos equipamentos em campo",
        "Procedimento de montagem e desmontagem"
      ] }
    ],
    stack: ["Satélite", "4G / 5G", "VPN"]
  },

  "unidades": {
    titulo: "Implantação de unidades", icone: "🏢",
    resumo: "Escritório ou unidade nova entregue pronta para trabalhar: rede, telefonia, equipamentos e acessos criados.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Projeto da infraestrutura da unidade",
        "Instalação e configuração no local",
        "Ligação com a matriz: rede, sistemas e telefonia",
        "Criação dos acessos de quem vai trabalhar lá",
        "Testes finais com os usuários"
      ] },
      { titulo: "O que você recebe", itens: [
        "Documentação da unidade entregue junto com ela"
      ] }
    ]
  },

  "desempenho": {
    titulo: "Desempenho da rede", icone: "🚦",
    resumo: "“A internet está lenta” investigado com medição, não com achismo: onde está o gargalo e quanto custa resolver.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Medição de banda e latência, dentro da rede e para fora",
        "Identificação de quem ou o que está consumindo",
        "Priorização do tráfego crítico (sistemas e voz)",
        "Correção de laços, cabos ruins e falhas físicas"
      ] },
      { titulo: "O que você recebe", itens: [
        "Relatório com a causa medida e as opções de correção"
      ] }
    ],
    stack: ["Monitor de rede", "Switches gerenciáveis"]
  },

  // ==================== CFTV e Monitoramento ====================
  "cftv": {
    titulo: "CFTV", icone: "🎥",
    resumo: "Circuito fechado de TV pensado para o que precisa ser visto e pelo tempo que a imagem precisa ficar guardada.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Projeto de posicionamento das câmeras",
        "Instalação e manutenção de câmeras e gravadores",
        "Gravação dimensionada pelo tempo de guarda exigido",
        "Câmeras em rede separada da rede da empresa",
        "Acesso remoto às imagens com usuário e permissão"
      ] },
      { titulo: "O que você recebe", itens: [
        "Mapa das câmeras",
        "Tempo de retenção documentado"
      ] }
    ],
    stack: ["CFTV IP", "VLANs"]
  },

  "monitoramento-rede": {
    titulo: "Monitoramento de rede", icone: "📊",
    resumo: "Servidores, links e serviços observados o tempo todo — o alerta chega antes do usuário abrir chamado.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Disponibilidade de servidores, links e serviços",
        "Consulta de switches e firewall por SNMP",
        "Alerta por e-mail e mensagem",
        "Histórico para descobrir a causa depois"
      ] },
      { titulo: "O que você recebe", itens: [
        "Painel com a situação de cada item monitorado",
        "Histórico de quedas"
      ] }
    ],
    stack: ["SNMP", "Monitor de rede", "Alertas automáticos"]
  },

  "frota": {
    titulo: "Rastreamento de frota", icone: "🚚",
    resumo: "Acompanhamento de veículos e equipamentos, com relatório de percurso para apoiar a gestão da operação.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Instalação e gestão dos rastreadores",
        "Relatórios de posição e percurso",
        "Acessos por perfil para quem precisa acompanhar",
        "Integração com a rotina da operação"
      ] },
      { titulo: "O que você recebe", itens: [
        "Lista de veículos e equipamentos rastreados",
        "Relatórios periódicos"
      ] }
    ]
  },

  "tv-corporativa": {
    titulo: "TV corporativa e painéis", icone: "📺",
    resumo: "A informação na tela, onde ela é necessária: indicadores, avisos internos e imagens ao vivo.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Painéis de indicadores exibidos em TV",
        "Mural digital de avisos internos",
        "Videowall de monitoramento",
        "Painel de chamados para a equipe de atendimento"
      ] },
      { titulo: "O que você recebe", itens: [
        "Telas configuradas e o procedimento para atualizar o conteúdo"
      ] }
    ]
  },

  "incidentes": {
    titulo: "Resposta a incidentes", icone: "🚨",
    resumo: "Quando algo para, o roteiro já existe: identificar, conter, restabelecer — e registrar para não repetir.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Atendimento na parada de serviço",
        "Contenção: impedir que o problema se espalhe",
        "Restabelecimento pela ordem do plano de continuidade",
        "Registro da causa e da correção"
      ] },
      { titulo: "Como fazemos", texto: "Depois de cada incidente, a pergunta é o que muda para não repetir — e a resposta vira procedimento." },
      { titulo: "O que você recebe", itens: [
        "Relatório do incidente: o que houve, o que foi feito e o que muda"
      ] }
    ]
  },

  "automacao": {
    titulo: "Automação predial", icone: "💡",
    resumo: "Iluminação, tomadas, climatização e sensores integrados e controlados por aplicativo ou por rotina programada.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Dispositivos inteligentes e cenários (ligar tudo, desligar tudo)",
        "Sensores e acionamento programado por horário",
        "Controle pelo aplicativo",
        "Dispositivos em rede separada da rede da empresa"
      ] },
      { titulo: "O que você recebe", itens: [
        "Lista de dispositivos e cenários configurados"
      ] }
    ]
  },

  // ==================== Sistemas e Desenvolvimento ====================
  "portais": {
    titulo: "Portais internos", icone: "🌐",
    resumo: "Um portal único para os sistemas da empresa: uma senha só, e cada pessoa vê o que o seu setor usa.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Portal com login próprio ou pelo usuário do domínio",
        "Perfis de permissão por setor e cargo",
        "Módulos por área: chamados, agendas, aprovações, finanças, projetos e tarefas",
        "Relatórios com período e exportação para planilha",
        "Avisos por e-mail, WhatsApp e Telegram"
      ] },
      { titulo: "Como fazemos", texto: "Desenvolvido em módulos, entregues em partes: cada parte é testada com quem vai usar antes da próxima." }
    ],
    stack: ["Node.js", "SQL Server", "HTML / CSS / JS"],
    links: [{ rotulo: "Ver os sistemas", url: "desenvolvimento.html" }]
  },

  "integracao-whatsapp": {
    titulo: "Integração com WhatsApp", icone: "💬",
    resumo: "Avisos, confirmações e aprovações saindo direto do sistema para o WhatsApp de quem precisa receber.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Envio automático de avisos a partir do sistema",
        "Aprovações respondidas pela conversa",
        "Identificação da pessoa pelo número cadastrado",
        "Registro do que foi enviado e respondido"
      ] },
      { titulo: "Como fazemos", texto: "O serviço de WhatsApp fica separado do sistema: o sistema pede o envio, o serviço fala com o WhatsApp. Um não derruba o outro." }
    ],
    stack: ["Node.js", "WhatsApp"],
    links: [{ rotulo: "Ver os sistemas", url: "desenvolvimento.html" }]
  },

  "publicacao": {
    titulo: "Publicação segura", icone: "🔧",
    resumo: "Sistema interno acessível de fora, com HTTPS e sem abrir porta no firewall.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Proxy reverso com certificado",
        "Túnel de saída: o servidor chama para fora, nenhuma porta fica aberta para dentro",
        "Endereço próprio no domínio da empresa",
        "Camada de autenticação na borda, antes de chegar ao sistema"
      ] },
      { titulo: "O que você recebe", itens: [
        "Documentação de como cada sistema está publicado"
      ] }
    ],
    stack: ["Nginx", "Proxy reverso", "Túnel e HTTPS"]
  },

  "service-desk": {
    titulo: "Service desk", icone: "🎫",
    resumo: "Chamados com fila, responsável e prazo — e o histórico mostra o que quebra e o que se repete.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Abertura de chamado pelo portal e por mensagem",
        "Fila, prioridade e responsável",
        "Painel em TV para a equipe de atendimento",
        "Base de conhecimento com as soluções já encontradas",
        "Relatório de reincidência: o que volta sempre"
      ] },
      { titulo: "O que você recebe", itens: [
        "Histórico de chamados e indicadores de atendimento"
      ] }
    ],
    stack: ["Node.js", "SQL Server"]
  },

  "email": {
    titulo: "E-mail corporativo", icone: "✉️",
    resumo: "Domínio próprio, uma conta por colaborador e os registros de DNS certos para a mensagem não cair no spam.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Configuração do domínio e dos registros de e-mail (SPF, DKIM, DMARC)",
        "Criação e migração de contas",
        "Assinatura padrão da empresa",
        "Listas e caixas compartilhadas por setor",
        "Diagnóstico de mensagem que não chega ou cai no spam"
      ] },
      { titulo: "O que você recebe", itens: [
        "Lista de contas e caixas",
        "Registros de DNS documentados"
      ] }
    ],
    stack: ["DNS", "SPF / DKIM / DMARC"]
  },

  "sites": {
    titulo: "Sites e páginas", icone: "📄",
    resumo: "Site institucional, páginas de apresentação e materiais internos publicados com a identidade da empresa.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Site institucional que funciona no computador e no celular",
        "Páginas de projeto e apresentações",
        "Domínio, hospedagem e publicação",
        "Atualização de conteúdo"
      ] },
      { titulo: "Como fazemos", texto: "Página leve, sem depender de plataforma paga, com o código guardado em repositório — este site é um exemplo." }
    ],
    stack: ["HTML / CSS / JS", "Nginx", "Git"],
    links: [{ rotulo: "Código deste site", url: "https://github.com/kasuowkl/site-grupowkl" }]
  },

  // ==================== Documentação e Gestão de TI ====================
  "inventario-gestao": {
    titulo: "Inventário", icone: "📊",
    resumo: "Todo equipamento com registro: o que é, onde está, com quem, desde quando e até quando tem garantia.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Patrimônio de TI atualizado, com coleta automática nas máquinas",
        "Licenças e contratos de software, com vencimento",
        "Termos de responsabilidade por colaborador",
        "Histórico de cada equipamento: quem usou e o que foi feito"
      ] },
      { titulo: "O que você recebe", itens: [
        "Inventário consultável no portal",
        "Relatório de garantias e licenças a vencer"
      ] }
    ]
  },

  "topologia": {
    titulo: "Topologia e diagramas", icone: "🗺️",
    resumo: "O desenho de como a rede é de verdade — links, segmentos, servidores e por onde o dado passa.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Diagrama lógico e físico da rede",
        "Mapa de servidores e dos serviços que rodam em cada um",
        "Atualização a cada mudança, não uma vez por ano"
      ] },
      { titulo: "Como fazemos", texto: "O desenho é conferido contra a rede medida — diagrama que diverge da realidade é pior que diagrama nenhum." }
    ]
  },

  "procedimentos": {
    titulo: "Procedimentos", icone: "📝",
    resumo: "Rotina escrita para o que se repete, para que a execução não dependa de quem está de plantão.",
    secoes: [
      { titulo: "O que fazemos", itens: [
        "Procedimentos operacionais passo a passo",
        "Comunicados de parada e de mudança",
        "Passagem de conhecimento para a equipe",
        "Revisão do procedimento quando a realidade muda"
      ] },
      { titulo: "O que você recebe", itens: [
        "Procedimentos organizados e fáceis de achar"
      ] }
    ]
  }
};
