import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceCardCarouselProps {
  images: string[];
  alt: string;
  gradientClass: string;
  className?: string;
}

export function ServiceCardCarousel({ images, alt, gradientClass, className = 'h-56' }: ServiceCardCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="overflow-hidden rounded-t-3xl" ref={emblaRef}>
        <div className="flex">
          {images.map((src, idx) => (
            <div key={idx} className="flex-[0_0_100%] min-w-0 h-full min-h-56">
              <ImageWithFallback
                src={src}
                alt={`${alt} - ${idx + 1}`}
                className="w-full h-full min-h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} mix-blend-multiply pointer-events-none`} />
      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-tl-3xl rounded-br-3xl pointer-events-none" />
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </>
      )}
    </div>
  );
}
