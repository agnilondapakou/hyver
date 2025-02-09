import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="starry-sky min-h-screen font-satoshi text-white">
      {/* Effets de fond */}
      <div className="purple-haze" />
      <div className="stardust" />
      <div className="grain fixed inset-0 pointer-events-none mix-blend-overlay" />

      {/* Bouton retour */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-8 left-8 z-50 p-3 bg-violet-600/90 hover:bg-violet-700 text-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
        aria-label="Back to home"
      >
        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      {/* Contenu principal */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 