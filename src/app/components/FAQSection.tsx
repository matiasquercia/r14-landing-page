import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Qué tipo de alimentos comercializan?',
      answer: 'Trabajamos con alimentos envasados, frescos y congelados. Además, elaboramos viandas alimenticias con enfoque nutricional y producción controlada.',
    },
    {
      question: '¿En qué zonas operan?',
      answer: 'Actualmente operamos en Argentina, con base en Buenos Aires. Nuestras oficinas se encuentran en Burzaco y Lomas de Zamora.',
    },
    {
      question: '¿Cómo puedo realizar una consulta?',
      answer: 'Podés contactarnos a través de nuestros correos institucionales (rrhh@realcatorce.com.ar o proveedores@realcatorce.com.ar) o completando el formulario de contacto en nuestra página web.',
    },
    {
      question: '¿Trabajan con empresas privadas?',
      answer: 'Sí, aunque trabajamos principalmente con el sector público, contamos con la capacidad operativa y flexibilidad necesaria para acompañar a empresas privadas que requieran soluciones de logística alimentaria.',
    },
    {
      question: '¿Cómo garantizan la seguridad alimentaria?',
      answer: 'Desde la selección de materias primas hasta la entrega final, trabajamos con procesos optimizados que incluyen controles internos, mejora continua, cumplimiento normativo y enfoque en nutrición y frescura.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Respondemos las consultas más comunes sobre nuestros servicios
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-secondary/5 transition-colors"
              >
                <h3 className="pr-8">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-accent flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
