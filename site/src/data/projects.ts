export type Category = 'web' | 'mobile' | 'ia' | 'game';

export interface Project {
  name: string;
  description: string;
  categories: Category[];
  stack: string[];
  year: number;
  url?: string;
  /** Texto do link quando `url` existe. */
  linkLabel?: string;
  featured?: boolean;
}

export const categoryLabels: Record<Category, string> = {
  web: 'Web',
  mobile: 'Mobile',
  ia: 'IA',
  game: 'Jogos',
};

export const projects: Project[] = [
  {
    name: 'Geraki',
    description:
      'Plataforma para professores criarem avaliações alinhadas à BNCC com apoio de IA: geração de questões, banco curado e prova em A4 pronta para imprimir.',
    categories: ['web', 'ia'],
    stack: ['React', 'Vite', 'Firebase', 'LLM'],
    year: 2026,
    url: 'https://gerakiprof.web.app',
    linkLabel: 'Abrir app',
    featured: true,
  },
  {
    name: 'TiraVoz',
    description:
      'SaaS que separa voz e instrumental de qualquer música: upload no navegador, processamento em GPU serverless e download de instrumental e acapella separados.',
    categories: ['web', 'ia'],
    stack: ['Python', 'FastAPI', 'Modal', 'Supabase'],
    year: 2026,
    url: 'https://tiravoz-api.onrender.com',
    linkLabel: 'Abrir app',
    featured: true,
  },
  {
    name: 'Participai',
    description:
      'Plataforma de enquetes em tempo real: painel web para criadores e app Android para o público votar, com backend compartilhado no Firebase.',
    categories: ['web', 'mobile'],
    stack: ['Angular', 'Kotlin', 'Compose', 'Firebase'],
    year: 2026,
  },
  {
    name: 'TaMarcado',
    description:
      'Correção automática de cartão-resposta pela câmera do celular: detecção da folha, alinhamento e leitura das marcações com visão computacional, tudo no dispositivo.',
    categories: ['mobile'],
    stack: ['Kotlin', 'CameraX', 'OpenCV'],
    year: 2026,
    featured: true,
  },
  {
    name: 'PerifDig',
    description:
      'Transforma o celular em touchpad, teclado e controle remoto do computador via Wi-Fi ou Bluetooth, com um app Android e um servidor JVM.',
    categories: ['mobile'],
    stack: ['Android', 'Kotlin', 'JVM'],
    year: 2026,
  },
  {
    name: 'RecebaAi',
    description:
      'Gestão de clientes e cobranças para quem trabalha por conta própria, com lembretes de vencimento, cobrança via WhatsApp e configuração de PIX.',
    categories: ['mobile'],
    stack: ['Kotlin', 'Compose', 'WorkManager'],
    year: 2026,
  },
  {
    name: 'StudentVoice',
    description:
      'Canal de escuta para estudantes: coleta de feedback em tempo real, modo totem para respostas rápidas e painel com métricas por disciplina.',
    categories: ['mobile'],
    stack: ['Kotlin', 'Compose', 'Firebase'],
    year: 2026,
  },
  {
    name: 'MyPTT',
    description:
      'Comunicação por Push-to-Talk estilo walkie-talkie: app Android e servidor WebSocket para canais de áudio em tempo real.',
    categories: ['mobile'],
    stack: ['Kotlin', 'WebSocket', 'Oracle Cloud'],
    year: 2026,
  },
  {
    name: 'ComandaPlus',
    description:
      'Sistema de comandas e gestão para bares e restaurantes, com controle de mesas, pedidos, cardápio e fechamento de conta.',
    categories: ['web'],
    stack: ['Web', 'Backend', 'PDV'],
    year: 2025,
  },
  {
    name: 'PDVPlus',
    description:
      'Frente de caixa e retaguarda para o varejo, com emissão de vendas, controle de estoque e relatórios gerenciais.',
    categories: ['web'],
    stack: ['Java', 'Web', 'Retaguarda'],
    year: 2017,
  },
  {
    name: 'Galeria de Cadernos',
    description:
      'Plataforma escolar para conectar alunos e professores: feed de atividades, envio de tarefas, correção e acompanhamento de progresso.',
    categories: ['web'],
    stack: ['Angular', 'Firebase'],
    year: 2026,
  },
  {
    name: 'Memotiva',
    description:
      'Aplicativo Android de bem-estar com frases diárias, categorias, favoritos e notificações — uma pausa de reflexão em meio à rotina.',
    categories: ['mobile'],
    stack: ['Kotlin', 'Compose', 'WorkManager'],
    year: 2026,
  },
  {
    name: 'BabyJourney',
    description:
      'Diário do bebê: registro de mamadas, sono e atividades, com resumo do dia, próximas sonecas e histórico local no dispositivo.',
    categories: ['mobile'],
    stack: ['Kotlin', 'Compose', 'Room'],
    year: 2026,
  },
  {
    name: 'Horizonte',
    description:
      'Teste vocacional com análise comportamental: questionário guiado, perfil profissional com pontos fortes e sugestões de carreira para explorar.',
    categories: ['mobile'],
    stack: ['Kotlin', 'Compose', 'Material 3'],
    year: 2026,
  },
  {
    name: 'QuestãoAki',
    description:
      'Micro-estudo para concursos públicos: simulados por tema e carreira, desafios periódicos e questões comentadas no celular.',
    categories: ['mobile'],
    stack: ['Kotlin', 'Compose', 'Firebase'],
    year: 2026,
  },
  {
    name: 'ListAki',
    description:
      'Listas de compras com categorias, quantidades e unidades, busca de itens e funcionamento offline para usar dentro do mercado.',
    categories: ['mobile'],
    stack: ['Kotlin', 'Compose', 'Room'],
    year: 2026,
  },
  {
    name: 'RasgaSeda',
    description:
      'Rede social de elogios para comunidades escolares e corporativas: feed em tempo real, elogios categorizados, perfil gamificado e moderação automática de conteúdo com IA.',
    categories: ['mobile', 'ia'],
    stack: ['Kotlin', 'Compose', 'Firebase', 'OpenRouter'],
    year: 2026,
  },
  {
    name: 'ComandaPlus Mobile',
    description:
      'Versão móvel do ComandaPlus para salão e cozinha: login por perfil, abertura de mesas, lançamento de pedidos e fechamento de conta.',
    categories: ['mobile'],
    stack: ['Kotlin', 'Android', 'REST'],
    year: 2020,
  },
  {
    name: 'PDVPlus Mobile',
    description:
      'Frente de caixa no celular: vendas, produtos, clientes, pagamentos e histórico, com suporte a impressão via Bluetooth.',
    categories: ['mobile'],
    stack: ['Kotlin', 'Android', 'Bluetooth'],
    year: 2020,
  },
  {
    name: 'Marcenaria Rústica',
    description:
      'Ecossistema para uma marcenaria: catálogo web para clientes, painel administrativo, backend em Firebase Functions e app Android para projetos, listas e fotos.',
    categories: ['web', 'mobile'],
    stack: ['Angular', 'Firebase', 'Kotlin'],
    year: 2020,
  },
  {
    name: 'A gente se Resolve',
    description:
      'Gestão de eventos com página pública, inscrições por evento, confirmação automática e painel administrativo protegido por login.',
    categories: ['web'],
    stack: ['HTML', 'JavaScript', 'Firebase'],
    year: 2026,
  },
  {
    name: 'A gente se Resolve App',
    description:
      'App Flutter do evento: cadastro e login, conteúdo das palestras em vídeo, áudio e PDF, perfil do participante — com app administrativo e backend em Firebase Functions.',
    categories: ['mobile'],
    stack: ['Flutter', 'Dart', 'Firebase'],
    year: 2026,
  },
  {
    name: 'Object Identifier',
    description:
      'Bot de WhatsApp que recebe a foto de um produto, identifica o item com visão computacional, traduz o nome e registra no PDVPlus.',
    categories: ['ia'],
    stack: ['Python', 'Flask', 'Google Vision', 'Twilio'],
    year: 2024,
  },
  {
    name: 'Brother Fighter',
    description:
      'Jogo de luta para navegador feito com Three.js, com controles, colisão, animações e progressão de dificuldade.',
    categories: ['game'],
    stack: ['Three.js', 'TypeScript', 'WebGL'],
    year: 2026,
  },
];
