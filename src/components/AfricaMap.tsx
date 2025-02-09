import React, { useState } from 'react';

interface Country {
  id: string;
  name: string;
  coordinates: [number, number];
  members: number;
  communities: number;
}

const countries: Country[] = [
  {
    id: 'CMR',
    name: 'Cameroun',
    coordinates: [4.6125522, 13.1535811],
    members: 2000,
    communities: 15
  },
  {
    id: 'SEN',
    name: 'Sénégal',
    coordinates: [14.4750607, -14.4529612],
    members: 800,
    communities: 8
  },
  {
    id: 'CIV',
    name: 'Côte d\'Ivoire',
    coordinates: [7.539989, -5.54708],
    members: 600,
    communities: 6
  },
  {
    id: 'BEN',
    name: 'Bénin',
    coordinates: [9.30769, 2.315834],
    members: 400,
    communities: 4
  }
];

export default function AfricaMap() {
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-violet-500/10" />
      
      {/* Carte SVG stylisée */}
      <div className="relative w-full aspect-[4/3] md:aspect-[2/1]">
        <svg 
          viewBox="0 0 1200 800" 
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))' }}
        >
          {/* Contours de l'Afrique en version simplifiée */}
          <path
            d="M600 200 L800 300 L750 500 L600 600 L450 500 L400 300 Z"
            className="fill-violet-900/20 stroke-violet-500/50"
            strokeWidth="2"
          />
          
          {/* Points représentant les pays */}
          {countries.map((country) => (
            <g key={country.id} onClick={() => setActiveCountry(country)}>
              <circle
                cx={country.coordinates[0] * 20 + 500}
                cy={country.coordinates[1] * -20 + 400}
                r="8"
                className={`
                  fill-violet-500 cursor-pointer transition-all duration-300
                  ${activeCountry?.id === country.id ? 'r-12 fill-violet-400' : 'hover:fill-violet-400'}
                `}
              />
              <circle
                cx={country.coordinates[0] * 20 + 500}
                cy={country.coordinates[1] * -20 + 400}
                r="20"
                className="fill-violet-500/20 animate-pulse"
              />
            </g>
          ))}
        </svg>

        {/* Info-bulle pour le pays actif */}
        {activeCountry && (
          <div 
            className="absolute p-4 bg-black/80 backdrop-blur-sm rounded-lg border border-violet-500/20 shadow-xl"
            style={{
              left: `${activeCountry.coordinates[0] * 20 + 500}px`,
              top: `${activeCountry.coordinates[1] * -20 + 400}px`,
              transform: 'translate(-50%, -150%)'
            }}
          >
            <h3 className="text-lg font-bold mb-2">{activeCountry.name}</h3>
            <div className="text-sm text-gray-300">
              <p>{activeCountry.members} membres</p>
              <p>{activeCountry.communities} communautés</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 