import type { MetadataRoute } from 'next';
import { articles } from '@/contents/articles';
import { Article } from '@/types';
import { Routes } from '@/utils/routes';

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use the full domain of your website from an env variable
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Define static routes
  const routes: string[] = Routes.map(route => route.href);

  // Create sitemap entries for static routes
  const staticRoutesSitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Create sitemap entries for articles
  const articlesSitemap = articles.map((article: Article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Combine static and dynamic routes
  return [
    ...staticRoutesSitemap,
    ...articlesSitemap
  ];
}
