import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Clock, CreditCard } from 'lucide-react';

const Pricing: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'standard' | 'premium'>('premium');

  const bonusItems = [
    {
      title: "30 Receitas de Chás para Emagrecer",
      description: "Combinações naturais que aceleram o metabolismo e auxiliam na perda de peso",
      value: "R$ 97,00"
    },
    {
      title: "Guia de Ervas para Imunidade",
      description: "Receitas exclusivas para fortalecer seu sistema imunológico e prevenir doenças",
      value: "R$ 67,00"
    },
    {
      title: "Consulta Particular Online",
      description: "30 minutos de consulta com um especialista para tirar suas dúvidas",
      value: "R$ 127,00"
    }
  ];

  return (
    <section id="oferta" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-natural-100 text-natural-700 text-sm px-4 py-2 rounded-full mb-4">
            Oferta Exclusiva
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-4">
            Invista na Sua Saúde <span className="text-natural-600">Naturalmente</span>
          </h2>
          <p className="text-lg text-natural-700 max-w-2xl mx-auto">
            Escolha a opção que melhor atende suas necessidades e comece a transformar sua saúde hoje mesmo
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Package Selector */}
          <div className="bg-natural-50 rounded-full p-1 flex justify-center mb-8 max-w-md mx-auto">
            <button 
              className={`rounded-full px-6 py-3 font-medium w-1/2 transition-colors ${
                selectedOption === 'standard' 
                  ? 'bg-white text-natural-800 shadow-md' 
                  : 'bg-transparent text-natural-600 hover:bg-white/50'
              }`}
              onClick={() => setSelectedOption('standard')}
            >
              Padrão
            </button>
            <button 
              className={`rounded-full px-6 py-3 font-medium w-1/2 transition-colors ${
                selectedOption === 'premium' 
                  ? 'bg-white text-natural-800 shadow-md' 
                  : 'bg-transparent text-natural-600 hover:bg-white/50'
              }`}
              onClick={() => setSelectedOption('premium')}
            >
              Completo
            </button>
          </div>

          {/* Pricing Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-natural-100 overflow-hidden transition-all duration-300 transform hover:shadow-2xl">
            {/* Ribbon */}
            {selectedOption === 'premium' && (
              <div className="bg-natural-600 text-white py-2 text-center font-medium">
                <Sparkles size={16} className="inline-block mr-1" /> MAIS POPULAR | ACESSO COMPLETO
              </div>
            )}
            
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="md:w-1/2">
                  <h3 className="font-serif text-2xl font-bold text-natural-800 mb-2">
                    {selectedOption === 'standard' ? 'Farmácia Natural em Casa' : 'Farmácia Natural em Casa + Bônus'}
                  </h3>
                  <p className="text-natural-700 mb-6">
                    {selectedOption === 'standard' 
                      ? 'O guia digital básico com todas as receitas naturais' 
                      : 'O pacote completo com guia digital + bônus exclusivos'}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-end mb-2">
                      <span className="text-gray-400 line-through mr-2">
                        {selectedOption === 'standard' ? 'R$ 97,00' : 'R$ 197,00'}
                      </span>
                      <span className="text-natural-600 font-medium">
                        Por apenas:
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div>
                        <span className="text-3xl md:text-4xl font-bold text-natural-800">
                          {selectedOption === 'standard' ? 'R$ 9,99' : 'R$ 27'}
                        </span>
                        <span className="text-natural-700 ml-1">à vista</span>
                      </div>
                      <div className="bg-earth-100 text-earth-800 font-bold rounded-lg px-3 py-1 text-sm">
                        {selectedOption === 'standard' ? '90% OFF' : '86% OFF'}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2">
                      <CreditCard size={20} className="text-natural-600" />
                      <span className="text-natural-700">
                        ou {selectedOption === 'standard' ? '2x de R$ 4,99' : '3x de R$ 9,00'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={20} className="text-natural-600" />
                      <span className="text-natural-700">Garantia de 7 dias ou seu dinheiro de volta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={20} className="text-natural-600" />
                      <span className="text-natural-700">Acesso imediato após a confirmação do pagamento</span>
                    </div>
                  </div>

                  <a 
                    href={selectedOption === 'standard' ? 'https://pay.kiwify.com.br/6tkqn2K' : 'https://pay.kiwify.com.br/jk0QIb9'} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center text-white font-medium px-8 py-4 rounded-full shadow-lg transition-colors ${
                      selectedOption === 'standard'
                        ? 'bg-natural-600 hover:bg-natural-700'
                        : 'bg-natural-600 hover:bg-natural-700'
                    }`}
                  >
                    Quero Garantir Meu Acesso
                  </a>
                  
                  <p className="text-center text-sm text-natural-600 mt-4">
                    Pagamento 100% seguro e criptografado
                  </p>
                </div>
                
                {selectedOption === 'premium' && (
                  <div className="md:w-1/2 bg-natural-50 rounded-xl p-6">
                    <h4 className="font-bold text-xl text-natural-800 mb-4 flex items-center gap-2">
                      <Sparkles size={20} className="text-natural-600" />
                      Bônus Exclusivos
                    </h4>
                    
                    <div className="space-y-4">
                      {bonusItems.map((bonus, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-natural-100">
                          <h5 className="font-bold text-natural-800 mb-1">{bonus.title}</h5>
                          <p className="text-natural-700 text-sm mb-2">{bonus.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-natural-600">Valor:</span>
                            <span className="font-bold text-natural-700">{bonus.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-natural-200">
                      <div className="flex justify-between items-center">
                        <span className="text-natural-700">Valor Total dos Bônus:</span>
                        <span className="font-bold text-natural-800">R$ 291,00</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Guarantee Footer */}
            <div className="bg-natural-50 p-4 flex items-center justify-center gap-2">
              <ShieldCheck size={20} className="text-natural-600" />
              <span className="text-natural-700 font-medium">Garantia de 7 dias ou seu dinheiro de volta sem perguntas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;