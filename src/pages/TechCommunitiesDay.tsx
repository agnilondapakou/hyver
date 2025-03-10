import React from 'react';
import { Calendar, Users, MapPin, Sparkles, Award, Share2, Building2, FileCheck } from 'lucide-react';
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

      {/* Call for Applications Section */}
      <div className="py-32 bg-gradient-to-b from-black/80 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm mb-4">
              Open Call
            </span>
            <h2 className="text-4xl font-bold mb-6">Host TCD 2026 in Your Country</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We're looking for the next tech community to host Tech Communities Day 2026. 
              Submit your application and make history with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Requirements */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Requirements</h3>
              {[
                {
                  icon: Building2,
                  title: "Established Community",
                  description: "Active tech community with at least 2 years of experience"
                },
                {
                  icon: Users,
                  title: "Local Network",
                  description: "Strong connections with local tech ecosystem"
                },
                {
                  icon: MapPin,
                  title: "Venue Capacity",
                  description: "Ability to host 2000+ attendees"
                },
                {
                  icon: FileCheck,
                  title: "Legal Requirements",
                  description: "Registered organization with event organizing experience"
                }
              ].map((req, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <req.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{req.title}</h4>
                    <p className="text-gray-400">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Application Card */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-blue-500/20 neon-box-blue">
              <h3 className="text-2xl font-bold mb-6">Submit Your Application</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Community Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your tech community name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your country"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Why should your community host TCD 2026?
                  </label>
                  <textarea
                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 h-32"
                    placeholder="Tell us about your vision for TCD 2026..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300"
                >
                  Submit Application
                </button>
              </form>
              <p className="text-sm text-gray-400 mt-4 text-center">
                Applications close on December 31, 2025
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold mb-12 text-center">Selection Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  date: "Dec 31, 2025",
                  title: "Applications Close",
                  description: "Last day to submit your application"
                },
                {
                  date: "Jan 2026",
                  title: "Review Phase",
                  description: "Applications review and shortlisting"
                },
                {
                  date: "Feb 2026",
                  title: "Interviews",
                  description: "Virtual meetings with shortlisted communities"
                },
                {
                  date: "Mar 1, 2026",
                  title: "Final Selection",
                  description: "Announcement of TCD 2026 host"
                }
              ].map((phase, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-blue-400 mb-2">{phase.date}</div>
                  <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                  <p className="text-gray-400">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 