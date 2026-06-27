import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <span className="text-2xl font-heading font-extrabold text-textDark tracking-tight">
              INCC<span className="text-primary">INNOVATION</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-600 hover:text-primary font-medium transition-colors">Services</a>
            <a href="#impact" className="text-gray-600 hover:text-primary font-medium transition-colors">Social Impact</a>
            <a href="#portfolio" className="text-gray-600 hover:text-primary font-medium transition-colors">Portfolio</a>
            <button className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all shadow-md">
              Partner Portal
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#services" className="block px-3 py-2 text-gray-600 font-medium">Services</a>
            <a href="#impact" className="block px-3 py-2 text-gray-600 font-medium">Social Impact</a>
            <button className="w-full mt-2 bg-primary text-white px-6 py-2.5 rounded-full font-medium shadow-md">
              Partner Portal
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
