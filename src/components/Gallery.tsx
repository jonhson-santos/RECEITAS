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
              }, index * 150);
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
      image: "https://images.pexels.com/photos/4198843/pexels-photo-4198843.jpeg",
      properties: "Anti-inflamatório, digestivo"
    },
    {
      name: "Canela",
      image: "https://images.pexels.com/photos/4198475/pexels-photo-4198475.jpeg",
      properties: "Regula açúcar, antioxidante"
    },
    {
      name: "Alho",
      image: "https://images.pexels.com/photos/4198490/pexels-photo-4198490.jpeg",
      properties: "Imunidade, cardiovascular"
    },
    {
      name: "Mel",
      image: "https://images.pexels.com/photos/4198484/pexels-photo-4198484.jpeg",
      properties: "Antibacteriano, calmante"
    },
    {
      name: "Cúrcuma",
      image: "https://images.pexels.com/photos/4198572/pexels-photo-4198572.jpeg",
      properties: "Anti-inflamatório, antioxidante"
    },
    {
      name: "Camomila",
      image: "https://images.pexels.com/photos/4207905/pexels-photo-4207905.jpeg",
      properties: "Calmante, digestiva"
    },
    {
      name: "Limão",
      image: "https://images.pexels.com/photos/4198444/pexels-photo-4198444.jpeg",
      properties: "Alcalinizante, vitamina C"
    },
    {
      name: "Hortelã",
      image: "https://images.pexels.com/photos/4198439/pexels-photo-4198439.jpeg",
      properties: "Digestiva, refrescante"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-natural-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-4">
            Ingredientes <span className="text-natural-600">Simples</span>, Resultados <span className="text-natural-600">Extraordinários</span>
          </h2>
          <p className="text-lg text-natural-700 max-w-2xl mx-auto">
            Conheça alguns dos ingredientes poderosos que você já tem em casa e que são utilizados em nossas receitas naturais
          </p>
        </div>

        <div 
          ref={galleryRef} 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {ingredients.map((ingredient, index) => (
            <div 
              key={index} 
              className="gallery-item group relative rounded-xl overflow-hidden shadow-md opacity-0 transition-all duration-500"
            >
              <img 
                src={ingredient.image} 
                alt={ingredient.name}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{ingredient.name}</h3>
                <p className="text-white/80 text-sm">{ingredient.properties}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#oferta" 
            onClick={handleScrollToOffers}
            className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            Acesse Todas as Receitas Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;