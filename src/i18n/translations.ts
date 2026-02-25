import { DEFAULT_LOCALE, type Locale } from "~/i18n/config";

export interface TranslationContent {
  siteName: string;
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    bestPicks: string;
    reviews: string;
    comparisons: string;
    guides: string;
    compatibility: string;
    faq: string;
    ariaLabel: string;
    openLabel: string;
    closeLabel: string;
  };
  language: {
    label: string;
  };
  themeSwitcher: {
    light: string;
    dark: string;
  };
  home: {
    h1: string;
    valueProp: string;
    topPicksTitle: string;
    topPicksLead: string;
    sectionsTitle: string;
    trustTitle: string;
    trustBullets: string[];
  };
  footer: {
    title: string;
    lead: string;
    sections: {
      bestPicks: string;
      reviews: string;
      comparisons: string;
      guides: string;
      compatibility: string;
      faq: string;
    };
    legal: {
      disclosureTitle: string;
      disclosureText: string;
    };
  };
  common: {
    tldr: string;
    lastTested: string;
    updated: string;
    readMore: string;
    comingSoon: string;
    keepReadingTitle: string;
    keepReadingLead: string;
  };
}

const translations: Record<Locale, TranslationContent> = {
  en: {
    siteName: "PC Ambilight Lighting",
    meta: {
      title: "Best PC Ambilight & RGB Screen Sync Guide | Top Tips & Tools (2026)",
      description:
        "Find the best PC ambilight & RGB screen sync tools, step-by-step setup guides, tutorials, comparisons, and tips to enhance your desktop lighting experience.",
      ogTitle: "Best PC Ambilight & RGB Screen Sync Guide (2026)",
      ogDescription:
        "Top tools, setup tutorials, comparisons, and troubleshooting for PC Ambilight / screen-sync RGB lighting.",
    },
    nav: {
      bestPicks: "Best Picks",
      reviews: "Reviews",
      comparisons: "Comparisons",
      guides: "Guides",
      compatibility: "Compatibility",
      faq: "FAQ",
      ariaLabel: "Primary navigation",
      openLabel: "Open navigation",
      closeLabel: "Close navigation",
    },
    language: { label: "Language" },
    themeSwitcher: {
      light: "Use light theme",
      dark: "Use dark theme",
    },
    home: {
      h1: "Best PC Ambilight & Screen-Sync RGB software — picked with evidence",
      valueProp:
        "Cut through the noise: stable, low-latency screen sync lighting with fewer driver conflicts. Quick “best for most” picks, deep reviews, and compatibility notes across Skydimo, SignalRGB, OpenRGB, and vendor suites.",
      topPicksTitle: "Top picks (quick answers)",
      topPicksLead:
        "Start here if you just want the best option for your situation — with the “why” and the trade-offs.",
      sectionsTitle: "Explore by task",
      trustTitle: "Why you can trust these picks",
      trustBullets: [
        "Same rubric across pages (stability, latency, compatibility, privacy, cost)",
        "Test dates are shown so you can judge freshness",
        "Clear disclosure when there’s any relationship or affiliate link",
      ],
    },
    footer: {
      title: "PC Ambilight Lighting",
      lead: "Evidence-first picks for PC Ambilight and screen-sync RGB.",
      sections: {
        bestPicks: "Best Picks",
        reviews: "Reviews",
        comparisons: "Comparisons",
        guides: "Guides",
        compatibility: "Compatibility",
        faq: "FAQ",
      },
      legal: {
        disclosureTitle: "Disclosure",
        disclosureText:
          "Some links may be affiliate links. If we promote our own product, we will state it clearly on the page.",
      },
    },
    common: {
      tldr: "TL;DR",
      lastTested: "Last tested",
      updated: "Updated",
      readMore: "Read more",
      comingSoon: "New content is published regularly. Check back soon.",
      keepReadingTitle: "Keep reading",
      keepReadingLead:
        "Jump to the next best page for your setup: picks, reviews, comparisons, or troubleshooting.",
    },
  },
  zh: {
    siteName: "PC Ambilight Lighting",
    meta: {
      title: "PC Ambilight Lighting — 榜单 / 评测 / 对比 / 教程 / 兼容性",
      description:
        "高可信 Ambilight / 屏幕同步 RGB 内容站：榜单推荐、深度评测、对比选型、安装与排错教程、兼容性中心。结论可复现，转化克制透明。",
      ogTitle: "PC Ambilight Lighting",
      ogDescription:
        "屏幕同步氛围灯软件与方案选型指南：透明方法论 + 兼容性说明 + 排错路径。",
    },
    nav: {
      bestPicks: "推荐榜单",
      reviews: "深度评测",
      comparisons: "对比选型",
      guides: "教程知识库",
      compatibility: "兼容性中心",
      faq: "FAQ",
      ariaLabel: "主要导航",
      openLabel: "打开导航",
      closeLabel: "关闭导航",
    },
    language: { label: "语言" },
    themeSwitcher: {
      light: "切换到亮色主题",
      dark: "切换到暗色主题",
    },
    home: {
      h1: "Ambilight / 屏幕同步 RGB：用证据做选择",
      valueProp:
        "用更少折腾实现稳定、低延迟的屏幕氛围灯效果。推荐克制透明，边界讲清楚，结论可复现。",
      topPicksTitle: "快速答案（Top picks）",
      topPicksLead: "如果你只想知道“我该选哪个”，从这里开始：结论 + 原因 + 代价。",
      sectionsTitle: "按目标浏览",
      trustTitle: "我们如何保证可信",
      trustBullets: [
        "所有榜单使用同一套评估维度与口径",
        "标注测试环境与“最后测试日期”",
        "一旦涉及自家产品或利益关系，页面明确披露",
      ],
    },
    footer: {
      title: "PC Ambilight Lighting",
      lead: "内容优先，证据优先。不搞花活。",
      sections: {
        bestPicks: "推荐榜单",
        reviews: "深度评测",
        comparisons: "对比选型",
        guides: "教程知识库",
        compatibility: "兼容性中心",
        faq: "FAQ",
      },
      legal: {
        disclosureTitle: "披露说明",
        disclosureText:
          "部分链接可能为联盟链接；若推广自家产品，我们会在相关页面明确说明。",
      },
    },
    common: {
      tldr: "结论速览",
      lastTested: "最后测试",
      updated: "更新日期",
      readMore: "继续阅读",
      comingSoon: "内容整理中，敬请期待。",
      keepReadingTitle: "继续阅读",
      keepReadingLead:
        "根据你的设备与目标，继续看：推荐榜单、深度评测、对比选型，或排错路径。",
    },
  },
};

export const getTranslations = (locale: Locale): TranslationContent =>
  translations[locale] ?? translations[DEFAULT_LOCALE];

