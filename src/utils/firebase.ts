// /lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, limit, orderBy } from "firebase/firestore";
import type { Article, Page, Project } from "@/types";

// use API keys only to identify the Firebase project or app so it's safe to expose them publicly
const firebaseConfig = {
  apiKey: "AIzaSyDP6VCQmyrvkOIMarGoMji19b3lLCJtUSg",
  authDomain: "portfolio-website-2b6e8.firebaseapp.com",
  projectId: "portfolio-website-2b6e8",
  storageBucket: "portfolio-website-2b6e8.firebasestorage.app",
  messagingSenderId: "407893817925",
  appId: "1:407893817925:web:1a673f975172ec17d5012c",
  measurementId: "G-FQ7YBYQ391"
};

// Initialize Firebase app once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

// -------------------------------
// Articles
// -------------------------------
export async function getArticles(lang: string): Promise<Article[]> {

  const q = query(collection(db, "articles"), orderBy("date", "desc"));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => ({
    image: doc.data().image,
    date: doc.data().date,
    excerpt: lang === "fr" ? doc.data().excerpt_fr || doc.data().excerpt : doc.data().excerpt,
    slug: lang === "fr" ? doc.data().slug_fr : doc.data().slug,
    title: lang === "fr" ? doc.data().title_fr || doc.data().title : doc.data().title,
    content: lang === "fr" ? doc.data().content_fr || doc.data().content : doc.data().content,
  })) as Article[];
}

export async function getArticleBySlug(slug: string, lang: string): Promise<Article | null> {

  if (!slug) {
    console.error("Missing slug in getArticleBySlug");
    return null;
  }

  const field = lang === "fr" ? "slug_fr" : "slug";
  const q = query(
    collection(db, "articles"),
    where(field, "==", slug),
    limit(1)
  );

  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return null;

  const doc = querySnapshot.docs[0];
  const data = doc.data();
  return {
    image: doc.data().image,
    date: doc.data().date,
    excerpt: lang === "fr" ? data.excerpt_fr || data.excerpt : data.excerpt,
    slug: lang === "fr" ? data.slug_fr || data.slug : data.slug,
    title: lang === "fr" ? data.title_fr || data.title : data.title,
    content: lang === "fr" ? data.content_fr || data.content : data.content,
  } as Article;
}

// -------------------------------
// Projects
// -------------------------------
export async function getProjects(lang: string): Promise<Project[]> {

  const q = query(collection(db, "projects"), orderBy("title", "asc"));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => ({
    title: lang === "fr" ? doc.data().title_fr || doc.data().title : doc.data().title,
    description: lang === "fr" ? doc.data().description_fr || doc.data().description : doc.data().description,
    technologies: doc.data().technologies,
    githubLink: doc.data().githubLink,
    demoLink: doc.data().demoLink,
    image: doc.data().image,
  })) as Project[];
}

// -------------------------------
// Pages
// -------------------------------
export async function getPages(lang: string): Promise<Page[]> {

  const q = query(collection(db, "pages"), orderBy("title", "asc"));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => ({
    slug: lang === "fr" ? doc.data().slug_fr : doc.data().slug,
    title: lang === "fr" ? doc.data().title_fr || doc.data().title : doc.data().title,
    content: lang === "fr" ? doc.data().content_fr || doc.data().content : doc.data().content,
  })) as Page[];
}

export async function getPageBySlug(slug: string, lang: string): Promise<Page | null> {

  if (!slug) {
    console.error("Missing slug in getPageBySlug");
    return null;
  }

  const field = lang === "fr" ? "slug_fr" : "slug";
  const q = query(
    collection(db, "pages"),
    where(field, "==", slug),
    limit(1)
  );

  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return null;

  const doc = querySnapshot.docs[0];
  const data = doc.data();
  return {
    slug: lang === "fr" ? data.slug_fr || data.slug : data.slug,
    title: lang === "fr" ? data.title_fr || data.title : data.title,
    content: lang === "fr" ? data.content_fr || data.content : data.content,
  } as Page;
}


export async function getPrivacyPage(lang: string): Promise<Page | null> {
  const slug = lang === "fr" ? "politique-de-confidentialite" : "privacy-policy";
  
  const page = await getPageBySlug(slug, lang);

  if (!page) return null;

  return {
    slug: page.slug,
    title: page.title,
    content: page.content,
  } as Page;
}