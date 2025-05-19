import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full top-4 z-50 px-4 transition-all duration-300 ${scrolled ? 'top-2' : 'top-4'}`}>
      <div className={`max-w-7xl mx-auto rounded-full navbar-glow backdrop-blur-md border border-white/10 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex items-center justify-between px-6">
          <Link to="/" className="text-2xl font-bold text-white">Payvance</Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-white' : 'text-paytech-gray hover:text-white'}`}
            >
              Home
            </Link>
            <Link
              to="/features"
              className={`text-sm font-medium transition-colors ${location.pathname === '/features' ? 'text-white' : 'text-paytech-gray hover:text-white'}`}
            >
              Features
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-white' : 'text-paytech-gray hover:text-white'}`}
            >
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/auth">
              <Button className="bg-paytech-dark/80 border border-paytech-purple/50 hover:bg-paytech-purple/20 text-white transition-all duration-300 shadow-lg hover:shadow-paytech-purple/20 px-6 py-2 rounded-full font-semibold group">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-paytech-purple to-paytech-accent group-hover:from-white group-hover:to-white transition-all duration-300">Get Started</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-6 border-t border-white/10 mt-2 bg-paytech-dark/95 backdrop-blur-md rounded-b-2xl">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-sm font-medium py-2 px-4 rounded-lg transition-colors ${location.pathname === '/' ? 'bg-paytech-purple/20 text-white' : 'text-paytech-gray hover:bg-paytech-purple/10 hover:text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className={`text-sm font-medium py-2 px-4 rounded-lg transition-colors ${location.pathname === '/features' ? 'bg-paytech-purple/20 text-white' : 'text-paytech-gray hover:bg-paytech-purple/10 hover:text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium py-2 px-4 rounded-lg transition-colors ${location.pathname === '/about' ? 'bg-paytech-purple/20 text-white' : 'text-paytech-gray hover:bg-paytech-purple/10 hover:text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-2">
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-paytech-dark/80 border border-paytech-purple/50 hover:bg-paytech-purple/20 text-white transition-all duration-300 shadow-lg hover:shadow-paytech-purple/20 py-2 rounded-full font-semibold group">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-paytech-purple to-paytech-accent group-hover:from-white group-hover:to-white transition-all duration-300">Get Started</span>
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
