import React from 'react';
import { ArrowRight, ShieldCheck, Factory, HeartHandshake } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-8 shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span>Decentralized Manufacturing Network</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
          Empowering Rural India Through <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            Decentralized Manufacturing
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-medium mb-10">
          We connect rural micro-entrepreneurs with large-scale B2B wholesale demand. High-quality production, technology-driven supply chain, and true social impact.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1 flex items-center justify-center">
            Become a Partner <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 rounded-full font-bold text-lg border-2 border-gray-200 hover:border-primary/20 hover:bg-gray-50 transition-all flex items-center justify-center">
            Explore Services
          </a>
        </div>

        {/* Honest Trust Badges (Replaced Fake Stats) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="bg-emerald-50 p-4 rounded-full mb-4">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">100% Quality Assured</h3>
            <p className="text-sm text-gray-500 mt-2">Strict standards maintained at our central QC hub.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="bg-blue-50 p-4 rounded-full mb-4">
              <Factory className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Direct Factory Rates</h3>
            <p className="text-sm text-gray-500 mt-2">No middlemen. Best wholesale pricing for B2B partners.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="bg-rose-50 p-4 rounded-full mb-4">
              <HeartHandshake className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Women Empowerment</h3>
            <p className="text-sm text-gray-500 mt-2">Generating real home-based income for rural communities.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
