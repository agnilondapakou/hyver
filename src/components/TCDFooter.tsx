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
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
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
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Previous Editions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@tcd2025.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contact@tcd2025.com
                </a>
              </li>
              <li>
                <a href="tel:+22500000000" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +225 00 00 00 00
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
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Legal Notice
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 