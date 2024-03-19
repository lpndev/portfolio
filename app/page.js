import About from '@/app/components/layout/about'
import Contact from '@/app/components/layout/contact'
import CallToAction from '@/app/components/layout/cta'
import Projects from '@/app/components/layout/projects'

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
