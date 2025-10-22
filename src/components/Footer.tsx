import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/ChatGPT Image 21 oct. 2025, 01_11_27.png"
                alt="AKS for AI"
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <span className="text-2xl font-bold">AKS for AI</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Transforming businesses through intelligent automation and AI-powered solutions. Your strategic partner for sustainable growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="social-icon">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:hello@aksforai.com" className="social-icon">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Sales & Marketing</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Customer Support</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Content Creation</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Business Insights</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#hosting" className="hover:text-orange-500 transition-colors">Hosting Options</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 AKS for AI. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with AI-powered excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
