import { useLanguage } from '../contexts/LanguageContext';
import TCDNavbar from '../components/TCDNavbar';
import TCDFooter from '../components/TCDFooter';
import PageTitle from '../components/PageTitle';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <PageTitle title="404 - Page non trouvée" />
      <TCDNavbar />
      
      <div className="relative pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-black/50 to-violet-900/30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <h1 className="text-9xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">
              404
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('pageNotFound')}
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              {t('pageNotFoundDescription')}
            </p>

            <Link 
              to="/"
              className="group inline-flex items-center gap-2 bg-violet-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-violet-700 transition-all duration-300 neon-box"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              {t('backToHome')}
            </Link>
          </div>
        </div>
      </div>

      <TCDFooter />
    </div>
  );
} 