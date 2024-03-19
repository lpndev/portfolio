import Working from '@/app/components/ui/working'
import { Skeleton } from '@/components/ui/skeleton'

function ContactForm() {
  return (
    <Working>
      <div className='flex flex-col gap-8'>
        <code className='scroll-m-20 tracking-tight text-zinc-400'>
          Contact Form
        </code>
        <div className='flex flex-col items-center gap-8 sm:flex-row'>
          <div className='w-full space-y-2'>
            <Skeleton className='h-4 w-20 rounded-md' />
            <Skeleton className='h-8 w-full rounded-md' />
          </div>
          <div className='w-full space-y-2'>
            <Skeleton className='h-4 w-20 rounded-md' />
            <Skeleton className='h-8 w-full rounded-md' />
          </div>
        </div>
        <div className='w-full space-y-2'>
          <Skeleton className='h-4 w-20 rounded-md' />
          <Skeleton className='h-8 w-full rounded-md' />
        </div>
        <div className='w-full space-y-2'>
          <Skeleton className='h-4 w-20 rounded-md' />
          <Skeleton className='h-8 w-full rounded-md' />
        </div>
        <div className='w-full space-y-2'>
          <Skeleton className='h-4 w-20 rounded-md' />
          <Skeleton className='h-28 w-full rounded-md' />
        </div>
        <div className='w-full space-y-2'>
          <Skeleton className='h-8 w-40 rounded-md' />
        </div>
      </div>
    </Working>
  )
}

export default ContactForm
