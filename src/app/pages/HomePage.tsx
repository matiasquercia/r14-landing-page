import { useRef, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ValueProposition } from '../components/ValueProposition';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export function HomePage() {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = useCallback(
    (sectionId: string) => {
      if (sectionId === 'calidad') {
        navigate('/calidad');
        return;
      }
      if (sectionId === 'home') {
        if (
          location.hash ||
          (location.state as { scrollTo?: string } | null)?.scrollTo != null
        ) {
          navigate({ pathname: '/', hash: '', replace: true, state: {} });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const section = sectionRefs.current[sectionId];
      if (section) {
        const headerOffset = 96;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    },
    [navigate, location.hash, location.state]
  );

  useEffect(() => {
    if (location.pathname !== '/') return;

    const scrollToId = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollToId) {
      const run = () => {
        const section = sectionRefs.current[scrollToId];
        if (section) {
          const headerOffset = 96;
          const top =
            section.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
        navigate({ pathname: '/', hash: '', search: location.search }, { replace: true, state: {} });
      };
      const t = window.setTimeout(run, 80);
      return () => window.clearTimeout(t);
    }

    const hash = location.hash.replace(/^#/, '');
    if (!hash) return;
    const run = () => {
      const el = document.getElementById(hash);
      if (!el) return;
      const headerOffset = 96;
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    };
    const t = window.setTimeout(run, 80);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash, location.state, navigate, location.search]);

  const setSectionRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} />

      <div id="home" ref={setSectionRef('home')}>
        <Hero onNavigate={handleNavigate} />
      </div>

      <main>
        <ValueProposition />

        <div ref={setSectionRef('servicios')}>
          <ServicesSection onNavigate={handleNavigate} />
        </div>

        <div ref={setSectionRef('nosotros')}>
          <AboutSection />
        </div>

        <div ref={setSectionRef('faq')}>
          <FAQSection />
        </div>

        <div ref={setSectionRef('contacto')}>
          <ContactSection />
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
