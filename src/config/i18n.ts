export const SUPPORTED_LANGS = ["zh", "en"] as const;
export const DEFAULT_LANG = "en";

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
    academicTitle: string;
  };
  researchVision: {
    title: string;
    imageAlt: string;
    openImage: string;
    hint: string;
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
    morePapers: string;
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
    brandLine: "保持热爱，奔赴下一场山海",
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
      title: "你好，我是许柏恺",
      intro:
        "我的研究以构建可解释、可控的人工智能系统为愿景。我尤其关注世界模型与物理人工智能（Physical AI）的发展，使机器能够理解物理世界、对其进行推理，并与之交互。此外，我也致力于开发可解释的无线通信与感知系统，将数据驱动的智能与物理原理相结合。",
      academicTitle: "学术概况",
    },
    researchVision: {
      title: "研究愿景",
      imageAlt: "研究愿景：连接世界模型、物理人工智能与无线通信感知的可解释、可控、可泛化人工智能系统",
      openImage: "在新标签页查看研究愿景原图",
      hint: "点击图片查看原图",
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
      subtitle: "精选论文",
      morePapers: "更多论文请访问 Google Scholar 主页",
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
    brandLine: "Stay passionate, and set off for the next great adventure.",
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
      title: "Hi, I am Bokai Xu",
      intro:
        "My research is driven by the vision of building AI systems that are interpretable and controllable. I am particularly interested in advancing world models and Physical AI to enable machines to understand, reason about, and interact with the physical world. Beyond this, I aim to develop interpretable wireless communication and sensing systems that bridge data-driven intelligence with physical principles.",
      academicTitle: "Academic Overview",
    },
    researchVision: {
      title: "Research Vision",
      imageAlt: "Research vision: interpretable, controllable, and generalizable AI systems connecting world models, Physical AI, and wireless communication and sensing",
      openImage: "Open the full-size research vision image in a new tab",
      hint: "Click the image to view full size",
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
      subtitle: "Selected publications",
      morePapers: "For more publications, visit my Google Scholar profile",
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
