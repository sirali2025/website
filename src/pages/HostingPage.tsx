import { motion } from 'framer-motion';
import { Cloud, Server, Shield, Lock, HardDrive, RefreshCw, Activity } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

const hostingOptions = [
  {
    icon: <Cloud className="w-12 h-12" />,
    title: 'Cloud Hosting',
    subtitle: 'Fast, Scalable, Managed',
    description: 'Enterprise-grade cloud infrastructure optimized for AI workloads with automatic scaling',
    features: [
      'Auto-scaling to handle traffic spikes',
      'Managed PostgreSQL with automatic backups',
      'Redis caching for ultra-fast performance',
      'Global CDN for worldwide reach',
      '99.9% uptime SLA guarantee',
      'Self-managed or fully managed by AKS'
    ],
    price: 'From $200/month'
  },
  {
    icon: <Server className="w-12 h-12" />,
    title: 'Dedicated VPS',
    subtitle: 'Full Control & Performance',
    description: 'Dedicated virtual private servers with complete control over your infrastructure',
    features: [
      'Full root access and customization',
      'Guaranteed CPU and RAM resources',
      'Ideal for complex AI workflows',
      'Custom security configurations',
      'Choose your data center location',
      'Optional managed services available'
    ],
    price: 'From $500/month'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Self-Hosted Enterprise',
    subtitle: 'On-Premise Security',
    description: 'Deploy entirely on your own infrastructure with full data sovereignty',
    features: [
      'Complete data privacy and control',
      'Deploy on your own servers',
      'Air-gapped environments supported',
      'Monitoring and maintenance by AKS',
      'Custom compliance configurations',
      'Dedicated support team'
    ],
    price: 'Custom Pricing'
  }
];

const securityFeatures = [
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Enterprise Security',
    description: 'SSL/TLS encryption, DDoS protection, and security monitoring'
  },
  {
    icon: <HardDrive className="w-8 h-8" />,
    title: 'Automated Backups',
    description: 'Daily automated backups with point-in-time recovery'
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: 'Zero-Downtime Updates',
    description: 'Rolling updates with no service interruption'
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: '24/7 Monitoring',
    description: 'Real-time performance monitoring and instant alerts'
  }
];

const maintenancePlans = [
  {
    name: 'Basic Maintenance',
    price: '$150',
    period: '/month',
    features: [
      'Monthly security updates',
      'Performance monitoring',
      'Email support',
      'Standard backup retention (7 days)'
    ]
  },
  {
    name: 'Premium Maintenance',
    price: '$400',
    period: '/month',
    features: [
      'Weekly security updates',
      'Real-time monitoring & alerts',
      'Priority support',
      'Extended backup retention (30 days)',
      'Performance optimization',
      'Quarterly security audits'
    ]
  },
  {
    name: 'Enterprise Maintenance',
    price: 'Custom',
    period: '',
    features: [
      'Daily security updates',
      '24/7 dedicated monitoring',
      'White-glove support',
      'Long-term backup retention (90+ days)',
      'Continuous optimization',
      'Monthly security audits',
      'Dedicated DevOps engineer'
    ]
  }
];

export default function HostingPage() {
  return (
    <motion.div {...pageTransition}>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-6">
              Enterprise <span className="gradient-text">Hosting</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure, scalable hosting infrastructure designed for AI automation workloads
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {hostingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-orange-400 group"
              >
                <div className="text-orange-500 mb-6 transform group-hover:scale-110 transition-all duration-300">
                  {option.icon}
                </div>

                <h3 className="text-3xl font-bold text-black mb-2 group-hover:gradient-text transition-all duration-300">
                  {option.title}
                </h3>

                <p className="text-orange-600 font-semibold mb-4">
                  {option.subtitle}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {option.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-orange-500 mt-1 font-bold">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t-2 border-gray-200 pt-6">
                  <p className="text-2xl font-bold gradient-text mb-4">{option.price}</p>
                  <button className="w-full py-3 px-6 bg-black text-white font-semibold rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
              Security & <span className="gradient-text">Reliability</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="text-orange-500 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
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
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
              Maintenance <span className="gradient-text">Plans</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {maintenancePlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-orange-500 mt-1">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-12 text-center border-2 border-orange-200"
          >
            <div className="relative inline-block mb-8">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-2xl opacity-30"
              />
              <Server className="w-20 h-20 text-orange-500 relative z-10" />
            </div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Need Custom Hosting?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              We can design a hosting solution tailored to your specific requirements, compliance needs, and budget.
            </p>
            <button className="gradient-button px-10 py-4 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-orange-500/50 transition-all duration-300">
              Discuss Your Needs
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
