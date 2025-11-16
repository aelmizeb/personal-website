'use client'

import { motion } from 'framer-motion';
import { fadeInDown } from '@/utils/animations';
import { Page } from '@/types';

export default function PageContent({ page }: { page: Page } ) {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        {page.title}
      </motion.h1>

      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  );
}