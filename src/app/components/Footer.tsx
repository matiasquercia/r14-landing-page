import { Mail, MapPin } from 'lucide-react';
import logoImg from "@/assets/a27ef8d2d8ee3a82ca53db10c8dd286a7009efee.png";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logoImg} alt="Real de Catorce" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-secondary mb-2">
              Logística y abastecimiento alimentario
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-secondary">Enlaces rápidos</h4>
            <nav className="space-y-2">
              <button
                onClick={() => onNavigate('nosotros')}
                className="block hover:text-secondary transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => onNavigate('servicios')}
                className="block hover:text-secondary transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => onNavigate('calidad')}
                className="block hover:text-secondary transition-colors"
              >
                Calidad
              </button>
              <button
                onClick={() => onNavigate('contacto')}
                className="block hover:text-secondary transition-colors"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-secondary">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p>Burzaco – Lomas de Zamora</p>
                  <p className="text-sm text-secondary/80">Buenos Aires, Argentina</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p>
                    <a 
                      href="mailto:rrhh@realcatorce.com.ar" 
                      className="hover:text-secondary transition-colors"
                    >
                      rrhh@realcatorce.com.ar
                    </a>
                  </p>
                  <p>
                    <a 
                      href="mailto:proveedores@realcatorce.com.ar" 
                      className="hover:text-secondary transition-colors"
                    >
                      proveedores@realcatorce.com.ar
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-secondary/80">
            © {currentYear} Real de Catorce – Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
