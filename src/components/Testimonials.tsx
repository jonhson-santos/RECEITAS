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
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-4">
            Transformando Vidas <span className="text-natural-600">Naturalmente</span>
          </h2>
          <p className="text-lg text-natural-700 max-w-2xl mx-auto">
            Depoimentos reais de pessoas que recuperaram sua saúde com nossas receitas naturais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              ref={el => testimonialRefs.current[index] = el}
              className="bg-earth-50 rounded-xl p-6 md:p-8 shadow-md border border-natural-100 flex flex-col opacity-0 transition-opacity duration-700"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-natural-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-natural-800">{testimonial.name}</h3>
                  <p className="text-natural-600">{testimonial.location}</p>
                  <span className="inline-block bg-natural-100 text-natural-700 text-sm px-3 py-1 rounded-full mt-1">
                    {testimonial.condition}
                  </span>
                </div>
              </div>
              
              <div className="flex-grow">
                <Quote className="text-natural-300 mb-2" size={24} />
                <p className="text-natural-700 italic">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-natural-50 rounded-xl p-6 md:p-8 max-w-2xl mx-auto border border-natural-100 shadow-md">
          <p className="text-lg text-natural-800 mb-4">
            Você também pode transformar sua saúde com ingredientes simples da sua cozinha
          </p>
          <a 
            href="#oferta" 
            onClick={handleScrollToOffers}
            className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            Quero Começar Minha Transformação
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;