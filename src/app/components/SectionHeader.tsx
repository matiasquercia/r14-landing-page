import { motion } from 'motion/react';

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
    <div className={`max-w-4xl ${alignmentClass} ${className}`}>
      <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground font-black uppercase tracking-tight leading-tight bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium"
        >
          {subtitle}
        </motion.p>
      ) : null}
      
      {/* Decorative underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`mt-6 h-1 w-24 bg-gradient-to-r from-accent to-secondary ${align === 'center' ? 'mx-auto' : ''}`}
      ></motion.div>
    </div>
  );
}
