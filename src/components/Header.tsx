import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/ChatGPT Image 21 oct. 2025, 01_11_27.png"
              alt="AKS for AI"
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-black">AKS for AI</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('hosting')} className="nav-link">Hosting</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            <button className="gradient-button px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
              Get Started
            </button>
          </nav>

          <button
            className="lg:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left nav-link py-2">Services</button>
            <button onClick={() => scrollToSection('hosting')} className="block w-full text-left nav-link py-2">Hosting</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left nav-link py-2">Contact</button>
            <button className="w-full gradient-button px-8 py-3 rounded-full text-white font-semibold shadow-lg">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
