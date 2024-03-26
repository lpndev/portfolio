import Link from 'next/link'

import { Button } from '@/components/ui/button'
import Container from '@/components/container'
import Section from '@/components/section'

export default function NotFound() {
  return (
    <Section>
      <Container className='h-screen gap-4'>
        <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-6xl'>
          Not Found 😢
        </h1>
        <p className='text-lg opacity-80'>Could not find requested resource</p>
        <Button variant='outline'>
          <Link href='/'>Return Home</Link>
        </Button>
      </Container>
    </Section>
  )
}
