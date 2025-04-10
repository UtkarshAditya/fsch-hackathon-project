"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-teal-50 text-teal-900 flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to MediGuardian
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Secure your healthcare records, access AI diagnostics, and share with doctors
        — all powered by blockchain.
      </motion.p>

      <div className="flex gap-4 mb-12">
        <Link
          href="/signup"
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl transition shadow-lg"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="border border-teal-600 text-teal-700 hover:bg-teal-100 px-6 py-3 rounded-xl transition shadow"
        >
          Login
        </Link>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        {[
          {
            title: "AI Health Analysis",
            desc: "Upload basic health data for instant AI-powered insights.",
          },
          {
            title: "Data Ownership",
            desc: "Your records are stored as NFTs in your wallet. You own your data.",
          },
          {
            title: "Doctor Collaboration",
            desc: "Share diagnostics securely with verified doctors and specialists.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-teal-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
