import React, { useRef, useEffect } from 'react';

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.gallery-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('animate-fade-in');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
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

  const ingredients = [
    {
      name: "Gengibre",
      properties: "Anti-inflamatório, digestivo"
    },
    {
      name: "Canela",
      properties: "Regula açúcar, antioxidante"
    },
    {
      name: "Alho",
      properties: "Imunidade, cardiovascular"
    },
    {
      name: "Mel",
      properties: "Antibacteriano, calmante"
    },
    {
      name: "Cúrcuma",
      properties: "Anti-inflamatório, antioxidante"
    },
    {
      name: "Camomila",
      properties: "Calmante, digestiva"
    },
    {
      name: "Limão",
      properties: "Alcalinizante, vitamina C"
    },
    {
      name: "Hortelã",
      properties: "Digestiva, refrescante"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-natural-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-3 md:mb-4 leading-tight">
            Ingredientes <span className="text-natural-600">Simples</span>, Resultados <span className="text-natural-600">Extraordinários</span>
          </h2>
          <p className="text-base md:text-lg text-natural-700 max-w-2xl mx-auto px-2">
            Conheça alguns dos ingredientes poderosos que você já tem em casa e que são utilizados em nossas receitas naturais
          </p>
        </div>

        <div 
          ref={galleryRef} 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
        >
          {ingredients.map((ingredient, index) => (
            <div 
              key={index} 
              className="gallery-item group relative rounded-lg md:rounded-xl overflow-hidden shadow-sm md:shadow-md opacity-0 transition-all duration-500 bg-white"
            >
              <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-gradient-to-br from-natural-100 to-natural-200 flex items-center justify-center">
                <div className="text-center p-3">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-natural-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs md:text-sm font-bold">
                      {ingredient.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-natural-800 font-bold text-sm md:text-base mb-1">{ingredient.name}</h3>
                  <p className="text-natural-600 text-xs md:text-sm leading-tight">{ingredient.properties}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <a 
            href="#oferta" 
            onClick={handleScrollToOffers}
            className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
          >
            Acesse Todas as Receitas Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;