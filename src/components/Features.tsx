import React, { useState } from 'react';
import { MessageCircle, Smartphone, BarChart3, Target, Globe2, Shield, ChevronDown, ChevronUp } from 'lucide-react';

interface FeatureDetail {
  title: string;
  icon: React.ElementType;
  description: string;
  benefits: string[];
  stats: { label: string; value: string }[];
  useCases: string[];
}

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features: FeatureDetail[] = [
    {
      icon: MessageCircle,
      title: 'Telegram Ads',
      description: 'Reach millions of active African users on Telegram with targeted messaging and multimedia ads.',
      benefits: [
        'Access to 50M+ active Telegram users across Africa',
        'Instant message delivery with rich media support',
        'Channel-specific targeting for maximum relevance',
        'Real-time engagement tracking',
        'Multiple ad formats (text, image, video, polls)'
      ],
      stats: [
        { label: 'Daily Active Users', value: '50M+' },
        { label: 'Avg. Engagement Rate', value: '15%' },
        { label: 'Message Open Rate', value: '90%' }
      ],
      useCases: [
        'E-commerce product launches',
        'Event promotions',
        'Service announcements',
        'Community building',
        'Flash sales'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Gaming',
      description: 'Place your ads in popular mobile games across Africa, reaching engaged gaming communities.',
      benefits: [
        'Access to 100M+ mobile gamers in Africa',
        'Non-intrusive ad placements',
        'Rewarded video ads with high completion rates',
        'Interactive playable ads',
        'Cross-game retargeting'
      ],
      stats: [
        { label: 'Monthly Active Gamers', value: '100M+' },
        { label: 'Ad Completion Rate', value: '85%' },
        { label: 'User Retention', value: '40%' }
      ],
      useCases: [
        'App installs promotion',
        'In-game rewards',
        'Brand awareness campaigns',
        'User acquisition',
        'Game cross-promotion'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Track performance with real-time analytics, engagement metrics, and conversion data.',
      benefits: [
        'Real-time performance dashboard',
        'Custom report generation',
        'A/B testing capabilities',
        'Conversion tracking',
        'ROI analysis'
      ],
      stats: [
        { label: 'Data Processing Time', value: '<1s' },
        { label: 'Accuracy Rate', value: '99.9%' },
        { label: 'Metrics Tracked', value: '50+' }
      ],
      useCases: [
        'Campaign optimization',
        'Audience insights',
        'Performance tracking',
        'Budget allocation',
        'ROI measurement'
      ]
    },
    {
      icon: Target,
      title: 'Precise Targeting',
      description: 'Target specific demographics, interests, and locations across African markets.',
      benefits: [
        'Demographic targeting',
        'Interest-based segmentation',
        'Location targeting down to city level',
        'Behavioral targeting',
        'Custom audience creation'
      ],
      stats: [
        { label: 'Targeting Parameters', value: '30+' },
        { label: 'Audience Reach', value: '300M+' },
        { label: 'Targeting Accuracy', value: '95%' }
      ],
      useCases: [
        'Local business promotion',
        'Regional campaigns',
        'Interest-based marketing',
        'Demographic targeting',
        'Behavioral marketing'
      ]
    },
    {
      icon: Globe2,
      title: 'Local Reach',
      description: 'Connect with audiences in Nigeria, Kenya, South Africa, Ghana, and more.',
      benefits: [
        'Pan-African coverage',
        'Local language support',
        'Cultural context awareness',
        'Regional pricing adaptation',
        'Local payment methods'
      ],
      stats: [
        { label: 'Countries Covered', value: '15+' },
        { label: 'Local Languages', value: '10+' },
        { label: 'Market Reach', value: '500M+' }
      ],
      useCases: [
        'Market expansion',
        'Local brand building',
        'Cultural campaigns',
        'Regional promotions',
        'Multi-country launches'
      ]
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Multiple secure payment options including M-Pesa, cards, and crypto.',
      benefits: [
        'Multiple payment methods',
        'Secure transaction processing',
        'Local currency support',
        'Automated billing',
        'Transparent pricing'
      ],
      stats: [
        { label: 'Payment Methods', value: '10+' },
        { label: 'Transaction Security', value: '100%' },
        { label: 'Processing Time', value: '<30s' }
      ],
      useCases: [
        'Mobile money payments',
        'Crypto transactions',
        'Card payments',
        'Subscription billing',
        'Budget management'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Advertising Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to reach your target audience in Africa
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer ${
                  selectedFeature === index ? 'ring-2 ring-orange-600' : ''
                }`}
                onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <feature.icon className="h-8 w-8 text-orange-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  {selectedFeature === index ? (
                    <ChevronUp className="h-5 w-5 text-orange-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-orange-600" />
                  )}
                </div>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
                
                {selectedFeature === index && (
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Performance Stats</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {feature.stats.map((stat, idx) => (
                          <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-600">{stat.label}</p>
                            <p className="text-lg font-semibold text-orange-600">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Use Cases</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {feature.useCases.map((useCase, idx) => (
                          <li key={idx}>{useCase}</li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full btn-primary mt-4">
                      Get Started with {feature.title}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}