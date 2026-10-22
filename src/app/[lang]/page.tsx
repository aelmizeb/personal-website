import Hero from "../components/home/Hero";
import Clients from "../components/about/Clients";
import Skills from "../components/about/Skills";
import Projects from "../components/Projects";
import { langs } from '@/utils/constants';

export function generateStaticParams() {
  return langs.map(lang => ({ lang }));
}

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container max-w-7xl mx-auto px-4">
        <Clients />
        <Skills />
      </div>
      <Projects />
    </div>
  );
}
