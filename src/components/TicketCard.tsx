import React from 'react';
import { Ticket, Check } from 'lucide-react';

interface TicketProps {
  type: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  onSelect: () => void;
}

export default function TicketCard({ type, price, features, isPopular, onSelect }: TicketProps) {
  return (
    <div className={`relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:transform hover:scale-105 ${
      isPopular 
        ? 'bg-blue-500/10 border-blue-500/20 neon-box-blue' 
        : 'bg-white/5 border-white/10'
    }`}>
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-sm rounded-full">
          Popular
        </span>
      )}
      
      <div className="flex items-center gap-3 mb-4">
        <Ticket className={`w-6 h-6 ${isPopular ? 'text-blue-400' : 'text-gray-400'}`} />
        <h3 className="text-xl font-bold">{type}</h3>
      </div>

      <div className="mb-6">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-gray-400 ml-2">USD</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className={`w-5 h-5 ${isPopular ? 'text-blue-400' : 'text-gray-400'}`} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
          isPopular 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'border border-white/10 hover:bg-white/5'
        }`}
      >
        Select Ticket
      </button>
    </div>
  );
} 