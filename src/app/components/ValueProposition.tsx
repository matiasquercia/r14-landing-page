import { Clock, Shield, Truck, MapPin } from 'lucide-react';

export function ValueProposition() {
  const benefits = [
    {
      icon: Clock,
      title: 'Puntualidad',
      description: 'Reparto diario con cumplimiento estricto de plazos y horarios acordados.',
    },
    {
      icon: Shield,
      title: 'Seguridad alimentaria',
      description: 'Procesos controlados que garantizan la calidad e inocuidad de los alimentos.',
    },
    {
      icon: Truck,
      title: 'Flexibilidad operativa',
      description: 'Capacidad de adaptación a distintos volúmenes y necesidades específicas.',
    },
    {
      icon: MapPin,
      title: 'Cobertura regional',
      description: 'Operamos en Buenos Aires con logística optimizada para cada zona.',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary to-primary/75">
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            En <span className="font-bold text-secondary">Real de Catorce</span> somos una empresa especializada en logística alimentaria, 
            dedicada al abastecimiento y reparto diario de alimentos frescos, congelados y envasados.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary/20 border border-secondary/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="mb-2 text-white font-semibold">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
