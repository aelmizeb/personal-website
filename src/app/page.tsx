import Hero from "./components/home/Hero";
import Clients from "./components/about/Clients";
import Skills from "./components/about/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Skills />
      <Projects />
    </main>
  );
} 