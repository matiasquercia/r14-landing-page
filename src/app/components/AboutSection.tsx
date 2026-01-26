import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, CheckCircle, Shield, Users, Zap, Heart } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function AboutSection() {
  const values = [
    { icon: Award, label: 'Calidad' },
    { icon: CheckCircle, label: 'Transparencia' },
    { icon: Zap, label: 'Flexibilidad' },
    { icon: Users, label: 'Adaptabilidad' },
    { icon: Heart, label: 'Compromiso' },
    { icon: Shield, label: 'Seguridad alimentaria' },
  ];

  return (
    <section id="nosotros" className="py-20 bg-primary scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Experiencia, calidad y compromiso en logística alimentaria"
          className="mb-12 md:mb-16 [&_h2]:text-white"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-white/90">
              Real de Catorce nació como un pequeño servicio de catering y organización de eventos, 
              donde la dedicación y el amor por la buena comida marcaron sus primeros pasos.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              Con el tiempo, la experiencia adquirida impulsó una transformación profunda que dio lugar 
              a una empresa de logística alimentaria consolidada.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              Hoy nos especializamos en el abastecimiento y reparto diario de alimentos para organismos 
              públicos y empresas privadas, gestionando procesos que combinan frescura, seguridad, 
              puntualidad y eficiencia.
            </p>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NzgwMjMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Equipo de trabajo"
              className="rounded-3xl shadow-2xl w-full border-2 border-white/30"
            />
          </div>
        </div>

        {/* Highlighted Message */}
        <div className="bg-white/10 border border-white/20 p-10 md:p-12 rounded-3xl text-center mb-16">
          <p className="text-xl md:text-2xl leading-relaxed text-white">
            Mantenemos vivo el espíritu que nos vio nacer, con una estructura moderna preparada para los desafíos actuales.
          </p>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl md:text-3xl text-center mb-10 text-white">Nuestras fortalezas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-5 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                >
                  <div className="bg-secondary/30 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-sm font-semibold text-white">{value.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}