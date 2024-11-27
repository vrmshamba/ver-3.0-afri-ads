import React from 'react';
import { Target, Coins, Image, Send, AlertCircle } from 'lucide-react';
import PaymentMethods from './PaymentMethods';
import TargetingOptions from './TargetingOptions';
import AdPreview from './AdPreview';

interface CampaignData {
  // Basic Info
  name: string;
  objective: string;
  startDate: string;
  endDate: string;
  
  // Targeting
  platforms: string[];
  countries: string[];
  languages: string[];
  interests: string[];
  ageRange: {
    min: number;
    max: number;
  };
  gender: string;
  deviceTypes: string[];
  
  // Creative
  adFormat: string;
  title: string;
  description: string;
  creative: File | null;
  callToAction: string;
  landingUrl: string;
  
  // Budget
  budget: number;
  bidStrategy: string;
  paymentMethod: string;
}

export default function CampaignCreation() {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState<CampaignData>({
    // Basic Info
    name: '',
    objective: '',
    startDate: '',
    endDate: '',
    
    // Targeting
    platforms: [],
    countries: [],
    languages: [],
    interests: [],
    ageRange: {
      min: 18,
      max: 65
    },
    gender: 'all',
    deviceTypes: [],
    
    // Creative
    adFormat: '',
    title: '',
    description: '',
    creative: null,
    callToAction: '',
    landingUrl: '',
    
    // Budget
    budget: 0,
    bidStrategy: 'automatic',
    paymentMethod: ''
  });

  const [errors, setErrors] = React.useState<Partial<Record<keyof CampaignData, string>>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error when field is modified
    if (errors[name as keyof CampaignData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleArrayInputChange = (name: keyof CampaignData, value: string[]) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<Record<keyof CampaignData, string>> = {};

    switch (currentStep) {
      case 1: // Targeting
        if (!formData.name) newErrors.name = 'Campaign name is required';
        if (formData.platforms.length === 0) newErrors.platforms = 'Select at least one platform';
        if (formData.countries.length === 0) newErrors.countries = 'Select at least one country';
        break;
      case 2: // Creative
        if (!formData.adFormat) newErrors.adFormat = 'Ad format is required';
        if (!formData.title) newErrors.title = 'Ad title is required';
        if (!formData.description) newErrors.description = 'Ad description is required';
        if (!formData.creative) newErrors.creative = 'Creative asset is required';
        if (!formData.landingUrl) newErrors.landingUrl = 'Landing URL is required';
        break;
      case 3: // Payment
        if (!formData.budget || formData.budget <= 0) newErrors.budget = 'Valid budget is required';
        if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(Math.min(4, step + 1));
    }
  };

  const handleSubmit = async () => {
    if (validateStep(3)) {
      // Handle campaign submission
      console.log('Campaign Data:', formData);
      // Add API call here
    }
  };

  return (
    <section id="campaign" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Create Your Campaign</h2>
          <p className="mt-2 text-gray-600">Reach your target audience in just a few steps</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[
              { icon: Target, text: 'Target' },
              { icon: Image, text: 'Creative' },
              { icon: Coins, text: 'Payment' },
              { icon: Send, text: 'Launch' }
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step > index ? 'bg-green-500' : step === index + 1 ? 'bg-orange-600' : 'bg-gray-300'
                } text-white`}>
                  <item.icon className="w-5 h-5" />
                </div>
                {index < 3 && (
                  <div className={`w-16 h-1 ${step > index ? 'bg-green-500' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {Object.keys(errors).length > 0 && (
            <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center text-red-800">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Please fix the following errors:</span>
              </div>
              <ul className="mt-2 list-disc list-inside text-sm text-red-700">
                {Object.entries(errors).map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </div>
          )}

          {step === 1 && (
            <TargetingOptions 
              formData={formData} 
              onChange={handleInputChange}
              onArrayChange={handleArrayInputChange}
            />
          )}
          {step === 2 && (
            <AdPreview 
              formData={formData} 
              onChange={handleInputChange}
              onFileChange={(file) => setFormData((prev) => ({ ...prev, creative: file }))}
            />
          )}
          {step === 3 && (
            <PaymentMethods 
              formData={formData} 
              onChange={handleInputChange}
            />
          )}

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              className={`btn-secondary ${step === 1 ? 'invisible' : ''}`}
            >
              Previous
            </button>
            <button
              onClick={step === 3 ? handleSubmit : handleNext}
              className="btn-primary"
            >
              {step === 3 ? 'Launch Campaign' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}