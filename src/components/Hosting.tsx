import { useState } from 'react';
import { Cloud, Server, Shield, ChevronDown } from 'lucide-react';

interface HostingOption {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  bestFor: string;
}

const hostingOptions: HostingOption[] = [
  {
    icon: <Cloud className="w-10 h-10" />,
    title: 'Cloud Hosting',
    subtitle: 'Fast, Scalable, Managed',
    description: 'Enterprise-grade cloud infrastructure with PostgreSQL and Redis, optimized for AI workloads',
    features: [
      'Auto-scaling to handle traffic spikes',
      'Managed PostgreSQL with automatic backups',
      'Redis caching for ultra-fast performance',
      'Global CDN for worldwide reach',
      '99.9% uptime SLA guarantee',
      'Self-managed or fully managed by AKS'
    ],
    bestFor: 'Teams seeking hassle-free scaling and reliability'
  },
  {
    icon: <Server className="w-10 h-10" />,
    title: 'Dedicated VPS',
    subtitle: 'Full Control & Performance',
    description: 'Dedicated virtual private servers with complete control over your infrastructure',
    features: [
      'Full root access and customization',
      'Guaranteed CPU and RAM resources',
      'Ideal for complex AI automation workflows',
      'Custom security configurations',
      'Choose your preferred data center location',
      'Optional managed services available'
    ],
    bestFor: 'Organizations requiring maximum control and performance'
  },
  {
    icon: <Shield className="w-10 h-10" />,
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
    bestFor: 'Enterprises with strict compliance and security requirements'
  }
];

export default function Hosting() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-white" id="hosting">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Hosting <span className="gradient-text">Options</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cloud, VPS, or self-hosted — choose what works best for your AI infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hostingOptions.map((option, index) => (
            <div
              key={index}
              className="hosting-card group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-200 hover:border-orange-400"
              onClick={() => toggleExpand(index)}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
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

                <div className="flex items-center justify-between text-orange-500 font-semibold mb-4">
                  <span className="text-sm">View Details</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t-2 border-gray-200 pt-6 space-y-6">
                    <div>
                      <h4 className="font-bold text-black mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-orange-500 mt-1">✓</span>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-orange-50 rounded-xl p-4">
                      <p className="text-sm font-semibold text-gray-800">
                        <span className="text-orange-600">Best for:</span> {option.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
