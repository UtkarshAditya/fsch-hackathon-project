"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DoctorDashboard() {
  return (
    <main className="min-h-screen bg-teal-50 p-6">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-teal-700 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Doctor Dashboard
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[
            {
              title: "View Diagnostics",
              href: "/doctor/diagnostics",
              desc: "Check basic ML diagnostics submitted by patients.",
            },
            {
              title: "View Patients",
              href: "/doctor/patients",
              desc: "Browse and manage patient records.",
            },
            {
              title: "Access Patient Wallets",
              href: "/doctor/access",
              desc: "Request access to patient health NFTs (coming soon).",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-xl font-semibold text-teal-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <Link
                href={item.href}
                className="inline-block bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
              >
                Go
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
