import { useState } from 'react';
import { Handshake, ShoppingCart, MessageCircle, BarChart3, Settings, PenTool, Target, Sparkles, ChevronDown, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  fullDescription: string;
  includes: string[];
  guarantee: string;
}

const services: Service[] = [
  {
    icon: <Handshake className="w-8 h-8" />,
    title: 'Strategic Partnership',
    shortDescription: 'Grow your business faster with a long-term AI-driven partnership',
    fullDescription: 'We don\'t just deliver services; we become your strategic partner. Together, we optimize your operations, enhance revenue, and multiply efficiency using AI and automation.',
    includes: [
      'Business process analysis & optimization',
      'Long-term AI infrastructure planning',
      'Continuous performance monitoring',
      'Growth strategy implementation'
    ],
    guarantee: 'Refund until ROI target is met — we stay invested until your revenue or efficiency goals are achieved.'
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'Sales & Marketing',
    shortDescription: 'Boost conversions with AI-powered campaigns and content',
    fullDescription: 'Increase your sales and customer engagement with AI-driven marketing strategies tailored to your business.',
    includes: [
      'AI-generated product descriptions, images & videos',
      'Automated email, WhatsApp & Telegram campaigns',
      'Smart lead scoring & CRM automation',
      'Abandoned cart recovery flows',
      'Auto content generation & social scheduling'
    ],
    guarantee: 'Refund until ROI target is met — we optimize until your sales metrics improve.'
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'Customer Support & Automation',
    shortDescription: 'Delight customers and reduce manual workload',
    fullDescription: 'Automate repetitive tasks and provide instant, reliable support to your clients.',
    includes: [
      'Appointment & booking automation',
      'Ticket management & automated replies',
      'Chatbots in multiple languages',
      'Customer satisfaction tracking',
      'Escalation flows for complex queries'
    ],
    guarantee: 'Refund until ROI target is met — your support efficiency and satisfaction goals will be reached, or you get refunded.'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Analytics & Reporting',
    shortDescription: 'Make smarter decisions with actionable insights',
    fullDescription: 'Track and analyze performance across your business, enabling data-driven decisions that increase revenue and efficiency.',
    includes: [
      'Sales & marketing dashboards',
      'Customer behavior analysis',
      'Automated KPI reporting',
      'AI-driven trend prediction',
      'Custom visualizations & insights'
    ],
    guarantee: 'Refund until ROI target is met — we ensure insights lead to measurable improvements.'
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Operations & Workflow Automation',
    shortDescription: 'Streamline processes to save time and costs',
    fullDescription: 'Reduce manual tasks and errors by automating critical business operations.',
    includes: [
      'Inventory & supply chain automation',
      'Order & fulfillment workflows',
      'Automated internal approvals',
      'Integration between tools & platforms',
      'Recurring task scheduling'
    ],
    guarantee: 'Refund until ROI target is met — efficiency improvements are guaranteed.'
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'AI Content & Media Creation',
    shortDescription: 'Generate engaging content at scale',
    fullDescription: 'Create high-quality content faster with AI for social media, blogs, product catalogs, and more.',
    includes: [
      'AI-written articles & blog posts',
      'Social media posts & campaigns',
      'Motion graphics & AI video generation',
      'Voice-over & audio generation',
      'Image enhancement & design'
    ],
    guarantee: 'Refund until ROI target is met — content quality and engagement targets will be achieved.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Lead Generation & Prospecting',
    shortDescription: 'Find the right clients efficiently',
    fullDescription: 'Use AI-powered tools to identify high-quality leads and accelerate your sales pipeline.',
    includes: [
      'Automated lead scraping & enrichment',
      'Targeted outreach workflows',
      'Lead scoring & prioritization',
      'Integration with CRM systems',
      'Follow-up automation'
    ],
    guarantee: 'Refund until ROI target is met — we keep generating qualified leads until your sales goals improve.'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Custom Workflows',
    shortDescription: 'Tailored solutions for any business need',
    fullDescription: 'We design AI-driven workflows specific to your unique business challenges to maximize performance.',
    includes: [
      'Any automation or workflow that improves revenue, efficiency, or customer experience',
      'Integrations with existing tools & platforms',
      'Fully customized AI agents',
      'Monitoring & optimization'
    ],
    guarantee: 'Refund until ROI target is met — your custom workflow will deliver measurable results or you get refunded.'
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
                {service.shortDescription}
              </p>

              <div className="flex items-center justify-between text-orange-500 font-semibold">
                <span className="text-sm flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedIndex === index ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-gray-200 pt-6 space-y-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-black mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-orange-500 mt-1">•</span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-500">
                    <h4 className="font-bold text-black mb-2">Guarantee:</h4>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      {service.guarantee}
                    </p>
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
