import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

function ProjectCard({
  className,
  href,
  image,
  badges,
  title,
  body,
  ...props
}) {
  const baseClasses =
    'group relative flex min-h-[180px] flex-col gap-2 overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-6 transition hover:brightness-90'

  return (
    <Link
      href={href}
      target='_blank'
      className={cn(baseClasses, className)}
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
        <p className='text-sm leading-normal text-zinc-400'>{body}</p>
      </div>
      <Image
        src={image}
        width={400}
        height={200}
        alt='Card Image'
        className='-right-24 top-8 block rounded-lg border border-zinc-700/80 transition duration-300 md:absolute md:group-hover:-rotate-1 md:group-hover:scale-[1.02]'
        {...props}
      />
    </Link>
  )
}

export default ProjectCard
