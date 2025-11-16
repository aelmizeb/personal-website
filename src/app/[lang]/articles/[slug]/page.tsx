import { notFound } from 'next/navigation';
import AnimatedArticle from '../../../components/articles/AnimatedArticle';
import { getArticles, getArticleBySlug } from '@/utils/firebase';
import { Article } from '@/types';
import { langs } from '@/utils/constants';

// Generate static paths at build time
export async function generateStaticParams() {
  let params: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    const articles = await getArticles(lang);
    params.push(
      ...articles.map((article: Article) => ({
        lang,
        slug: article.slug,
      }))
    );
  }

  return params;
}

export default async function ArticleDetail({ params }: { params: { lang: string, slug: string } }) {
  const { lang, slug } = await params;
  const article = await getArticleBySlug(slug, lang);

  if (!article) notFound();

  return (
    <div className="container max-w-3xl mx-auto py-12">
      <AnimatedArticle article={article} />
    </div>
  );
}
