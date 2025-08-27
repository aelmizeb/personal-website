import { articles } from '@/contents/articles';
import { notFound } from 'next/navigation';
import AnimatedArticle from './AnimatedArticle';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const article = articles.find((a) => a.slug === slug)

  if (!article) notFound()

  return (
    <div className="container max-w-3xl mx-auto py-12">
      <AnimatedArticle article={article} />
    </div>
  );
}
