import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, CheckCircle, Shield, Users, Zap, Heart, Building2, GraduationCap, Briefcase } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { motion } from 'motion/react';

export function AboutSection() {
  const values = [
    { icon: Award, label: 'Calidad', color: 'accent' },
    { icon: CheckCircle, label: 'Transparencia', color: 'secondary' },
    { icon: Zap, label: 'Flexibilidad', color: 'tertiary' },
    { icon: Users, label: 'Adaptabilidad', color: 'accent' },
    { icon: Heart, label: 'Compromiso', color: 'secondary' },
    { icon: Shield, label: 'Seguridad alimentaria', color: 'tertiary' },
  ];

  const clientTypes = [
    { 
      icon: Building2, 
      label: 'Organismos públicos',
      color: 'accent'
    },
    { 
      icon: GraduationCap, 
      label: 'Instituciones educativas',
      color: 'secondary'
    },
    { 
      icon: Briefcase, 
      label: 'Empresas privadas',
      color: 'tertiary'
    },
  ];

  const colorMap = {
    accent: { bg: 'bg-accent/20', icon: 'text-accent', border: 'border-accent/30' },
    secondary: { bg: 'bg-secondary/20', icon: 'text-secondary', border: 'border-secondary/30' },
    tertiary: { bg: 'bg-tertiary/20', icon: 'text-tertiary', border: 'border-tertiary/30' },
  };

  const viewport = { once: true, amount: 0.15 } as const;
  const noFlicker = { backfaceVisibility: 'hidden' as const };

  return (
    <section id="nosotros" className="relative py-32 scroll-mt-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-40 w-[700px] h-[700px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Experiencia, calidad y compromiso en logística alimentaria"
          className="mb-16 md:mb-20"
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ type: 'tween', duration: 0.8 }}
            style={noFlicker}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-medium">
              <span className="font-bold text-accent">Real de Catorce</span> nació como un pequeño servicio de catering y organización de eventos, 
              donde la dedicación y el amor por la buena comida marcaron sus primeros pasos.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-medium">
              Con el tiempo, la experiencia adquirida impulsó una transformación profunda que dio lugar 
              a una empresa de logística alimentaria consolidada.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-medium">
              Hoy nos especializamos en el abastecimiento y reparto diario de alimentos para organismos públicos, instituciones y empresas privadas, gestionando procesos que combinan frescura, seguridad, puntualidad y eficiencia. Contamos con la capacidad operativa y flexibilidad para adaptarnos a las particularidades de cada cliente.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ type: 'tween', duration: 0.8 }}
            style={noFlicker}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NzgwMjMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipo de trabajo"
                className="rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.3)] w-full border-2 border-accent/20"
              />
              {/* Corner accent */}
              <div className="absolute top-4 left-4 w-20 h-20 border-4 border-accent/50 rounded-tl-3xl"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 border-4 border-secondary/50 rounded-br-3xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Highlighted Message */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={viewport}
          transition={{ type: 'tween', duration: 0.8 }}
          style={noFlicker}
          className="relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-accent/20 p-12 md:p-16 rounded-3xl text-center mb-20 overflow-hidden group hover:border-accent/40 transition-all duration-500"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <p className="relative text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground font-black uppercase tracking-tight">
            Mantenemos vivo el espíritu que nos vio nacer, con una estructura moderna preparada para los desafíos actuales.
          </p>

          {/* Decorative quotes */}
          <div className="absolute top-6 left-6 text-6xl text-accent/20 font-black">"</div>
          <div className="absolute bottom-6 right-6 text-6xl text-secondary/20 font-black rotate-180">"</div>
        </motion.div>

        {/* Values */}
        <div>
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ type: 'tween', duration: 0.7 }}
            style={noFlicker}
            className="text-3xl md:text-4xl text-center mb-12 text-foreground font-black uppercase tracking-tight"
          >
            Nuestras fortalezas
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colors = colorMap[value.color as keyof typeof colorMap];
              
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={viewport}
                  transition={{ 
                    type: 'tween',
                    duration: 0.5, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  style={noFlicker}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className={`flex flex-col items-center text-center p-6 bg-card/60 backdrop-blur-sm border ${colors.border} rounded-2xl hover:bg-card/80 transition-all duration-300 group`}
                >
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`${colors.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 border ${colors.border}`}
                  >
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </motion.div>
                  <span className="text-sm font-bold text-foreground uppercase tracking-wide">
                    {value.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Nuestros Clientes */}
        <div className="mt-20">
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ type: 'tween', duration: 0.7 }}
            style={noFlicker}
            className="text-3xl md:text-4xl text-center mb-12 text-foreground font-black uppercase tracking-tight"
          >
            Trabajamos con distintos sectores
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {clientTypes.map((client, index) => {
              const Icon = client.icon;
              const colors = colorMap[client.color as keyof typeof colorMap];
              
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={viewport}
                  transition={{ 
                    type: 'tween',
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  style={noFlicker}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className={`flex flex-col items-center text-center p-8 bg-card/70 backdrop-blur-sm border ${colors.border} rounded-3xl hover:bg-card/90 transition-all duration-300 group`}
                >
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`${colors.bg} w-20 h-20 rounded-2xl flex items-center justify-center mb-5 border-2 ${colors.border}`}
                  >
                    <Icon className={`w-10 h-10 ${colors.icon}`} />
                  </motion.div>
                  <span className="text-lg font-black text-foreground uppercase tracking-wide">
                    {client.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}