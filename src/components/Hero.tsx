import React, { useEffect, useRef } from 'react';
import Video from './Video';

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      { ref: headlineRef, delay: 0 },
      { ref: subheadlineRef, delay: 200 },
      { ref: ctaRef, delay: 400 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('animate-fade-in');
        }, delay);
      }
    });
  }, []);

  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-natural-50 to-white overflow-hidden">
      {/* Simplified background for mobile */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 md:opacity-15">
        <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-natural-200 rounded-l-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 md:w-1/3 h-full bg-earth-200 rounded-r-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={headlineRef}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-natural-900 mb-4 md:mb-6 opacity-0 transition-opacity duration-500 leading-tight"
          >
            Você está tratando <span className="text-natural-600">sintomas</span>... enquanto a verdadeira solução está <span className="text-earth-700">esquecida na sua cozinha</span>
          </h1>
          
          <p 
            ref={subheadlineRef}
            className="text-base md:text-lg lg:text-xl text-natural-800 mb-6 md:mb-8 opacity-0 transition-opacity duration-500 px-2"
          >
            Descubra o guia natural que já ajudou milhares de brasileiros a dormir melhor, controlar o açúcar no sangue, reduzir a ansiedade e muito mais — com ingredientes que você já tem em casa.
          </p>

          <div className="mb-6 md:mb-8">
            <Video />
          </div>
          
          <div 
            ref={ctaRef} 
            className="opacity-0 transition-all duration-500"
          >
            <a 
              href="#oferta" 
              onClick={handleScrollToOffers}
              className="inline-block bg-natural-600 hover:bg-natural-700 text-white text-base md:text-lg font-medium px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Quero Descobrir Agora →
            </a>
            <p className="text-natural-600 mt-3 md:mt-4 text-sm">
              + de 27.000 famílias já estão utilizando estes remédios naturais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;