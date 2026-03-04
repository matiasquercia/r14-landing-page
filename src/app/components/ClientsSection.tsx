import { SectionHeader } from './SectionHeader';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { imgPersona1, imgPersona2, imgOficina } from '@/assets/img';
import { motion } from 'motion/react';
import { Building2, GraduationCap, Briefcase } from 'lucide-react';

export function ClientsSection() {
  const sectors = [
    {
      image: imgOficina,
      title: 'Organismos públicos',
      description: 'Soluciones adaptadas a las necesidades del sector público',
      icon: Building2,
      color: 'accent',
    },
    {
      image: imgPersona1,
      title: 'Instituciones',
      description: 'Abastecimiento para instituciones educativas y sociales',
      icon: GraduationCap,
      color: 'secondary',
    },
    {
      image: imgPersona2,
      title: 'Empresas privadas',
      description: 'Servicios personalizados para el sector empresarial',
      icon: Briefcase,
      color: 'tertiary',
    },
  ];

  const colorMap = {
    accent: { gradient: 'from-secondary/30 to-secondary/10', border: 'border-secondary/30', text: 'text-secondary' },
    secondary: { gradient: 'from-secondary/30 to-secondary/10', border: 'border-secondary/30', text: 'text-secondary' },
    tertiary: { gradient: 'from-tertiary/30 to-tertiary/10', border: 'border-tertiary/30', text: 'text-tertiary' },
  };

  const viewport = { once: true, amount: 0.15 } as const;
  const noFlicker = { backfaceVisibility: 'hidden' as const };

  return (
    <section id="clientes" className="relative py-32 scroll-mt-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Abastecimiento para distintos sectores"
          subtitle="Trabajamos con organismos públicos, instituciones y empresas privadas con soluciones ajustadas a cada contexto."
          className="mb-16 md:mb-20"
        />

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            const colors = colorMap[sector.color as keyof typeof colorMap];
            
            return (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ type: 'tween', duration: 0.7, delay: index * 0.15 }}
                style={noFlicker}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-card/80 backdrop-blur-sm border ${colors.border} rounded-3xl overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.3)] transition-all duration-500 group`}
              >
                {/* Sector Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} mix-blend-multiply`}></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-6 right-6">
                    <div className={`w-14 h-14 bg-white/20 backdrop-blur-sm border ${colors.border} rounded-2xl flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 text-center">
                  <h3 className={`mb-3 text-base font-black uppercase tracking-tight ${colors.text}`}>
                    {sector.title}
                  </h3>
                  <p className="text-foreground/70 text-sm font-medium leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 border-2 ${colors.border} rounded-3xl animate-pulse`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Description */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={viewport}
          transition={{ type: 'tween', duration: 0.8 }}
          style={noFlicker}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-secondary/25 p-10 md:p-12 rounded-3xl overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-secondary via-tertiary to-secondary"></div>
            
            <p className="text-lg leading-relaxed text-foreground/90 font-medium mb-4">
              Trabajamos principalmente con el sector público, y contamos con la capacidad operativa 
              y la flexibilidad necesaria para acompañar a empresas privadas que requieran soluciones 
              de logística alimentaria.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 font-medium">
              Nuestro enfoque personalizado nos permite adaptarnos a las particularidades de cada 
              cliente, garantizando un servicio eficiente y confiable en todos los casos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
