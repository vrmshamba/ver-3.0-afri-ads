import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CampaignCreation from './components/CampaignCreation';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <About />
      <FAQ />
      <Contact />
      <CampaignCreation />
    </div>
  );
}

export default App;