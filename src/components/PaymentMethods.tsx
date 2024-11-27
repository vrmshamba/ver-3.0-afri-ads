import React from 'react';
import { CreditCard, Smartphone, Bitcoin } from 'lucide-react';

interface PaymentMethodsProps {
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function PaymentMethods({ formData, onChange }: PaymentMethodsProps) {
  const [selectedMethod, setSelectedMethod] = React.useState('');

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Budget (USD)</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          placeholder="Enter campaign budget"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Payment Method</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: 'card', icon: CreditCard, name: 'Credit Card', description: 'Visa & Mastercard' },
            { id: 'mpesa', icon: Smartphone, name: 'M-Pesa', description: 'Mobile Money' },
            { id: 'crypto', icon: Bitcoin, name: 'Binance Pay', description: 'Crypto Payment' }
          ].map((method) => (
            <div
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`cursor-pointer p-4 rounded-lg border-2 ${
                selectedMethod === method.id ? 'border-orange-600 bg-orange-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <method.icon className={`w-6 h-6 ${
                  selectedMethod === method.id ? 'text-orange-600' : 'text-gray-400'
                }`} />
                <div>
                  <h3 className="font-medium">{method.name}</h3>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMethod === 'card' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
            <input
              type="text"
              placeholder="CVC"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}