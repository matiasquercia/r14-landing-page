import { Check, Shield, ClipboardCheck, TrendingUp, FileCheck } from 'lucide-react';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';
import { SectionDivider } from './SectionDivider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ServiceCardCarousel } from './ServiceCardCarousel';
import {
  imgEnvasados,
  imgMilanesa,
  imgMilanesa2,
  imgLentejas,
  imgEnsalada,
  imgPersona1,
  imgPersona2,
  imgOficina,
} from '@/assets/img';
import { motion } from 'motion/react';

const IMG_VIANDAS = [imgMilanesa, imgLentejas, imgMilanesa2, imgEnsalada, imgPersona1, imgPersona2];

interface ServicesSectionProps {
  onNavigate: (section: string) => void;
}

const steps = [
  {
    number: '01',
    verb: 'Proveemos',
    title: 'Abastecimiento de alimentos',
    description: 'Provisión de materias primas para organismos públicos, instituciones y empresas privadas.',
    items: ['Alimentos envasados', 'Productos frescos', 'Productos congelados', 'Catering para eventos'],
    image: imgEnvasados,
    imageFirst: true,
    accentColor: 'accent' as const,
  },
  {
    number: '02',
    verb: 'Elaboramos',
    title: 'Viandas alimenticias',
    description: 'Elaboración de viandas con enfoque nutricional, frescura garantizada y producción controlada.',
    items: ['Elaboración de viandas', 'Enfoque nutricional', 'Frescura garantizada', 'Producción controlada'],
    images: IMG_VIANDAS,
    imageFirst: false,
    accentColor: 'secondary' as const,
  },
  {
    number: '03',
    verb: 'Entregamos',
    title: 'Logística y distribución',
    description: 'Reparto diario con optimización de rutas, cumplimiento de plazos y volúmenes flexibles.',
    items: ['Reparto diario', 'Optimización de rutas', 'Cumplimiento de plazos', 'Volúmenes flexibles'],
    image: imgOficina,
    imageFirst: true,
    accentColor: 'tertiary' as const,
  },
];

/* Estilos para fondo claro - colores oscuros para contraste */
const accentStyles = {
  accent: {
    gradient: 'from-primary/15 to-primary/5',
    border: 'border-primary/25',
    text: 'text-primary',
  },
  secondary: {
    gradient: 'from-primary/15 to-primary/5',
    border: 'border-primary/20',
    text: 'text-primary',
  },
  tertiary: {
    gradient: 'from-tertiary/20 to-tertiary/5',
    border: 'border-tertiary/25',
    text: 'text-tertiary',
  },
};

const qualityBadges = [
  { icon: ClipboardCheck, label: 'Controles internos', color: 'accent' as const },
  { icon: TrendingUp, label: 'Mejora continua', color: 'secondary' as const },
  { icon: FileCheck, label: 'Cumplimiento normativo', color: 'tertiary' as const },
  { icon: Shield, label: 'Seguridad alimentaria', color: 'accent' as const },
];

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const viewport = { once: true, amount: 0.15 } as const;
  const noFlicker = { backfaceVisibility: 'hidden' as const };

  return (
    <section 
      id="servicios" 
      className="relative py-20 sm:py-24 md:py-32 scroll-mt-24 overflow-hidden bg-[#F6F8FA]"
    >
      <SectionDivider position="top" />

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-tertiary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Soluciones de logística alimentaria adaptadas a cada necesidad"
          subtitle="En Real de Catorce ofrecemos servicios integrales de logística y abastecimiento alimentario, diseñados para responder a las exigencias del sector público y privado."
          variant="light"
          className="mb-16 md:mb-20"
        />

        {/* Steps - Layout alternado - mismo alto */}
        <div className="space-y-16 md:space-y-24 mb-20">
          {steps.map((step, index) => {
            const styles = accentStyles[step.accentColor];
            const isImageFirst = step.imageFirst;
            const hasCarousel = 'images' in step;

            return (
              <motion.div
                key={step.number}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ type: 'tween', duration: 0.7, delay: index * 0.1 }}
                style={noFlicker}
                className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch md:min-h-[360px]"
              >
                <div className={`flex flex-col justify-center ${isImageFirst ? 'md:order-2' : 'md:order-1'}`}>
                  {/* Step number + verb */}
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className={`text-4xl md:text-5xl font-black ${styles.text} opacity-60 tabular-nums`}
                    >
                      {step.number}
                    </span>
                    <span className={`text-lg md:text-xl font-black uppercase tracking-wide ${styles.text}`}>
                      {step.verb}
                    </span>
                  </div>

                  <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight ${styles.text} mb-4`}>
                    {step.title}
                  </h3>
                  <p className="text-section-light-muted text-sm md:text-base leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span
                          className={`bg-gradient-to-br ${styles.gradient} border ${styles.border} w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0`}
                        >
                          <Check className={`w-3.5 h-3.5 ${styles.text} font-bold`} />
                        </span>
                        <span className="text-sm text-section-light-foreground/90 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image block */}
                <div
                  className={`relative rounded-2xl overflow-hidden border-2 ${styles.border} shadow-xl min-h-[280px] md:min-h-0 md:h-full ${
                    isImageFirst ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  {hasCarousel ? (
                    <ServiceCardCarousel
                      images={step.images}
                      alt={step.title}
                      gradientClass={styles.gradient}
                      className="h-full min-h-[280px]"
                    />
                  ) : (
                    <div className="relative w-full h-full min-h-[280px]">
                      <ImageWithFallback
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} mix-blend-multiply opacity-40`}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality strip - integrado */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={viewport}
          transition={{ type: 'tween', duration: 0.6 }}
          style={noFlicker}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {qualityBadges.map((badge, idx) => {
              const Icon = badge.icon;
              const colors = accentStyles[badge.color];
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl border ${colors.border} bg-white/80 backdrop-blur-sm shadow-sm`}
                >
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                  <span className="text-xs font-bold text-section-light-foreground uppercase tracking-wide">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-section-light-muted mt-6 max-w-2xl mx-auto">
            Desde la selección de materias primas hasta la entrega final, trabajamos con procesos optimizados que garantizan altos estándares de calidad y seguridad alimentaria.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={viewport}
          transition={{ type: 'tween', duration: 0.7, delay: 0.3 }}
          style={noFlicker}
          className="text-center"
        >
          <Button variant="primary" size="lg" onClick={() => onNavigate('contacto')}>
            Consultar por nuestros servicios
          </Button>
        </motion.div>
      </div>

      <SectionDivider position="bottom" />
    </section>
  );
}
