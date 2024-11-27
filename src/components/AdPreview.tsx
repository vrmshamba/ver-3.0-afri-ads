import React from 'react';
import { Upload, Image as ImageIcon, Link, Type } from 'lucide-react';

interface AdPreviewProps {
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onFileChange: (file: File | null) => void;
}

export default function AdPreview({ formData, onChange, onFileChange }: AdPreviewProps) {
  const [previewUrl, setPreviewUrl] = React.useState('');

  const adFormats = [
    'Image Ad',
    'Video Ad',
    'Carousel Ad',
    'Text Ad',
    'Interactive Ad'
  ];

  const callToActions = [
    'Learn More',
    'Shop Now',
    'Sign Up',
    'Download',
    'Get Offer',
    'Contact Us',
    'Book Now',
    'Play Now'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      onFileChange(file);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Ad Format</label>
        <select
          name="adFormat"
          value={formData.adFormat}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">Select Ad Format</option>
          {adFormats.map((format) => (
            <option key={format} value={format}>{format}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <div className="flex items-center gap-2">
            <Type className="w-4 h-4" />
            Ad Title
          </div>
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={onChange}
          maxLength={90}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          placeholder="Enter your ad title"
        />
        <p className="mt-1 text-sm text-gray-500">
          {formData.title.length}/90 characters
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Ad Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          rows={4}
          maxLength={225}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          placeholder="Enter your ad description"
        />
        <p className="mt-1 text-sm text-gray-500">
          {formData.description.length}/225 characters
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Call to Action</label>
        <select
          name="callToAction"
          value={formData.callToAction}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">Select Call to Action</option>
          {callToActions.map((cta) => (
            <option key={cta} value={cta}>{cta}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <div className="flex items-center gap-2">
            <Link className="w-4 h-4" />
            Landing Page URL
          </div>
        </label>
        <input
          type="url"
          name="landingUrl"
          value={formData.landingUrl}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          placeholder="https://example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Ad Creative</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          {previewUrl ? (
            <div className="space-y-1 text-center">
              <img src={previewUrl} alt="Preview" className="mx-auto h-32 w-auto" />
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500">
                  <span>Change file</span>
                  <input
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept="image/*,video/*"
                  />
                </label>
              </div>
            </div>
          ) : (
            <div className="space-y-1 text-center">
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500">
                  <div className="flex flex-col items-center">
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <span>Upload a file</span>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept="image/*,video/*"
                    />
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF, MP4 up to 50MB</p>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Ad Preview</h3>
        <div className="border rounded-lg p-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            {previewUrl ? (
              <div className="space-y-4">
                <img src={previewUrl} alt="Ad Preview" className="mx-auto max-h-48 w-auto" />
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">{formData.title || 'Ad Title'}</h4>
                  <p className="text-gray-600">{formData.description || 'Ad description will appear here'}</p>
                  {formData.callToAction && (
                    <button className="btn-primary">{formData.callToAction}</button>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-48 flex items-center justify-center bg-gray-200 rounded">
                <Upload className="h-12 w-12 text-gray-400" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}