import { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { QualitySection } from './components/QualitySection';
import { ClientsSection } from './components/ClientsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleNavigate = (sectionId: string) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      const headerOffset = 96; // Height of fixed header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const setSectionRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} />
      
      {/* Hero fuera del main para que quede debajo del header */}
      <div ref={setSectionRef('home')}>
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
        
        <div ref={setSectionRef('calidad')}>
          <QualitySection />
        </div>
        
        <div ref={setSectionRef('clientes')}>
          <ClientsSection />
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
