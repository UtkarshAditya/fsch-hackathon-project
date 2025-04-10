'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import 'animate.css';

export default function PatientDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    // Add logout logic here (e.g. clear token, redirect, etc.)
    alert('Logged out!');
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-teal-50 p-6 text-gray-800 relative">
      {/* Logout button top-right */}
      <div className="absolute top-4 right-6">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow"
        >
          Logout
        </button>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 animate__animated animate__fadeInDown">
        Welcome to MediGuardian 👤
      </h1>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate__animated animate__fadeInUp">
        {/* Upload File as NFT */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all hover:scale-[1.02]">
          <h2 className="text-xl font-semibold mb-2">Upload Medical File</h2>
          <p className="text-sm mb-4">Upload your medical file which will be saved securely as an NFT.</p>
          <button disabled className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md cursor-not-allowed">
            Coming Soon
          </button>
        </div>

        {/* Go for AI Insights */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all hover:scale-[1.02]">
          <h2 className="text-xl font-semibold mb-2">AI Health Insights</h2>
          <p className="text-sm mb-4">Answer health questions to receive smart insights from our AI model.</p>
          <Link href="/user/scan">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
              Start Scan
            </button>
          </Link>
        </div>

        {/* View History */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all hover:scale-[1.02]">
          <h2 className="text-xl font-semibold mb-2">View History</h2>
          <p className="text-sm mb-4">Check your past diagnostics and doctor interactions.</p>
          <button disabled className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md cursor-not-allowed">
            Coming Soon
          </button>
        </div>
      </div>
    </main>
  );
}
