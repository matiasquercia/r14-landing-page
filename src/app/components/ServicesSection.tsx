import { Package, Truck, UtensilsCrossed, Check } from 'lucide-react';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';

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
        'Catering para eventos',
      ],
      color: 'bg-accent',
      lightColor: 'bg-accent/10',
    },
    {
      icon: Truck,
      title: 'Logística y distribución',
      items: [
        'Reparto diario',
        'Optimización de rutas',
        'Cumplimiento de plazos',
        'Volúmenes flexibles',
      ],
      color: 'bg-primary',
      lightColor: 'bg-primary/10',
    },
    {
      icon: UtensilsCrossed,
      title: 'Viandas alimenticias',
      items: [
        'Elaboración de viandas',
        'Enfoque nutricional',
        'Frescura garantizada',
        'Producción controlada',
      ],
      color: 'bg-secondary',
      lightColor: 'bg-secondary/20',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Soluciones de logística alimentaria adaptadas a cada necesidad"
          subtitle="En Real de Catorce ofrecemos servicios integrales de logística y abastecimiento alimentario, diseñados para responder a las exigencias del sector público y privado."
          className="mb-12 md:mb-16"
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-md`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-4 text-lg">{service.title}</h3>
                <ul className="space-y-2 flex-grow">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className={`${service.lightColor} w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-accent" />
                      </span>
                      <span className="text-sm text-muted-foreground">{item}</span>
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