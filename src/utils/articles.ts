import { basePath } from "@/utils/constants";

export function formatArticleDate(date: string, lang: string): string {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return date;

  return new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

export function getArticleReadingTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, " ").trim();
  const wordCount = text ? text.split(/\s+/).length : 0;

  return Math.max(1, Math.ceil(wordCount / 220));
}

export function getArticleImageSrc(image: string): string {
  return image.startsWith("http") ? image : `${basePath}${image}`;
}
