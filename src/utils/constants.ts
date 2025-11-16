const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const langs = ["en", "fr"] as const;

export { basePath, langs };
