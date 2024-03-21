import Link from 'next/link'

import { cn } from '@/lib/utils'

function ContactCard({ className, href, icon, title, body, ...props }) {
  return (
    <Link
      href={href}
      className={cn(
        'relative inline-flex w-full items-center gap-2 whitespace-nowrap rounded-lg border border-zinc-800/80 bg-zinc-900/20 p-4 text-sm transition hover:brightness-90',
        className
      )}
      {...props}
    >
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
