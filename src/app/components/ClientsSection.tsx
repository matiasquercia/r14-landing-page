import { SectionHeader } from './SectionHeader';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ClientsSection() {
  const sectors = [
    {
      image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80',
      title: 'Organismos públicos',
      description: 'Soluciones adaptadas a las necesidades del sector público',
    },
    {
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
      title: 'Instituciones',
      description: 'Abastecimiento para instituciones educativas y sociales',
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      title: 'Empresas privadas',
      description: 'Servicios personalizados para el sector empresarial',
    },
  ];

  return (
    <section id="clientes" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Abastecimiento para distintos sectores"
          subtitle="Trabajamos con organismos públicos, instituciones y empresas privadas con soluciones ajustadas a cada contexto."
          className="mb-12"
        />

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sectors.map((sector, index) => {
            return (
              <div
                key={index}
                className="bg-white border border-primary/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                {/* Sector Image */}
                <div className="relative h-40 overflow-hidden">
                  <ImageWithFallback
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/30"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="mb-3 text-lg font-semibold text-primary">{sector.title}</h3>
                  <p className="text-muted-foreground text-sm">{sector.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/10 border-l-4 border-primary p-8 rounded-xl">
            <p className="text-base leading-relaxed text-foreground">
              Trabajamos principalmente con el sector público, y contamos con la capacidad operativa 
              y la flexibilidad necesaria para acompañar a empresas privadas que requieran soluciones 
              de logística alimentaria.
            </p>
            <p className="text-base leading-relaxed mt-4 text-foreground">
              Nuestro enfoque personalizado nos permite adaptarnos a las particularidades de cada 
              cliente, garantizando un servicio eficiente y confiable en todos los casos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
