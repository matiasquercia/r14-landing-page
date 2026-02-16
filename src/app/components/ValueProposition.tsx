import { Clock, Shield, Truck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function ValueProposition() {
  const benefits = [
    {
      icon: Clock,
      title: 'Puntualidad',
      description: 'Reparto diario con cumplimiento estricto de plazos y horarios acordados.',
      color: 'accent',
      delay: 0.1,
    },
    {
      icon: Shield,
      title: 'Seguridad alimentaria',
      description: 'Procesos controlados que garantizan la calidad e inocuidad de los alimentos.',
      color: 'secondary',
      delay: 0.2,
    },
    {
      icon: Truck,
      title: 'Flexibilidad operativa',
      description: 'Capacidad de adaptación a distintos volúmenes y necesidades específicas.',
      color: 'tertiary',
      delay: 0.3,
    },
    {
      icon: MapPin,
      title: 'Cobertura regional',
      description: 'Operamos en Buenos Aires con logística optimizada para cada zona.',
      color: 'accent',
      delay: 0.4,
    },
  ];

  const colorMap = {
    accent: {
      bg: 'bg-accent/10',
      border: 'border-accent/20',
      icon: 'text-accent',
      glow: 'shadow-[0_0_20px_rgba(0,212,230,0.15)]',
      hoverGlow: 'hover:shadow-[0_0_35px_rgba(0,212,230,0.25)]',
    },
    secondary: {
      bg: 'bg-secondary/10',
      border: 'border-secondary/20',
      icon: 'text-secondary',
      glow: 'shadow-[0_0_20px_rgba(232,97,47,0.15)]',
      hoverGlow: 'hover:shadow-[0_0_35px_rgba(232,97,47,0.25)]',
    },
    tertiary: {
      bg: 'bg-tertiary/10',
      border: 'border-tertiary/20',
      icon: 'text-tertiary',
      glow: 'shadow-[0_0_20px_rgba(232,168,0,0.15)]',
      hoverGlow: 'hover:shadow-[0_0_35px_rgba(232,168,0,0.25)]',
    },
  };

  const viewport = { once: true, amount: 0.15 } as const;
  const noFlicker = { backfaceVisibility: 'hidden' as const };

  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden -mt-24 pt-40 sm:pt-48 md:pt-56">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Intro Text */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={viewport}
          transition={{ type: 'tween', duration: 0.7 }}
          style={noFlicker}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-14 md:mb-16"
        >
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium px-2">
            En <span className="font-black text-accent">Real de Catorce</span> somos una empresa especializada en logística alimentaria, 
            dedicada al abastecimiento y reparto diario de alimentos frescos, congelados y envasados.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            const colors = colorMap[item.color as keyof typeof colorMap];
            
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ 
                  type: 'tween',
                  duration: 0.6, 
                  delay: item.delay,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                style={noFlicker}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative flex flex-col items-center text-center ${colors.bg} border ${colors.border} rounded-2xl p-6 sm:p-7 md:p-8 backdrop-blur-sm transition-all duration-500 ${colors.glow} ${colors.hoverGlow} group`}
              >
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${colors.bg} opacity-50 rounded-bl-full blur-xl`}></div>
                
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`w-16 h-16 ${colors.bg} border-2 ${colors.border} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                >
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </motion.div>
                
                <h3 className="mb-3 text-foreground font-black text-lg uppercase tracking-wide">
                  {item.title}
                </h3>
                
                <p className="text-foreground/70 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Animated border glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl border-2 ${colors.border} animate-pulse`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewport}
          transition={{ type: 'tween', duration: 1, delay: 0.6 }}
          style={noFlicker}
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
        ></motion.div>
      </div>
    </section>
  );
}
