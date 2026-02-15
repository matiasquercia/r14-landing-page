import { Button } from './Button';
import logoImg from "@/assets/logo/RGB/300 ppi/branding_realdecatorce_Logo_02_blanco.png";
import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

// Video de fondo - Archivo local en public/hero-video.mp4
const HERO_VIDEO_URL = "/hero-video.mp4";

// Imagen de fallback mientras carga el video
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?auto=format&fit=crop&w=1920&q=80";

export function Hero({ onNavigate }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Asegurar que el video se reproduzca
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Algunos navegadores bloquean autoplay, ignorar el error
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-20 md:pb-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image (se muestra mientras carga el video) */}
        <img 
          src={FALLBACK_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        
        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          poster={FALLBACK_IMAGE}
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-primary/75"></div>
        
        {/* Difuminado inferior para fusión suave con siguiente sección - MÁS LARGO */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <img 
            src={logoImg} 
            alt="Real de Catorce Logo" 
            className="h-64 md:h-80 lg:h-96 mx-auto drop-shadow-2xl" 
          />
        </motion.div>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-white/95 drop-shadow-md font-bold px-2"
        >
          <span className="text-accent font-bold">Logística y abastecimiento alimentario</span> para organismos públicos y empresas.
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow px-4"
        >
          <span className="font-bold">Calidad, seguridad y eficiencia</span> en cada etapa del proceso
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="px-4"
        >
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => onNavigate('servicios')}
            className="w-full sm:w-auto"
          >
            Conocé nuestros servicios
          </Button>
        </motion.div>
      </div>
    </section>
  );
}