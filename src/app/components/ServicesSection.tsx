import { Check, Shield, ClipboardCheck, TrendingUp, FileCheck } from 'lucide-react';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onNavigate: (section: string) => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800&q=80',
      title: 'Abastecimiento de alimentos',
      items: [
        'Alimentos envasados',
        'Productos frescos',
        'Productos congelados',
        'Catering para eventos',
      ],
      accentColor: 'accent',
    },
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      title: 'Viandas alimenticias',
      items: [
        'Elaboración de viandas',
        'Enfoque nutricional',
        'Frescura garantizada',
        'Producción controlada',
      ],
      accentColor: 'secondary',
    },
    {
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      title: 'Logística y distribución',
      items: [
        'Reparto diario',
        'Optimización de rutas',
        'Cumplimiento de plazos',
        'Volúmenes flexibles',
      ],
      accentColor: 'tertiary',
    },
  ];

  const accentStyles = {
    accent: {
      gradient: 'from-accent/20 to-accent/5',
      border: 'border-accent/20',
      text: 'text-accent',
      glow: 'shadow-[0_10px_40px_rgba(0,212,230,0.15)]',
    },
    secondary: {
      gradient: 'from-secondary/20 to-secondary/5',
      border: 'border-secondary/20',
      text: 'text-secondary',
      glow: 'shadow-[0_10px_40px_rgba(232,97,47,0.15)]',
    },
    tertiary: {
      gradient: 'from-tertiary/20 to-tertiary/5',
      border: 'border-tertiary/20',
      text: 'text-tertiary',
      glow: 'shadow-[0_10px_40px_rgba(232,168,0,0.15)]',
    },
  };

  const viewport = { once: true, amount: 0.15 } as const;
  const noFlicker = { backfaceVisibility: 'hidden' as const };

  return (
    <section id="servicios" className="relative py-20 sm:py-24 md:py-32 scroll-mt-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Soluciones de logística alimentaria adaptadas a cada necesidad"
          subtitle="En Real de Catorce ofrecemos servicios integrales de logística y abastecimiento alimentario, diseñados para responder a las exigencias del sector público y privado."
          className="mb-12 sm:mb-14 md:mb-16 lg:mb-20"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 xl:gap-10 mb-12 sm:mb-14 md:mb-16">
          {services.map((service, index) => {
            const styles = accentStyles[service.accentColor as keyof typeof accentStyles];
            
            return (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ 
                  type: 'tween',
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                style={noFlicker}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative flex flex-col bg-card/80 backdrop-blur-sm border ${styles.border} rounded-3xl overflow-hidden transition-all duration-500 ${styles.glow} group`}
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} mix-blend-multiply`}></div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-tl-3xl rounded-br-3xl"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-7 md:p-8 flex-grow flex flex-col">
                  {/* Título movido aquí, debajo de la imagen */}
                  <motion.h3 
                    className={`text-xl sm:text-2xl font-black uppercase tracking-tight ${styles.text} mb-5 sm:mb-6`}
                  >
                    {service.title}
                  </motion.h3>

                  <ul className="space-y-3 sm:space-y-4 flex-grow">
                    {service.items.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={viewport}
                        transition={{ type: 'tween', duration: 0.4, delay: 0.5 + (idx * 0.1) }}
                        style={noFlicker}
                        className="flex items-center gap-3"
                      >
                        <span className={`bg-gradient-to-br ${styles.gradient} border ${styles.border} w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Check className={`w-4 h-4 ${styles.text} font-bold`} />
                        </span>
                        <span className="text-sm text-foreground/90 font-semibold">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Animated glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 border-2 ${styles.border} rounded-3xl animate-pulse`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality Badges - Integración de QualitySection */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={viewport}
          transition={{ type: 'tween', duration: 0.7 }}
          style={noFlicker}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-accent/20 rounded-3xl p-8 md:p-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-accent" />
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-foreground text-center">
                Compromiso con la calidad
              </h3>
            </div>
            
            <p className="text-center text-foreground/80 font-medium mb-8">
              Desde la selección de materias primas hasta la entrega final, trabajamos con procesos optimizados que garantizan altos estándares de calidad y seguridad alimentaria.
            </p>

            {/* Quality features en horizontal */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-accent/10 border border-accent/20 rounded-xl">
                <ClipboardCheck className="w-6 h-6 text-accent mb-2" />
                <span className="text-xs font-bold text-foreground uppercase">Controles internos</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-secondary/10 border border-secondary/20 rounded-xl">
                <TrendingUp className="w-6 h-6 text-secondary mb-2" />
                <span className="text-xs font-bold text-foreground uppercase">Mejora continua</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-tertiary/10 border border-tertiary/20 rounded-xl">
                <FileCheck className="w-6 h-6 text-tertiary mb-2" />
                <span className="text-xs font-bold text-foreground uppercase">Cumplimiento normativo</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-accent/10 border border-accent/20 rounded-xl">
                <Shield className="w-6 h-6 text-accent mb-2" />
                <span className="text-xs font-bold text-foreground uppercase">Seguridad alimentaria</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={viewport}
          transition={{ type: 'tween', duration: 0.7, delay: 0.5 }}
          style={noFlicker}
          className="text-center"
        >
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => onNavigate('contacto')}
          >
            Consultar por nuestros servicios
          </Button>
        </motion.div>
      </div>
    </section>
  );
}