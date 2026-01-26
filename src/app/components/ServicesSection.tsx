import { Check } from 'lucide-react';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-secondary/10 scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Soluciones de logística alimentaria adaptadas a cada necesidad"
          subtitle="En Real de Catorce ofrecemos servicios integrales de logística y abastecimiento alimentario, diseñados para responder a las exigencias del sector público y privado."
          className="mb-12 md:mb-16"
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col bg-white border border-primary/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/40"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-lg text-white font-semibold drop-shadow-lg">{service.title}</h3>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="bg-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </span>
                        <span className="text-sm text-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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