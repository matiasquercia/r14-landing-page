import { ClipboardCheck, TrendingUp, FileCheck, Apple } from 'lucide-react';

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
    <section id="calidad" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">
            Compromiso con la calidad y la seguridad alimentaria
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Desde la selección de materias primas hasta la entrega final, trabajamos con procesos 
            optimizados que garantizan altos estándares de calidad y seguridad alimentaria.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-secondary/5 rounded-3xl hover:bg-secondary/10 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="bg-accent/10 w-24 h-24 rounded-full flex items-center justify-center mb-5 shadow-md hover:shadow-accent/20 transition-shadow">
                  <Icon className="w-12 h-12 text-accent" />
                </div>
                <p className="font-medium text-base">{feature.label}</p>
              </div>
            );
          })}
        </div>

        {/* Highlighted Message */}
        <div className="bg-gradient-to-br from-primary via-primary to-accent text-white p-12 md:p-14 rounded-3xl text-center shadow-xl">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed">
            La seguridad alimentaria es parte central de nuestra forma de trabajar.
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed">
            Nuestra gestión se apoya en controles rigurosos y procesos de mejora continua que 
            aseguran el cumplimiento de todas las normativas vigentes, manteniendo siempre el 
            foco en la nutrición, la frescura y la satisfacción de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
}