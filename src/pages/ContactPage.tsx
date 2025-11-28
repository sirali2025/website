import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

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
                    <a href="mailto:aks.ai.strategic.partner@gmail.com" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                      aks.ai.strategic.partner@gmail.com
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
                    <a href="https://wa.me/212781390577" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
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
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-2">
                      Speak directly with our team
                    </p>
                    <a href="tel:+212781390577" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                      +212 781-390577
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white"
            >
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
