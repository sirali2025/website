import { useState } from 'react';
import { Clock, Briefcase, BarChart3, TrendingDown, TrendingUp, Zap, Layers, Activity, ArrowRight, X } from 'lucide-react';

interface PricingModel {
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  keyPoints: string[];
  example?: string;
  modalDetails: {
    title: string;
    content: string[];
    sections: {
      title: string;
      items: string[];
    }[];
  };
  gradient: string;
}

const pricingModels: PricingModel[] = [
  {
    icon: <Clock className="w-10 h-10" />,
    title: 'Hourly Pricing',
    shortDescription: 'Pay only for the time it takes to build your automation.',
    keyPoints: [
      'Perfect for small projects or first-time collaborations',
      'Transparent hourly rate',
      'Total cost depends on hours worked'
    ],
    example: '15 hours × $50/hour = $750',
    gradient: 'from-orange-400 to-orange-500',
    modalDetails: {
      title: 'Hourly Pricing Explained',
      content: [
        'Hourly pricing is ideal when you have small projects, want to test collaboration before committing to larger engagements, or have flexible requirements.'
      ],
      sections: [
        {
          title: 'How It Works',
          items: [
            'We track all billable hours spent on your project',
            'You receive detailed time logs weekly',
            'Invoice is based on actual hours worked',
            'Rate varies based on project complexity and team seniority'
          ]
        },
        {
          title: 'When to Choose This',
          items: [
            'Small automation projects (under 50 hours)',
            'First-time collaboration to test compatibility',
            'Unclear project scope requiring exploration',
            'Ad-hoc support and maintenance'
          ]
        },
        {
          title: 'Real-World Examples',
          items: [
            'Email automation setup: 8 hours × $75/hour = $600',
            'CRM integration: 15 hours × $50/hour = $750',
            'Chatbot customization: 12 hours × $60/hour = $720'
          ]
        }
      ]
    }
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: 'Project-Based Pricing',
    shortDescription: 'A fixed price for a clearly defined project.',
    keyPoints: [
      'Ideal for end-to-end automation builds',
      'Clear deliverables and timelines',
      'No surprises or extra hourly charges'
    ],
    gradient: 'from-orange-500 to-orange-600',
    modalDetails: {
      title: 'Project-Based Pricing Explained',
      content: [
        'Project-based pricing provides budget certainty with a fixed deliverable scope. Perfect for well-defined automation projects with clear requirements.'
      ],
      sections: [
        {
          title: 'How Scope is Defined',
          items: [
            'Discovery call to understand requirements',
            'Detailed scope document created and approved',
            'Timeline and deliverables locked in',
            'Fixed price quoted for complete project'
          ]
        },
        {
          title: 'What\'s Included',
          items: [
            'All development and implementation',
            'Testing and quality assurance',
            'Training and documentation',
            '30 days of post-launch support',
            'Minor change requests within scope'
          ]
        },
        {
          title: 'Change Request Process',
          items: [
            'Out-of-scope changes are documented',
            'Change request pricing is quoted separately',
            'Scope creep is prevented with clear boundaries'
          ]
        }
      ]
    }
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: 'Subscription (Monthly Retainer)',
    shortDescription: 'Ongoing support, updates, and new automations every month.',
    keyPoints: [
      'Perfect for businesses that want continuous optimization',
      'Priority support',
      'Includes new workflows every month'
    ],
    gradient: 'from-orange-600 to-orange-700',
    modalDetails: {
      title: 'Subscription Pricing Explained',
      content: [
        'Monthly subscription provides predictable costs with ongoing optimization, maintenance, and continuous improvement of your automation ecosystem.'
      ],
      sections: [
        {
          title: 'Tier Comparison',
          items: [
            'BASIC: $2,000/month - Up to 5 active workflows, email support',
            'PRO: $5,000/month - Up to 15 active workflows, phone + email support, priority response',
            'ENTERPRISE: $10,000+/month - Unlimited workflows, dedicated account manager, 24/7 support'
          ]
        },
        {
          title: 'What\'s Included',
          items: [
            'Priority support (response within SLA)',
            'New workflow development each month',
            'Performance monitoring and optimization',
            'Regular strategy reviews',
            'Unlimited revisions and updates',
            'Monthly performance reports'
          ]
        },
        {
          title: 'Support Levels & SLA',
          items: [
            'BASIC: 24-48 hour response time',
            'PRO: 4-8 hour response time, priority queue',
            'ENTERPRISE: 1 hour response time, dedicated team'
          ]
        }
      ]
    }
  },
  {
    icon: <TrendingDown className="w-10 h-10" />,
    title: 'Cost-Saving Pricing',
    shortDescription: 'Pricing based on how much money the automation saves your company.',
    keyPoints: [
      'Designed for companies with high operational costs',
      'You pay a percentage of the total cost reduction',
      'Savings are calculated clearly before starting'
    ],
    example: 'If automation saves $40,000/year → client pays 10–25% of the saved amount',
    gradient: 'from-orange-700 to-orange-800',
    modalDetails: {
      title: 'Cost-Saving Pricing Explained',
      content: [
        'This model aligns our success with your financial impact. We invest upfront to automate expensive operations, and you pay us a percentage of the verified savings.'
      ],
      sections: [
        {
          title: 'How Cost Analysis Works',
          items: [
            'We audit your current manual processes',
            'Calculate labor, time, and error costs',
            'Estimate automation savings quantitatively',
            'Create detailed baseline for comparison',
            'Lock in conservative savings estimates'
          ]
        },
        {
          title: 'Performance Tracking',
          items: [
            'We measure actual time saved monthly',
            'Document labor hour reductions',
            'Track error reduction and quality improvements',
            'Provide transparent dashboards',
            'Quarterly savings validation reports'
          ]
        },
        {
          title: 'Real-World Examples',
          items: [
            'Data entry: Saves 40 hours/month = $2,000 savings → you pay $200-500/month',
            'Manual approval process: Saves $60,000/year → you pay $6,000-15,000/year',
            'Customer service: Saves 100 hours/month = $5,000 → you pay $500-1,250/month'
          ]
        }
      ]
    }
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: 'Revenue-Based Pricing',
    shortDescription: 'Pay based on the extra revenue generated by the automation.',
    keyPoints: [
      'Ideal for marketing, sales, and lead-generation automations',
      'Shared success model aligned with growth',
      'Setup fee + revenue share'
    ],
    example: '$3,000 setup + 20% of new monthly revenue generated',
    gradient: 'from-orange-800 to-orange-900',
    modalDetails: {
      title: 'Revenue-Based Pricing Explained',
      content: [
        'Share success together. We build revenue-generating automations and earn based on verified new revenue, ensuring we\'re invested in your growth.'
      ],
      sections: [
        {
          title: 'How Attribution Works',
          items: [
            'We define what qualifies as new revenue clearly',
            'Setup unique tracking codes and parameters',
            'Track leads/sales from automation separately',
            'Monthly revenue reports with full transparency',
            'Third-party verification available'
          ]
        },
        {
          title: 'Tracking Dashboards',
          items: [
            'Real-time lead generation metrics',
            'Conversion tracking by automation',
            'Revenue attribution by source',
            'Performance vs. baseline comparisons',
            'Monthly and quarterly summaries'
          ]
        },
        {
          title: 'Real-World Examples',
          items: [
            'Lead gen automation: $2,000 setup + 15% of new leads converted',
            'Email campaign: $1,500 setup + 20% of additional revenue',
            'Sales outreach: $3,000 setup + 25% of new deal value',
            'Affiliate automation: $1,000 setup + 10-30% commission'
          ]
        }
      ]
    }
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Value-Based Pricing',
    shortDescription: 'Pricing based on how important the automation is for your business.',
    keyPoints: [
      'Focuses on business impact rather than time spent',
      'Great for mission-critical workflows',
      'Perfect for high-value results'
    ],
    gradient: 'from-orange-900 to-red-700',
    modalDetails: {
      title: 'Value-Based Pricing Explained',
      content: [
        'We price based on the strategic importance and business impact of the solution, not development hours. Perfect when outcomes are more important than inputs.'
      ],
      sections: [
        {
          title: 'Valuation Method',
          items: [
            'We evaluate business impact holistically',
            'Consider risk reduction and competitive advantage',
            'Factor in strategic importance to company',
            'Review comparable market solutions',
            'Price reflects true business value delivered'
          ]
        },
        {
          title: 'ROI & Risk Reduction',
          items: [
            'Reduced operational risk and errors',
            'Competitive advantage from automation',
            'Faster decision-making with real-time data',
            'Customer experience improvements',
            'Scalability without headcount increases'
          ]
        },
        {
          title: 'When to Use This Model',
          items: [
            'Mission-critical system automation',
            'High-risk process automation',
            'Revenue-critical workflow optimization',
            'Strategic competitive advantage',
            'Transformational business process redesign'
          ]
        }
      ]
    }
  },
  {
    icon: <Layers className="w-10 h-10" />,
    title: 'Hybrid Pricing',
    shortDescription: 'Combine hourly, project, and performance pricing for maximum flexibility.',
    keyPoints: [
      'Tailored for complex or evolving systems',
      'Lower setup cost',
      'Balanced risk for both sides'
    ],
    gradient: 'from-orange-700 to-orange-600',
    modalDetails: {
      title: 'Hybrid Pricing Explained',
      content: [
        'Combine multiple pricing models to create a custom structure that works perfectly for your unique situation. Share risk fairly while staying flexible.'
      ],
      sections: [
        {
          title: 'How Hybrid Pricing Works',
          items: [
            'PHASE 1: Fixed project fee for core automation',
            'PHASE 2: Hourly billing for optimization and customization',
            'PHASE 3: Revenue/performance share on results',
            'Flexible transitions between phases',
            'Clear transitions and billing schedule'
          ]
        },
        {
          title: 'Real Hybrid Examples',
          items: [
            'Sales automation: $10k fixed + 10 hours/month support + 10% of net revenue',
            'Integration project: $5k fixed + $100/hour for expansions + cost savings share',
            'Data platform: $15k fixed + performance bonus if speed targets met'
          ]
        },
        {
          title: 'Advantages',
          items: [
            'Predictable base costs',
            'Flexibility for unknowns',
            'Risk sharing between parties',
            'Scalable without unlimited commitment',
            'Perfect for growing or changing needs'
          ]
        }
      ]
    }
  },
  {
    icon: <Activity className="w-10 h-10" />,
    title: 'Usage-Based Pricing',
    shortDescription: 'Pay only when the workflow runs or specific resources are used.',
    keyPoints: [
      'Best for high-traffic automations',
      'Scales with usage',
      'Transparent execution logs'
    ],
    gradient: 'from-orange-600 to-orange-700',
    modalDetails: {
      title: 'Usage-Based Pricing Explained',
      content: [
        'Pay for what you use. Perfect for scalable automations where usage varies significantly or grows over time.'
      ],
      sections: [
        {
          title: 'Workflow-Run Pricing',
          items: [
            'Each workflow execution is one billable unit',
            'Tiered pricing: cheaper per-run at higher volumes',
            'Example: $0.50 per run at 0-10k/month, $0.30 per run at 10k-50k/month',
            'Unlimited runs available at enterprise rates',
            'Real-time usage tracking and alerts'
          ]
        },
        {
          title: 'Resource Limits & Scaling',
          items: [
            'Free tier: 100 runs/month + $0 setup',
            'Starter: $0.50/run, unlimited runs',
            'Professional: $0.30/run + dedicated support',
            'Enterprise: Custom pricing at volume',
            'No overage charges with usage caps'
          ]
        },
        {
          title: 'Real-World Scaling',
          items: [
            'Startup phase: 500 runs = $250/month',
            'Growth phase: 50,000 runs = $15,000/month',
            'Scale phase: 500,000 runs = $150,000/month',
            'All with predictable per-unit economics'
          ]
        }
      ]
    }
  }
];

interface ModalProps {
  model: PricingModel;
  isOpen: boolean;
  onClose: () => void;
}

function PricingModal({ model, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
        <div className={`bg-gradient-to-br ${model.gradient} p-8 text-white sticky top-0 flex items-start justify-between`}>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/20 rounded-2xl mt-1">
              {model.icon}
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">{model.modalDetails.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8 space-y-6">
          {model.modalDetails.content.map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}

          {model.modalDetails.sections.map((section, idx) => (
            <div key={idx} className="border-l-4 border-orange-500 pl-6">
              <h4 className="text-xl font-bold text-black mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-orange-500 mt-0.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <button
            onClick={onClose}
            className="w-full mt-8 py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Get Started with {model.title}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [selectedModel, setSelectedModel] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Flexible <span className="gradient-text">Pricing Models</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the pricing structure that aligns with your business model and goals. We're flexible so you can succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingModels.map((model, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-orange-400 transform hover:-translate-y-1"
              onClick={() => setSelectedModel(index)}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${model.gradient} text-white mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  {model.icon}
                </div>

                <h3 className="text-xl font-bold text-black mb-3 group-hover:gradient-text transition-all duration-300">
                  {model.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {model.shortDescription}
                </p>

                <ul className="space-y-2 mb-6">
                  {model.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {model.example && (
                  <div className={`bg-gradient-to-br ${model.gradient} bg-opacity-10 rounded-lg p-3 mb-4 border border-orange-200`}>
                    <p className="text-xs font-semibold text-orange-700">
                      {model.example}
                    </p>
                  </div>
                )}

                <button className="w-full py-2 px-4 bg-black text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200 max-w-2xl">
            <p className="text-lg text-gray-800">
              <span className="font-bold text-orange-600">Not sure which model fits your needs?</span> Schedule a consultation call with our team. We'll analyze your situation and recommend the perfect pricing structure.
            </p>
          </div>
        </div>
      </div>

      {selectedModel !== null && (
        <PricingModal
          model={pricingModels[selectedModel]}
          isOpen={selectedModel !== null}
          onClose={() => setSelectedModel(null)}
        />
      )}
    </section>
  );
}
