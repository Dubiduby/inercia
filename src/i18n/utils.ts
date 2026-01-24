import es from './locales/es.json';
import en from './locales/en.json';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es,
  en,
} as const;

export type Language = keyof typeof ui;

/**
 * Get the current language from the URL pathname
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

/**
 * Get translation function for the current language
 */
export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = ui[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };
}

/**
 * Get the path in the specified language
 */
export function translatePath(path: string, lang: Language): string {
  // Remove leading slash and language prefix if exists
  const cleanPath = path.replace(/^\//, '').replace(/^(es|en)\//, '');

  // For default language (es), don't add prefix
  if (lang === defaultLang) {
    return `/${cleanPath}`;
  }

  // For other languages, add prefix
  return `/${lang}/${cleanPath}`;
}

/**
 * Get alternate language URLs for hreflang tags
 */
export function getAlternateLanguages(currentPath: string) {
  const cleanPath = currentPath.replace(/^\//, '').replace(/^(es|en)\//, '');

  return Object.keys(languages).map((lang) => ({
    lang,
    url: translatePath(cleanPath, lang as Language),
  }));
}
