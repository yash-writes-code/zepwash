import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(currentScrollY / scrollHeight, 1);
      
      setScrollProgress(progress);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down - hide with smooth animation
        setShowNavbar(false);
      } else {
        // scrolling up - show with smooth animation
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="px-6 md:px-8 pt-3 sticky top-0 z-50">
      <nav
        className={`
          bg-white backdrop-blur-md 
          rounded-full 
          shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
          transition-all duration-500 ease-in-out
          ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}
        `}
      >
        <div className="container max-w-7xl mx-auto px-6 md:px-8 py-3">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="flex items-center group"
            >
              <span className="text-2xl font-bold text-zep-blue-500 transition-transform duration-300 group-hover:scale-105">
                Zep<span className="text-zep-green-500">Wash</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="space-x-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/support">Support</NavLink>
                <NavLink to="/about">About</NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="text-gray-700 hover:text-zep-blue-500 transition-colors p-2 rounded-full hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-zep-blue-500 to-zep-green-500 rounded-full transition-all duration-300 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
        <div className="md:hidden bg-white backdrop-blur-md rounded-3xl shadow-lg absolute left-4 right-4 top-[calc(100%+0.5rem)] p-4 z-50 transition-all duration-300 ease-in-out opacity-100">

            <div className="flex flex-col space-y-5">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/services" onClick={toggleMenu}>Services</MobileNavLink>
              <MobileNavLink to="/support" onClick={toggleMenu}>Support</MobileNavLink>
              <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

// Reusable NavLink component with animation
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="relative text-gray-800 font-medium hover:text-zep-blue-600 transition-colors duration-300 py-2 px-1 group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zep-blue-400 to-zep-green-400 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

// Mobile NavLink with different animation
const MobileNavLink = ({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-gray-800 font-medium hover:text-zep-blue-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gray-50 flex items-center group"
    onClick={onClick}
  >
    <span className="w-1.5 h-0 bg-gradient-to-b from-zep-blue-500 to-zep-green-500 rounded-full mr-3 group-hover:h-full transition-all duration-300"></span>
    {children}
  </Link>
);

export default Navbar;
