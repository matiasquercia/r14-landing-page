import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { motion, AnimatePresence } from 'motion/react';

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
      question: '¿Cómo garantizan la calidad y la seguridad alimentaria?',
      answer: 'Nuestra operatoria se basa en procesos controlados en todas las etapas: selección de materias primas, almacenamiento, elaboración y distribución. Aplicamos controles internos, mejora continua y cumplimiento de la normativa vigente, priorizando la seguridad alimentaria, la frescura y la calidad de los productos.',
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
      question: '¿Cómo puedo realizar una consulta o solicitar información?',
      answer: 'Podés comunicarte a través de nuestros correos institucionales o completar el formulario de contacto disponible en el sitio. Nuestro equipo responderá a la brevedad.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const viewport = { once: true, amount: 0.15 } as const;
  const noFlicker = { backfaceVisibility: 'hidden' as const };

  return (
    <section id="faq" className="relative py-32 scroll-mt-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-background/95 to-primary/95" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Preguntas frecuentes"
          subtitle="Respondemos las consultas más comunes sobre nuestros servicios."
          className="mb-16 md:mb-20 [&_h2]:text-white [&_p]:text-white/90 [&_div]:bg-secondary"
        />

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ type: 'tween', duration: 0.5, delay: index * 0.05 }}
                style={noFlicker}
                className={`border ${isOpen ? 'border-accent/40' : 'border-white/10'} rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md transition-all duration-300 ${isOpen ? 'shadow-[0_0_30px_rgba(0,240,255,0.2)]' : ''}`}
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center p-6 md:p-8 text-left transition-colors ${isOpen ? 'bg-white/10' : 'hover:bg-white/5'}`}
                >
                  <h3 className="pr-6 text-base md:text-lg font-black uppercase tracking-wide text-white">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isOpen ? 'bg-accent' : 'bg-white/10'}`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-background font-bold" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-white/10">
                        <p className="text-white/80 text-sm md:text-base leading-relaxed pt-6 font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
