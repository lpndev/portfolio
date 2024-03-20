import About from '@/components/about'
import Contact from '@/components/contact'
import CallToAction from '@/components/cta'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-24 py-24'>
      <About />
      <Projects />
      <Contact />
      <CallToAction />
    </main>
  )
}
