import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export default function Navbar() {
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
    { id: 'projects', label: 'Projects' },
    { id: 'partners', label: 'Partners' },
    { id: 'presence', label: 'Our Presence' },
  ];

  const renderNavLink = (item: { id: string; label: string }) => {
    const linkClass = "relative px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors group";
    
    if (isHomePage) {
      return (
        <ScrollLink
          key={item.id}
          to={item.id}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={linkClass}
        >
          {item.label}
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500/0 group-hover:bg-blue-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          key={item.id}
          to={`/#${item.id}`}
          className={linkClass}
        >
          {item.label}
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500/0 group-hover:bg-blue-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </RouterLink>
      );
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/[0.02]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <RouterLink 
            to="/" 
            className="relative group"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img 
              src="https://res.cloudinary.com/dpofk8xy0/image/upload/v1739128156/hyver/xasndqlpxlvz35d4ll1f.png" 
              alt="Hyver Logo" 
              className="h-7 relative"
            />
          </RouterLink>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map(item => renderNavLink(item))}
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-6 px-4 py-2 text-sm bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 
              rounded-lg border border-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-[72px] bg-black/80 backdrop-blur-xl border-b border-white/[0.02]">
            <div className="px-6 py-5 space-y-4">
              {menuItems.map(item => (
                <div key={item.id} className="block">
                  {renderNavLink(item)}
                </div>
              ))}
              <a
                href="#contact"
                className="block px-4 py-2 text-sm bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 
                rounded-lg border border-blue-500/20 text-center"
              >
                Join Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}