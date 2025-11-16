import { redirect } from 'next/navigation';
import { langs } from "@/utils/constants";

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export default function Home() {
  redirect('/en'); // default language
}