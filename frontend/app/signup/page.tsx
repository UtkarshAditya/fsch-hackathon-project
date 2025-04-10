"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup Data:", form);
    // Save to Supabase or local for now
    router.push("/login");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <form onSubmit={handleSubmit} className="bg-teal-100 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-teal-800">Sign Up</h2>
        {["name", "email", "password", "contact"].map((field) => (
          <input
            key={field}
            name={field}
            type={field === "password" ? "password" : "text"}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            onChange={handleChange}
            className="mb-3 p-2 w-full border rounded"
            required
          />
        ))}
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
          className="mb-3 p-2 w-full border rounded"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded w-full">
          Submit
        </button>
      </form>
    </main>
  );
}

