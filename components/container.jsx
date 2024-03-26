import { cn } from '@/lib/utils'

function Container({ as, className, children, ...props }) {
  const Container = as || 'div'

  return (
    <div
      className={cn(
        'flex w-full max-w-screen-md flex-col items-center justify-center',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
