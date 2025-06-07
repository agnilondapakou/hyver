import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Autres sections existantes... */}

      {/* Registration Section */}
      <div className="py-20 bg-black/80 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{t('joinUs')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t('joinUsDescription')}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8">
            <RegistrationForm />
          </div>
        </div>
      </div>

      {/* Autres sections existantes... */}
    </div>
  );
} 