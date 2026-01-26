import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

// Imagen de fondo - patrón abstracto
const BG_IMAGE = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1920&q=80";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Qué tipo de servicios brinda Real de Catorce?',
      answer: 'Brindamos servicios integrales de logística y abastecimiento alimentario, incluyendo la provisión de alimentos envasados, frescos y congelados, elaboración de viandas y distribución diaria adaptada a cada operación.',
    },
    {
      question: '¿Qué tipos de alimentos comercializan?',
      answer: 'Ofrecemos alimentos envasados, productos frescos y productos congelados. Además, elaboramos viandas alimenticias con enfoque nutricional y procesos de producción controlados.',
    },
    {
      question: '¿Cómo garantizan la calidad y la seguridad alimentaria?',
      answer: 'Nuestra operatoria se basa en procesos controlados en todas las etapas: selección de materias primas, almacenamiento, elaboración y distribución. Aplicamos controles internos, mejora continua y cumplimiento de la normativa vigente, priorizando la seguridad alimentaria, la frescura y la calidad de los productos.',
    },
    {
      question: '¿Ofrecen otras soluciones empresariales?',
      answer: 'Sí. Además de nuestros servicios principales, en Real de Catorce desarrollamos soluciones empresariales adaptadas a requerimientos específicos, que se evalúan de manera personalizada según las necesidades de cada organización. Para más información, te invitamos a contactarnos a través de nuestros canales institucionales.',
    },
    {
      question: '¿Con qué tipo de clientes trabajan?',
      answer: 'Trabajamos principalmente con organismos públicos, instituciones y empresas privadas que requieren soluciones confiables de logística alimentaria, cumpliendo con estándares de calidad, seguridad y puntualidad.',
    },
    {
      question: '¿En qué zonas operan?',
      answer: 'Operamos principalmente en la Provincia de Buenos Aires, con capacidad logística para adaptarnos a distintos puntos de entrega según las necesidades del servicio.',
    },
    {
      question: '¿Cuentan con capacidad para operaciones de gran volumen?',
      answer: 'Sí. Contamos con una estructura operativa preparada para abastecer operaciones de distinto volumen, manteniendo flexibilidad, eficiencia y cumplimiento de los plazos establecidos.',
    },
    {
      question: '¿Cómo puedo realizar una consulta o solicitar información?',
      answer: 'Podés comunicarte a través de nuestros correos institucionales o completar el formulario de contacto disponible en el sitio. Nuestro equipo responderá a la brevedad.',
    },
    {
      question: '¿Realizan servicios personalizados?',
      answer: 'Sí. Analizamos cada requerimiento de forma particular para ofrecer soluciones acordes a las necesidades operativas, logísticas y nutricionales de cada cliente.',
    },
    {
      question: '¿Realizan servicios para eventos especiales?',
      answer: 'Sí. Contamos con experiencia en eventos especiales y servicios de catering, adaptando la logística y el abastecimiento a las características de cada ocasión.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 scroll-mt-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-primary/85" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Preguntas frecuentes"
          subtitle="Respondemos las consultas más comunes sobre nuestros servicios."
          className="mb-12 [&_h2]:text-white [&_p]:text-white/80"
        />

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-5 text-left transition-colors ${openIndex === index ? 'bg-white/10' : 'hover:bg-white/5'}`}
              >
                <h3 className="pr-6 text-sm md:text-base font-medium text-white">{faq.question}</h3>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${openIndex === index ? 'bg-secondary' : 'bg-white/20'}`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-primary" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-white" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 border-t border-white/10">
                  <p className="text-white/80 text-sm leading-relaxed pt-4">
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
