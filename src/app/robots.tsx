import type { MetadataRoute } from 'next';

export const dynamic = "force-static";

const noIndexPaths = [
  '/ingest',    // posthog's reverse proxy
  '/ingest/*',  // posthog's reverse proxy
];

export default function robots(): MetadataRoute.Robots {
  // Use full site URL, fallback to localhost
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // if this is not a production environment, disallow all requests
  if (process.env.NODE_ENV !== 'production') {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '*',
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/api/', // Next.js API routes
      },
      {
        userAgent: '*',
        disallow: '/_next/', // Next.js build output
      },
      {
        userAgent: '*',
        disallow: '/public/', // static files like css, images, fonts. This one's up to you!
      },
      ...noIndexPaths.map((path) => ({
        userAgent: '*',
        disallow: path,
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`, // Full URL
  };
}
