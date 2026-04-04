import type { CollectionEntry } from "astro:content";

import type { Lang } from "../config/i18n";

export function getSlug(entrySlug: string): string {
  const parts = entrySlug.split("/");
  return parts[parts.length - 1] ?? entrySlug;
}

export function sortPostsByDateDesc(
  posts: CollectionEntry<"posts">[],
): CollectionEntry<"posts">[] {
  return [...posts].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}

export function buildTranslationMap<T extends "posts" | "projects">(
  entries: CollectionEntry<T>[],
): Map<string, CollectionEntry<T>[]> {
  const table = new Map<string, CollectionEntry<T>[]>();
  for (const entry of entries) {
    const key = entry.data.translationKey;
    const list = table.get(key) ?? [];
    list.push(entry);
    table.set(key, list);
  }
  return table;
}

export function findTranslatedEntry<T extends "posts" | "projects">(
  translationMap: Map<string, CollectionEntry<T>[]>,
  translationKey: string,
  targetLang: Lang,
): CollectionEntry<T> | undefined {
  const list = translationMap.get(translationKey) ?? [];
  return list.find((entry) => entry.data.lang === targetLang);
}

