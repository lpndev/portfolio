import Container from '@/components/layout/container'
import Section from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { socials } from '@/lib/data'
import Link from 'next/link'

function About() {
  return (
    <Section>
      <Container className='gap-8'>
        <div className='flex flex-col items-center gap-2'>
          <span className='opacity-60'>About</span>
          <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-6xl'>
            Hi there 👋, I&apos;m Leonardo, a{' '}
            <span className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent'>
              front-end developer
            </span>
          </h1>
        </div>
        <div className='inline-flex items-center gap-2'>
          {socials.map((social, i) => (
            <Button
              key={i}
              variant='outline'
              size='icon'
              target='_blank'
              className='justify-center'
              asChild
            >
              <Link href={social.hash}>{social.icon}</Link>
            </Button>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default About
