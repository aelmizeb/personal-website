const {
  mockGetDocs,
  mockQuery,
  mockCollection,
  mockWhere,
  mockOrderBy,
  mockLimit,
  mockGetFirestore,
} = vi.hoisted(() => ({
  mockGetDocs: vi.fn(),
  mockQuery: vi.fn((_col: unknown, ..._constraints: unknown[]) => ({})),
  mockCollection: vi.fn((_db: unknown, _name: string) => ({})),
  mockWhere: vi.fn((_f: string, _op: string, _v: unknown) => ({})),
  mockOrderBy: vi.fn((_f: string, _dir?: string) => ({})),
  mockLimit: vi.fn((_n: number) => ({})),
  mockGetFirestore: vi.fn(() => ({})),
}));

vi.mock("firebase/app", () => ({
  initializeApp: vi.fn(() => ({})),
  getApps: vi.fn(() => []),
  getApp: vi.fn(() => ({})),
}));

vi.mock("firebase/firestore", () => ({
  getFirestore: () => mockGetFirestore(),
  collection: (db: unknown, name: string) => mockCollection(db, name),
  getDocs: (q: unknown) => mockGetDocs(q),
  query: (col: unknown, ...constraints: unknown[]) => mockQuery(col, ...constraints),
  where: (f: string, op: string, v: unknown) => mockWhere(f, op, v),
  orderBy: (f: string, dir?: string) => mockOrderBy(f, dir),
  limit: (n: number) => mockLimit(n),
}));

import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  getArticles,
  getArticleBySlug,
  getProjects,
  getPages,
  getPageBySlug,
  getPrivacyPage,
} from "./firebase";

// ---------------------------------------------------------------------------
// Mock firebase/firestore
// ---------------------------------------------------------------------------
vi.mock("firebase/app", () => ({
  initializeApp: vi.fn(() => ({})),
  getApps: vi.fn(() => []),
  getApp: vi.fn(() => ({})),
}));

vi.mock("firebase/firestore", () => ({
  getFirestore: () => mockGetFirestore(),
  collection: (db: unknown, name: string) => mockCollection(db, name),
  getDocs: (q: unknown) => mockGetDocs(q),
  query: (col: unknown, ...constraints: unknown[]) => mockQuery(col, ...constraints),
  where: (f: string, op: string, v: unknown) => mockWhere(f, op, v),
  orderBy: (f: string, dir?: string) => mockOrderBy(f, dir),
  limit: (n: number) => mockLimit(n),
}));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function makeDoc(data: Record<string, unknown>) {
  return { data: () => data };
}

function makeSnapshot(docs: ReturnType<typeof makeDoc>[]) {
  return { docs, empty: docs.length === 0 };
}

// ---------------------------------------------------------------------------
// Article data fixtures
// ---------------------------------------------------------------------------
const articleData = {
  image: "img.jpg",
  date: "2024-01-01",
  excerpt: "excerpt EN",
  excerpt_fr: "excerpt FR",
  slug: "my-article",
  slug_fr: "mon-article",
  title: "My Article",
  title_fr: "Mon Article",
  content: "content EN",
  content_fr: "content FR",
};

// ---------------------------------------------------------------------------
// Tests: getArticles
// ---------------------------------------------------------------------------
describe("getArticles", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns articles in English", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(articleData)]));

    const articles = await getArticles("en");

    expect(articles).toHaveLength(1);
    expect(articles[0].title).toBe("My Article");
    expect(articles[0].excerpt).toBe("excerpt EN");
    expect(articles[0].slug).toBe("my-article");
    expect(articles[0].content).toBe("content EN");
  });

  it("returns articles in French", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(articleData)]));

    const articles = await getArticles("fr");

    expect(articles[0].title).toBe("Mon Article");
    expect(articles[0].excerpt).toBe("excerpt FR");
    expect(articles[0].slug).toBe("mon-article");
    expect(articles[0].content).toBe("content FR");
  });

  it("falls back to English title when French title is missing", async () => {
    mockGetDocs.mockResolvedValue(
      makeSnapshot([makeDoc({ ...articleData, title_fr: undefined })])
    );

    const articles = await getArticles("fr");
    expect(articles[0].title).toBe("My Article");
  });

  it("returns empty array when no articles exist", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([]));
    const articles = await getArticles("en");
    expect(articles).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Tests: getArticleBySlug
// ---------------------------------------------------------------------------
describe("getArticleBySlug", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns English article by slug", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(articleData)]));

    const article = await getArticleBySlug("my-article", "en");

    expect(article).not.toBeNull();
    expect(article!.title).toBe("My Article");
    expect(article!.slug).toBe("my-article");
  });

  it("returns French article by slug", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(articleData)]));

    const article = await getArticleBySlug("mon-article", "fr");

    expect(article!.title).toBe("Mon Article");
    expect(article!.slug).toBe("mon-article");
  });

  it("returns null when article is not found", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([]));

    const article = await getArticleBySlug("unknown-slug", "en");
    expect(article).toBeNull();
  });

  it("returns null and logs error when slug is empty", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const article = await getArticleBySlug("", "en");

    expect(article).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith("Missing slug in getArticleBySlug");
    consoleSpy.mockRestore();
  });

  it("queries slug_fr field when lang is fr", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(articleData)]));

    await getArticleBySlug("mon-article", "fr");

    expect(mockWhere).toHaveBeenCalledWith("slug_fr", "==", "mon-article");
  });

  it("queries slug field when lang is en", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(articleData)]));

    await getArticleBySlug("my-article", "en");

    expect(mockWhere).toHaveBeenCalledWith("slug", "==", "my-article");
  });
});

// ---------------------------------------------------------------------------
// Tests: getProjects
// ---------------------------------------------------------------------------
describe("getProjects", () => {
  beforeEach(() => vi.clearAllMocks());

  const projectData = {
    title: "Project EN",
    title_fr: "Projet FR",
    description: "desc EN",
    description_fr: "desc FR",
    technologies: ["Next.js", "TypeScript"],
    githubLink: "https://github.com/example",
    demoLink: "https://demo.example.com",
    image: "project.jpg",
  };

  it("returns projects in English", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(projectData)]));

    const projects = await getProjects("en");

    expect(projects[0].title).toBe("Project EN");
    expect(projects[0].description).toBe("desc EN");
    expect(projects[0].technologies).toEqual(["Next.js", "TypeScript"]);
  });

  it("returns projects in French", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(projectData)]));

    const projects = await getProjects("fr");

    expect(projects[0].title).toBe("Projet FR");
    expect(projects[0].description).toBe("desc FR");
  });

  it("falls back to English description when French is missing", async () => {
    mockGetDocs.mockResolvedValue(
      makeSnapshot([makeDoc({ ...projectData, description_fr: undefined })])
    );

    const projects = await getProjects("fr");
    expect(projects[0].description).toBe("desc EN");
  });

  it("returns empty array when no projects", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([]));
    expect(await getProjects("en")).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Tests: getPages
// ---------------------------------------------------------------------------
describe("getPages", () => {
  beforeEach(() => vi.clearAllMocks());

  const pageData = {
    slug: "about",
    slug_fr: "a-propos",
    title: "About",
    title_fr: "À propos",
    content: "content EN",
    content_fr: "content FR",
  };

  it("returns pages in English", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(pageData)]));

    const pages = await getPages("en");

    expect(pages[0].slug).toBe("about");
    expect(pages[0].title).toBe("About");
  });

  it("returns pages in French", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(pageData)]));

    const pages = await getPages("fr");

    expect(pages[0].slug).toBe("a-propos");
    expect(pages[0].title).toBe("À propos");
    expect(pages[0].content).toBe("content FR");
  });
});

// ---------------------------------------------------------------------------
// Tests: getPageBySlug
// ---------------------------------------------------------------------------
describe("getPageBySlug", () => {
  beforeEach(() => vi.clearAllMocks());

  const pageData = {
    slug: "privacy-policy",
    slug_fr: "politique-de-confidentialite",
    title: "Privacy Policy",
    title_fr: "Politique de confidentialité",
    content: "privacy content EN",
    content_fr: "privacy content FR",
  };

  it("returns page in English by slug", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(pageData)]));

    const page = await getPageBySlug("privacy-policy", "en");

    expect(page).not.toBeNull();
    expect(page!.title).toBe("Privacy Policy");
    expect(page!.slug).toBe("privacy-policy");
  });

  it("returns page in French by slug", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(pageData)]));

    const page = await getPageBySlug("politique-de-confidentialite", "fr");

    expect(page!.title).toBe("Politique de confidentialité");
    expect(page!.slug).toBe("politique-de-confidentialite");
  });

  it("returns null when page is not found", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([]));
    expect(await getPageBySlug("unknown", "en")).toBeNull();
  });

  it("returns null and logs error when slug is empty", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const page = await getPageBySlug("", "en");

    expect(page).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith("Missing slug in getPageBySlug");
    consoleSpy.mockRestore();
  });
});

// ---------------------------------------------------------------------------
// Tests: getPrivacyPage
// ---------------------------------------------------------------------------
describe("getPrivacyPage", () => {
  beforeEach(() => vi.clearAllMocks());

  const privacyData = {
    slug: "privacy-policy",
    slug_fr: "politique-de-confidentialite",
    title: "Privacy Policy",
    title_fr: "Politique de confidentialité",
    content: "privacy EN",
    content_fr: "privacy FR",
  };

  it("fetches English privacy page using correct slug", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(privacyData)]));

    const page = await getPrivacyPage("en");

    expect(mockWhere).toHaveBeenCalledWith("slug", "==", "privacy-policy");
    expect(page!.title).toBe("Privacy Policy");
  });

  it("fetches French privacy page using correct slug", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(privacyData)]));

    const page = await getPrivacyPage("fr");

    expect(mockWhere).toHaveBeenCalledWith(
      "slug_fr",
      "==",
      "politique-de-confidentialite"
    );
    expect(page!.title).toBe("Politique de confidentialité");
  });

  it("returns null when privacy page does not exist", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([]));
    expect(await getPrivacyPage("en")).toBeNull();
  });

  it("returns only slug, title and content fields", async () => {
    mockGetDocs.mockResolvedValue(makeSnapshot([makeDoc(privacyData)]));

    const page = await getPrivacyPage("en");

    expect(Object.keys(page!)).toEqual(["slug", "title", "content"]);
  });
});