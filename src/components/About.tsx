import React from 'react';
import { Users, Globe2, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: Users,
      value: '10M+',
      label: 'Active Users Reached'
    },
    {
      icon: Globe2,
      value: '15+',
      label: 'African Countries'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Campaign Success Rate'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About AfriAds
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              AfriAds is the leading digital advertising platform specifically designed for the African market. We connect businesses with millions of potential customers through strategic placement of ads on Telegram and mobile gaming platforms.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our platform combines local market expertise with cutting-edge technology to deliver exceptional results for advertisers across the continent.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="mx-auto h-8 w-8 text-orange-600" />
                  <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                alt="African market"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}