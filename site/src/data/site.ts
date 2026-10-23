export const site = {
  name: 'AID Tecnologia',
  shortName: 'AID',
  tagline: 'Sistemas, apps e IA sob medida',
  description:
    'AID Tecnologia desenvolve sistemas web, aplicativos Android e soluções com inteligência artificial sob medida para empresas e instituições.',
  // TODO: confirmar os contatos abaixo antes de publicar.
  email: 'contato@aidtecnologia.com.br',
  whatsappNumber: '5500000000000',
  whatsappMessage: 'Olá! Vim pelo site da AID Tecnologia e quero falar sobre um projeto.',
  location: 'Piauí, Brasil · atendimento remoto',
  startYear: 2017,
  social: {
    // TODO: adicionar links reais (GitHub, LinkedIn, Instagram).
    github: '',
    linkedin: '',
    instagram: '',
  },
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre' },
];
