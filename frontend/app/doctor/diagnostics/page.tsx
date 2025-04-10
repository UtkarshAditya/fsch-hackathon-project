"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function DiagnosticsPage() {
  const diagnostics = [
    {
      id: 1,
      patientName: "John Doe",
      issue: "High Blood Pressure",
      date: "2025-04-10",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      issue: "Diabetes Risk",
      date: "2025-04-09",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-teal-600">Diagnostics</h1>

        <div className="space-y-4">
          {diagnostics.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl shadow-md bg-gray-50 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{item.patientName}</p>
                  <p className="text-sm text-gray-600">{item.issue}</p>
                  <p className="text-xs text-gray-500 mt-1">Date: {item.date}</p>
                </div>
                <Button
                  onClick={() => {
                    alert("Access NFT/Wallet coming soon!");
                  }}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Access Wallet <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


