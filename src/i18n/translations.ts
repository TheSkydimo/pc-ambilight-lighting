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
    home: string;
    bestPicks: string;
    comparisons: string;
    guides: string;
    download: string;
    faq: string;
    about: string;
    reviews: string;
    compatibility: string;
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
      comparisons: string;
      guides: string;
      download: string;
      faq: string;
      about: string;
      reviews: string;
      compatibility: string;
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
      title: "PC Ambilight Lighting: Best Software, Setup Guides, and Troubleshooting",
      description:
        "Choose the right PC Ambilight software fast. Compare top picks, follow setup guides, and fix common screen-sync RGB issues.",
      ogTitle: "PC Ambilight Lighting: Picks, Setup, and Troubleshooting",
      ogDescription:
        "Make a decision first, then install and optimize. Clear picks, practical comparisons, and actionable troubleshooting.",
    },
    nav: {
      home: "Home",
      bestPicks: "Best Picks",
      comparisons: "Comparisons",
      guides: "Guides",
      download: "Download",
      faq: "FAQ",
      about: "About",
      reviews: "Reviews",
      compatibility: "Compatibility",
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
      h1: "PC Ambilight Lighting for Gaming and Daily Setup",
      valueProp:
        "Pick a stable setup first, then install, then optimize. Build a low-latency screen-sync RGB experience with fewer conflicts.",
      topPicksTitle: "Top picks (quick answers)",
      topPicksLead:
        "Skydimo, OpenRGB, and SignalRGB are the fastest shortlist for most users.",
      sectionsTitle: "Explore by task",
      trustTitle: "Why you can trust these picks",
      trustBullets: [
        "Test environment and updated date are shown",
        "Same rubric across all recommendation pages",
        "Any commercial relationship is disclosed clearly",
      ],
    },
    footer: {
      title: "PC Ambilight Lighting",
      lead: "Evidence-first picks for PC Ambilight and screen-sync RGB.",
      sections: {
        bestPicks: "Best Picks",
        comparisons: "Comparisons",
        guides: "Guides",
        download: "Download",
        faq: "FAQ",
        about: "About",
        reviews: "Reviews",
        compatibility: "Compatibility",
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
      title: "PC Ambilight Lighting：推荐榜单、安装教程与排错指南",
      description:
        "快速选择适合你的 PC Ambilight 方案，按步骤完成安装，并解决不识别、延迟和颜色偏差问题。",
      ogTitle: "PC Ambilight Lighting：先选型，再安装，再优化",
      ogDescription:
        "以先决策后细节为核心的内容结构：Best Picks、Comparisons、Guides、Download 与 FAQ 闭环。",
    },
    nav: {
      home: "首页",
      bestPicks: "推荐榜单",
      comparisons: "对比选型",
      guides: "教程知识库",
      download: "下载",
      faq: "FAQ",
      about: "关于",
      reviews: "深度评测",
      compatibility: "兼容性中心",
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
      h1: "为游戏与日常场景打造稳定的 PC Ambilight Lighting",
      valueProp:
        "先选稳定方案，再安装，再优化。用更少折腾实现更顺滑的屏幕同步 RGB 体验。",
      topPicksTitle: "快速答案（Top picks）",
      topPicksLead: "Skydimo、OpenRGB、SignalRGB 三个方案覆盖大多数起步场景。",
      sectionsTitle: "按目标浏览",
      trustTitle: "我们如何保证可信",
      trustBullets: [
        "公开测试环境与更新日期",
        "全站使用统一评估维度与口径",
        "涉及商业关系时明确披露",
      ],
    },
    footer: {
      title: "PC Ambilight Lighting",
      lead: "内容优先，证据优先。不搞花活。",
      sections: {
        bestPicks: "推荐榜单",
        comparisons: "对比选型",
        guides: "教程知识库",
        download: "下载",
        faq: "FAQ",
        about: "关于",
        reviews: "深度评测",
        compatibility: "兼容性中心",
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

