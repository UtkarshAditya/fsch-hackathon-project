import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
      <div className="container px-6 md:px-12 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 pt-20 lg:pt-0 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Your Health Guardian <br />
            <span className="gradient-text">Always By Your Side</span>
          </h1>
          <p className="text-lg mb-8 text-gray-700 max-w-lg opacity-0 animate-fade-in-delay-1">
            MediGuardian helps you stay proactive about your health with personalized monitoring, timely reminders, and expert insights – all in one secure platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-2">
            <Button className="bg-mediguardian-teal hover:bg-mediguardian-purple text-white px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="group border-mediguardian-teal text-mediguardian-teal hover:bg-mediguardian-teal hover:text-white px-8 py-6 text-lg">
              Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center opacity-0 animate-fade-in-delay-3">
          <div className="relative w-full max-w-md">
            {/* Blue circle background */}
            <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full bg-mediguardian-blue blur-3xl opacity-70"></div>
            
            {/* Purple circle background */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full bg-mediguardian-purple blur-3xl opacity-20"></div>
            
            {/* Mockup of app or dashboard */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 animate-pulse-gentle">
              <div className="p-6">
                <div className="h-8 w-1/2 bg-gradient-to-r from-mediguardian-teal to-mediguardian-blue rounded-full mb-6"></div>
                <div className="h-24 bg-mediguardian-blue/20 rounded-lg mb-4"></div>
                <div className="flex gap-3 mb-4">
                  <div className="h-12 w-1/3 bg-gray-100 rounded-lg"></div>
                  <div className="h-12 w-1/3 bg-gray-100 rounded-lg"></div>
                  <div className="h-12 w-1/3 bg-gray-100 rounded-lg"></div>
                </div>
                <div className="h-32 bg-gradient-to-r from-mediguardian-teal/10 to-mediguardian-blue/10 rounded-lg mb-4"></div>
                <div className="h-20 bg-gray-100 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white z-0"></div>
    </section>
  );
};

export default HeroSection;