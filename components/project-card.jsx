import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { Badge } from '@/components/ui/badge'

function ProjectCard({
  className,
  href,
  image,
  badges,
  title,
  body,
  ...props
}) {
  return (
    <Link
      href={href}
      target='_blank'
      className={cn(
        'border-foreground-800/80 bg-foreground-900/40 group relative flex min-h-[180px] flex-col gap-2 overflow-hidden rounded-lg border p-6 transition hover:brightness-90',
        className
      )}
      {...props}
    >
      <div className='flex flex-col gap-4 sm:max-w-[50%]'>
        <div className='inline-flex items-center gap-2'>
          {badges.map((badge, i) => (
            <Badge key={i} className='w-fit'>
              {badge}
            </Badge>
          ))}
        </div>
        <h2 className='text-lg font-medium leading-normal'>{title}</h2>
        <p className='text-sm leading-normal opacity-75'>{body}</p>
      </div>
      <Image
        src={image}
        width={400}
        height={200}
        alt='Card Image'
        className='border-foreground-700/80 -right-24 top-8 block rounded-lg border transition duration-300 md:absolute md:group-hover:-rotate-1 md:group-hover:scale-[1.02]'
        {...props}
      />
    </Link>
  )
}

export default ProjectCard
