import type { Lang } from "./i18n";

export const siteConfig = {
  title: "Bokaiii Pages",
  brandName: "Bokai Xu",
  url: "https://bokaixu5.github.io",
  subtitle: {
    zh: "关于 AI 工程、产品实践与长期写作",
    en: "AI engineering, product execution, and long-form writing",
  } satisfies Record<Lang, string>,
  social: {
    email: "you@example.com",
    github: "https://github.com/yourname",
    x: "https://x.com/yourname",
  },
  theme: {
    accent: "#c4653f",
    accentSoft: "#f5dfd4",
    ink: "#1f1d1a",
    paper: "#fffdf9",
    muted: "#7a726a",
    line: "#e7d8cf",
  },
} as const;
