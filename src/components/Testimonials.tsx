import React, { useRef, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { testimonialsData } from '../utils/testimonialsData';

const Testimonials: React.FC = () => {
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    testimonialRefs.current.forEach((testimonial) => {
      if (testimonial) observer.observe(testimonial);
    });

    return () => {
      testimonialRefs.current.forEach((testimonial) => {
        if (testimonial) observer.unobserve(testimonial);
      });
    };
  }, []);

  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="depoimentos" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-3 md:mb-4 leading-tight">
            Transformando Vidas <span className="text-natural-600">Naturalmente</span>
          </h2>
          <p className="text-base md:text-lg text-natural-700 max-w-2xl mx-auto px-2">
            Depoimentos reais de pessoas que recuperaram sua saúde com nossas receitas naturais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              ref={el => testimonialRefs.current[index] = el}
              className="bg-earth-50 rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 shadow-sm md:shadow-md border border-natural-100 flex flex-col opacity-0 transition-opacity duration-700"
            >
              <div className="flex items-start mb-3 md:mb-4">
                <div className="flex-shrink-0 mr-3 md:mr-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-natural-200 flex items-center justify-center">
                    <span className="text-natural-700 font-bold text-sm md:text-base">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-natural-800 truncate">{testimonial.name}</h3>
                  <p className="text-natural-600 text-sm md:text-base">{testimonial.location}</p>
                  <span className="inline-block bg-natural-100 text-natural-700 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full mt-1">
                    {testimonial.condition}
                  </span>
                </div>
              </div>
              
              <div className="flex-grow">
                <Quote className="text-natural-300 mb-2" size={20} />
                <p className="text-natural-700 italic text-sm md:text-base leading-relaxed">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center bg-natural-50 rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 max-w-2xl mx-auto border border-natural-100 shadow-sm md:shadow-md">
          <p className="text-base md:text-lg text-natural-800 mb-3 md:mb-4">
            Você também pode transformar sua saúde com ingredientes simples da sua cozinha
          </p>
          <a 
            href="#oferta" 
            onClick={handleScrollToOffers}
            className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
          >
            Quero Começar Minha Transformação
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;