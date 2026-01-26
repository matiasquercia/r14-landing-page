import { Mail, MapPin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImg from "@/assets/logo/RGB/300 ppi/branding_realdecatorce_Logo_01.png";
import logoImgWhite from "@/assets/logo/RGB/300 ppi/branding_realdecatorce_Logo_01_blanco.png";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Mostrar logo del header cuando el logo del Hero ya no es visible
      setShowLogo(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'calidad', label: 'Calidad' },
    { id: 'clientes', label: 'Clientes' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            {/* Emails - izquierda */}
            <div className="flex items-center gap-3 md:gap-4">
              <a href="mailto:rrhh@realcatorce.com.ar" className="flex items-center gap-1 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">rrhh@realcatorce.com.ar</span>
                <span className="sm:hidden">RRHH</span>
              </a>
              <a href="mailto:proveedores@realcatorce.com.ar" className="flex items-center gap-1 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">proveedores@realcatorce.com.ar</span>
                <span className="sm:hidden">Proveedores</span>
              </a>
            </div>
            {/* Dirección + LinkedIn - derecha */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ombú 1269, Burzaco | Lugano 73, Lomas de Zamora</span>
              </div>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo - visible solo cuando el logo del Hero ya no se ve */}
            <button 
              onClick={() => handleNavClick('home')}
              className={`flex items-center transition-all duration-300 ${showLogo ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <img 
                src={isScrolled ? logoImg : logoImgWhite} 
                alt="Real de Catorce" 
                className="h-12" 
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors font-medium ${
                    isScrolled 
                      ? 'text-foreground hover:text-accent' 
                      : 'text-white hover:text-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-accent' 
                  : 'text-white hover:text-secondary'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className={`lg:hidden pb-4 border-t ${
              isScrolled 
                ? 'border-border bg-white' 
                : 'border-white/20 bg-primary/90'
            }`}>
              <div className="flex flex-col gap-2 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-2 px-4 transition-colors rounded font-medium ${
                      isScrolled 
                        ? 'text-foreground hover:text-accent hover:bg-secondary/10' 
                        : 'text-white hover:text-secondary hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}