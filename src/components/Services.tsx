import { useState } from 'react';
import { ShoppingCart, MessageCircle, Settings, TrendingUp, PenTool, LayoutDashboard, Sparkles, ChevronDown } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'Sales & Marketing',
    description: 'AI-powered tools to accelerate your sales and amplify your marketing reach',
    features: [
      'AI-generated product descriptions, images & videos',
      'Automated email, WhatsApp & Telegram campaigns',
      'Smart lead scoring & CRM automation',
      'Abandoned cart recovery flows',
      'Auto content generation & social scheduling'
    ]
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'Customer Support',
    description: '24/7 intelligent support that scales with your business',
    features: [
      '24/7 AI chatbots (Web, WhatsApp, Telegram)',
      'GPT-powered replies from your knowledge base',
      'AI inbox assistant for fast ticket handling',
      'Sentiment analysis from reviews & messages'
    ]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Internal Operations',
    description: 'Automate workflows and streamline your team operations',
    features: [
      'Auto-generated reports, documents & summaries',
      'Automated approvals, follow-ups, scheduling',
      'Smart alerts via Slack, Telegram, or email',
      'Data syncing across Notion, Airtable, Sheets'
    ]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Business Insights',
    description: 'Data-driven intelligence for smarter business decisions',
    features: [
      'Market & competitor data scraping',
      'Weekly AI-powered performance summaries',
      'Sales prediction & anomaly alerts',
      'Feedback clustering & analytics'
    ]
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Content Creation',
    description: 'AI-powered content that engages and converts',
    features: [
      'AI-written posts, blogs, emails & scripts',
      'Avatar videos with voiceovers from text',
      'Auto presentations & pitch decks',
      'Translation, transcription & repurposing'
    ]
  },
  {
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: 'Dashboard',
    description: 'Real-time visualization of all your AI-powered services',
    features: [
      'Custom live dashboard visualizing all services',
      'Real-time KPI updates',
      'Customizable widgets and metrics',
      'Export and share reports instantly'
    ]
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'More Services',
    description: 'Custom solutions tailored to your unique needs',
    features: [
      'Custom AI workflows for teams\' unique needs',
      'High-converting websites & landing pages',
      'Website redesigns focused on performance',
      'Strategic long-term partnerships'
    ]
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            AI-Powered <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive automation solutions designed to transform every aspect of your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
              onClick={() => toggleExpand(index)}
            >
              <div className="text-orange-500 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-black mb-3 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between text-orange-500 font-semibold">
                <span className="text-sm">Learn more</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedIndex === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="space-y-3 border-t border-gray-200 pt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
