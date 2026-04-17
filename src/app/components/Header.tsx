import { Mail, MapPin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import logoImgWhite from "@/assets/logo/RGB/300 ppi/branding_realdecatorce_Logo_01_blanco.png";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoFromScroll, setLogoFromScroll] = useState(false);

  const isSubPage = location.pathname !== '/';
  /**
   * Sin entrada animada en subrutas (p. ej. /calidad) ni al volver desde Calidad a inicio
   * (state.skipHeaderEntrance). Se fija solo en el primer montaje para que limpiar el state
   * en HomePage no reactive el stagger.
   */
  const [skipEntrance] = useState(() => {
    if (location.pathname !== '/') return true;
    return Boolean((location.state as { skipHeaderEntrance?: boolean } | null)?.skipHeaderEntrance);
  });
  const navSolid = isScrolled || isSubPage;
  const showLogo = isSubPage || logoFromScroll;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setLogoFromScroll(window.scrollY > 350);
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
    { id: 'faq', label: 'FAQ' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      navSolid ? 'shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : ''
    }`}>
      {/* Top bar */}
      <motion.div 
        initial={skipEntrance ? false : { y: -100 }}
        animate={{ y: 0 }}
        transition={skipEntrance ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`transition-all duration-300 ${
          navSolid 
            ? 'bg-primary/95 backdrop-blur-xl border-b border-secondary/25' 
            : 'bg-primary/80 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center text-sm">
            {/* Emails - izquierda */}
            <div className="flex items-center gap-3 md:gap-4">
              <a 
                href="mailto:rrhh@realcatorce.com.ar" 
                className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline font-medium">rrhh@realcatorce.com.ar</span>
                <span className="sm:hidden font-medium">RRHH</span>
              </a>
              <a 
                href="mailto:proveedores@realcatorce.com.ar" 
                className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline font-medium">proveedores@realcatorce.com.ar</span>
                <span className="sm:hidden font-medium">Proveedores</span>
              </a>
            </div>
            {/* Dirección + LinkedIn - derecha */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-medium">Burzaco | Lomas de Zamora</span>
              </div>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-secondary transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main navigation */}
      <div className={`transition-all duration-500 ${
        navSolid 
          ? 'bg-background/98 backdrop-blur-2xl border-b border-secondary/15' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4 gap-8">
            {/* Logo - visible cuando se scrollea, usando el logo blanco del Hero */}
            <AnimatePresence>
              {showLogo && (
                <motion.button
                  initial={skipEntrance ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={skipEntrance ? { duration: 0 } : { duration: 0.3 }}
                  onClick={() => handleNavClick('home')}
                  className="flex items-center hover:scale-105 transition-transform"
                >
                  <img 
                    src={logoImgWhite} 
                    alt="Real de Catorce" 
                    className="h-12 drop-shadow-lg" 
                  />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Desktop Navigation - SIEMPRE A LA DERECHA */}
            <nav className="hidden lg:flex items-center gap-2 ml-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={skipEntrance ? false : { opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    skipEntrance ? { duration: 0 } : { duration: 0.4, delay: index * 0.05 }
                  }
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-bold text-sm uppercase tracking-wider relative group ${
                    navSolid 
                      ? 'text-foreground hover:text-secondary' 
                      : 'text-white hover:text-secondary'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </nav>

            {/* Mobile menu button - A LA DERECHA */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ml-auto ${
                navSolid 
                  ? 'text-foreground hover:bg-secondary/15 hover:text-secondary' 
                  : 'text-white hover:bg-white/10 hover:text-secondary'
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`lg:hidden overflow-hidden border-t ${
                  navSolid 
                    ? 'border-secondary/15 bg-card/95 backdrop-blur-xl' 
                    : 'border-white/10 bg-primary/90 backdrop-blur-md'
                }`}
              >
                <div className="flex flex-col gap-1 py-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={skipEntrance ? false : { x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={
                        skipEntrance ? { duration: 0 } : { duration: 0.3, delay: index * 0.05 }
                      }
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left py-3 px-4 transition-all duration-300 rounded-lg font-bold uppercase tracking-wider text-sm ${
                        navSolid 
                          ? 'text-foreground hover:text-secondary hover:bg-secondary/15 hover:translate-x-2' 
                          : 'text-white hover:text-secondary hover:bg-white/10 hover:translate-x-2'
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}