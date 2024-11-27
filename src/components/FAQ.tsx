import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I start advertising on AfriAds?',
      answer: 'Getting started is easy! Simply click the "Get Started" button, create your account, and follow our step-by-step campaign creation process. You can launch your first campaign in minutes.'
    },
    {
      question: 'Which African countries do you cover?',
      answer: 'We currently serve major markets including Nigeria, Kenya, South Africa, Ghana, Ethiopia, and 10+ other African countries. Our platform allows you to target specific countries or run pan-African campaigns.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods including credit/debit cards (Visa/Mastercard), mobile money (M-Pesa), and cryptocurrency (through Binance Pay) to accommodate different market preferences.'
    },
    {
      question: 'How do you measure ad performance?',
      answer: 'Our analytics dashboard provides real-time metrics including impressions, clicks, engagement rates, and conversion tracking. You can access detailed reports and insights about your campaign performance.'
    },
    {
      question: 'What types of ads can I create?',
      answer: 'You can create various ad formats including text ads, image ads, and video ads for both Telegram and mobile gaming platforms. Our platform supports rich media content to help you engage your audience effectively.'
    },
    {
      question: 'Can I change my campaign settings after launching?',
      answer: 'Yes, you can modify your campaign settings including budget, targeting, and creative content even after the campaign is live. Changes take effect within minutes of updating.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about AfriAds
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-orange-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-orange-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}