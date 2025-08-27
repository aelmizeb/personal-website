export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}
