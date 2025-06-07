// import React, { useState } from 'react';
import { Users, Laptop, Calendar, ArrowRight, Twitter, Linkedin, MapPin } from 'lucide-react';
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

      {/* News Section */}
      <div className="py-32 relative overflow-hidden" id="news">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-red-500/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-500/5 text-blue-300 border border-blue-500/10 backdrop-blur-sm mb-4">
              Latest News
            </span>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-gray-400/90 max-w-2xl mx-auto text-lg">
              Latest updates and announcements from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cohort 2 of Tech Communities Clubs",
                date: "Coming Soon",
                description: "We're thrilled to announce that registrations for Cohort 2 of TCC LEADS will be opening very soon!",
                image: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1749257798/hyver/l7hujub8ghyjwivktcku.png",
                path: "https://www.linkedin.com/posts/tcclubs_tcc-hyver-activity-7336461589987975168-msme?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-4cngBZFmygb8wM5rcsTKtSn3KBrwWCc4"
              },
              {
                title: "Announcing the 2025 TCD's venue",
                date: "July 19, 2025",
                description: 'Tech Communities Day 2025 will officially take place at the "French Institute of Togo"',
                image: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1749257796/hyver/kk4rmzx3axslbjosj67i.png",
                path: "https://www.linkedin.com/posts/tech-comm-day_free-techcommunitiesday2025-togotech-activity-7336710486962413568-I831?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-4cngBZFmygb8wM5rcsTKtSn3KBrwWCc4"
              },
              {
                title: "Call for Makers",
                date: "June 20, 2025",
                description: "We're building the MVP of Afro Builders, the largest Open Source database of tech solutions developed by Africans - and we need YOU to help make it happen! 💡",
                image: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1749257768/hyver/lbdayqngcclowby3cxfl.png",
                path: "https://www.linkedin.com/posts/hyver-organization_afrobuilders-opensource-callformakers-activity-7336677460379414528-lUlb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-4cngBZFmygb8wM5rcsTKtSn3KBrwWCc4"
              }
            ].map((news, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 
                hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-red-500/5 rounded-2xl 
                blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-50" />
                
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-blue-400/90 text-sm mb-2">{news.date}</div>
                    <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                    <p className="text-gray-400/90 mb-4">{news.description}</p>
                    <a 
                      href={news.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-300/80 group-hover:text-blue-300 transition-colors"
                    >
                      Read more 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Tech Communities Day",
                  description: "The largest gathering of tech communities in Africa",
                  path: "/tech-communities-day",
                  logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1749257356/hyver/aqdzoo0zr6nvwtffau2f.png"
                },
                {
                  title: "Tech Communities Clubs",
                  description: "Excellence program for tech-passionate students",
                  path: "http://tcc.hyver.org/",
                  logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1749257356/hyver/aqdzoo0zr6nvwtffau2f.png"
                },
                {
                  title: "Afro Builders",
                  description: "Afro Builders, made by Africa, for the world.",
                  path: "https://afrobuilders.hyver.org/",
                  logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1739128156/hyver/xasndqlpxlvz35d4ll1f.png"
                },
                {
                  title: "Open Source For All",
                  description: "Experience Open Source. Build Your Future.",
                  path: "https://osfa.hyver.org/",
                  logo: "https://res.cloudinary.com/dpofk8xy0/image/upload/v1749256802/hyver/hydfyuctc35tiudbdhaa.png"
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
                        className="w-32 h-32 md:w-20 md:h-40 object-contain opacity-80 group-hover:opacity-100 
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
        </div>
      </div>

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