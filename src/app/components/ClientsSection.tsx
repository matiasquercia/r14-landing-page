import { Building2, Briefcase, Users } from 'lucide-react';

export function ClientsSection() {
  const sectors = [
    {
      icon: Building2,
      title: 'Organismos públicos',
      description: 'Soluciones adaptadas a las necesidades del sector público',
    },
    {
      icon: Users,
      title: 'Instituciones',
      description: 'Abastecimiento para instituciones educativas y sociales',
    },
    {
      icon: Briefcase,
      title: 'Empresas privadas',
      description: 'Servicios personalizados para el sector empresarial',
    },
  ];

  return (
    <section id="clientes" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-6">
            Abastecimiento para distintos sectores
          </h2>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="mb-3">{sector.title}</h3>
                <p className="text-muted-foreground">{sector.description}</p>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-l-4 border-accent p-8 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed">
              Trabajamos principalmente con el sector público, y contamos con la capacidad operativa 
              y la flexibilidad necesaria para acompañar a empresas privadas que requieran soluciones 
              de logística alimentaria.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Nuestro enfoque personalizado nos permite adaptarnos a las particularidades de cada 
              cliente, garantizando un servicio eficiente y confiable en todos los casos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
