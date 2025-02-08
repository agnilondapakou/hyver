import React from 'react';
import { Code2, Github, BookOpen, Users, Star, GitFork } from 'lucide-react';

export default function OpenSourceForAll() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-black/50 to-violet-900/30" />
          <div className="absolute inset-0 bg-[url('/osfa-background.jpg')] bg-cover bg-center opacity-20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-500/10 text-violet-400 border-violet-500/20 backdrop-blur-sm border mb-6">
              Initiative Open Source
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Open Source
              <span className="block mt-2 bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">For All</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              Démocratiser l'open source en Afrique
            </p>
          </div>
        </div>
      </div>

      {/* Projets en vedette */}
      <div className="py-20 bg-black/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Projets Vedettes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Project Name",
                description: "Description du projet",
                stars: 120,
                forks: 45
              },
              // Ajoutez d'autres projets...
            ].map((project, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-box-subtle">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-violet-400" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4 text-violet-400" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <button className="text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Voir sur GitHub
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 