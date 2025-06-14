import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="bg-natural-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-natural-100 max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-natural-800 mb-4 text-center">
            Tem Dúvidas? Fale Conosco!
          </h2>
          <p className="text-natural-700 text-center mb-6">
            Nossa equipe está pronta para ajudar você a transformar sua saúde naturalmente.
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/554799658915"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <MessageCircle size={20} />
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;