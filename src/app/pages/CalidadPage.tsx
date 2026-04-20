import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ClipboardCheck, TrendingUp, FileCheck, Apple } from 'lucide-react';
import { CalidadPillarCard } from '../components/CalidadPillarCard';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { imgEnvasados } from '@/assets/img';

const pillars = [
  {
    icon: ClipboardCheck,
    title: 'Controles internos',
    color: 'accent' as const,
  },
  {
    icon: TrendingUp,
    title: 'Procesos de mejora continua',
    color: 'secondary' as const,
  },
  {
    icon: FileCheck,
    title: 'Cumplimiento normativo',
    color: 'tertiary' as const,
  },
  {
    icon: Apple,
    title: 'Enfoque en nutrición y frescura',
    color: 'accent' as const,
  },
];

const colorMap = {
  accent: {
    border: 'border-secondary/25',
    iconWrap: 'bg-secondary/15 border-secondary/25',
    corner: 'bg-secondary/15',
    icon: 'text-secondary',
    glow: 'shadow-[0_0_20px_rgba(161,197,255,0.12)]',
    hoverGlow: 'hover:shadow-[0_0_35px_rgba(161,197,255,0.2)]',
  },
  secondary: {
    border: 'border-secondary/20',
    iconWrap: 'bg-secondary/10 border-secondary/20',
    corner: 'bg-secondary/10',
    icon: 'text-secondary',
    glow: 'shadow-[0_0_20px_rgba(161,197,255,0.15)]',
    hoverGlow: 'hover:shadow-[0_0_35px_rgba(161,197,255,0.25)]',
  },
  tertiary: {
    border: 'border-tertiary/20',
    iconWrap: 'bg-tertiary/10 border-tertiary/20',
    corner: 'bg-tertiary/10',
    icon: 'text-tertiary',
    glow: 'shadow-[0_0_20px_rgba(91,138,255,0.15)]',
    hoverGlow: 'hover:shadow-[0_0_35px_rgba(91,138,255,0.25)]',
  },
};

export function CalidadPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'calidad') return;
    if (sectionId === 'home') {
      navigate({ pathname: '/', hash: '' }, { state: { skipHeaderEntrance: true } });
      return;
    }
    // Sin hash en la URL: HomePage lee state.scrollTo; skipHeaderEntrance evita animación del header al volver
    navigate({ pathname: '/', hash: '' }, {
      state: { scrollTo: sectionId, skipHeaderEntrance: true },
    });
  };

  const viewport = { once: true, amount: 0.05, margin: '0px 0px 80px 0px' } as const;
  const noFlicker = { backfaceVisibility: 'hidden' as const };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} />

      <main>
        {/* Hero: padding superior acorde al header fijo (barra + nav + logo en subpáginas) */}
        <section className="relative flex min-h-0 flex-col justify-start overflow-hidden pt-36 pb-12 scroll-mt-28 sm:pt-40 sm:pb-14 md:pt-44 md:pb-16 lg:pt-48">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imgEnvasados})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/92 via-primary/88 to-background/95" />
          <div className="absolute inset-0 bg-secondary/5" aria-hidden />
          <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />

          <div className="container relative z-10 mx-auto flex flex-col gap-10 px-4 pb-6 md:gap-12 md:pb-10">
            <motion.div
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={noFlicker}
              className="mx-auto max-w-4xl shrink-0 text-center"
            >
              <h1 className="mb-5 font-black text-2xl uppercase leading-tight tracking-tight text-white text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                Procesos controlados, foco en nutrición y estándares de calidad.
              </h1>
              <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-white/85 md:text-lg">
                Desde la selección de materias primas hasta la entrega final, trabajamos con procesos
                optimizados que garantizan altos estándares de calidad y seguridad alimentaria.
              </p>
            </motion.div>

            {/* 4 pilares: mismo bloque hero, más arriba en la página y con énfasis visual */}
            <motion.div
              id="pilares"
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={noFlicker}
              className="w-full pt-2 md:pt-4"
            >
              <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
                <h2 className="font-black text-xl uppercase leading-snug tracking-tight text-white text-balance sm:text-2xl md:text-3xl lg:text-4xl">
                  Nuestra gestión se apoya en <strong>cuatro pilares</strong>
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-relaxed text-white/75 md:text-base">
                  Son la base de cada decisión operativa y de{' '}
                  <span className="font-semibold text-white/90">cada entrega</span>.
                </p>
              </div>

              <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8 [perspective:1200px]">
                {pillars.map((item, index) => (
                  <CalidadPillarCard
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    index={index}
                    styles={colorMap[item.color]}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cierre */}
        <section className="relative overflow-hidden py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-24 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
            <div className="absolute bottom-1/4 -right-24 h-80 w-80 rounded-full bg-tertiary/5 blur-3xl" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.65, delay: 0.15 }}
              style={noFlicker}
              className="mx-auto max-w-3xl rounded-3xl border border-secondary/25 bg-gradient-to-br from-card/80 to-card/60 p-10 text-center backdrop-blur-xl md:p-14"
            >
              <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
                Integrando <span className="font-bold text-secondary">controles internos</span>,{' '}
                <span className="font-bold text-secondary">mejora continua</span> y{' '}
                <span className="font-bold text-secondary">cumplimiento normativo</span>, sostenemos
                un estándar único: alimentos seguros, nutritivos y frescos para quienes confían en
                nosotros.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
