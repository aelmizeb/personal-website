import ArticlesList from '@/app/components/articles/ArticlesList';
import { langs } from '@/utils/constants';

export function generateStaticParams() {
  return langs.map(lang => ({ lang }));
}

export default function ArticlesPage() {

  return (
    <ArticlesList />
  );
}
