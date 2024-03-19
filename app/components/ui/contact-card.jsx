import { cn } from '@/lib/utils'
import Link from 'next/link'

function ContactCard({ className, href, icon, title, body, ...props }) {
  const baseClasses =
    'w-full relative whitespace-nowrap p-4 inline-flex items-center gap-2 rounded-lg text-sm border border-zinc-800/80 bg-zinc-900/40 hover:brightness-90 transition'

  return (
    <Link href={href} className={cn(baseClasses, className)} {...props}>
      <div className='opacity-60'>{icon}</div>
      <p>{title}</p>
      &#183;
      <span className='overflow-hidden text-ellipsis text-zinc-400'>
        {body}
      </span>
    </Link>
  )
}

export default ContactCard
