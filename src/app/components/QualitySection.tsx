import { ClipboardCheck, TrendingUp, FileCheck, Apple } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

// Imagen de fondo - alimentos frescos
const BG_IMAGE = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1920&q=80";

export function QualitySection() {
  const features = [
    {
      icon: ClipboardCheck,
      label: 'Controles internos',
    },
    {
      icon: TrendingUp,
      label: 'Procesos de mejora continua',
    },
    {
      icon: FileCheck,
      label: 'Cumplimiento normativo',
    },
    {
      icon: Apple,
      label: 'Enfoque en nutrición y frescura',
    },
  ];

  return (
    <section id="calidad" className="relative py-20 scroll-mt-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-primary/85" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Compromiso con la calidad y la seguridad alimentaria"
          subtitle="Desde la selección de materias primas hasta la entrega final, trabajamos con procesos optimizados que garantizan altos estándares de calidad y seguridad alimentaria."
          className="mb-12 md:mb-16 [&_h2]:text-white [&_p]:text-white/80"
        />

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                <div className="bg-secondary/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="font-semibold text-sm text-white">{feature.label}</p>
              </div>
            );
          })}
        </div>

        {/* Highlighted Message */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 md:p-12 rounded-2xl text-center">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-white">
            La seguridad alimentaria es parte central de nuestra forma de trabajar.
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-base leading-relaxed text-white/80">
            Nuestra gestión se apoya en controles rigurosos y procesos de mejora continua que 
            aseguran el cumplimiento de todas las normativas vigentes, manteniendo siempre el 
            foco en la nutrición, la frescura y la satisfacción de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
}