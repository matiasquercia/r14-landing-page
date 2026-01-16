interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignmentClass} ${className}`}>
      <h2 className="text-3xl md:text-4xl mb-4 text-foreground">{title}</h2>
      {subtitle ? (
        <p className="text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
