import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import logoImg from "@/assets/logo/RGB/300 ppi/branding_realdecatorce_Logo_01_blanco.png";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const viewport = { once: true, amount: 0.05, margin: '0px 0px 80px 0px' } as const;
  const noFlicker = { backfaceVisibility: 'hidden' as const };

  const quickLinks = [
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'calidad', label: 'Calidad' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-secondary/15 bg-background/98 backdrop-blur-2xl shadow-[0_-12px_40px_rgba(0,0,0,0.35)]">
      {/* Misma familia visual que el header al scroll (barra principal) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ type: 'tween', duration: 0.7 }}
            style={noFlicker}
          >
            <img src={logoImg} alt="Real de Catorce" className="h-10 mb-4 drop-shadow-[0_0_20px_rgba(161,197,255,0.25)]" />
            <p className="text-secondary font-bold text-sm mb-3 uppercase tracking-wide">
              Logística y abastecimiento alimentario
            </p>
            <p className="text-sm text-white/70 font-medium leading-relaxed">
              Calidad, seguridad y eficiencia en cada etapa del proceso
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ type: 'tween', duration: 0.7, delay: 0.1 }}
            style={noFlicker}
          >
            <h4 className="mb-6 text-white font-black uppercase tracking-wider text-sm">Enlaces rápidos</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={viewport}
                  transition={{ type: 'tween', duration: 0.5, delay: 0.2 + (index * 0.05) }}
                  style={noFlicker}
                  whileHover={{ x: 5 }}
                  onClick={() => onNavigate(link.id)}
                  className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors font-medium group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ type: 'tween', duration: 0.7, delay: 0.2 }}
            style={noFlicker}
          >
            <h4 className="mb-6 text-white font-black uppercase tracking-wider text-sm">Contacto</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/25 border border-secondary/35 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Burzaco – Lomas de Zamora</p>
                  <p className="text-sm text-white/60">Buenos Aires, Argentina</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/20 border border-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div className="space-y-2">
                  <p>
                    <a 
                      href="mailto:rrhh@realcatorce.com.ar" 
                      className="text-white hover:text-secondary transition-colors font-medium"
                    >
                      rrhh@realcatorce.com.ar
                    </a>
                  </p>
                  <p>
                    <a 
                      href="mailto:proveedores@realcatorce.com.ar" 
                      className="text-white hover:text-secondary transition-colors font-medium"
                    >
                      proveedores@realcatorce.com.ar
                    </a>
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-secondary/50 rounded-xl transition-all group"
              >
                <svg className="w-5 h-5 text-white group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-white font-semibold group-hover:text-secondary transition-colors">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={viewport}
          transition={{ type: 'tween', duration: 0.7, delay: 0.3 }}
          style={noFlicker}
          className="border-t border-secondary/15 pt-8 text-center"
        >
          <p className="text-sm text-white/60 font-medium">
            © {currentYear} <span className="text-secondary font-bold">Real de Catorce</span> – Todos los derechos reservados.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-secondary/25" aria-hidden />
    </footer>
  );
}
