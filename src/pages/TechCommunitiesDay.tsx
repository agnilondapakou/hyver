import { Calendar, Users, ArrowBigDown, Check, Phone, Mail, MessageCircle } from 'lucide-react';
import EventCountdown from '../components/EventCountdown';
import TCDNavbar from '../components/TCDNavbar';
import TCDFooter from '../components/TCDFooter';
import PageTitle from '../components/PageTitle';
import { useLanguage } from '../contexts/LanguageContext';

export default function TechCommunitiesDay() {
  const { t, language } = useLanguage();
  const techCommunitiesDay = new Date('2025-07-19T00:00:00');

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <PageTitle 
        title={t('title')}
        />
      <TCDNavbar />
      
      {/* Hero Section */}
      <div className="relative pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-black/50 to-violet-900/30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-500/10 text-violet-400 border-violet-500/20 backdrop-blur-sm border mb-6">
              {t('edition')}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Tech Communities
              <span className="block mt-2 bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">Day 2025</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>

            {/* Countdown */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-violet-500/20 neon-box-subtle inline-block mb-12">
              <EventCountdown 
                targetDate={techCommunitiesDay} 
                isEnabled={true}
                label={t('timeUntilEvent')}
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={language === 'fr' ? "../components/tcd-2025-prospectus-fr.pdf" : "../components/tcd-2025-prospectus-en.pdf"} 
                download 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-violet-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-violet-700 transition-all duration-300 flex items-center gap-2 neon-box"
              >
                {t('downloadBrochure')}
                <ArrowBigDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Program Section */}
      <div id="programme" className="py-32 bg-gradient-to-b from-black/80 to-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20 backdrop-blur-sm mb-4">
              {t('program')}
            </span>
            <h2 className="text-4xl font-bold mb-6">{t('programTitle')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t('programSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-violet-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t('conference')}</h3>
                  <p className="text-violet-400">{t('conferenceTime')}</p>
                </div>
              </div>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-500 mt-1.5" />
                  <span>{t('conferenceDesc1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-500 mt-1.5" />
                  <span>{t('conferenceDesc2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-500 mt-1.5" />
                  <span>{t('conferenceDesc3')}</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-violet-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t('communitiesFaire')}</h3>
                  <p className="text-violet-400">{t('communitiesFaireTime')}</p>
                </div>
              </div>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-500 mt-1.5" />
                  <span>{t('communitiesFaireDesc1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-500 mt-1.5" />
                  <span>{t('communitiesFaireDesc2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-500 mt-1.5" />
                  <span>{t('communitiesFaireDesc3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div id="sponsors" className="py-32 bg-gradient-to-b from-black/80 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm mb-4">
              {t('sponsorshipOpportunity')}
            </span>
            <h2 className="text-4xl font-bold mb-6">{t('becomePartner')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t('partnerSubtitle')}
            </p>
          </div>

          {/* Packages Table */}
          <div className="mb-16 overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                <table className="min-w-full divide-y divide-white/10">
                  <thead>
                    <tr>
                      <th scope="col" className="py-4 px-6 text-left text-sm font-semibold text-gray-300">
                        {t('sponsorshipPackage')}
                      </th>
                      <th scope="col" className="py-4 px-4 text-center text-sm font-semibold text-yellow-400">
                        {t('diamond')}
                      </th>
                      <th scope="col" className="py-4 px-4 text-center text-sm font-semibold text-yellow-200">
                        {t('gold')}
                      </th>
                      <th scope="col" className="py-4 px-4 text-center text-sm font-semibold text-gray-300">
                        {t('silver')}
                      </th>
                      <th scope="col" className="py-4 px-4 text-center text-sm font-semibold text-amber-700">
                        {t('bronze')}
                      </th>
                      <th scope="col" className="py-4 px-4 text-center text-sm font-semibold text-blue-400">
                        {t('contributor')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {[
                      { benefit: t('dedicatedBooth'), diamant: true, or: true, argent: true, bronze: true, contributeur: false },
                      { benefit: t('logoMaterials'), diamant: true, or: true, argent: true, bronze: true, contributeur: false },
                      { benefit: t('logoWebsite'), diamant: true, or: true, argent: true, bronze: true, contributeur: true },
                      { benefit: t('logoInvitation'), diamant: true, or: true, argent: false, bronze: false, contributeur: false },
                      { benefit: t('newsletterMention'), diamant: true, or: true, argent: true, bronze: true, contributeur: false },
                      { benefit: t('bannerEmblems'), diamant: true, or: true, argent: true, bronze: false, contributeur: false },
                      { benefit: t('promotionalItems'), diamant: true, or: true, argent: true, bronze: true, contributeur: true },
                      { benefit: t('companyPresentation'), diamant: true, or: true, argent: false, bronze: false, contributeur: false },
                      { benefit: t('logoGoodies'), diamant: true, or: true, argent: true, bronze: true, contributeur: true },
                      { benefit: t('videoSpot'), diamant: true, or: false, argent: false, bronze: false, contributeur: false },
                      { benefit: t('participantsDatabase'), diamant: true, or: false, argent: false, bronze: false, contributeur: false },
                      { benefit: t('packagePrice'), 
                        diamantText: "$3,300", 
                        orText: "$2,500", 
                        argentText: "$1,700", 
                        bronzeText: "$800", 
                        contributeurText: "$300",
                        isPrice: true
                      }
                    ].map((row, idx, arr) => (
                      <tr key={idx} className={`
                        ${idx % 2 === 0 ? 'bg-white/5' : ''}
                        ${idx === arr.length - 1 ? 'bg-white/10 border-t-2 border-white/20 font-bold' : ''}
                      `}>
                        <td className={`py-3 px-6 text-sm ${idx === arr.length - 1 ? 'text-white font-bold text-base' : 'text-gray-300'}`}>
                          {row.benefit}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.isPrice ? (
                            <span className="text-yellow-400 font-bold text-lg">{row.diamantText}</span>
                          ) : (
                            row.diamant && <Check className="w-5 h-5 text-yellow-400 mx-auto" />
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.isPrice ? (
                            <span className="text-yellow-200 font-bold text-lg">{row.orText}</span>
                          ) : (
                            row.or && <Check className="w-5 h-5 text-yellow-200 mx-auto" />
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.isPrice ? (
                            <span className="text-gray-300 font-bold text-lg">{row.argentText}</span>
                          ) : (
                            row.argent && <Check className="w-5 h-5 text-gray-300 mx-auto" />
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.isPrice ? (
                            <span className="text-amber-700 font-bold text-lg">{row.bronzeText}</span>
                          ) : (
                            row.bronze && <Check className="w-5 h-5 text-amber-700 mx-auto" />
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.isPrice ? (
                            <span className="text-blue-400 font-bold text-lg">{row.contributeurText}</span>
                          ) : (
                            row.contributeur && <Check className="w-5 h-5 text-blue-400 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact" className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <a href="tel:+22898776682" className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-blue-500/20 hover:bg-white/10 transition-all duration-300">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('phone')}</h3>
              <p className="text-gray-400">(+228) 70405036 / 98776682</p>
            </a>

            <a href="mailto:techcommunitiesday@gmail.com" className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-blue-500/20 hover:bg-white/10 transition-all duration-300">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('email')}</h3>
              <p className="text-gray-400">techcommunitiesday@gmail.com</p>
            </a>

            <a href="https://wa.me/22898776682" target="_blank" rel="noopener noreferrer" className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-blue-500/20 hover:bg-white/10 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('whatsapp')}</h3>
              <p className="text-gray-400">+228 98776682</p>
            </a>
          </div>
        </div>
      </div>

      {/* Call for Applications Section */}
      {/* <div className="py-32 bg-gradient-to-b from-black/80 to-blue-900/20">
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
      </div> */}

      <TCDFooter />
    </div>
  );
} 