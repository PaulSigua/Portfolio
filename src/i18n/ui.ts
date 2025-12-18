export const languages = {
  es: 'Español',
  en: 'English',
  ja: '日本語',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.available': 'Disponible para trabajar',
    'hero.role': 'Desarrollador Fullstack',
  },
  en: {
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.available': 'Available for work',
    'hero.role': 'Fullstack Developer',
  },
  ja: {
    'nav.home': 'ホーム', // Hōmu
    'nav.experience': '経験', // Keiken
    'nav.projects': 'プロジェクト', // Purojekuto
    'nav.contact': 'お問い合わせ', // Otoiawase
    'hero.available': '仕事募集中', // Shigoto boshū-chū
    'hero.role': 'フルスタック開発者', // Furusutakku kaihatsu-sha
  },
} as const;