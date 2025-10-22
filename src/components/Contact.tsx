import { useState } from 'react';
import { Send, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                  <a href="mailto:hello@aksforai.com" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    hello@aksforai.com
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
                  <h3 className="text-xl font-bold text-black mb-2">Live Chat</h3>
                  <p className="text-gray-600">
                    Chat with our team in real-time for immediate assistance
                  </p>
                  <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    Start chatting →
                  </button>
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

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none text-gray-900"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-button py-5 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-orange-500/50 transition-all duration-300 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
