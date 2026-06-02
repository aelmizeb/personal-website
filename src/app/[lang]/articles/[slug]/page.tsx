import { notFound } from 'next/navigation';
import AnimatedArticle from '../../../components/articles/AnimatedArticle';
import { getArticles, getArticleBySlug } from '@/utils/firebase';
import { Article } from '@/types';
import { langs } from '@/utils/constants';
import { sanitizeCmsHtml } from '@/utils/sanitize';

// Generate static paths at build time
export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

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
    <div className="relative overflow-hidden py-10 sm:py-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-linear-to-b from-primary/10 to-transparent" />
      <div className="container max-w-5xl mx-auto">
        <AnimatedArticle
          article={{ ...article, content: sanitizeCmsHtml(article.content) }}
          lang={lang}
        />
      </div>
    </div>
  );
}
