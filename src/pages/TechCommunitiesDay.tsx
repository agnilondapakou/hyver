import React from 'react';
import { Calendar, Users, MapPin, Sparkles, Award, Share2 } from 'lucide-react';
import Layout from '../components/Layout';
import EventCountdown from '../components/EventCountdown';

export default function TechCommunitiesDay() {
  const techCommunitiesDay = new Date('2025-07-19T00:00:00');

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-black/50 to-violet-900/30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-500/10 text-violet-400 border-violet-500/20 backdrop-blur-sm border mb-6">
              3rd Edition - July 19, 2025
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Tech Communities
              <span className="block mt-2 bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">Day 2025</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              Africa's largest gathering of tech communities
            </p>

            {/* Countdown */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-violet-500/20 neon-box-subtle inline-block mb-12">
              <EventCountdown 
                targetDate={techCommunitiesDay} 
                isEnabled={true}
                label="Time until the event"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="group bg-violet-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-violet-700 transition-all duration-300 flex items-center gap-2 neon-box">
                Reserve your spot
              </button>
              <button className="group border border-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-all duration-300">
                View Program
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-black/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-box-subtle">
              <div className="text-4xl font-bold text-violet-400 mb-2">2000+</div>
              <div className="text-gray-400">Participants in 2024</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-box-subtle">
              <div className="text-4xl font-bold text-violet-400 mb-2">50+</div>
              <div className="text-gray-400">Tech Communities</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-box-subtle">
              <div className="text-4xl font-bold text-violet-400 mb-2">30+</div>
              <div className="text-gray-400">International Speakers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Section */}
      <div className="py-20 bg-gradient-to-b from-black/80 to-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">2025 Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                time: "09:00 - 10:30",
                title: "Opening Keynote",
                description: "The future of tech in Africa"
              },
              {
                time: "11:00 - 12:30",
                title: "Panels & Discussions",
                description: "AI & Local Innovation"
              },
              {
                time: "14:00 - 17:00",
                title: "Parallel Workshops",
                description: "Hands-on sessions"
              }
            ].map((session, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 neon-box-subtle">
                <div className="text-violet-400 mb-2">{session.time}</div>
                <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                <p className="text-gray-400">{session.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 