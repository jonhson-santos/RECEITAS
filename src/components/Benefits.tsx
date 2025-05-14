import React from 'react';
import { Moon, Droplets, Heart, Apple, Sparkles, HeartPulse } from 'lucide-react';
import { benefitsData } from '../utils/benefitsData';

const Benefits: React.FC = () => {
  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconMap: Record<string, React.ReactNode> = {
    Moon: <Moon size={36} className="text-natural-600" />,
    Droplets: <Droplets size={36} className="text-natural-600" />,
    Heart: <Heart size={36} className="text-natural-600" />,
    Apple: <Apple size={36} className="text-natural-600" />,
    Sparkles: <Sparkles size={36} className="text-natural-600" />,
    HeartPulse: <HeartPulse size={36} className="text-natural-600" />
  };

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-4">
            Natureza que <span className="text-natural-600">Transforma</span> sua Saúde
          </h2>
          <p className="text-lg text-natural-700 max-w-2xl mx-auto">
            O poder de cura que você precisa está nos ingredientes que já tem em casa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-natural-100"
            >
              <div className="w-16 h-16 bg-natural-50 rounded-full flex items-center justify-center mb-4">
                {iconMap[benefit.icon]}
              </div>
              <h3 className="text-xl font-bold text-natural-800 mb-2">{benefit.title}</h3>
              <p className="text-natural-700">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#oferta" 
            onClick={handleScrollToOffers}
            className="inline-block bg-natural-600 hover:bg-natural-700 text-white font-medium px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            Quero Acessar Todas as Receitas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;