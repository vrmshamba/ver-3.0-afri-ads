import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '99',
      features: [
        'Basic Telegram Ad Placement',
        'Single Country Targeting',
        'Basic Analytics Dashboard',
        'Email Support',
        '10,000 Ad Impressions',
        '7-Day Campaign Duration'
      ]
    },
    {
      name: 'Professional',
      price: '299',
      popular: true,
      features: [
        'Advanced Telegram & Gaming Ads',
        'Multi-Country Targeting',
        'Advanced Analytics & Reports',
        'Priority Support',
        '50,000 Ad Impressions',
        '30-Day Campaign Duration'
      ]
    },
    {
      name: 'Enterprise',
      price: '999',
      features: [
        'Custom Ad Solutions',
        'Pan-African Targeting',
        'Real-time Analytics & API Access',
        '24/7 Dedicated Support',
        'Unlimited Ad Impressions',
        'Custom Campaign Duration'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your advertising needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl ${
                plan.popular ? 'ring-2 ring-orange-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex rounded-full bg-orange-600 px-4 py-1 text-sm font-semibold text-white">
                    Popular
                  </span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold text-gray-500">/mo</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-orange-600" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full btn-primary">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}