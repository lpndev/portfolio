import { cn } from '@/lib/utils'

function Section({ className, children, as, ...props }) {
  const Section = as || 'section'

  return (
    <Section
      className={cn(
        'relative flex w-full flex-col items-center justify-center px-5',
        className
      )}
      {...props}
    >
      {children}
    </Section>
  )
}

export default Section
