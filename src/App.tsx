import React, { useState } from 'react';
import { Users, Laptop, Calendar, ArrowRight, Github, Twitter, Disc as Discord, Rocket, Code, BookOpen, MessageSquare, GraduationCap, Code2 } from 'lucide-react';
import Navbar from './components/Navbar';
import EventCountdown from './components/EventCountdown';
import { useTheme } from './hooks/useTheme';

function App() {
  const [isCountdownEnabled] = useState(true);
  // const techMeetupDate = new Date('2024-03-15T09:00:00');
  const techCommunitiesDay = new Date('2025-07-19T00:00:00');
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="starry-sky min-h-screen font-satoshi text-white">
      {/* Effets de fond */}
      <div className="purple-haze" />
      <div className="stardust" />
      
      {/* Effet de grain */}
      <div className="grain fixed inset-0 pointer-events-none mix-blend-overlay" />

      {/* Le reste du contenu */}
      <div className="relative z-10">
        {/* Navbar toujours visible */}
        <div className="nav-fixed">
          <div className="bg-[#13111C]/60 backdrop-blur-xl">
            <Navbar onThemeToggle={toggleTheme} currentTheme={theme} />
          </div>
        </div>

        {/* Ajout d'un espace pour le contenu sous la navbar fixe */}
        <div className="h-16" /> {/* Ajustez cette hauteur selon votre navbar */}

        {/* Hero Section avec compteurs intégrés */}
        <div className="relative overflow-hidden pt-8">
          <div className="absolute inset-0">
            <div className={`absolute inset-0 bg-gradient-to-br ${
              theme === 'dark' 
                ? 'from-violet-900/20 via-black to-violet-900/20' 
                : 'from-violet-100 via-white to-violet-100'
            } animate-gradient`} />
            <div className="absolute inset-0 illustration-grid" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-800/20 rounded-full blur-3xl animate-pulse delay-500" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40 relative z-10">
            {/* Compteurs en haut de la section hero */}
            <div className="mb-16 flex flex-col md:flex-row justify-center items-center gap-8">
              {/* <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-violet-500/20 neon-box-subtle">
                <EventCountdown 
                  targetDate={techMeetupDate} 
                  isEnabled={isCountdownEnabled}
                  label="Tech Meetup 2024"
                />
              </div> */}
              <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-violet-500/20 neon-box-subtle">
                <EventCountdown 
                  targetDate={techCommunitiesDay} 
                  isEnabled={isCountdownEnabled}
                  label="Tech Communities Day 2025"
                />
              </div>
            </div>

            {/* Contenu hero existant */}
            <div className="text-center">
              <div className="inline-block mb-8">
                <div className="relative">
                  {/* <img src="/hyver-logo.png" alt="Hyver Logo" className="h-16 mx-auto mb-6 float" /> */}
                  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-red-500' : 'bg-violet-500'} blur-2xl opacity-10`} />
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  theme === 'dark' 
                    ? 'bg-violet-500/5 text-violet-400 border-violet-500/20' 
                    : 'bg-violet-100 text-violet-700 border-violet-200'
                } backdrop-blur-sm border`}>
                  Join the Tech Revolution
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-cabinet">
                Where Tech Minds
                <span className="block mt-2 bg-gradient-to-r from-red-500 to-violet-500 text-transparent bg-clip-text">Unite & Thrive</span>
              </h1>
              <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                A vibrant community of developers, designers, and tech enthusiasts building the future together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <button className="group bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto border border-red-500/20">
                  Join Community 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border border-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-all duration-300 w-full sm:w-auto">
                  Explore Events
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Community Benefits Section */}
        <div className="py-32 bg-gradient-to-b from-zinc-900/80 to-black/80 backdrop-blur-lg relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 neon-text">Why Join Hyver?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Connect with like-minded professionals, share knowledge, and grow together in our thriving tech ecosystem.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`backdrop-blur-lg ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
              } p-8 rounded-2xl transition-all duration-300 border neon-box-subtle`}>
                <div className="bg-gradient-to-br from-violet-500 to-violet-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 neon-icon">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Vibrant Community</h3>
                <p className="text-gray-400 leading-relaxed">Connect with passionate tech professionals and build meaningful relationships.</p>
              </div>
              <div className={`backdrop-blur-lg ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
              } p-8 rounded-2xl transition-all duration-300 border neon-box-subtle`}>
                <div className="bg-gradient-to-br from-violet-600 to-violet-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 neon-icon">
                  <Laptop className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Tech Workshops</h3>
                <p className="text-gray-400 leading-relaxed">Learn from industry experts through hands-on workshops and training sessions.</p>
              </div>
              <div className={`backdrop-blur-lg ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
              } p-8 rounded-2xl transition-all duration-300 border neon-box-subtle`}>
                <div className="bg-gradient-to-br from-violet-700 to-violet-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 neon-icon">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Regular Events</h3>
                <p className="text-gray-400 leading-relaxed">Participate in meetups, hackathons, and networking events throughout the year.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="py-32 bg-black/80 backdrop-blur-lg relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-violet-500/10" />
            <div className="absolute inset-0 bg-grid-white/5" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 neon-text">Notre Communauté en Action</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Découvrez les moments forts de nos événements et rencontres.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Image principale */}
              <div className="md:col-span-2 md:row-span-2 group">
                <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-full neon-box-subtle">
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87" 
                    alt="Tech Meetup" 
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Tech Meetup 2024</h3>
                      <p className="text-gray-200">Une journée d'échange et d'innovation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Images secondaires */}
              {[
                {
                  src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
                  title: "Workshop AI",
                  desc: "Formation pratique"
                },
                {
                  src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
                  title: "Hackathon",
                  desc: "48h de code"
                },
                {
                  src: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
                  title: "Conférence Tech",
                  desc: "Partage d'expérience"
                },
                {
                  src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
                  title: "Networking",
                  desc: "Rencontres pro"
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-2xl aspect-square neon-box-subtle">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-lg font-bold mb-1">{item.title}</h3>
                        <p className="text-gray-200 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Galerie Instagram-style */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="group relative aspect-square overflow-hidden rounded-xl neon-box-subtle">
                  <img 
                    src={`https://source.unsplash.com/random/400x400?tech&${index}`}
                    alt={`Gallery ${index + 1}`}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nos Projets Section */}
        <div className="py-32 bg-black/80 backdrop-blur-lg relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/5" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-violet-500/10" />
            {/* Effet Web3 - Particules animées */}
            <div className="absolute inset-0 particles-container">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-violet-500/20 rounded-full animate-float-random"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 neon-text">Nos Projets</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Découvrez nos initiatives phares pour la communauté tech africaine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tech Communities Day */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-violet-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-box-subtle hover:transform hover:scale-105 transition-all duration-300">
                  <div className="hexagon-icon bg-gradient-to-br from-violet-500 to-violet-700 mb-6">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tech Communities Day</h3>
                  <p className="text-gray-400 mb-6">Le plus grand rassemblement des communautés tech d'Afrique</p>
                  <div className="flex items-center justify-between">
                    <span className="text-violet-400 text-sm">19 Juillet 2025</span>
                    <button className="text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2">
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Tech Communities Clubs */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-violet-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-box-subtle hover:transform hover:scale-105 transition-all duration-300">
                  <div className="hexagon-icon bg-gradient-to-br from-violet-500 to-violet-700 mb-6">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tech Communities Clubs</h3>
                  <p className="text-gray-400 mb-6">Programme d'excellence pour les étudiants passionnés de tech</p>
                  <div className="flex items-center justify-between">
                    <span className="text-violet-400 text-sm">15+ Clubs</span>
                    <button className="text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2">
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Open Source For All */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-violet-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-box-subtle hover:transform hover:scale-105 transition-all duration-300">
                  <div className="hexagon-icon bg-gradient-to-br from-violet-500 to-violet-700 mb-6">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Open Source For All</h3>
                  <p className="text-gray-400 mb-6">Initiative pour démocratiser l'open source en Afrique</p>
                  <div className="flex items-center justify-between">
                    <span className="text-violet-400 text-sm">Projets actifs</span>
                    <button className="text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2">
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="py-32 bg-black/80 backdrop-blur-lg relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 neon-text">What We Do</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Explore our diverse range of activities and opportunities for growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className={`backdrop-blur-lg ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
              } p-8 rounded-2xl transition-all duration-300 border neon-box-subtle`}>
                <Code className="w-8 h-8 text-violet-500 mb-4 neon-icon" />
                <h3 className="text-xl font-semibold mb-2">Coding Sessions</h3>
                <p className="text-gray-400">Collaborative coding and pair programming sessions.</p>
              </div>
              <div className={`backdrop-blur-lg ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
              } p-8 rounded-2xl transition-all duration-300 border neon-box-subtle`}>
                <BookOpen className="w-8 h-8 text-violet-500 mb-4 neon-icon" />
                <h3 className="text-xl font-semibold mb-2">Tech Talks</h3>
                <p className="text-gray-400">Knowledge sharing sessions on latest technologies.</p>
              </div>
              <div className={`backdrop-blur-lg ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
              } p-8 rounded-2xl transition-all duration-300 border neon-box-subtle`}>
                <MessageSquare className="w-8 h-8 text-violet-500 mb-4 neon-icon" />
                <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
                <p className="text-gray-400">One-on-one guidance from experienced professionals.</p>
              </div>
              <div className={`backdrop-blur-lg ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
              } p-8 rounded-2xl transition-all duration-300 border neon-box-subtle`}>
                <Rocket className="w-8 h-8 text-violet-500 mb-4 neon-icon" />
                <h3 className="text-xl font-semibold mb-2">Projects</h3>
                <p className="text-gray-400">Collaborative projects and hackathons.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Stats - Version modernisée */}
        <div className="py-32 bg-gradient-to-b from-black/80 to-zinc-900/80 backdrop-blur-lg relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/5" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-violet-500/10" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "5K+", label: "Community Members", icon: Users },
                { number: "200+", label: "Events Hosted", icon: Calendar },
                { number: "50+", label: "Tech Partners", icon: Laptop },
                { number: "20+", label: "Cities", icon: MessageSquare }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-violet-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-box-subtle">
                    <stat.icon className="w-8 h-8 text-violet-400 mb-4" />
                    <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-lg">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="py-32 bg-black/80 backdrop-blur-lg relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 neon-text">Upcoming Events</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Join our upcoming events and connect with the community.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`backdrop-blur-lg ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
              } p-8 rounded-2xl transition-all duration-300 border neon-box-subtle`}>
                <div className="text-violet-500 text-sm font-semibold mb-4 neon-text">MAR 15, 2024</div>
                <h3 className="text-xl font-semibold mb-4">Tech Meetup: AI & Machine Learning</h3>
                <p className="text-gray-400 mb-6">Deep dive into the latest AI trends and practical applications.</p>
                <button className="text-violet-500 hover:text-violet-400 transition-colors flex items-center gap-2 neon-text">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className={`backdrop-blur-lg ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
              } p-8 rounded-2xl transition-all duration-300 border neon-box-subtle`}>
                <div className="text-violet-500 text-sm font-semibold mb-4 neon-text">MAR 22, 2024</div>
                <h3 className="text-xl font-semibold mb-4">Web3 Development Workshop</h3>
                <p className="text-gray-400 mb-6">Hands-on session on building decentralized applications.</p>
                <button className="text-violet-500 hover:text-violet-400 transition-colors flex items-center gap-2 neon-text">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className={`backdrop-blur-lg ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
              } p-8 rounded-2xl transition-all duration-300 border neon-box-subtle`}>
                <div className="text-violet-500 text-sm font-semibold mb-4 neon-text">MAR 29, 2024</div>
                <h3 className="text-xl font-semibold mb-4">Hackathon: Build for Future</h3>
                <p className="text-gray-400 mb-6">48-hour coding challenge with amazing prizes.</p>
                <button className="text-violet-500 hover:text-violet-400 transition-colors flex items-center gap-2 neon-text">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Nouvelle section Partenaires */}
        <div className="py-32 bg-gradient-to-b from-black/80 to-zinc-900/80 backdrop-blur-lg relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/5" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-violet-500/5" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6">Nos Partenaires</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Collaborons avec les leaders de l'industrie pour offrir les meilleures opportunités à notre communauté.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Partenaire 1 */}
              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="/partner1-logo.svg" alt="Partner 1" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>
              
              {/* Partenaire 2 */}
              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="/partner2-logo.svg" alt="Partner 2" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>
              
              {/* Partenaire 3 */}
              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="/partner3-logo.svg" alt="Partner 3" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>
              
              {/* Partenaire 4 */}
              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="/partner4-logo.svg" alt="Partner 4" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-black/90 to-violet-900/30" />
            <div className="absolute inset-0 bg-grid-white/5" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Join the Community?
            </h2>
            <p className="text-gray-400 mb-12 text-xl leading-relaxed max-w-2xl mx-auto">
              Be part of a growing network of tech enthusiasts and professionals. Start your journey with Hyver today.
            </p>
            <button className="group bg-red-600 text-white px-12 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 flex items-center gap-2 mx-auto">
              Join Hyver Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Footer avec fond transparent */}
        <footer className={`${
          theme === 'dark' 
            ? 'bg-black/80 border-white/10' 
            : 'bg-white/80 border-gray-200'
        } py-16 border-t backdrop-blur-lg`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <img src="https://i.imgur.com/XKUVktL.png" alt="Hyver Logo" className="h-8 mb-6" />
                <p className="text-gray-400">Building the future of tech communities together.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Community</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-red-500 transition-colors">Events</a></li>
                  <li><a href="#" className="hover:text-red-500 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-red-500 transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-red-500 transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-red-500 transition-colors">Learning Paths</a></li>
                  <li><a href="#" className="hover:text-red-500 transition-colors">Projects</a></li>
                  <li><a href="#" className="hover:text-red-500 transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4 mb-6">
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    <Discord className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-400">Stay updated with our newsletter</p>
                <div className="mt-4 flex">
                  <input type="email" placeholder="Enter your email" 
                    className="bg-white/5 border border-white/10 rounded-l-full px-4 py-2 text-white w-full focus:outline-none focus:border-violet-500" />
                  <button className="bg-violet-600 text-white px-6 rounded-r-full hover:bg-violet-700 transition-colors neon-box">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-400 pt-12 border-t border-white/10">
              <p className="mb-4">&copy; 2024 Hyver Community. All rights reserved.</p>
              <div className="flex justify-center space-x-8 text-sm">
                <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-red-500 transition-colors">Code of Conduct</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;