import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  variant?: 'dark' | 'light';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  variant = 'dark',
  className = '',
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const isLight = variant === 'light';

  const titleClass = isLight
    ? 'text-2xl md:text-3xl lg:text-4xl mb-4 text-section-light-foreground font-black uppercase tracking-tight leading-tight'
    : 'text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground font-black uppercase tracking-tight leading-tight bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text';
  const subtitleClass = isLight
    ? 'text-sm md:text-base leading-relaxed text-section-light-muted font-medium'
    : 'text-sm md:text-base leading-relaxed text-muted-foreground font-medium';

  const viewport = { once: true, amount: 0.15 } as const;
  const noFlicker = { backfaceVisibility: 'hidden' as const };

  return (
    <div className={`max-w-4xl ${alignmentClass} ${className}`}>
      <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={viewport}
        transition={{ type: 'tween', duration: 0.7 }}
        style={noFlicker}
        className={titleClass}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={viewport}
          transition={{ type: 'tween', duration: 0.7, delay: 0.2 }}
          style={noFlicker}
          className={subtitleClass}
        >
          {subtitle}
        </motion.p>
      ) : null}
      
      {/* Decorative underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ type: 'tween', duration: 0.8, delay: 0.4 }}
        style={noFlicker}
        className={`mt-4 h-0.5 w-16 bg-gradient-to-r from-primary to-tertiary ${align === 'center' ? 'mx-auto' : ''}`}
      ></motion.div>
    </div>
  );
}
