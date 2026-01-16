import { Button } from './Button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImg from "@/assets/a27ef8d2d8ee3a82ca53db10c8dd286a7009efee.png";
import { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbG9naXN0aWNzJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2Nzg4Nzg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Logística alimentaria"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <img 
          src={logoImg} 
          alt="Real de Catorce Logo" 
          className="h-24 md:h-32 mx-auto mb-6 drop-shadow-2xl" 
        />
        <h1 className="text-4xl md:text-6xl mb-4">Real de Catorce</h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-secondary">
          Logística y abastecimiento alimentario para organizaciones públicas y empresas
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
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