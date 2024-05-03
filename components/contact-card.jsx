import Link from 'next/link'

import { cn } from '@/lib/utils'

function ContactCard({ className, href, icon, title, body, ...props }) {
  return (
    <Link
      href={href}
      className={cn(
        'border-foreground-800/80 bg-foreground-900/20 relative inline-flex w-full items-center gap-2 whitespace-nowrap rounded-lg border p-4 text-sm transition hover:brightness-90',
        className
      )}
      {...props}
    >
      <div className='opacity-60'>{icon}</div>
      <p>{title}</p>
      &#183;
      <span className='overflow-hidden text-ellipsis opacity-75'>{body}</span>
    </Link>
  )
}

export default ContactCard
