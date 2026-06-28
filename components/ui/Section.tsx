interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`max-w-7xl mx-auto px-6 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}