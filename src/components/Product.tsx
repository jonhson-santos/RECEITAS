import React, { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';

const Product: React.FC = () => {
  const productRef = useRef<HTMLDivElement>(null);

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

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, []);

  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "120+ receitas naturais para diversas condições de saúde",
    "Guia de propriedades medicinais de 50 ingredientes comuns",
    "Instruções detalhadas de preparo e dosagem",
    "Calendário de uso para cada condição específica",
    "Combinações poderosas para resultados mais rápidos",
    "Receitas especiais para diabetes, insônia, ansiedade e mais",
    "Guia de substituições para alergias e intolerâncias"
  ];

  return (
    <section className="py-16 md:py-24 bg-natural-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Product Mockup */}
          <div ref={productRef} className="lg:w-1/2 opacity-0 transition-opacity duration-700 flex justify-center">
            <div className="relative">
              {/* Main E-book Mockup */}
              <div className="relative z-20 shadow-2xl rounded-lg transform rotate-3 transition-transform hover:rotate-0 duration-300">
                <img 
                  src="https://images.pexels.com/photos/4031601/pexels-photo-4031601.jpeg" 
                  alt="Farmácia Natural em Casa - E-book"
                  className="rounded-lg border-8 border-white h-auto max-w-full w-72 md:w-80 lg:w-96 object-cover"
                />
                <div className="absolute inset-0 rounded-lg border-8 border-white bg-gradient-to-b from-transparent to-black/50 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-serif font-bold text-xl">Farmácia Natural em Casa</h3>
                    <p className="text-sm text-white/90">Seu guia completo de remédios naturais</p>
                  </div>
                </div>
              </div>
              
              {/* Secondary Mockup (decoration) */}
              <div className="absolute z-10 top-10 -left-10 shadow-xl rounded-lg transform -rotate-6 opacity-70 hidden md:block">
                <img 
                  src="https://images.pexels.com/photos/906097/pexels-photo-906097.jpeg" 
                  alt="Páginas internas"
                  className="rounded-lg border-8 border-white h-auto w-64 object-cover blur-sm"
                />
              </div>
              
              {/* Badge */}
              <div className="absolute top-5 -right-10 z-30 bg-natural-600 text-white rounded-full w-24 h-24 flex items-center justify-center text-center transform rotate-12 font-bold shadow-lg">
                <span>E-book<br/>Digital</span>
              </div>
            </div>
          </div>
          
          {/* Product Description */}
          <div className="lg:w-1/2">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-6">
              <span className="text-natural-600">Farmácia Natural em Casa:</span><br/>
              Seu Guia Completo de Saúde Natural
            </h2>
            
            <p className="text-lg text-natural-700 mb-8">
              Um guia digital completo com as mais eficazes receitas naturais, cuidadosamente testadas e aprovadas por milhares de brasileiros que transformaram sua saúde.
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-natural-100 mb-8">
              <h3 className="font-bold text-xl text-natural-800 mb-4">O que você vai receber:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 mr-2 mt-1 bg-natural-100 rounded-full p-1">
                      <Check size={14} className="text-natural-600" />
                    </span>
                    <span className="text-natural-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <a 
                href="#oferta" 
                onClick={handleScrollToOffers}
                className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                Quero Meu Guia Completo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;