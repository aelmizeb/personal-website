// /lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, limit, orderBy } from "firebase/firestore";
import type { Article, Project } from "@/types";

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

// Initialize app once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

// Fetch all articles
export async function getArticles(): Promise<Article[]> {
  const q = query(collection(db, "articles"), orderBy("date", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    slug: doc.id,
    ...doc.data(),
  })) as Article[];
}

// Fetch single article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!slug) {
    console.error("Missing slug in getArticleBySlug");
    return null;
  }

  console.log("Fetching article with slug:", slug);

  const q = query(
    collection(db, "articles"),
    where("slug", "==", slug),
    limit(1)
  );

  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return null;

  const doc = querySnapshot.docs[0];
  return { slug: doc.id, ...(doc.data() as Omit<Article, "slug">) };
}

// Fetch all projects
export async function getProjects(): Promise<Project[]> {
  const q = query(collection(db, "projects"), orderBy("title", "asc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    ...doc.data(),
  })) as Project[];
}