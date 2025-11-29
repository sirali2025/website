import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isLogoRevealed, setIsLogoRevealed] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const phrases = [
    { text: 'Discover Innovation', icon: Sparkles },
    { text: 'Smarter. Faster. AI-Powered.', icon: Zap },
    { text: 'Multiply Your Success', icon: TrendingUp },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLogoRevealed(true), 200);

    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-orange-400/20 rounded-full blur-3xl animate-float"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-orange-500/30 rounded-full blur-3xl animate-float-delayed"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="cinematic-grid absolute inset-0 opacity-[0.02]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="space-y-8">
          <div className="flex justify-center mb-8">
            <div className={`logo-reveal ${isLogoRevealed ? 'revealed' : ''}`}>
              <img
                src="/ChatGPT_Image_22_oct._2025__15_51_16-removebg-preview.png"
                alt="AKS for AI"
                className="h-32 w-32 object-contain"
              />
            </div>
          </div>

          <div className="phrases-container h-16 mb-4">
            {phrases.map((phrase, index) => {
              const Icon = phrase.icon;
              return (
                <div
                  key={index}
                  className={`phrase-item ${currentPhrase === index ? 'active' : ''}`}
                >
                  <Icon className="w-6 h-6" />
                  <span>{phrase.text}</span>
                </div>
              );
            })}
          </div>

          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-tight tracking-tight animate-slide-in-up"
            style={{ transform: `translateY(${parallaxOffset * -0.1}px)` }}
          >
            Multiply Your Sales &<br />
            <span className="gradient-text animate-gradient">Productivity with AI</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-slide-in-up-delayed"
            style={{ transform: `translateY(${parallaxOffset * -0.15}px)` }}
          >
            Smart workflows, automation, and AI tools designed to save time, increase revenue, and delight your customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-slide-in-up-delayed-2">
            <button className="group cta-button gradient-button px-10 py-5 rounded-full text-white font-semibold text-lg flex items-center gap-3 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="floating-elements">
          <div className="floating-card floating-card-1 animate-slide-in-left">
            <Sparkles className="w-8 h-8 text-orange-500" />
            <span className="text-sm font-semibold text-gray-800">AI-Powered</span>
          </div>
          <div className="floating-card floating-card-2 animate-slide-in-right">
            <Zap className="w-8 h-8 text-orange-500" />
            <span className="text-sm font-semibold text-gray-800">Lightning Fast</span>
          </div>
          <div className="floating-card floating-card-3 animate-slide-in-left-delayed">
            <TrendingUp className="w-8 h-8 text-orange-500" />
            <span className="text-sm font-semibold text-gray-800">Scale Growth</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-smooth">
        <div className="scroll-indicator">
          <div className="scroll-indicator-dot"></div>
        </div>
      </div>

      <div className="section-transition-gradient"></div>
    </section>
  );
}
