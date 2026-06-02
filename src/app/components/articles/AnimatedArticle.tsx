'use client'

import { Article } from '@/types';
import { motion } from 'framer-motion';
import { fadeInDown } from '@/utils/animations';
import { formatArticleDate, getArticleImageSrc, getArticleReadingTime } from '@/utils/articles';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function AnimatedArticle({ article, lang }: { article: Article, lang: string }) {
  const { t } = useTranslation();

  return (
    <motion.div {...fadeInDown}>
      <Link
        href={`/${lang}/articles`}
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-primary dark:text-gray-300"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        {t('articles.backToArticles')}
      </Link>

      {article.image && (
        <div className="relative aspect-16/7 overflow-hidden rounded-3xl bg-gray-100 shadow-lg shadow-gray-200/60 dark:bg-gray-800 dark:shadow-none">
          <Image
            src={getArticleImageSrc(article.image)}
            alt={article.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
        <header>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            {t('articles.eyebrow')}
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <CalendarDaysIcon className="h-4 w-4" />
              {formatArticleDate(article.date, lang)}
            </span>
            <span className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4" />
              {t('articles.readingTime', { count: getArticleReadingTime(article.content) })}
            </span>
          </div>
          {article.excerpt && (
            <p className="mt-7 border-l-2 border-primary pl-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {article.excerpt}
            </p>
          )}
        </header>

        <article
          className="article-content mt-12 border-t border-gray-200/80 pt-10 pb-6 dark:border-gray-700/80 sm:mt-16 sm:pt-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </motion.div>
  );
}
