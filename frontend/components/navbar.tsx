import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10 py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-mediguardian-darkblue">
          Medi<span className="text-mediguardian-teal">Guardian</span>
        </span>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-700 hover:text-mediguardian-teal transition-colors">Features</a>
        <a href="#why" className="text-gray-700 hover:text-mediguardian-teal transition-colors">Why MediGuardian</a>
        <a href="#stats" className="text-gray-700 hover:text-mediguardian-teal transition-colors">Health Stats</a>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-mediguardian-teal text-mediguardian-teal hover:bg-mediguardian-teal hover:text-white">
            Log in
          </Button>
          <Button className="bg-mediguardian-teal hover:bg-mediguardian-purple text-white">
            Sign up
          </Button>
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
          <a href="#features" className="text-gray-700 hover:text-mediguardian-teal transition-colors" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a href="#why" className="text-gray-700 hover:text-mediguardian-teal transition-colors" onClick={() => setIsOpen(false)}>
            Why MediGuardian
          </a>
          <a href="#stats" className="text-gray-700 hover:text-mediguardian-teal transition-colors" onClick={() => setIsOpen(false)}>
            Health Stats
          </a>
          <div className="flex flex-col space-y-2">
            <Button variant="outline" className="border-mediguardian-teal text-mediguardian-teal w-full">
              Log in
            </Button>
            <Button className="bg-mediguardian-teal hover:bg-mediguardian-purple text-white w-full">
              Sign up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;