import { notFound } from "next/navigation";
import PageContent from "@/app/components/pages/PageContent";
import { getPageBySlug, getPages } from "@/utils/firebase";
import { langs } from '@/utils/constants';

// Generate static paths at build time
export async function generateStaticParams() {
  let params: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    const pages = await getPages(lang);
    params.push(
      ...pages.map((page) => ({
        lang,
        slug: page.slug,
      }))
    );
  }

  return params;
}

export default async function Page({ params }: { params: { lang: string; slug: string } }) {
  const { lang, slug } = await params;
  const page = await getPageBySlug(slug, lang);
  
  if (!page) notFound();

  return (
    <div className="container max-w-3xl mx-auto py-12">
      <PageContent page={page} />
    </div>
  );
}
