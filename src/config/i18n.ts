export const SUPPORTED_LANGS = ["zh", "en"] as const;
export const DEFAULT_LANG = "zh";

export type Lang = (typeof SUPPORTED_LANGS)[number];

type LocaleText = {
  brandLine: string;
  nav: {
    home: string;
    about: string;
    blog: string;
    publications: string;
    projects: string;
  };
  common: {
    latestPosts: string;
    featuredProjects: string;
    viewAll: string;
    languageSwitchLabel: string;
    previous: string;
    next: string;
    relatedLanguageVersion: string;
    tags: string;
    noContent: string;
    backToBlog: string;
    backToProjects: string;
  };
  home: {
    title: string;
    intro: string;
  };
  blog: {
    title: string;
    subtitle: string;
    searchLabel: string;
    searchPlaceholder: string;
    searchHint: string;
    searchUnavailable: string;
    searchNoResult: string;
  };
  projects: {
    title: string;
    subtitle: string;
    techStack: string;
    visitRepo: string;
    visitDemo: string;
  };
  publications: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    intro: string;
    contactTitle: string;
  };
  footer: {
    rights: string;
  };
};

const localeText: Record<Lang, LocaleText> = {
  zh: {
    brandLine: "研究驱动，持续构建",
    nav: {
      home: "Home",
      about: "About",
      blog: "Blog",
      publications: "Publications",
      projects: "Projects",
    },
    common: {
      latestPosts: "最新文章",
      featuredProjects: "精选项目",
      viewAll: "查看全部",
      languageSwitchLabel: "EN",
      previous: "上一篇",
      next: "下一篇",
      relatedLanguageVersion: "查看英文版",
      tags: "标签",
      noContent: "暂无内容",
      backToBlog: "返回博客列表",
      backToProjects: "返回项目列表",
    },
    home: {
      title: "你好，我是 Bokai Xu。",
      intro:
        "我关注 AI 工程、产品化和高质量写作。这个站点记录我的思考、项目与实践复盘。",
    },
    blog: {
      title: "Blog",
      subtitle: "围绕 AI、工程效率与产品设计的长期写作。",
      searchLabel: "站内搜索",
      searchPlaceholder: "输入关键词，例如 agent、evaluation...",
      searchHint: "输入至少 2 个字符开始搜索。",
      searchUnavailable: "本地开发环境默认不提供索引，构建后可用。",
      searchNoResult: "没有找到匹配结果。",
    },
    projects: {
      title: "Projects",
      subtitle: "做过的项目、实验与可复用脚手架。",
      techStack: "技术栈",
      visitRepo: "查看仓库",
      visitDemo: "查看演示",
    },
    publications: {
      title: "Publications",
      subtitle: "公开发表的论文、文章与技术写作。",
    },
    about: {
      title: "About",
      subtitle: "一个长期主义工程师的工作方式。",
      intro:
        "我偏好先定义问题，再写最小可验证实现，然后通过真实反馈持续迭代。这里会同步我的研究兴趣、工作方法和公开输出。",
      contactTitle: "联系方式",
    },
    footer: {
      rights: "保留所有权利。",
    },
  },
  en: {
    brandLine: "Research-led, build-first",
    nav: {
      home: "Home",
      about: "About",
      blog: "Blog",
      publications: "Publications",
      projects: "Projects",
    },
    common: {
      latestPosts: "Latest Posts",
      featuredProjects: "Featured Projects",
      viewAll: "View all",
      languageSwitchLabel: "中文",
      previous: "Previous",
      next: "Next",
      relatedLanguageVersion: "View Chinese version",
      tags: "Tags",
      noContent: "No content yet.",
      backToBlog: "Back to blog",
      backToProjects: "Back to projects",
    },
    home: {
      title: "Hi, I am Bokai Xu.",
      intro:
        "I work on AI engineering, product execution, and technical writing. This site captures my notes, projects, and retrospectives.",
    },
    blog: {
      title: "Blog",
      subtitle: "Long-form writing on AI, engineering velocity, and product craft.",
      searchLabel: "Search",
      searchPlaceholder: "Type keywords like agent, evaluation...",
      searchHint: "Type at least 2 characters to search.",
      searchUnavailable: "Search index is unavailable in dev mode. Run build first.",
      searchNoResult: "No matching results found.",
    },
    projects: {
      title: "Projects",
      subtitle: "Products, experiments, and reusable starter kits.",
      techStack: "Tech stack",
      visitRepo: "Repository",
      visitDemo: "Live demo",
    },
    publications: {
      title: "Publications",
      subtitle: "Published papers, articles, and technical writing.",
    },
    about: {
      title: "About",
      subtitle: "How I work as a long-horizon engineer.",
      intro:
        "I prefer defining the problem first, shipping a minimal verifiable implementation, then iterating with real-world feedback. Here I share my focus areas and operating principles.",
      contactTitle: "Contact",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export function isLang(value: string): value is Lang {
  return SUPPORTED_LANGS.includes(value as Lang);
}

export function getOtherLang(lang: Lang): Lang {
  return lang === "zh" ? "en" : "zh";
}

export function t(lang: Lang): LocaleText {
  return localeText[lang];
}
