import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch and let's discuss your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="contact-feature-card group">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-orange-100 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Email Us</h3>
                  <p className="text-gray-600">
                    Drop us a line and we'll get back to you within 24 hours
                  </p>
                  <a href="mailto:aks.ai.strategic.partner@gmail.com" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    aks.ai.strategic.partner@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-feature-card group">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-orange-100 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">WhatsApp</h3>
                  <p className="text-gray-600">
                    Message us directly for quick questions
                  </p>
                  <a href="https://wa.me/212781390577" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    Start WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-feature-card group">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-orange-100 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
                  <p className="text-gray-600">
                    Speak directly with our team
                  </p>
                  <a href="tel:+212781390577" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    +212 781-390577
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose AKS for AI?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-200">✓</span>
                  <span>Tailored AI solutions for your unique business needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-200">✓</span>
                  <span>Ongoing support and strategic partnership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-200">✓</span>
                  <span>Proven track record of increasing ROI</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
