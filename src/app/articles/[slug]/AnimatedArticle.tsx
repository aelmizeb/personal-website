'use client'

import { Article } from '@/types';
import { motion } from 'framer-motion';
import { fadeInDown } from '@/utils/animations';
import { basePath } from '@/utils/constants';
import Image from 'next/image';

export default function AnimatedArticle({ article }: { article: Article }) {
  const imageSrc = article.image?.startsWith("http")
    ? article.image // for external URLs
    : `${basePath}${article.image}`; // prepend basePath for local images

  return (
    <>
      {article.image && (
        <motion.div className="mb-8 flex justify-center" {...fadeInDown}>
          <Image
            src={imageSrc}
            alt={article.title}
            width={800}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
            priority
          />
        </motion.div>
      )}

      <motion.h1 className="text-4xl font-bold mb-4 text-center" {...fadeInDown}>
        {article.title}
      </motion.h1>

      <p className="text-center text-sm text-gray-500 mb-8">{article.date}</p>

      <article dangerouslySetInnerHTML={{ __html: article.content }} />
    </>
  );
}
