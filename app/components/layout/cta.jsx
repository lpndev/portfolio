import Container from '@/components/layout/container'
import Section from '@/components/layout/section'
import { Badge } from '@/components/ui/badge'
import { upworkUser } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

function CallToAction() {
  return (
    <Section>
      <Container className='gap-8 rounded-lg border border-zinc-800/40 bg-zinc-100 px-4 py-8 text-zinc-900'>
        <div className='flex flex-col items-center gap-2'>
          <span className='opacity-60'>Hire me</span>
          <h3 className='scroll-m-20 text-center text-2xl font-semibold tracking-tight first:mt-0'>
            Lets work together
          </h3>
        </div>
        <div className='flex w-full flex-col items-center gap-2'>
          <Link
            href={`https://www.upwork.com/freelancers/${upworkUser}`}
            target='_blank'
            className='group relative inline-flex w-full gap-4 rounded-lg border border-zinc-200 bg-zinc-200/40 p-4 transition hover:brightness-[103%]'
          >
            <div>
              <Image
                src='/images/pfp.png'
                className='h-14 w-14 max-w-14 rounded-full object-center'
                width={60}
                height={60}
                alt='Image'
              />
            </div>
            <div className='space-y-2'>
              <Badge>Upwork</Badge>
              <h4 className='text-lg font-medium leading-normal'>
                Leonardo Diniz
              </h4>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  )
}

export default CallToAction
