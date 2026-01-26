import { useState, FormEvent, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';

// Imagen de fondo - oficina
const BG_IMAGE = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80";

// Turnstile site key - usar key de prueba en desarrollo
// En producción, reemplazar con tu site key de Cloudflare Turnstile
const TURNSTILE_SITE_KEY = '1x00000000000000000000AA'; // Key de prueba (siempre pasa)

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'expired-callback'?: () => void;
        'error-callback'?: () => void;
        theme?: 'light' | 'dark' | 'auto';
        size?: 'normal' | 'compact';
      }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Inicializar Turnstile cuando el componente se monta
    const initTurnstile = () => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => {
            setTurnstileToken(token);
            setError(null);
          },
          'expired-callback': () => {
            setTurnstileToken(null);
          },
          'error-callback': () => {
            setError('Error al verificar. Por favor, recargá la página.');
          },
          theme: 'light',
          size: 'normal',
        });
      }
    };

    // Esperar a que Turnstile esté disponible
    if (window.turnstile) {
      initTurnstile();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          initTurnstile();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [submitted]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setError('Por favor, completá la verificación de seguridad.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Simular envío del formulario
    // En producción, aquí enviarías el formulario junto con el token
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleNewMessage = () => {
    setSubmitted(false);
    setFormData({ nombre: '', empresa: '', email: '', mensaje: '' });
    setTurnstileToken(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="relative py-20 scroll-mt-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-primary/85" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Contacto institucional"
          subtitle="Nuestro equipo está disponible para responder consultas y brindar información sobre nuestros servicios."
          className="mb-12 [&_h2]:text-white [&_p]:text-white/80"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Info + Maps */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="mb-4 flex items-center gap-2 text-white">
                <Mail className="w-5 h-5 text-secondary" />
                Contactanos
              </h3>
              <div className="space-y-2 pl-8">
                <p>
                  <a 
                    href="mailto:rrhh@realcatorce.com.ar" 
                    className="text-secondary hover:text-secondary/80 hover:underline"
                  >
                    rrhh@realcatorce.com.ar
                  </a>
                </p>
                <p>
                  <a 
                    href="mailto:proveedores@realcatorce.com.ar" 
                    className="text-secondary hover:text-secondary/80 hover:underline"
                  >
                    proveedores@realcatorce.com.ar
                  </a>
                </p>
                <p>
                  <a 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 hover:underline inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>

            {/* Maps */}
            <div className="flex flex-col flex-grow bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="mb-4 flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5 text-secondary" />
                Nuestras ubicaciones
              </h3>
              <div className="flex flex-col gap-4 flex-grow">
                {/* Mapa Burzaco */}
                <div className="overflow-hidden rounded-lg border border-white/20 flex-grow flex flex-col">
                  <div className="bg-secondary/30 text-white px-4 py-2">
                    <p className="font-medium text-sm">Ombú 1269, Burzaco</p>
                    <p className="text-xs text-white/70">Buenos Aires, Argentina</p>
                  </div>
                  <iframe
                    title="Ubicación Burzaco"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.8888888888!2d-58.3917!3d-34.8278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d6a7c000001%3A0x1!2sOmb%C3%BA%201269%2C%20Burzaco%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1"
                    className="w-full flex-grow min-h-[100px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                {/* Mapa Lomas de Zamora */}
                <div className="overflow-hidden rounded-lg border border-white/20 flex-grow flex flex-col">
                  <div className="bg-secondary/30 text-white px-4 py-2">
                    <p className="font-medium text-sm">Lugano 73, Lomas de Zamora</p>
                    <p className="text-xs text-white/70">Buenos Aires, Argentina</p>
                  </div>
                  <iframe
                    title="Ubicación Lomas de Zamora"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.8888888888!2d-58.4069!3d-34.7617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d7b9c000001%3A0x1!2sLugano%2073%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1"
                    className="w-full flex-grow min-h-[100px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex flex-col bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8">
            <h3 className="mb-6 text-white">Enviar consulta</h3>
            
            {submitted ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mb-6 animate-[bounce_0.5s_ease-in-out]">
                  <CheckCircle className="w-12 h-12 text-secondary" />
                </div>
                <h4 className="text-2xl font-semibold text-white mb-3">
                  ¡Consulta enviada!
                </h4>
                <p className="text-white/70 mb-6 max-w-sm">
                  Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá a la brevedad.
                </p>
                <Button 
                  variant="secondary" 
                  onClick={handleNewMessage}
                  className="mt-2"
                >
                  Enviar otra consulta
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-5">
                <div>
                  <label htmlFor="nombre" className="block mb-2 text-white/90 text-sm">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block mb-2 text-white/90 text-sm">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-white/90 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <label htmlFor="mensaje" className="block mb-2 text-white/90 text-sm">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none flex-grow min-h-[100px] disabled:opacity-50"
                  />
                </div>

                {/* Cloudflare Turnstile */}
                <div className="flex flex-col items-center gap-2">
                  <div ref={turnstileRef} className="flex justify-center" />
                  {error && (
                    <p className="text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="secondary" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar consulta
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
