'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';
import { fadeInDown, staggerContainer } from '@/utils/animations';
import { Article } from "@/types";
import { getArticles } from "@/utils/firebase";
import { formatArticleDate, getArticleImageSrc, getArticleReadingTime } from '@/utils/articles';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from 'react-i18next';

export default function ArticlesList() {
  const { t, ready } = useTranslation();
  const { lang } = useLanguage();

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!ready) return;
    let isCurrent = true;

    getArticles(lang)
      .then(data => {
        if (isCurrent) setArticles(data);
      })
      .catch(err => {
        console.error('Error loading articles:', err);
        if (isCurrent) setArticles([]);
      })
      .finally(() => {
        if (isCurrent) setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [lang, ready]);

  if (!ready) return null;

  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-linear-to-b from-primary/10 to-transparent" />
      <div className="container max-w-7xl mx-auto">
        <motion.div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16" {...fadeInDown}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            {t('articles.eyebrow')}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t('common.articles')}
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t('articles.description')}
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3" aria-label={t('common.loading')}>
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-112 animate-pulse rounded-3xl bg-gray-100 dark:bg-gray-800" />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {articles.map((article, index) => {
              const href = `/${lang}/articles/${article.slug}`;

              return (
                <motion.article
                  key={article.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-sm transition-shadow hover:shadow-xl dark:border-gray-700/80 dark:bg-gray-800/70"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                >
                  {article.image && (
                    <Link href={href} className="relative block aspect-16/10 overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={getArticleImageSrc(article.image)}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <CalendarDaysIcon className="h-4 w-4" />
                        {formatArticleDate(article.date, lang)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ClockIcon className="h-4 w-4" />
                        {t('articles.readingTime', { count: getArticleReadingTime(article.content) })}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-primary">
                      <Link href={href}>{article.title}</Link>
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {article.excerpt}
                    </p>
                    <Link
                      href={href}
                      className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary"
                    >
                      {t('common.readMore')}
                      <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}

        {!isLoading && articles.length === 0 && (
          <p className="rounded-3xl border border-dashed border-gray-300 py-16 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
            {t('articles.empty')}
          </p>
        )}
      </div>
    </section>
  );
}
