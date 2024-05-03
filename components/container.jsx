import { cn } from '@/lib/utils'

function Container({ as, className, children, ...props }) {
  const Container = as || 'div'

  return (
    <Container
      className={cn(
        'flex w-full max-w-screen-md flex-col items-center justify-center',
        className
      )}
      {...props}
    >
      {children}
    </Container>
  )
}

export default Container
