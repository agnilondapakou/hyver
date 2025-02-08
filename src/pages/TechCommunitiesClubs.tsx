import React from 'react';
import { GraduationCap, Users, Building2, Target, BookOpen, Award } from 'lucide-react';

export default function TechCommunitiesClubs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-black/50 to-violet-900/30" />
          <div className="absolute inset-0 bg-[url('/tcc-background.jpg')] bg-cover bg-center opacity-20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-500/10 text-violet-400 border-violet-500/20 backdrop-blur-sm border mb-6">
              15+ Clubs Universitaires
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Tech Communities
              <span className="block mt-2 bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">Clubs</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              Former la prochaine génération de leaders tech en Afrique
            </p>
          </div>
        </div>
      </div>

      {/* Carte des clubs */}
      <div className="py-20 bg-black/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Nos Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                university: "Université de Yaoundé I",
                members: 150,
                projects: 12
              },
              // Ajoutez d'autres universités...
            ].map((club, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-box-subtle">
                <Building2 className="w-8 h-8 text-violet-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{club.university}</h3>
                <div className="text-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4" />
                    <span>{club.members} membres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span>{club.projects} projets</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 