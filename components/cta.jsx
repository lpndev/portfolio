import Image from 'next/image'
import Link from 'next/link'

import { platforms } from '@/lib/data'

import Container from '@/components/container'
import Section from '@/components/section'

function CallToAction() {
  return (
    <Section>
      <Container className='gap-8 rounded-lg border border-primary bg-primary px-4 py-8 text-primary-foreground'>
        <div className='flex flex-col items-center gap-2'>
          <span className='opacity-60'>Hire me</span>
          <h3 className='scroll-m-20 text-center text-2xl font-semibold tracking-tight first:mt-0'>
            Lets work together
          </h3>
        </div>
        <div className='flex w-full flex-col gap-2 sm:w-fit sm:flex-row'>
          {platforms.map((platform, i) => (
            <Link
              key={i}
              href={platform.hash}
              target='_blank'
              className='inline-flex w-full items-center gap-2 rounded-lg border border-primary-foreground/5 bg-primary-foreground/5 p-4 transition hover:brightness-[103%] sm:w-fit'
            >
              <Image
                src={platform.icon}
                width={32}
                height={32}
                alt='Platform Logo'
              />
              <p className='font-medium'>{platform.title}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default CallToAction
