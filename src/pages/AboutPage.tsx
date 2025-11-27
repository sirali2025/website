import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, Rocket, Shield } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

const benefits = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Results-Focused Partnership',
    description: 'We don\'t just build tools—we partner with you to achieve measurable business outcomes. Your success is our success.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Cutting-Edge AI Expertise',
    description: 'Stay ahead with the latest AI technologies. We continuously research and implement the most effective automation solutions.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Dedicated Support Team',
    description: 'Experience white-glove service with a dedicated team that understands your business inside and out.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'ROI Guarantee',
    description: 'We stand behind our work. If we don\'t meet your ROI targets, we keep working until we do—or you get refunded.'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Rapid Implementation',
    description: 'See results fast. Our streamlined processes mean you start seeing efficiency gains and revenue growth within weeks.'
  }
];

export default function AboutPage() {
  return (
    <motion.div {...pageTransition}>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white via-orange-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-6">
              About <span className="gradient-text">AKS for AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your strategic partner in AI-powered business transformation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  At AKS for AI, we believe that every business deserves access to cutting-edge AI automation—not just the tech giants. Our mission is to democratize AI-powered efficiency, helping businesses of all sizes multiply their productivity, increase revenue, and delight their customers.
                </p>
                <p>
                  We're not just a service provider—we're your strategic partner. We invest in understanding your unique challenges, designing custom solutions that deliver measurable results, and staying by your side until you achieve your goals.
                </p>
                <p>
                  Founded on the principle that AI should work for humans, not replace them, we focus on augmenting your team's capabilities, freeing them from repetitive tasks so they can focus on what matters most: innovation, creativity, and building meaningful customer relationships.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-12 shadow-2xl">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">Built on Trust</h3>
                      <p className="text-orange-100">
                        Every partnership begins with trust. We're transparent about our processes, results, and pricing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">Innovation First</h3>
                      <p className="text-orange-100">
                        We stay at the forefront of AI technology, ensuring you always have access to the latest innovations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-orange-400/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
              Why Work <span className="gradient-text">With Us</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
                >
                  <div className="text-orange-500 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:gradient-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-12 text-center shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have multiplied their efficiency and revenue with AI automation.
            </p>
            <button className="gradient-button px-10 py-4 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-orange-500/50 transition-all duration-300">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
