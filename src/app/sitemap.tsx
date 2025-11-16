export const dynamic = "force-static";
export const revalidate = false;

import { MetadataRoute } from "next";
import { getArticles } from "@/utils/firebase";
import { Routes } from "@/utils/routes";
import { langs } from "@/utils/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  // --- Static routes ---
  const staticRoutes = Routes.flatMap((route) =>
    langs.map((locale) => {
      // Special handling for homepage
      if (route.label === "home") {
        return {
          url: locale === "en" ? `${siteUrl}` : `${siteUrl}/${locale}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 1,
        };
      }

      return {
        url: `${siteUrl}/${locale}${route.href[locale]}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    })
  );

  // --- Articles per language ---
  let articleRoutes: MetadataRoute.Sitemap = [];

  for (const lang of langs) {
    const articles = await getArticles(lang);

    const languageArticleRoutes = articles.map((article) => ({
      url: `${siteUrl}/${lang}/articles/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    articleRoutes.push(...languageArticleRoutes);
  }

  return [...staticRoutes, ...articleRoutes];
}
