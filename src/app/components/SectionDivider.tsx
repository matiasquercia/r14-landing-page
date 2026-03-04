import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface SectionDividerProps {
  position?: 'top' | 'bottom';
}

export function SectionDivider({ position = 'top' }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className={`absolute left-0 right-0 h-12 z-20 flex ${position === 'top' ? 'top-0 items-start' : 'bottom-0 items-end'}`}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ type: 'tween', duration: 4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ backfaceVisibility: 'hidden', transformOrigin: 'center' }}
        className="h-[10px] w-full flex-shrink-0 bg-gradient-to-r from-transparent via-secondary to-transparent shadow-[0_0_12px_rgba(161,197,255,0.4)]"
      />
    </div>
  );
}
