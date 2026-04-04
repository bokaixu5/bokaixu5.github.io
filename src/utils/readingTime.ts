import type { Lang } from "../config/i18n";

function estimateMinutes(content: string, lang: Lang): number {
  if (lang === "zh") {
    const chineseChars = (content.match(/[\u3400-\u9fff]/g) ?? []).length;
    return Math.max(1, Math.ceil(chineseChars / 320));
  }

  const words = content
    .replace(/[#*_`>[\]()\-]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function readingTimeLabel(content: string, lang: Lang): string {
  const minutes = estimateMinutes(content, lang);
  return lang === "zh" ? `约 ${minutes} 分钟` : `${minutes} min read`;
}

