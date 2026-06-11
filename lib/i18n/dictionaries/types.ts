export type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

export type TitleDescItem = {
  title: string;
  desc: string;
};

export type Dictionary = {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    location: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    clients: string;
    contact: string;
    quote: string;
  };
  common: {
    requestQuote: string;
    ourWork: string;
    learnMore: string;
    viewAll: string;
    viewProject: string;
    getStarted: string;
    sendMessage: string;
    backToPortfolio: string;
    chatWhatsapp: string;
    loading: string;
    menu: string;
    close: string;
    toggleTheme: string;
    toggleLanguage: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  stats: {
    title: string;
    subtitle: string;
    items: StatItem[];
  };
  why: {
    title: string;
    subtitle: string;
    items: TitleDescItem[];
  };
  servicesOverview: {
    title: string;
    subtitle: string;
  };
  featured: {
    title: string;
    subtitle: string;
  };
  clientsSection: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  ctaSection: {
    title: string;
    subtitle: string;
    button: string;
  };
  about: {
    badge: string;
    title: string;
    intro: string;
    whoTitle: string;
    whoDesc: string;
    visionTitle: string;
    visionDesc: string;
    missionTitle: string;
    missionDesc: string;
    goalTitle: string;
    goalDesc: string;
    valuesTitle: string;
    valuesSubtitle: string;
    values: TitleDescItem[];
  };
  servicesPage: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  portfolioPage: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    challenge: string;
    solution: string;
    result: string;
    category: string;
    client: string;
    year: string;
    related: string;
  };
  clientsPage: {
    badge: string;
    title: string;
    subtitle: string;
    logosTitle: string;
    storiesTitle: string;
    storiesSubtitle: string;
  };
  contactPage: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    service: string;
    servicePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
    infoTitle: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hours: string;
    mapTitle: string;
    viewMap: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    newsletter: string;
    newsletterDesc: string;
    subscribe: string;
    emailPlaceholder: string;
    rights: string;
    madeWith: string;
  };
};
