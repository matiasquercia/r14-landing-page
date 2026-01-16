import { useState, FormEvent } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from './Button';

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // En producción, aquí se enviaría el formulario
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: '', empresa: '', email: '', mensaje: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Contacto institucional
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Nuestro equipo está disponible para responder consultas y brindar información sobre nuestros servicios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-accent" />
                Direcciones
              </h3>
              <div className="space-y-3 pl-8">
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">●</span>
                  <span>Ombú 1269, Burzaco, Buenos Aires</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">●</span>
                  <span>Lugano 73, Lomas de Zamora, Buenos Aires</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-accent" />
                Contactanos
              </h3>
              <div className="space-y-3 pl-8">
                <p>
                  <a 
                    href="mailto:rrhh@realcatorce.com.ar" 
                    className="text-accent hover:underline"
                  >
                    rrhh@realcatorce.com.ar
                  </a>
                </p>
                <p>
                  <a 
                    href="mailto:proveedores@realcatorce.com.ar" 
                    className="text-accent hover:underline"
                  >
                    proveedores@realcatorce.com.ar
                  </a>
                </p>
                <p>
                  <a 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>

            {/* Visual Info Card */}
            <div className="bg-primary text-primary-foreground p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                Estamos comprometidos con brindar respuestas rápidas y soluciones efectivas 
                a cada consulta que recibimos.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="mb-6">Enviar consulta</h3>
            
            {submitted ? (
              <div className="bg-accent/10 text-accent border border-accent rounded-lg p-6 text-center">
                <p className="text-lg font-medium">¡Mensaje enviado con éxito!</p>
                <p className="mt-2">Nos pondremos en contacto a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar consulta
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
