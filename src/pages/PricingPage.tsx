import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,000',
    period: '/month',
    description: 'Perfect for small businesses getting started with AI automation',
    features: [
      'Up to 5 active workflows',
      'Email support',
      'Basic analytics dashboard',
      'Monthly strategy review',
      'Standard response time (24-48hrs)'
    ],
    popular: false
  },
  {
    name: 'Growth',
    price: '$5,000',
    period: '/month',
    description: 'Ideal for scaling businesses ready to automate more',
    features: [
      'Up to 15 active workflows',
      'Priority email & phone support',
      'Advanced analytics & reporting',
      'Bi-weekly strategy sessions',
      'Priority response time (4-8hrs)',
      'Custom integrations included'
    ],
    popular: true
  },
  {
    name: 'Pro',
    price: '$10,000',
    period: '/month',
    description: 'For established companies seeking comprehensive automation',
    features: [
      'Up to 30 active workflows',
      '24/7 priority support',
      'Real-time analytics & insights',
      'Weekly strategy sessions',
      'Fast response time (1-2hrs)',
      'Dedicated account manager',
      'Unlimited revisions'
    ],
    popular: false
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large-scale operations',
    features: [
      'Unlimited workflows',
      'Dedicated support team',
      'Custom AI model training',
      'Daily check-ins available',
      'Instant response time (<1hr)',
      'White-glove service',
      'Custom SLA agreements',
      'On-premise deployment options'
    ],
    popular: false
  }
];

const performanceModels = [
  {
    title: 'Performance-Based',
    price: 'Results-Driven',
    description: 'Pay based on actual results achieved',
    features: [
      'Revenue share: 10-25% of new revenue',
      'Cost savings share: 10-25% of savings',
      'Low upfront investment',
      'Risk shared between parties'
    ]
  },
  {
    title: 'One-Time Setup',
    price: '$5,000 - $50,000',
    description: 'Fixed price for complete implementation',
    features: [
      'Full automation setup',
      'Complete documentation',
      '30 days post-launch support',
      'Training included',
      'No recurring fees'
    ]
  }
];

const comparisonFeatures = [
  { name: 'Active Workflows', starter: '5', growth: '15', pro: '30', enterprise: 'Unlimited' },
  { name: 'Support Channels', starter: 'Email', growth: 'Email & Phone', pro: '24/7 Priority', enterprise: 'Dedicated Team' },
  { name: 'Response Time', starter: '24-48hrs', growth: '4-8hrs', pro: '1-2hrs', enterprise: '<1hr' },
  { name: 'Strategy Sessions', starter: 'Monthly', growth: 'Bi-weekly', pro: 'Weekly', enterprise: 'Daily Available' },
  { name: 'Account Manager', starter: '—', growth: '—', pro: 'Yes', enterprise: 'Dedicated Team' },
  { name: 'Custom Integrations', starter: 'Add-on', growth: 'Included', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Analytics', starter: 'Basic', growth: 'Advanced', pro: 'Real-time', enterprise: 'Custom' }
];

export default function PricingPage() {
  return (
    <motion.div {...pageTransition}>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-6">
              Flexible <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our ROI guarantee.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                  plan.popular ? 'border-orange-500 scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'gradient-button text-white shadow-lg hover:shadow-orange-500/50'
                    : 'border-2 border-black text-black hover:bg-black hover:text-white'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-black mb-6 text-center">
              Alternative <span className="gradient-text">Pricing Models</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We offer flexible pricing based on your business model and goals
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {performanceModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-black mb-2">{model.title}</h3>
                  <div className="text-3xl font-bold gradient-text mb-4">{model.price}</div>
                  <p className="text-gray-600 mb-6">{model.description}</p>
                  <ul className="space-y-3">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            <h2 className="text-4xl font-bold text-black mb-8 text-center">
              Compare <span className="gradient-text">Plans</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-bold text-gray-800">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-800">Starter</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-800 bg-orange-50 rounded-t-xl">Growth</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-800">Pro</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-800">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-gray-700">{feature.name}</td>
                      <td className="text-center py-4 px-4 text-gray-600">{feature.starter}</td>
                      <td className="text-center py-4 px-4 text-gray-600 bg-orange-50">{feature.growth}</td>
                      <td className="text-center py-4 px-4 text-gray-600">{feature.pro}</td>
                      <td className="text-center py-4 px-4 text-gray-600">{feature.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200"
          >
            <h3 className="text-2xl font-bold text-black mb-4">Not Sure Which Plan to Choose?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Schedule a consultation call with our team. We'll analyze your needs and recommend the perfect pricing structure for your business.
            </p>
            <button className="gradient-button px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
