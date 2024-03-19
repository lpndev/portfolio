import ContactCard from '@/app/components/ui/contact-card'
import ContactForm from '@/app/components/ui/contact-form'
import Container from '@/components/layout/container'
import Section from '@/components/layout/section'
import { Separator } from '@/components/ui/separator'
import { contact } from '@/lib/data'
import { Suspense } from 'react'

function Contact() {
  return (
    <Section>
      <Container className='gap-8'>
        <div className='flex flex-col items-center gap-2'>
          <span className='opacity-60'>Contact</span>
          <h3 className='scroll-m-20 text-center text-2xl font-semibold tracking-tight first:mt-0'>
            Get in touch
          </h3>
        </div>
        <div className='flex w-full flex-col gap-4'>
          <div className='flex w-full flex-col gap-4 sm:flex-row'>
            {contact.map((item, i) => (
              <ContactCard
                key={i}
                href={item.hash}
                icon={item.icon}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>
          <div className='relative my-6 inline-flex w-full items-center'>
            <p className='absolute left-1/2 -translate-x-1/2 bg-background px-2'>
              Or
            </p>
            <Separator />
          </div>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Contact
