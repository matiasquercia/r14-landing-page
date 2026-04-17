import { useRef, useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'motion/react';
import type { LucideIcon } from 'lucide-react';

const spring = { stiffness: 300, damping: 28, mass: 0.45 };

export type CalidadPillarStyles = {
  border: string;
  iconWrap: string;
  corner: string;
  icon: string;
  glow: string;
  hoverGlow: string;
};

type CalidadPillarCardProps = {
  title: string;
  icon: LucideIcon;
  index: number;
  styles: CalidadPillarStyles;
};

export function CalidadPillarCard({ title, icon: Icon, index, styles }: CalidadPillarCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const fn = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);

  const rotateX = useTransform(sy, [0, 1], [14, -14]);
  const rotateY = useTransform(sx, [0, 1], [-14, 14]);

  const spotX = useTransform(sx, [0, 1], [0, 100]);
  const spotY = useTransform(sy, [0, 1], [0, 100]);
  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${spotX}% ${spotY}%, rgba(161,197,255,0.32), rgba(91,138,255,0.1) 38%, transparent 58%)`;

  const sheenX = useTransform(sx, [0, 1], [35, -35]);
  const sheenY = useTransform(sy, [0, 1], [25, -25]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const viewport = { once: true, amount: 0.08, margin: '0px 0px 80px 0px' } as const;

  return (
    <motion.article
      ref={ref}
      initial={{ y: 44, opacity: 0, rotateX: 10 }}
      whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
      viewport={viewport}
      transition={{
        duration: 0.6,
        delay: index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={
        reduceMotion
          ? { backfaceVisibility: 'hidden' }
          : {
              rotateX,
              rotateY,
              transformPerspective: 900,
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }
      }
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.985 }}
      className={`group relative flex min-h-[168px] cursor-default flex-col items-center justify-center overflow-hidden rounded-2xl border p-6 text-center backdrop-blur-md transition-shadow duration-500 sm:min-h-[176px] sm:p-7 ${styles.border} bg-card/55 ${styles.glow} ${styles.hoverGlow}`}
    >
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      )}

      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100"
          style={{
            x: sheenX,
            y: sheenY,
            background:
              'linear-gradient(125deg, transparent 35%, rgba(255,255,255,0.2) 48%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.12) 52%, transparent 65%)',
          }}
        />
      )}

      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl opacity-35 transition-opacity duration-500 group-hover:opacity-80 ${styles.corner}`}
        aria-hidden
      />

      {!reduceMotion && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-secondary shadow-[0_0_10px_rgba(161,197,255,0.95)]"
              style={{
                left: `${12 + i * 18}%`,
                top: `${18 + (i % 2) * 55}%`,
              }}
              animate={{ y: [0, -12, 0], opacity: [0.25, 1, 0.25] }}
              transition={{
                duration: 1.6 + i * 0.12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className={`relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border-2 shadow-lg ${styles.iconWrap}`}
        style={reduceMotion ? undefined : { transform: 'translateZ(48px)' }}
        whileHover={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1.04],
                rotate: [0, -8, 8, 0],
                transition: { duration: 0.5, ease: 'easeInOut' },
              }
        }
      >
        <Icon className={`relative z-10 h-8 w-8 ${styles.icon}`} strokeWidth={1.75} />
        {!reduceMotion && (
          <motion.span
            aria-hidden
            className={`absolute inset-0 rounded-xl opacity-0 blur-lg group-hover:opacity-60 ${styles.corner}`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </motion.div>

      <h3
        className="relative z-10 max-w-[15rem] font-black text-xs uppercase leading-snug tracking-wide text-foreground sm:text-sm"
        style={reduceMotion ? undefined : { transform: 'translateZ(28px)' }}
      >
        {title}
      </h3>
    </motion.article>
  );
}
