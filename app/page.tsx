import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center w-full gap-10 py-5">
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
