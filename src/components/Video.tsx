import React, { useState } from 'react';
import { Play } from 'lucide-react';

const Video: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoThumbnail = "https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg";
  const videoId = "3zN76HIWclU";
  
  return (
    <div className="relative">
      <div className="aspect-video rounded-2xl shadow-xl bg-natural-900 relative group overflow-hidden">
        {!videoLoaded ? (
          <div 
            className="absolute inset-0 bg-cover bg-center flex items-center justify-center cursor-pointer"
            style={{ backgroundImage: `url(${videoThumbnail})` }}
            onClick={() => setVideoLoaded(true)}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-natural-600 flex items-center justify-center shadow-lg">
                <Play fill="white" size={32} className="text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-sm text-white p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="font-medium">Assista como estas receitas naturais estão transformando vidas</p>
            </div>
          </div>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-natural-700 font-medium">
          ⭐ Mais de 27.000 brasileiros já assistiram este vídeo e começaram a mudar suas vidas
        </p>
      </div>
    </div>
  );
};

export default Video;