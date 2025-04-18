import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function TCDFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text mb-4">
              Tech Communities Day
            </h3>
            <p className="text-gray-400 mb-4">
              Africa's largest gathering of tech communities, celebrating innovation and collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/tech-comm-day" target='_blank' className="text-gray-400 hover:text-violet-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#programme" className="text-gray-400 hover:text-white transition-colors">
                  Program
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-gray-400 hover:text-white transition-colors">
                  Become a Sponsor
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:techcommunitiesday@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  techcommunitiesday@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+22898776682" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (+228) 70405036 / 98776682
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tech Communities Day. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 