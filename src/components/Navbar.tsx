import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface NavbarProps {
  onThemeToggle: () => void;
  currentTheme: string;
}

export default function Navbar({}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'events', label: 'Events' },
    { id: 'projects', label: 'Projects' },
    { id: 'partners', label: 'Partners' },
    { id: 'presence', label: 'Our Presence' },
  ];

  const renderNavLink = (item: { id: string; label: string }) => {
    if (isHomePage) {
      return (
        <ScrollLink
          key={item.id}
          to={item.id}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-gray-300 hover:text-white cursor-pointer transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          key={item.id}
          to={`/#${item.id}`}
          className="text-gray-300 hover:text-white cursor-pointer transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
        </RouterLink>
      );
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 nav-blur' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <RouterLink to="/">
              <img src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739128156/hyver/xasndqlpxlvz35d4ll1f.png" alt="Hyver Logo" className="h-8" />
            </RouterLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => renderNavLink(item))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-violet-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden slide-down bg-black/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map(item => (
                <div key={item.id} className="block px-3 py-2">
                  {renderNavLink(item)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}