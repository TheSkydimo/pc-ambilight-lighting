import {
  buildLanguageLinks,
  type LanguageLink,
  type Locale,
  localizePathname,
  normalizePathname,
} from "~/i18n/config";
import {
  getTranslations,
  type TranslationContent,
} from "~/i18n/translations";

export interface PageHeadData {
  canonical: string;
  image: string;
  alternates: Array<{ code: Locale; href: string }>;
}

export interface PageData {
  copy: TranslationContent;
  languageOptions: LanguageLink[];
  head: PageHeadData;
}

const buildAbsoluteUrl = (path: string, site?: URL): string =>
  site ? new URL(path, site).toString() : path;

export const buildPageData = (
  locale: Locale,
  site?: URL,
  pathname: string = "/",
): PageData => {
  const normalizedPathname = normalizePathname(pathname);
  const copy = getTranslations(locale);
  const languageOptions = buildLanguageLinks(normalizedPathname);

  const head: PageHeadData = {
    canonical: buildAbsoluteUrl(localizePathname(locale, normalizedPathname), site),
    image: buildAbsoluteUrl("/svg/og-image.png", site),
    alternates: languageOptions.map((option) => ({
      code: option.code,
      href: buildAbsoluteUrl(option.href, site),
    })),
  };

  return {
    copy,
    languageOptions,
    head,
  };
};

