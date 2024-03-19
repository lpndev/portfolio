import { cn } from '@/lib/utils'

function Container({ className, children, ...props }) {
  const baseClasses = 'w-full max-w-screen-md flex flex-col  items-center'

  return (
    <div className={cn(baseClasses, className)} {...props}>
      {children}
    </div>
  )
}

export default Container
