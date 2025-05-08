"use client"

import { useState } from 'react';

interface QuoteFormProps {
  insuranceType: string;
}

export default function QuoteForm({ insuranceType }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    insuranceType: insuranceType
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-md">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Get a Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700 mb-1">
            Type of Insurance
          </label>
          <select
            id="insuranceType"
            name="insuranceType"
            required
            value={formData.insuranceType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Insurance Type</option>
            <option value="Accident Insurance">Accident Insurance</option>
            <option value="ACA Marketplace Plans">ACA Marketplace Plans</option>
            <option value="Critical Illness Insurance">Critical Illness Insurance</option>
            <option value="Dental & Vision">Dental & Vision</option>
            <option value="Group Health Plans">Group Health Plans</option>
            <option value="Individual & Family Health Plans">Individual & Family Health Plans</option>
            <option value="Short-Term Medical Plans">Short-Term Medical Plans</option>
            <option value="Supplemental Health Plans">Supplemental Health Plans</option>
            <option value="Medicare Supplement">Medicare Supplement</option>
            <option value="Medicare Advantage">Medicare Advantage</option>
            <option value="Term Life Insurance">Term Life Insurance</option>
            <option value="Whole Life Insurance">Whole Life Insurance</option>
            <option value="Universal Life Insurance">Universal Life Insurance</option>
            <option value="Final Expense Insurance">Final Expense Insurance</option>
            <option value="Group Life Insurance">Group Life Insurance</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
        >
          Submit Quote Request
        </button>
      </form>
    </div>
  );
}
