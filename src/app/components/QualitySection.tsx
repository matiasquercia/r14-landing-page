import { ClipboardCheck, TrendingUp, FileCheck, Apple } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { motion } from 'motion/react';

// Imagen de fondo - alimentos frescos
const BG_IMAGE = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1920&q=80";

export function QualitySection() {
  const features = [
    {
      icon: ClipboardCheck,
      label: 'Controles internos',
      color: 'accent',
    },
    {
      icon: TrendingUp,
      label: 'Procesos de mejora continua',
      color: 'secondary',
    },
    {
      icon: FileCheck,
      label: 'Cumplimiento normativo',
      color: 'tertiary',
    },
    {
      icon: Apple,
      label: 'Enfoque en nutrición y frescura',
      color: 'accent',
    },
  ];

  const colorMap = {
    accent: { bg: 'bg-accent/20', icon: 'text-accent', border: 'border-accent/40' },
    secondary: { bg: 'bg-secondary/20', icon: 'text-secondary', border: 'border-secondary/40' },
    tertiary: { bg: 'bg-tertiary/20', icon: 'text-tertiary', border: 'border-tertiary/40' },
  };

  return (
    <section id="calidad" className="relative py-32 scroll-mt-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      {/* Overlay oscuro con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-background/95" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Compromiso con la calidad y la seguridad alimentaria"
          subtitle="Desde la selección de materias primas hasta la entrega final, trabajamos con procesos optimizados que garantizan altos estándares de calidad y seguridad alimentaria."
          className="mb-16 md:mb-20 [&_h2]:text-white [&_p]:text-white/90 [&_div]:bg-accent"
        />

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color as keyof typeof colorMap];
            
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-md border ${colors.border} rounded-2xl hover:bg-white/15 transition-all duration-300 group`}
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`${colors.bg} border-2 ${colors.border} w-16 h-16 rounded-2xl flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </motion.div>
                <p className="font-black text-sm uppercase tracking-wide text-white">{feature.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlighted Message */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/10 backdrop-blur-xl border border-accent/30 p-12 md:p-16 rounded-3xl text-center mb-12 overflow-hidden group hover:border-accent/50 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="relative text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-relaxed text-white">
            La seguridad alimentaria es parte central de nuestra forma de trabajar.
          </p>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl leading-relaxed text-white/80 font-medium">
            Nuestra gestión se apoya en controles rigurosos y procesos de mejora continua que 
            aseguran el cumplimiento de todas las normativas vigentes, manteniendo siempre el 
            foco en la nutrición, la frescura y la satisfacción de nuestros clientes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}