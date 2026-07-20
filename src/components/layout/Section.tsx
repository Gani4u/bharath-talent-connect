type SectionProps = {
  id?: string
  children: React.ReactNode
  className?: string
}

export default function Section({
  id,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-24 ${className}`}>
      {children}
    </section>
  )
}