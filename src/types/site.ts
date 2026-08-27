export type SiteType = 'personal' | 'business';

export type PersonalTheme =
  | 'minimal-dark'
  | 'minimal-light'
  | 'card-bento'
  | 'resume-cv'
  | 'terminal-tech'
  | 'glassmorphism'
  | 'cyberpunk-neon'
  | 'aurora-gradient'
  | 'developer-portfolio'
  | 'bio-link';

export type BusinessTheme =
  | 'corporate'
  | 'services-consulting'
  | 'product-showcase'
  | 'startup-saas';

export type ThemeName = PersonalTheme | BusinessTheme;

export type Language = 'fa' | 'en';

export interface SiteProfile {
  nameFa: string;
  nameEn: string;
  titleFa: string;
  titleEn: string;
  bioFa: string;
  bioEn: string;
  avatar: string;
  logo: string;
  locationFa?: string;
  locationEn?: string;
  availabilityFa?: string;
  availabilityEn?: string;
}

export interface SiteSocials {
  github?: string;
  linkedin?: string;
  instagram?: string;
  telegram?: string;
  email?: string;
  x?: string;
  youtube?: string;
  website?: string;
  phone?: string;
}

export interface BusinessStat {
  labelFa: string;
  labelEn: string;
  value: string;
  icon?: string;
}

export interface SiteBusiness {
  companyNameFa: string;
  companyNameEn: string;
  taglineFa: string;
  taglineEn: string;
  descriptionFa?: string;
  descriptionEn?: string;
  addressFa?: string;
  addressEn?: string;
  stats?: BusinessStat[];
  ctaFa?: string;
  ctaEn?: string;
  ctaLink?: string;
}

export interface SiteExperience {
  roleFa: string;
  roleEn: string;
  companyFa: string;
  companyEn: string;
  periodFa: string;
  periodEn: string;
  descFa: string;
  descEn: string;
}

export interface SiteService {
  id: string;
  titleFa: string;
  titleEn: string;
  descFa: string;
  descEn: string;
  icon: string;
  priceFa?: string;
  priceEn?: string;
}

export interface SiteProduct {
  id: string;
  nameFa: string;
  nameEn: string;
  descFa: string;
  descEn: string;
  priceFa: string;
  priceEn: string;
  image: string;
  badgeFa?: string;
  badgeEn?: string;
  link?: string;
}

export interface SiteLink {
  titleFa: string;
  titleEn: string;
  url: string;
  icon: string;
  highlight?: boolean;
}

export interface SiteFaq {
  questionFa: string;
  questionEn: string;
  answerFa: string;
  answerEn: string;
}

export interface SiteNavigationItem {
  labelFa: string;
  labelEn: string;
  href: string;
}

export interface SiteConfig {
  siteType: SiteType;
  theme: ThemeName;
  defaultLanguage: Language;
  isBilingual: boolean;
  profile: SiteProfile;
  socials: SiteSocials;
  business?: SiteBusiness;
  skills?: string[];
  experiences?: SiteExperience[];
  services?: SiteService[];
  products?: SiteProduct[];
  links?: SiteLink[];
  faqs?: SiteFaq[];
  navigation?: SiteNavigationItem[];
}
