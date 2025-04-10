'use client';

import { useState } from 'react';

export default function ScanPage() {
  const [form, setForm] = useState({
    age: '',
    gender: '',
    bloodPressure: '',
    cholesterol: '',
    diabetic: false,
    smoker: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
  
    // For checkboxes
    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        [target.name]: target.checked,
      }));
    } else {
      // For other inputs/selects
      setForm((prev) => ({
        ...prev,
        [target.name]: target.value,
      }));
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form:', form);
    // TODO: Call ML model + send to backend/NFT logic
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold text-teal-600 mb-8 text-center">
          Health Diagnostic Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              required
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Blood Pressure
            </label>
            <input
              type="text"
              name="bloodPressure"
              value={form.bloodPressure}
              onChange={handleChange}
              placeholder="e.g., 120/80"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cholesterol
            </label>
            <input
              type="text"
              name="cholesterol"
              value={form.cholesterol}
              onChange={handleChange}
              placeholder="e.g., 190"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              id="diabetic"
              name="diabetic"
              type="checkbox"
              checked={form.diabetic}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
            />
            <label htmlFor="diabetic" className="ml-2 block text-sm text-gray-700">
              Diabetic
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="smoker"
              name="smoker"
              type="checkbox"
              checked={form.smoker}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
            />
            <label htmlFor="smoker" className="ml-2 block text-sm text-gray-700">
              Smoker
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-teal-600 px-4 py-2 text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
