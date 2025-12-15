import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'

export default function Home() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center w-full gap-10 py-5" id="main">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
