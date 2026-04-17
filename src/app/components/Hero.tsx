import { Button } from './Button';
import logoImg from "@/assets/logo/RGB/300 ppi/branding_realdecatorce_Logo_02_blanco.png";
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

// Video de fondo - Archivo local en public/hero-video.mp4
const HERO_VIDEO_URL = "/hero-video.mp4";

const PARALLAX_PX = 100;

export function Hero({ onNavigate }: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgShiftRaw = useTransform(scrollYProgress, (p) => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 0;
    }
    return p * PARALLAX_PX;
  });

  const bgShiftY = useSpring(bgShiftRaw, { stiffness: 90, damping: 28, mass: 0.4 });

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const tryPlay = () => {
      el.play().catch(() => {
        // Autoplay bloqueado u otro error: el fondo sólido sigue cubriendo
      });
    };

    // Si el navegador ya tiene datos en caché, puede estar listo antes de registrar listeners
    if (el.readyState >= 3) {
      setVideoReady(true);
      tryPlay();
      return;
    }

    const onReady = () => {
      setVideoReady(true);
      tryPlay();
    };

    el.addEventListener('canplay', onReady, { once: true });

    return () => {
      el.removeEventListener('canplay', onReady);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-36 sm:pt-32 sm:pb-40 md:pt-28 md:pb-28"
    >
      {/* Fondo con parallax (video + overlays se mueven más lento al hacer scroll) */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-[-14%] z-0 h-[128%] w-full will-change-transform"
        style={{ y: bgShiftY }}
        aria-hidden
      >
        {/* Capa base (misma familia cromática que el overlay) — evita flash de imagen ajena al video */}
        <div
          className="absolute inset-0 bg-primary bg-gradient-to-br from-[#000D2E] via-primary to-[#000b24]"
          aria-hidden
        />

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-primary/75" />

        {/* Fusión inferior: RGB fijo (#000D2E), solo alfa — evita bandas típicas de `to-transparent` */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-56"
          style={{
            background:
              'linear-gradient(to top, rgba(0, 13, 46, 0.45) 0%, rgba(0, 13, 46, 0.22) 28%, rgba(0, 13, 46, 0.1) 52%, rgba(0, 13, 46, 0.04) 78%, rgba(0, 13, 46, 0) 100%)',
          }}
          aria-hidden
        />
      </motion.div>

      {/* Content — más aire en móvil/tablet (padding y gaps); desde md alineado al resto del sitio */}
      <div className="container z-10 mx-auto px-5 text-center text-white sm:px-8 md:px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-12 md:mb-8 lg:mb-10"
        >
          <img 
            src={logoImg} 
            alt="Real de Catorce Logo" 
            className="mx-auto h-36 w-auto max-w-[85vw] object-contain drop-shadow-2xl sm:h-40 sm:max-w-[80vw] md:h-44 md:max-w-[90vw] lg:h-52" 
          />
        </motion.div>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mb-7 max-w-2xl text-base leading-snug text-white/95 drop-shadow-md sm:mb-9 sm:text-lg md:mb-6 md:text-xl"
        >
          <span className="text-secondary font-bold">Logística y abastecimiento alimentario</span>{' '}
          <span className="font-normal">para organismos públicos y empresas.</span>
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mb-10 max-w-xl text-sm leading-relaxed drop-shadow sm:mb-12 sm:text-base md:mb-8 md:text-lg lg:mb-10"
        >
          <span className="font-bold">Calidad, seguridad y eficiencia</span> en cada etapa del proceso
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto flex w-full max-w-sm justify-center sm:max-w-md md:max-w-none"
        >
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => onNavigate('servicios')}
            className="w-full min-w-0 sm:min-w-[240px] sm:w-auto"
          >
            Conocé nuestros servicios
          </Button>
        </motion.div>
      </div>
    </section>
  );
}