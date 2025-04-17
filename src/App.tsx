// import React, { useState } from 'react';
import { Users, Laptop, Calendar, ArrowRight, Twitter, Linkedin, MapPin, ArrowBigDown } from 'lucide-react';
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
                <a href="../public/TCD-2025-prospectus.pdf" download target="_blank" rel="noopener noreferrer">
                  <button className="px-8 py-4 bg-violet-600 border border-white/10 rounded-full font-semibold hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                    Download our next event prospectus
                    <ArrowBigDown className="w-5 h-5" />
                  </button>
                </a>
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

        {/* What We Do Section */}
        <div className="py-32 relative overflow-hidden" id="projects">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.02]" />
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                What We Do
              </h2>
              <p className="text-gray-400/90 max-w-2xl mx-auto text-lg">
                Building and supporting tech communities across Africa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Tech Communities Day",
                  description: "The largest gathering of tech communities in Africa",
                  path: "#",
                  logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739117395/hyver/ywoot4qudcn1dbbd5i9y.png"
                },
                {
                  title: "Tech Communities Clubs",
                  description: "Excellence program for tech-passionate students",
                  path: "http://tcc.hyver.org/",
                  logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739116626/hyver/sxdttxb9urni5zjl49gj.png"
                },
                {
                  title: "Open Source For All",
                  description: "Promoting open source in Africa",
                  path: "#",
                  logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739117673/hyver/knczly3kmed9hp9oaux2.svg"
                }
              ].map((project, index) => (
                <RouterLink
                  key={index}
                  to={project.path}
                  target="_blank"
                  className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 
                  hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 rounded-2xl 
                  blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-50" />
                  
                  <div className="relative">
                    <div className="flex justify-center">
                      <img 
                        src={project.logo} 
                        alt={project.title} 
                        className="w-32 h-32 md:w-40 md:h-40 object-contain opacity-80 group-hover:opacity-100 
                        transition-all duration-300 transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white/90 text-center">{project.title}</h3>
                    <p className="text-gray-400/80 mb-8 text-center">{project.description}</p>
                    <div className="flex items-center justify-center text-blue-300/80 group-hover:text-blue-300 transition-colors">
                      Learn more 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

      {/* Call for Applications Section */}
      {/* <div className="py-32 bg-gradient-to-b from-black/80 to-blue-900/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-500/5 text-blue-300 border border-blue-500/10 backdrop-blur-sm mb-4">
              Applications Open
            </span>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Host TCD 2026
            </h2>
            <p className="text-gray-400/90 max-w-2xl mx-auto text-lg">
              Shape the future of tech communities in Africa by hosting the next edition
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                Why Host TCD?
              </h3>
              {[
                {
                  title: "Global Recognition",
                  description: "Position your community at the forefront of Africa's tech ecosystem"
                },
                {
                  title: "Network Expansion",
                  description: "Connect with influential tech leaders and communities across the continent"
                },
                {
                  title: "Economic Impact",
                  description: "Drive technological innovation and growth in your local ecosystem"
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 
                  transition-all duration-300 hover:translate-x-1"
                >
                  <h4 className="text-lg font-semibold mb-2 text-white/90">{benefit.title}</h4>
                  <p className="text-gray-400/80">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl blur-xl 
              group-hover:blur-2xl transition-all duration-500 opacity-50" />
              <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-white/90">Ready to Apply?</h3>
                <p className="text-gray-400/90 mb-8">
                  Submit your application to host Tech Communities Day 2026
                </p>
                <a 
                  href="https://forms.gle/your-form-url" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white 
                  rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 
                  transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25"
                >
                  Apply Now
                </a>
                <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                  <div className="p-4 rounded-xl bg-black/20 backdrop-blur-sm">
                    <div className="text-blue-300/90 font-medium mb-1">Deadline</div>
                    <div className="text-white/80">Dec 31, 2025</div>
                  </div>
                  <div className="p-4 rounded-xl bg-black/20 backdrop-blur-sm">
                    <div className="text-blue-300/90 font-medium mb-1">Announcement</div>
                    <div className="text-white/80">Mar 1, 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-10 text-center bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              Key Requirements
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  requirement: "Active Community",
                  detail: "2+ Years"
                },
                {
                  requirement: "Venue Capacity",
                  detail: "2000+ People"
                },
                {
                  requirement: "Tech Network",
                  detail: "Local Ecosystem"
                },
                {
                  requirement: "Experience",
                  detail: "Event Organization"
                }
              ].map((req, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/5 
                  hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="text-white/80 font-medium mb-1">{req.requirement}</div>
                  <div className="text-blue-300/80 text-sm">{req.detail}</div>
            </div>
              ))}
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

      {/* Partners Section */}
      <div className="py-32 relative overflow-hidden" id="partners">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-red-500/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-500/5 text-blue-300 border border-blue-500/10 backdrop-blur-sm mb-4">
              Our Partners
            </span>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              They Believed in Us
            </h2>
            <p className="text-gray-400/90 max-w-2xl mx-auto text-lg">
              Working together to build Africa's tech ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "République Togolaise",
                logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739123720/hyver/bxlbl3mj9ze7tju1tcl5.png",
                className: "h-16 md:h-20"
              },
              {
                name: "GIZ",
                logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739123729/hyver/djme4rlmeq9afqjl2y9k.png",
                className: "h-12 md:h-16"
              },
              {
                name: "Kondjigbalẽ",
                logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739114963/hyver/fbq9i5ihx0ky21owh8dh.png",
                className: "h-14 md:h-16"
              },
              {
                name: "Killigiants",
                logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739122839/hyver/xfwnugxyopeu00q9ngwn.png",
                className: "h-14 md:h-16"
              },
              {
                name: "Lomé Business School",
                logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124078/hyver/zgafm8v60bodfuozxydm.png",
                className: "h-16 md:h-20"
              },
              {
                name: "Agence Togo Digital",
                logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124280/hyver/hmb9oxcfcjcjxpp73zy6.png",
                className: "h-12 md:h-16"
              },
              {
                name: "Google DSC LBS",
                logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124382/hyver/ixk7qdmqjklldviqthzb.png",
                className: "h-14 md:h-16"
              },
              {
                name: "Google DSC UL",
                logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124290/hyver/wajh0lbw5zxolht8g6bn.png",
                className: "h-14 md:h-16"
              },
              {
                name: "Google DSC IAI",
                logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124289/hyver/wn2adl5xzp6a40kfjxjw.png",
                className: "h-14 md:h-16"
              },
              {
                name: "Google DSC Defitech",
                logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124289/hyver/lpvjaes7l3lrv3wm85cg.png",
                className: "h-14 md:h-16"
              }
            ].map((partner, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 
                hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-red-500/5 rounded-2xl 
                blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-50" />
                
                <div className="relative flex items-center justify-center min-h-[80px]">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/100 transition-all duration-300 rounded-xl" />
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className={`relative z-10 w-auto object-contain opacity-75 
                    group-hover:opacity-100 transition-all duration-300
                    ${partner.className}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Partner CTA */}
          {/* <div className="mt-20 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.02] border border-white/5 
              hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 text-gray-400/90 hover:text-white/90"
            >
              Become a Partner
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div> */}
        </div>
      </div>

      {/* Countries Section */}
      <div className="py-32 relative overflow-hidden" id="presence">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-red-500/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-500/5 text-blue-300 border border-blue-500/10 backdrop-blur-sm mb-4">
              Our Presence
            </span>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Active Countries
            </h2>
            <p className="text-gray-400/90 max-w-2xl mx-auto text-lg">
              Building tech communities across Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Benin",
                flag: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1741647692/hyver/ukumm0cwh6vxssk1jll1.png",
                // communities: 8,
                members: "Emerging tech ecosystem"
              },
              {
                name: "Ivory Coast",
                flag: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1741647694/hyver/ijlhwayfqsufofiis9oy.png",
                // communities: 6,
                members: "Major West African tech hub"
              },
              {
                name: "Niger",
                flag: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1741647695/hyver/cvcdjhphchvt4gv1safx.png",
                // communities: 4,
                members: "Growing tech community"
              },
              {
                name: "Togo",
                flag: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1741647696/hyver/fzth5qkrz9q5ja5xxe7m.png",
                // communities: 12,
                members: "Dynamic and growing community"
              }
            ].map((country, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 
                hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-red-500/5 rounded-2xl 
                blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-50" />
                
                <div className="relative flex flex-col items-center text-center">
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`}
                    className="w-20 h-20 object-cover rounded-full mb-4 border-2 border-white/10"
                  />
                  <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                  <div className="text-gray-400">
                    {/* {/* <p className="mb-1">{country.communities} Communities</p> */}
                    <p>{country.members} </p> 
            </div>
            </div>
            </div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Projects Section */}
      {/* <div className="py-32 relative overflow-hidden border-t border-white/[0.02]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-red-500/[0.02]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-500/5 text-blue-300 border border-blue-500/10 backdrop-blur-sm mb-4">
              Coming Soon
            </span>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Future Projects
            </h2>
            <p className="text-gray-400/90 max-w-2xl mx-auto text-lg">
              Exciting initiatives on the horizon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tech Communities Academy",
                description: "A comprehensive learning platform for tech enthusiasts across Africa",
                status: "Coming Q3 2024",
                icon: "��"
              },
              {
                name: "African Tech Summit",
                description: "The largest gathering of tech leaders and innovators in Africa",
                status: "Coming Q4 2024",
                icon: "🌍"
              },
              {
                name: "Innovation Hub Network",
                description: "Connected spaces for collaboration and innovation across the continent",
                status: "Coming 2025",
                icon: "🏢"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 
                hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-red-500/5 rounded-2xl 
                blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-50" />
                
                <div className="relative">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                  <p className="text-gray-400/90 mb-6 min-h-[60px]">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400/90 text-sm">{project.status}</span>
                    <div className="h-1.5 w-24 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500/20 rounded-full w-1/3 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-400/90 mb-6">
              Stay updated with our upcoming projects
            </p>
            <div className="flex gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-6 py-3 bg-white/[0.02] border border-white/5 rounded-xl focus:outline-none focus:border-blue-500/50 w-full max-w-sm"
              />
              <button className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-xl hover:bg-blue-500/20 transition-all duration-300">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div> */}

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