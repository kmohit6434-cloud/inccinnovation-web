import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-tight">
              INCC<span className="text-primary">INNOVATION</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/#services" className="text-sm font-semibold text-gray-600 hover:text-primary">Services</a>
            <a href="/#impact" className="text-sm font-semibold text-gray-600 hover:text-primary">Social Impact</a>
            <Link to="/portal" className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5">
              Partner Portal
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
