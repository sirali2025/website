import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-orange-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-orange-500/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <img
              src="/ChatGPT Image 22 oct. 2025, 15_51_16.png"
              alt="AKS for AI"
              className="h-32 w-32 object-contain animate-float"
            />
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-tight tracking-tight">
            Multiply Your Sales &<br />
            <span className="gradient-text">Productivity with AI</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Smart workflows, automation, and AI tools designed to save time, increase revenue, and delight your customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button className="group gradient-button px-10 py-5 rounded-full text-white font-semibold text-lg flex items-center gap-3 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="px-10 py-5 rounded-full text-black font-semibold text-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
