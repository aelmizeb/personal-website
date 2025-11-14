import { Article } from "@/types";
import { getArticles } from "@/utils/firebase";
import { Routes } from "@/utils/routes";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const locales: ("en" | "fr")[] = ["en", "fr"];

  const staticRoutesSitemap = Routes.flatMap(route =>
    locales.map(locale => ({
      url: `${siteUrl}${locale === "en" ? "" : "/" + locale}${route.href[locale]}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route.label === "home" ? 1 : 0.8,
    }))
  );

  const articles: Article[] = await getArticles();

  const articlesSitemap = articles.flatMap(article =>
    locales.map(locale => ({
      url: `${siteUrl}${locale === "en" ? "" : "/" + locale}/articles/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticRoutesSitemap, ...articlesSitemap];
}
