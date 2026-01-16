import { Button } from './Button';
import logoImg from "@/assets/logo/RGB/300 ppi/branding_realdecatorce_Logo_01_blanco.png";
import { useRef, useEffect } from 'react';

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
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <img 
          src={logoImg} 
          alt="Real de Catorce Logo" 
          className="h-24 md:h-32 mx-auto mb-6 drop-shadow-2xl" 
        />
        <h1 className="text-4xl md:text-6xl mb-10 drop-shadow-lg">Real de Catorce</h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-secondary drop-shadow-md">
          Logística y abastecimiento alimentario para organizaciones públicas y empresas
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
          Calidad, seguridad y eficiencia en cada etapa del proceso
        </p>
        <Button 
          variant="primary" 
          size="lg"
          onClick={() => onNavigate('servicios')}
        >
          Conocé nuestros servicios
        </Button>
      </div>
    </section>
  );
}