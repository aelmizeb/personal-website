import { 
  fadeInDown,
} from '@/utils/animations'

import Bio from "../../components/about/Bio";
import Education from "../../components/about/Education";
import Experience from "../../components/about/Experience";
import Skills from "../../components/about/Skills";
import Clients from "../../components/about/Clients";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </h1>
      
      <Bio />
      <Clients />
      <Skills />
      <Experience />
      <Education />
    </div>
  )
} 