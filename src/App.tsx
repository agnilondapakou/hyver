// import React, { useState } from 'react';
import { Users, Laptop, Calendar, ArrowRight, Twitter, Linkedin, Disc as Discord, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
// import EventCountdown from './components/EventCountdown';
import { useTheme } from './hooks/useTheme';
// import AfricaMap from './components/AfricaMap';
import ScrollToTop from './components/ScrollToTop';
import { Link as RouterLink } from 'react-router-dom';

function App() {
  // const [isCountdownEnabled] = useState(true);
  // const techMeetupDate = new Date('2024-03-15T09:00:00');
  // const techCommunitiesDay = new Date('2025-07-19T00:00:00');
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

      {/* Hero Section */}
        <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
            {/* Gradient avec bleu */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-blue-900/20 animate-gradient" />
          <div className="absolute inset-0 illustration-grid" />
            {/* Effets lumineux avec bleu */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-800/10 rounded-full blur-[120px] animate-pulse delay-500" />
        </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="text-center">
              {/* Logo et badge */}
              <div className="mb-12 inline-block">
                <img 
                  src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739116401/hyver/f5leltzz7qyyrkv8w3b5.png" 
                  alt="Hyver Logo" 
                  className="h-24 mx-auto mb-8 float"
                />
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20 backdrop-blur-sm">
                  Building Tech Communities
                </span>
              </div>

              {/* Titre principal */}
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Building the Future of
                <span className="block mt-4 bg-gradient-to-r from-red-500 via-red-600 to-violet-600 text-transparent bg-clip-text">
                  Tech Communities
              </span>
            </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Empowering tech communities across Africa through collaboration, innovation, and knowledge sharing
              </p>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                
                <a href="https://tally.so/r/wkJBoR" target='_blank'>
                  <button className="group px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 neon-box flex items-center justify-center gap-2">
                    Join the Community
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                </a>
                {/* <button className="px-8 py-4 border border-white/10 rounded-full font-semibold hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                  Explore Projects
                  <ArrowRight className="w-5 h-5" />
              </button> */}
              </div>

              {/* Stats rapides */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "4+", label: "Countries" },
                  { number: "15+", label: "Communities" },
                  { number: "3000+", label: "Members" },
                  { number: "50+", label: "Events" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-violet-500/20 flex items-center justify-center">
              <div className="w-1 h-3 bg-violet-500/50 rounded-full" />
            </div>
          </div>
      </div>

      {/* Community Benefits Section */}
        <div className="py-32 bg-gradient-to-b from-zinc-900/80 to-black/80 backdrop-blur-lg relative" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 neon-text">Why Join Hyveras a community ?</h2>
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

        {/* Projects Section */}
        <div id="projects" className="py-32 bg-black/80 backdrop-blur-lg relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 neon-text">What we do</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover our flagship initiatives for the African tech community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Tech Communities Day",
                  description: "The largest gathering of tech communities in Africa",
                  // path: "/tech-communities-day",
                  path: "#",
                  logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739117395/hyver/ywoot4qudcn1dbbd5i9y.png"
                },
                {
                  title: "Tech Communities Clubs",
                  description: "Excellence program for tech-passionate students",
                  // path: "/tech-communities-clubs",
                  path: "#",
                  logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739116626/hyver/sxdttxb9urni5zjl49gj.png"
                },
                {
                  title: "Open Source For All",
                  description: "Promoting open source in Africa",
                  // path: "/open-source-for-all",
                  path: "#",
                  logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739117673/hyver/knczly3kmed9hp9oaux2.svg"
                }
              ].map((project, index) => (
                <RouterLink
                  key={index}
                  to={project.path}
                  className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-red-500/10 neon-box-red hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-violet-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative">
                    <img 
                      src={project.logo} 
                      alt={project.title} 
                      className="w-16 h-16 mb-6 object-contain"
                    />
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors">
                      Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </RouterLink>
              ))}
            </div>
          </div>
        </div>

        {/* Section Événements */}
        <div className="py-32 bg-black/80 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 neon-text">Events</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
              Join us at our next events
              </p>
            </div>

            {/* Conteneur d'événement centré */}
            <div className="flex justify-center">
              <div className="max-w-2xl w-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-box-subtle">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-violet-500/10 flex items-center justify-center">
                      <Calendar className="w-10 h-10 text-violet-400" />
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Tech Communities Day 2025</h3>
                    <p className="text-gray-400 mb-4">
                    Africa's largest gathering of tech communities
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      {/* <span className="inline-flex items-center gap-2 text-violet-400">
                        <Calendar className="w-4 h-4" />
                        19 Juillet 2025
                      </span> */}
                      <span className="inline-flex items-center gap-2 text-violet-400">
                        <MapPin className="w-4 h-4" />
                        Lomé, Togo
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="py-32 bg-black/80 backdrop-blur-lg relative overflow-hidden" id="gallery">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-violet-500/10" />
            <div className="absolute inset-0 bg-grid-white/5" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 neon-text">Our Community in Action</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Discover the highlights of our events and meetings.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Image principale */}
              <div className="md:col-span-2 md:row-span-2 group">
                <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-full neon-box-subtle">
                  <img 
                    src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739034256/hyver/fzcawucgsz1dddws65fm.jpg" 
                    alt="Tech Meetup" 
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Tech Communities Day 2024</h3>
                      <p className="text-gray-200">Juillet 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Images secondaires */}
              {[
                {
                  src: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739034253/hyver/wklpoqvk9jdpwq0ikiqr.jpg",
                  title: "Tech Communities Day 2024",
                  desc: "20 Juillet 2024"
                },
                {
                  src: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739034258/hyver/qsn8gdp6o7r030hkwsyi.jpg",
                  title: "Tech Communities Day 2024",
                  desc: "20 Juillet 2024"
                },
                {
                  src: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739034253/hyver/pkv7qzxxphhntofibv2x.jpg",
                  title: "Tech Communities Day 2024",
                  desc: "20 Juillet 2024"
                },
                {
                  src: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739034267/hyver/bjlmlodsosfu4co3hzjj.jpg",
                  title: "Tech Communities Day 2024",
                  desc: "20 Juillet 2024"
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
            {/*  center images */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                <div className="group relative aspect-square overflow-hidden rounded-xl neon-box-subtle">
                  <img 
                    src='https://res.cloudinary.com/dpofk8xy0/image/upload/v1739113957/hyver/woj08s8aniffhkhqtuna.jpg'
                    alt="Tech Communities Day 2023"
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="group relative aspect-square overflow-hidden rounded-xl neon-box-subtle">
                  <img 
                    src='https://res.cloudinary.com/dpofk8xy0/image/upload/v1739113950/hyver/pxfmj78srhaulpjfrjxk.jpg'
                    alt="Tech Communities Day 2023"
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="group relative aspect-square overflow-hidden rounded-xl neon-box-subtle">
                  <img 
                    src='https://res.cloudinary.com/dpofk8xy0/image/upload/v1739113950/hyver/b5ucu9fs206sxmwmymmb.jpg'
                    alt="Tech Communities Day 2023"
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="group relative aspect-square overflow-hidden rounded-xl neon-box-subtle">
                  <img 
                    src='https://res.cloudinary.com/dpofk8xy0/image/upload/v1739113950/hyver/tjh92drg1knnlaywg62r.jpg'
                    alt="Tech Communities Day 2023"
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="group relative aspect-square overflow-hidden rounded-xl neon-box-subtle">
                  <img 
                    src='https://res.cloudinary.com/dpofk8xy0/image/upload/v1739113950/hyver/uqwhxdf4pimkpitgmg8m.jpg'
                    alt="Tech Communities Day 2023"
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="group relative aspect-square overflow-hidden rounded-xl neon-box-subtle">
                  <img 
                    src='https://res.cloudinary.com/dpofk8xy0/image/upload/v1739113950/hyver/kmxifryywe39fcfe544v.jpg'
                    alt="Tech Communities Day 2023"
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
        {/* <div className="py-32 bg-black/80 backdrop-blur-lg relative" id="events">
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
        </div> */}

        {/* Community Stats - Version modernisée */}
        {/* <div className="py-32 bg-gradient-to-b from-black/80 to-zinc-900/80 backdrop-blur-lg relative overflow-hidden">
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
        </div> */}

        {/* Section Partenaires */}
        <div className="py-32" id="partners">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">They believed in us</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
              Let's collaborate with industry leaders to offer the best opportunities to our community.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Partenaire 1 */}
              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739123720/hyver/bxlbl3mj9ze7tju1tcl5.png" alt="Republique Togolaise" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>

              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739123729/hyver/djme4rlmeq9afqjl2y9k.png" alt="GIZ" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>
              
              {/* Partenaire 2 */}
              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739114963/hyver/fbq9i5ihx0ky21owh8dh.png" alt="Kondjigbalẽ" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>
              
              {/* Partenaire 3 */}
              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739122839/hyver/xfwnugxyopeu00q9ngwn.png" alt="Killigiants" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>
              
              {/* Partenaire 4 */}
              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124078/hyver/zgafm8v60bodfuozxydm.png" alt="Lomé Business School" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>

              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124280/hyver/hmb9oxcfcjcjxpp73zy6.png" alt="Agence Togo Digital" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>

              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124382/hyver/ixk7qdmqjklldviqthzb.png" alt="Google DSC LBS" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>

              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124290/hyver/wajh0lbw5zxolht8g6bn.png" alt="Google DSC UL" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>

              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124289/hyver/wn2adl5xzp6a40kfjxjw.png" alt="Google DSC IAI" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>

              <div className={`${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } p-8 rounded-2xl transition-all duration-300 group hover:shadow-violet-500/20 hover:shadow-lg`}>
                <img src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124289/hyver/lpvjaes7l3lrv3wm85cg.png" alt="Google DSC Defitech" className="h-12 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </div>

        {/* Our Presence in Africa */}
        <div id="presence" className="py-32 bg-black/80 backdrop-blur-lg relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/5" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-violet-500/10" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 neon-text">Our Presence in Africa</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover our growing network of tech communities across Africa
              </p>
            </div>

            {/* Countries with flags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  country: "Togo",
                  flag: "🇹🇬",
                  // members: "500+",
                  // communities: 5,
                  description: "Dynamic and growing community"
                },
                {
                  country: "Ivory Coast",
                  flag: "🇨🇮",
                  // members: "800+",
                  // communities: 8,
                  description: "Major West African tech hub"
                },
                {
                  country: "Benin",
                  flag: "🇧🇯",
                  // members: "400+",
                  // communities: 4,
                  description: "Emerging tech ecosystem"
                },
                {
                  country: "Niger",
                  flag: "🇳🇪",
                  // members: "300+",
                  // communities: 3,
                  description: "Growing tech community"
                }
              ].map((country, index) => (
                <div 
                  key={index} 
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-box-subtle hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-violet-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="text-6xl mb-4">{country.flag}</div>
                    <div className="text-xl font-bold mb-2">{country.country}</div>
                    <div className="text-gray-400 text-sm mb-4">{country.description}</div>
                    {/* <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-gray-400">Members</span>
                        <span className="text-violet-400 font-bold">{country.members}</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-gray-400">Communities</span>
                        <span className="text-violet-400 font-bold">{country.communities}</span>
                      </div>
                    </div> */}
                  </div>
            </div>
              ))}
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
          <a href="https://tally.so/r/wkJBoR" target='_blank'>
            <button className="group bg-red-600 text-white px-12 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 flex items-center gap-2 mx-auto">
              Join Hyver Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
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
                <img src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739126342/hyver/orlkktzpillpgyi1ydlb.png" alt="Hyver Logo" className="h-8 mb-6" />
              <p className="text-gray-400">Building the future of tech communities together.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Events</a></li>
                  {/* <li><a href="#" className="hover:text-red-500 transition-colors">Blog</a></li> */}
                  {/* <li><a href="#" className="hover:text-red-500 transition-colors">Careers</a></li> */}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                  {/* <li><a href="#" className="hover:text-red-500 transition-colors">Documentation</a></li> */}
                  {/* <li><a href="#" className="hover:text-red-500 transition-colors">Learning Paths</a></li> */}
                <li><a href="#" className="hover:text-red-500 transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-6">
                  <a href="https://www.linkedin.com/company/hyver-organization" className="text-gray-400 hover:text-red-500 transition-colors">
                    <Linkedin className="w-6 h-6" />
                </a>
                  <a href="https://x.com/HyverOrg" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                  {/* <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Discord className="w-6 h-6" />
                  </a> */}
              </div>
                {/* <p className="text-gray-400">Stay updated with our newsletter</p> */}
                {/* <div className="mt-4 flex">
                  <input type="email" placeholder="Enter your email" 
                    className="bg-white/5 border border-white/10 rounded-l-full px-4 py-2 text-white w-full focus:outline-none focus:border-violet-500" />
                  <button className="bg-violet-600 text-white px-6 rounded-r-full hover:bg-violet-700 transition-colors neon-box">
                  Subscribe
                </button>
                </div> */}
            </div>
          </div>
          <div className="text-center text-gray-400 pt-12 border-t border-white/10">
              <p className="mb-4">&copy; 2025 Hyver Organization. All rights reserved.</p>
              {/* <div className="flex justify-center space-x-8 text-sm">
              <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-500 transition-colors">Code of Conduct</a>
              </div> */}
            </div>
          </div>
        </footer>
        </div>
      <ScrollToTop />
    </div>
  );
}

export default App;