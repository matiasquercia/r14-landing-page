import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import logoImg from "@/assets/logo/RGB/300 ppi/branding_realdecatorce_Logo_01_blanco.png";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const viewport = { once: true, amount: 0.15 } as const;
  const noFlicker = { backfaceVisibility: 'hidden' as const };

  const quickLinks = [
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-background border-t border-accent/10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
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
            <img src={logoImg} alt="Real de Catorce" className="h-14 mb-6 drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]" />
            <p className="text-accent font-bold text-lg mb-4 uppercase tracking-wide">
              Logística y abastecimiento alimentario
            </p>
            <p className="text-white/70 font-medium leading-relaxed">
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
                  className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors font-medium group"
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
                <div className="w-10 h-10 bg-accent/20 border border-accent/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
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
                      className="text-white hover:text-accent transition-colors font-medium"
                    >
                      rrhh@realcatorce.com.ar
                    </a>
                  </p>
                  <p>
                    <a 
                      href="mailto:proveedores@realcatorce.com.ar" 
                      className="text-white hover:text-accent transition-colors font-medium"
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
                className="inline-flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-accent/40 rounded-xl transition-all group"
              >
                <svg className="w-5 h-5 text-white group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-white font-semibold group-hover:text-accent transition-colors">LinkedIn</span>
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
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-white/60 font-medium">
            © {currentYear} <span className="text-accent font-bold">Real de Catorce</span> – Todos los derechos reservados.
          </p>
        </motion.div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-tertiary"></div>
    </footer>
  );
}
