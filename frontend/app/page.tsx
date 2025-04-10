'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Bell, Heart, Shield,  
   Menu, X } from "lucide-react";

import WhySection from "@/components/why";
import StatsSection from "@/components/stats";
import Footer from "@/components/footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Initialize intersection observer for scroll animations
    const sections = document.querySelectorAll(".section");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  

  return (
    <main className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="relative z-10 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-900">
            Medi<span className="text-teal-500">Guardian</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-teal-500 transition-colors">Features</a>
          <a href="#why" className="text-gray-700 hover:text-teal-500 transition-colors">Why MediGuardian</a>
          <a href="#stats" className="text-gray-700 hover:text-teal-500 transition-colors">Health Stats</a>
          <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white">
              Log in
            </Button>
           </Link>
           <Link href="/signup"> 
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              Sign up
            </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-6 flex flex-col space-y-4 animate-fade-in md:hidden">
            <a href="#features" className="text-gray-700 hover:text-teal-500 transition-colors" onClick={() => setIsOpen(false)}>
              Features
            </a>
            <a href="#why" className="text-gray-700 hover:text-teal-500 transition-colors" onClick={() => setIsOpen(false)}>
              Why MediGuardian
            </a>
            <a href="#stats" className="text-gray-700 hover:text-teal-500 transition-colors" onClick={() => setIsOpen(false)}>
              Health Stats
            </a>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className="border-teal-500 text-teal-500 w-full">
                Log in
              </Button>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full">
                Sign up
              </Button>
            </div>
          </div>
        )}
      </nav>

    {/* Hero Section */}
<section className="bg-gradient-to-b from-blue-300 to-[#70.7% 0.165 254.624] min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
  <div className="container px-6 md:px-12 flex flex-col lg:flex-row items-center">
    <div className="w-full lg:w-1/2 pt-20 lg:pt-0 z-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Your Health Guardian <br />
        <span className="text-mediguardian-teal text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Always By Your Side</span>
      </h1>

      <p className="mb-8">
        MediGuardian helps you stay proactive about your health with personalized monitoring, timely reminders, and expert insights – all in one secure platform.
      </p>

      <div className="flex flex-col sm:flex-row gap-8 mt-8"> {/* Increased the gap and added margin-top */}
        <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">
          Get Started
        </Button>
        <Button variant="outline" className="group border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-8 py-6 text-lg">
          Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>

    <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center opacity-100"> {/* Removed opacity and animation */}
      <div className="relative w-full max-w-md">
        <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full bg-teal-300 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full bg-blue-600 blur-3xl opacity-20"></div>
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-6">
            <div className="h-8 w-1/2 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mb-6"></div>
            <div className="h-24 bg-teal-200 rounded-lg mb-4"></div>
            <div className="flex gap-3 mb-4">
              <div className="h-12 w-1/3 bg-gray-100 rounded-lg"></div>
              <div className="h-12 w-1/3 bg-gray-100 rounded-lg"></div>
              <div className="h-12 w-1/3 bg-gray-100 rounded-lg"></div>
            </div>
            <div className="h-32 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg mb-4"></div>
            <div className="h-20 bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white z-0"></div>
</section>


     {/* Features Section */}
<section id="features" className="py-20 px-6 md:px-12 bg-white section">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
      Features Designed For Your <span className="text-teal-500">Wellbeing</span>
    </h2>
    <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
      MediGuardian combines cutting-edge technology with intuitive design to keep you in control of your health journey.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div className="p-6 rounded-xl hover:scale-105">
        <div className="bg-teal-200 rounded-full p-4 inline-block mb-4">
          <Activity className="h-10 w-10 text-teal-500" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Real-time Health Monitoring</h3>
        <p className="text-gray-600">Track vital health metrics and receive personalized insights based on your health data.</p>
      </div>

      <div className="p-6 rounded-xl hover:scale-105">
        <div className="bg-teal-200 rounded-full p-4 inline-block mb-4">
          <Bell className="h-10 w-10 text-teal-500" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Health Alerts & Reminders</h3>
        <p className="text-gray-600">Get notifications for health milestones, medication reminders, and more.</p>
      </div>

      <div className="p-6 rounded-xl hover:scale-105">
        <div className="bg-teal-200 rounded-full p-4 inline-block mb-4">
          <Heart className="h-10 w-10 text-teal-500" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Holistic Health Insights</h3>
        <p className="text-gray-600">Stay on top of your health with detailed insights from your lifestyle choices.</p>
      </div>

      <div className="p-6 rounded-xl hover:scale-105">
        <div className="bg-teal-200 rounded-full p-4 inline-block mb-4">
          <Shield className="h-10 w-10 text-teal-500" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Enhanced Data Security</h3>
        <p className="text-gray-600">Your health data is protected with state-of-the-art encryption and blockchain technology.</p>
      </div>
    </div>
  </div>
</section>

<WhySection></WhySection>
<StatsSection></StatsSection>
<Footer></Footer>


      
    </main>
  );
}
