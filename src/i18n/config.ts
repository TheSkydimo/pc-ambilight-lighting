export const SUPPORTED_LOCALES = ["en", "zh"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const localeLabels: Record<
  Locale,
  { short: string; full: string; native: string }
> = {
  en: { short: "EN", full: "English", native: "English" },
  zh: { short: "中文", full: "Chinese", native: "简体中文" },
};

export const isSupportedLocale = (value?: string): value is Locale => {
  if (!value) return false;
  return (SUPPORTED_LOCALES as ReadonlyArray<string>).includes(value);
};

const ensureLeadingSlash = (value: string): string =>
  value.startsWith("/") ? value : `/${value}`;

const ensureTrailingSlash = (value: string): string =>
  value.endsWith("/") ? value : `${value}/`;

/**
 * Returns a *locale-agnostic* path, e.g.:
 * - "/" (home)
 * - "/guides/" (guides hub)
 * - "/guides/low-latency/" (guide detail)
 */
export const normalizePathname = (pathname: string): string =>
  ensureTrailingSlash(ensureLeadingSlash(pathname));

export const stripLocaleFromPathname = (pathname: string): string => {
  const normalized = normalizePathname(pathname);
  const [, maybeLocale, ...rest] = normalized.split("/");
  return isSupportedLocale(maybeLocale) ? `/${rest.join("/")}` : normalized;
};

export const localizePathname = (locale: Locale, pathname: string): string => {
  const base = stripLocaleFromPathname(pathname);
  if (locale === DEFAULT_LOCALE) return base;
  return normalizePathname(`/${locale}${base}`);
};

export const getLocaleHref = (locale: Locale): string =>
  localizePathname(locale, "/");

export interface LanguageLink {
  code: Locale;
  href: string;
  shortLabel: string;
  fullLabel: string;
}

export const buildLanguageLinks = (pathname: string = "/"): LanguageLink[] =>
  SUPPORTED_LOCALES.map((code) => ({
    code,
    href: localizePathname(code, pathname),
    shortLabel: localeLabels[code].short,
    fullLabel: localeLabels[code].native,
  }));

