import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-t from-teal-200 to-blue-200 text-black pt-16 pb-8 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">MediGuardian</h3>
            <p className="text-black-300 mb-4">
              Your personal health guardian, providing proactive health monitoring and support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-black-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-black-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-black-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-black-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black-300">Features</a></li>
              <li><a href="#" className="text-black-300">How it works</a></li>
              <li><a href="#" className="text-black-300">Pricing</a></li>
              <li><a href="#" className="text-black-300">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black-300">About Us</a></li>
              <li><a href="#" className="text-black-300">Careers</a></li>
              <li><a href="#" className="text-black-300">Blog</a></li>
              <li><a href="#" className="text-black-300">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black-300">Help Center</a></li>
              <li><a href="#" className="text-black-300">Contact Us</a></li>
              <li><a href="#" className="text-black-300">Privacy Policy</a></li>
              <li><a href="#" className="text-black-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-black-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black-400 text-sm mb-4 md:mb-0">© 2025 MediGuardian. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-black-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-black-400 text-sm">Terms of Service</a>
            <a href="#" className="text-black-400 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
