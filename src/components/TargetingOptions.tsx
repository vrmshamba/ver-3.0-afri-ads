import React from 'react';
import { MapPin, Users, Smartphone, Calendar, Globe2 } from 'lucide-react';

interface TargetingOptionsProps {
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onArrayChange: (name: string, value: string[]) => void;
}

export default function TargetingOptions({ formData, onChange, onArrayChange }: TargetingOptionsProps) {
  const countries = ['Nigeria', 'Kenya', 'South Africa', 'Ghana', 'Ethiopia', 'Tanzania', 'Uganda', 'Rwanda', 'Senegal', 'Côte d\'Ivoire'];
  const languages = ['English', 'Swahili', 'French', 'Arabic', 'Yoruba', 'Zulu', 'Amharic'];
  const platforms = ['Telegram', 'Mobile Games', 'Both'];
  const interests = [
    'Technology', 'Entertainment', 'Sports', 'Education', 'Business', 'Lifestyle',
    'Fashion', 'Food & Dining', 'Travel', 'Health & Fitness', 'Music', 'Gaming',
    'Shopping', 'Finance', 'Automotive', 'Real Estate'
  ];
  const deviceTypes = ['Smartphone', 'Tablet', 'Desktop'];
  const objectives = [
    'Brand Awareness',
    'Lead Generation',
    'App Installs',
    'Website Traffic',
    'Sales & Conversions',
    'User Engagement'
  ];

  const handleCheckboxChange = (category: string, value: string) => {
    const currentValues = formData[category] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v: string) => v !== value)
      : [...currentValues, value];
    onArrayChange(category, newValues);
  };

  return (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          placeholder="Enter campaign name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Objective</label>
        <select
          name="objective"
          value={formData.objective}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">Select Objective</option>
          {objectives.map((objective) => (
            <option key={objective} value={objective}>{objective}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            Platform
          </div>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {platforms.map((platform) => (
            <label key={platform} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.platforms.includes(platform)}
                onChange={() => handleCheckboxChange('platforms', platform)}
                className="rounded text-orange-600 focus:ring-orange-500"
              />
              <span>{platform}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Target Countries
          </div>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {countries.map((country) => (
            <label key={country} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.countries.includes(country)}
                onChange={() => handleCheckboxChange('countries', country)}
                className="rounded text-orange-600 focus:ring-orange-500"
              />
              <span>{country}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4" />
            Languages
          </div>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {languages.map((language) => (
            <label key={language} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.languages.includes(language)}
                onChange={() => handleCheckboxChange('languages', language)}
                className="rounded text-orange-600 focus:ring-orange-500"
              />
              <span>{language}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Target Audience
          </div>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                name="ageRange.min"
                value={formData.ageRange.min}
                onChange={onChange}
                min="13"
                max="100"
                className="w-24 px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              />
              <span>to</span>
              <input
                type="number"
                name="ageRange.max"
                value={formData.ageRange.max}
                onChange={onChange}
                min="13"
                max="100"
                className="w-24 px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={onChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="all">All Genders</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Interests
          </div>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {interests.map((interest) => (
            <label key={interest} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={() => handleCheckboxChange('interests', interest)}
                className="rounded text-orange-600 focus:ring-orange-500"
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Device Types</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {deviceTypes.map((device) => (
            <label key={device} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.deviceTypes.includes(device)}
                onChange={() => handleCheckboxChange('deviceTypes', device)}
                className="rounded text-orange-600 focus:ring-orange-500"
              />
              <span>{device}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}