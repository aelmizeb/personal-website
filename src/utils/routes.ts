export interface Route {
  label: string;
  href: Record<'en' | 'fr', string>;
}

export const Routes: Route[] = [
  { label: 'home', href: { en: '/', fr: '/fr' } },
  { label: 'about', href: { en: '/about', fr: '/a-propos' } },
  { label: "projects", href: { en: "/projects", fr: "/projets" } },
  { label: "articles", href: { en: "/articles", fr: "/articles" } },
  { label: "privacy-policy", href: { en: "/privacy-policy", fr: "/politique-de-confidentialite" } },
  //{ label: "contact", href: { en: "/contact", fr: "/contact" } },
];