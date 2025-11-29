import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-white/90 backdrop-blur-sm shadow-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <img
              src="/ChatGPT Image 22 oct. 2025, 15_51_16.png"
              alt="AKS for AI"
              className="h-12 w-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold text-black group-hover:gradient-text transition-all duration-300">
              AKS for AI
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`nav-link ${isActive('/services') ? 'active' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link
              to="/hosting"
              className={`nav-link ${isActive('/hosting') ? 'active' : ''}`}
            >
              Hosting
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="gradient-button px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            >
              Get Started
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-black hover:bg-orange-50 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 space-y-4 animate-fade-in">
            <Link to="/" className="block w-full text-left nav-link py-2">Home</Link>
            <Link to="/services" className="block w-full text-left nav-link py-2">Services</Link>
            <Link to="/pricing" className="block w-full text-left nav-link py-2">Pricing</Link>
            <Link to="/about" className="block w-full text-left nav-link py-2">About</Link>
            <Link to="/hosting" className="block w-full text-left nav-link py-2">Hosting</Link>
            <Link to="/contact" className="block w-full text-left nav-link py-2">Contact</Link>
            <Link to="/contact" className="w-full gradient-button px-8 py-3 rounded-full text-white font-semibold shadow-lg block text-center">
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
