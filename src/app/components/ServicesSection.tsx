import { Package, Truck, UtensilsCrossed } from 'lucide-react';
import { Button } from './Button';

interface ServicesSectionProps {
  onNavigate: (section: string) => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const services = [
    {
      icon: Package,
      title: 'Abastecimiento de alimentos',
      items: [
        'Alimentos envasados',
        'Productos frescos',
        'Productos congelados',
        'Eventos especiales. Catering',
      ],
      color: 'bg-accent',
    },
    {
      icon: Truck,
      title: 'Logística y distribución',
      items: [
        'Reparto diario',
        'Optimización de rutas',
        'Cumplimiento de plazos',
        'Adaptación a distintos volúmenes operativos',
      ],
      color: 'bg-primary',
    },
    {
      icon: UtensilsCrossed,
      title: 'Viandas alimenticias',
      items: [
        'Elaboración de viandas',
        'Enfoque nutricional',
        'Frescura y calidad',
        'Producción controlada',
      ],
      color: 'bg-secondary',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">
            Soluciones de logística alimentaria adaptadas a cada necesidad
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            En Real de Catorce ofrecemos servicios integrales de logística y abastecimiento alimentario, 
            diseñados para responder a las exigencias del sector público y privado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:scale-105 hover:border-accent/30 transition-all duration-300"
              >
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent mt-1 text-xl">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => onNavigate('contacto')}
          >
            Consultar por nuestros servicios
          </Button>
        </div>
      </div>
    </section>
  );
}