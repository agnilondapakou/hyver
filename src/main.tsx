import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import TechCommunitiesDay from './pages/TechCommunitiesDay';
import TechCommunitiesClubs from './pages/TechCommunitiesClubs';
import OpenSourceForAll from './pages/OpenSourceForAll';
import NotFound from './pages/404';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/tech-communities-day" element={<TechCommunitiesDay />} />
          <Route path="/tech-communities-clubs" element={<TechCommunitiesClubs />} />
          <Route path="/open-source-for-all" element={<OpenSourceForAll />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </StrictMode>
);
