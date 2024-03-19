import { cn } from '@/lib/utils'

function Section({ className, children, as, ...props }) {
  const Section = as || 'section'

  const baseClasses = 'relative w-full px-4 flex flex-col  items-center'

  return (
    <Section className={cn(baseClasses, className)} {...props}>
      {children}
    </Section>
  )
}

export default Section
