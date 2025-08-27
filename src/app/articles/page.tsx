import Link from 'next/link';
import { fadeInDown } from '@/utils/animations';
import { articles } from '@/contents/articles';
import { Article } from "@/types";
import Image from 'next/image';

export default function ArticlesPage() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        Articles
      </h1>

      <div className="articles space-y-8">
        {articles.map((article: Article) => (
          <div key={article.slug} className="border-b pb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <Image
                src={article.image}
                alt={article.title}
                width={200}
                height={120}
                className="object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/articles/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-3">{article.date}</p>
              <p className="text-gray-700 dark:text-gray-300">{article.excerpt}</p>
              <Link
                href={`/articles/${article.slug}`}
                className="text-blue-600 dark:text-blue-400 underline mt-2 inline-block"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
