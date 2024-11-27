import React from 'react';
import { ArrowRight, MessageCircle, Smartphone, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-red-700">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Transform Your Reach in</span>
                <span className="block text-yellow-400">African Markets</span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Connect with millions through targeted advertising on Telegram and mobile games. 
                Tailored for African audiences, powered by local payment solutions.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 md:py-4 md:text-lg md:px-10">
                    Start Campaign
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-[url('https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80')] bg-cover bg-center bg-no-repeat opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <MessageCircle className="h-8 w-8 text-yellow-400" />
            <div>
              <h3 className="text-lg font-medium text-white">Telegram Ads</h3>
              <p className="text-sm text-gray-100">Reach active African audiences</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <Smartphone className="h-8 w-8 text-yellow-400" />
            <div>
              <h3 className="text-lg font-medium text-white">Mobile Gaming</h3>
              <p className="text-sm text-gray-100">Target gaming communities</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <BarChart3 className="h-8 w-8 text-yellow-400" />
            <div>
              <h3 className="text-lg font-medium text-white">Analytics</h3>
              <p className="text-sm text-gray-100">Real-time performance data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}