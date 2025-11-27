import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, MessageSquare, Calendar, Phone } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [isFocused, setIsFocused] = useState<string | null>(null);

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
    <motion.div {...pageTransition}>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white via-orange-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-6">
              Let's Build <span className="gradient-text">Together</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with AI? Get in touch and let's discuss your vision.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="contact-feature-card group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-orange-100 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-2">
                      Drop us a line and we'll get back to you within 24 hours
                    </p>
                    <a href="mailto:hello@aksforai.com" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                      hello@aksforai.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="contact-feature-card group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-orange-100 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">
                      Message us directly for quick questions
                    </p>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                      Start WhatsApp Chat
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="contact-feature-card group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-orange-100 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Book a Meeting</h3>
                    <p className="text-gray-600 mb-2">
                      Schedule a consultation call at your convenience
                    </p>
                    <a href="#" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                      View Calendar
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="contact-feature-card group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-orange-100 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-2">
                      Speak directly with our team
                    </p>
                    <a href="tel:+1234567890" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                    Your Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setIsFocused('name')}
                    onBlur={() => setIsFocused(null)}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                    placeholder="John Doe"
                    whileFocus={{ scale: 1.01 }}
                    animate={{
                      boxShadow: isFocused === 'name' ? '0 0 0 3px rgba(255, 106, 0, 0.1)' : '0 0 0 0px rgba(255, 106, 0, 0)'
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                    Email Address *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setIsFocused('email')}
                    onBlur={() => setIsFocused(null)}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                    placeholder="john@company.com"
                    whileFocus={{ scale: 1.01 }}
                    animate={{
                      boxShadow: isFocused === 'email' ? '0 0 0 3px rgba(255, 106, 0, 0.1)' : '0 0 0 0px rgba(255, 106, 0, 0)'
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                    Company Name
                  </label>
                  <motion.input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setIsFocused('company')}
                    onBlur={() => setIsFocused(null)}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                    placeholder="Your Company"
                    whileFocus={{ scale: 1.01 }}
                    animate={{
                      boxShadow: isFocused === 'company' ? '0 0 0 3px rgba(255, 106, 0, 0.1)' : '0 0 0 0px rgba(255, 106, 0, 0)'
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                    Phone Number
                  </label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setIsFocused('phone')}
                    onBlur={() => setIsFocused(null)}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                    placeholder="+1 (234) 567-890"
                    whileFocus={{ scale: 1.01 }}
                    animate={{
                      boxShadow: isFocused === 'phone' ? '0 0 0 3px rgba(255, 106, 0, 0.1)' : '0 0 0 0px rgba(255, 106, 0, 0)'
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    How can we help? *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setIsFocused('message')}
                    onBlur={() => setIsFocused(null)}
                    required
                    rows={5}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none text-gray-900"
                    placeholder="Tell us about your project..."
                    whileFocus={{ scale: 1.01 }}
                    animate={{
                      boxShadow: isFocused === 'message' ? '0 0 0 3px rgba(255, 106, 0, 0.1)' : '0 0 0 0px rgba(255, 106, 0, 0)'
                    }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full gradient-button py-5 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-orange-500/50 transition-all duration-300 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-12 text-center border-2 border-orange-200"
          >
            <h2 className="text-3xl font-bold text-black mb-4">Response Time Guarantee</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly or use our WhatsApp channel for immediate assistance.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
