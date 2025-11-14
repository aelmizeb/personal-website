import { notFound } from 'next/navigation';
import AnimatedArticle from './AnimatedArticle';
import { getArticles, getArticleBySlug } from '@/utils/firebase';
import { Article } from '@/types';

// Generate static paths at build time
export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article: Article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <div className="container max-w-3xl mx-auto py-12">
      <AnimatedArticle article={article} />
    </div>
  );
}
