import { cn } from '@/lib/utils'

function Container({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'flex w-full max-w-screen-md flex-col items-center',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
