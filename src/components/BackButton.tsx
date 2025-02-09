import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-8 left-8 z-50 p-3 bg-violet-600/90 hover:bg-violet-700 text-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
      aria-label="Back to home"
    >
      <ArrowLeft className="w-6 h-6" />
    </button>
  );
} 