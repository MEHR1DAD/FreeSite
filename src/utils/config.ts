import siteData from '../config/site.json';
import type { SiteConfig, Language, ThemeName } from '../types/site';

export const siteConfig: SiteConfig = siteData as SiteConfig;

/**
 * Returns localized text based on current language
 */
export function getLocalizedText(
  lang: Language,
  faText?: string,
  enText?: string
): string {
  if (lang === 'fa') {
    return faText || enText || '';
  }
  return enText || faText || '';
}

/**
 * Get direction (rtl or ltr) for a language
 */
export function getLangDir(lang: Language): 'rtl' | 'ltr' {
  return lang === 'fa' ? 'rtl' : 'ltr';
}

/**
 * Format date in localized format
 */
export function formatLocalDate(date: Date, lang: Language): string {
  if (lang === 'fa') {
    return new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export const THEME_NAMES: Record<
  ThemeName,
  { nameFa: string; nameEn: string; icon: string; category: 'personal' | 'business' }
> = {
  'minimal-dark': {
    nameFa: 'مینیمال تاریک',
    nameEn: 'Minimal Dark',
    icon: '🌙',
    category: 'personal',
  },
  'minimal-light': {
    nameFa: 'مینیمال روشن',
    nameEn: 'Minimal Light',
    icon: '☀️',
    category: 'personal',
  },
  'card-bento': {
    nameFa: 'بنتو گرید',
    nameEn: 'Card Bento',
    icon: '🍱',
    category: 'personal',
  },
  'resume-cv': {
    nameFa: 'رزومه و سوابق',
    nameEn: 'Resume / CV',
    icon: '📄',
    category: 'personal',
  },
  'terminal-tech': {
    nameFa: 'ترمینال و هکری',
    nameEn: 'Terminal Tech',
    icon: '💻',
    category: 'personal',
  },
  'glassmorphism': {
    nameFa: 'شیشه مات',
    nameEn: 'Glassmorphism',
    icon: '🪟',
    category: 'personal',
  },
  'cyberpunk-neon': {
    nameFa: 'نئونی سایبرپانک',
    nameEn: 'Cyberpunk Neon',
    icon: '⚡',
    category: 'personal',
  },
  'aurora-gradient': {
    nameFa: 'شفق قطبی',
    nameEn: 'Aurora Gradient',
    icon: '🌌',
    category: 'personal',
  },
  'developer-portfolio': {
    nameFa: 'پورتفولیو توسعه‌دهنده',
    nameEn: 'Dev Portfolio',
    icon: '👨‍💻',
    category: 'personal',
  },
  'bio-link': {
    nameFa: 'هاب بیو و لینک‌ها',
    nameEn: 'Bio Link',
    icon: '🔗',
    category: 'personal',
  },
  'corporate': {
    nameFa: 'شرکتی و سازمانی',
    nameEn: 'Corporate',
    icon: '🏢',
    category: 'business',
  },
  'services-consulting': {
    nameFa: 'خدمات و مشاوره',
    nameEn: 'Services & Consulting',
    icon: '💼',
    category: 'business',
  },
  'product-showcase': {
    nameFa: 'معرفی محصول و کاتالوگ',
    nameEn: 'Product Showcase',
    icon: '🛍️',
    category: 'business',
  },
  'startup-saas': {
    nameFa: 'استارتاپی و SaaS',
    nameEn: 'Startup & SaaS',
    icon: '🚀',
    category: 'business',
  },
};
