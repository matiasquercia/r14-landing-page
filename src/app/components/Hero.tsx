import { Button } from './Button';
import logoImg from "@/assets/logo/RGB/300 ppi/branding_realdecatorce_Logo_02_blanco.png";
import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

// Video de fondo - Archivo local en public/hero-video.mp4
const HERO_VIDEO_URL = "/hero-video.mp4";

export function Hero({ onNavigate }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-24 md:pb-28">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
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
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-primary/75"></div>
        
        {/* Difuminado inferior para fusión suave con siguiente sección */}
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-56 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-10 text-center text-white">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-10"
        >
          <img 
            src={logoImg} 
            alt="Real de Catorce Logo" 
            className="h-36 sm:h-40 md:h-44 lg:h-52 mx-auto drop-shadow-2xl w-auto max-w-[90vw] object-contain" 
          />
        </motion.div>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl mb-5 sm:mb-6 text-white/95 drop-shadow-md max-w-2xl mx-auto leading-snug"
        >
          <span className="text-secondary font-bold">Logística y abastecimiento alimentario</span>{' '}
          <span className="font-normal">para organismos públicos y empresas.</span>
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-xl mx-auto drop-shadow leading-relaxed"
        >
          <span className="font-bold">Calidad, seguridad y eficiencia</span> en cada etapa del proceso
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => onNavigate('servicios')}
            className="w-full sm:w-auto min-w-[240px]"
          >
            Conocé nuestros servicios
          </Button>
        </motion.div>
      </div>
    </section>
  );
}