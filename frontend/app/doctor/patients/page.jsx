"use client";

import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export default function ViewPatientsPage() {
  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 34,
      gender: "Male",
      lastVisit: "2025-04-09",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      gender: "Female",
      lastVisit: "2025-04-07",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-teal-600">Patient Records</h1>

        <div className="space-y-4">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="p-6 rounded-xl shadow-md bg-gray-50 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{patient.name}</p>
                  <p className="text-sm text-gray-600">
                    Age: {patient.age} • Gender: {patient.gender}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Last Visit: {patient.lastVisit}
                  </p>
                </div>
                <Button
                  onClick={() => {
                    alert("Redirect to detailed record coming soon!");
                  }}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  View <Eye className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
