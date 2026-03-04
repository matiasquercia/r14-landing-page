import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';
import { motion } from 'motion/react';

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 50000, suffix: '+', label: 'Viandas entregadas' },
  { value: 200, suffix: '+', label: 'Clientes satisfechos' },
  { value: 15, suffix: '+', label: 'Años de experiencia' },
  { value: 500000, suffix: '+', label: 'Repartos realizados' },
];

function AnimatedNumber({ value, suffix = '', prefix = '', isInView }: { value: number; suffix?: string; prefix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatted = count.toLocaleString('es-AR');
  return (
    <span>
      {prefix}{formatted}{suffix}
    </span>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05, margin: '0px 0px 80px 0px' });
  const viewport = { once: true, amount: 0.05, margin: '0px 0px 80px 0px' } as const;
  const noFlicker = { backfaceVisibility: 'hidden' as const };

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={viewport}
      transition={{ type: 'tween', duration: 0.7, delay: 0.2 }}
      style={noFlicker}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-14 md:mb-16"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewport}
          transition={{ type: 'tween', duration: 0.5, delay: 0.1 + index * 0.1 }}
          style={noFlicker}
          className="relative flex flex-col items-center text-center p-6 bg-card/60 backdrop-blur-sm border border-secondary/25 rounded-2xl hover:border-secondary/45 transition-all duration-300 group"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary tabular-nums mb-1">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} isInView={isInView} />
          </div>
          <span className="text-xs sm:text-sm font-bold text-foreground/80 uppercase tracking-wide">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
