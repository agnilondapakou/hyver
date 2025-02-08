import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 nav-blur' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="../../public/hyver-logo.png" alt="Hyver Logo" className="h-8" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">About</a>
            <a href="#events" className="text-gray-300 hover:text-red-500 transition-colors">Events</a>
            <a href="#community" className="text-gray-300 hover:text-red-500 transition-colors">Community</a>
            <a href="#resources" className="text-gray-300 hover:text-red-500 transition-colors">Resources</a>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors"
              >
                About
              </a>
              <a
                href="#events"
                className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors"
              >
                Events
              </a>
              <a
                href="#community"
                className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors"
              >
                Community
              </a>
              <a
                href="#resources"
                className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors"
              >
                Resources
              </a>
              <button className="w-full bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors mt-4">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}