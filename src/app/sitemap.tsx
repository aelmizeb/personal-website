import type { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use the full domain of your website from an env variable
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Define static routes
  const routes: string[] = [
    '',
    '/about',
    '/projects',
    '/privacy-policy',
  ];

  // Create sitemap entries for static routes
  const staticRoutesSitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return staticRoutesSitemap;
}