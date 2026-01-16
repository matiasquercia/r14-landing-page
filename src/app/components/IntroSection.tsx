import { ArrowRight } from 'lucide-react';

interface IntroSectionProps {
  onNavigate: (section: string) => void;
}

export function IntroSection({ onNavigate }: IntroSectionProps) {
  const highlights = [
    {
      id: 'nosotros',
      number: '1',
      title: 'Quiénes somos',
      description: 'Empresa con trayectoria en el sector alimentario, orientada a brindar soluciones confiables y eficientes.',
      link: 'Nosotros',
    },
    {
      id: 'servicios',
      number: '2',
      title: 'Nuestros servicios',
      description: 'Abastecimiento integral de alimentos para instituciones públicas y empresas privadas.',
      link: 'Servicios',
    },
    {
      id: 'calidad',
      number: '3',
      title: 'Calidad y seguridad alimentaria',
      description: 'Procesos controlados, foco en nutrición y estándares de calidad.',
      link: 'Calidad y procesos',
    },
    {
      id: 'contacto',
      number: '4',
      title: 'Contacto institucional',
      description: 'Canales claros para consultas y gestión.',
      link: 'Contactanos',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            En <span className="font-semibold">Real de Catorce</span> somos una empresa especializada en logística alimentaria, 
            dedicada al abastecimiento y reparto diario de alimentos frescos, congelados y envasados.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground mt-4">
            Trabajamos con procesos optimizados que garantizan puntualidad, seguridad alimentaria y capacidad de 
            adaptación a las necesidades de cada cliente.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl font-bold text-accent">{item.number}</span>
              </div>
              <h3 className="mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
              <button
                onClick={() => onNavigate(item.id)}
                className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium text-sm"
              >
                Ver más
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
