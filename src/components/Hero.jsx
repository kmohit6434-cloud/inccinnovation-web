import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 border border-primary/20 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Decentralized Manufacturing Network
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-textDark tracking-tight mb-6 leading-tight"
        >
          Empowering Rural India Through <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Decentralized Manufacturing
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 font-body leading-relaxed"
        >
          We connect rural micro-entrepreneurs with large-scale B2B wholesale demand. High-quality production, technology-driven supply chain, and true social impact.
        </motion.p>

        {/* Call To Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center group">
            Become a Partner
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-textDark font-semibold rounded-full shadow-md border border-gray-200 hover:border-primary hover:text-primary transition-all">
            Explore Services
          </button>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-gray-200 pt-10"
        >
          <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100">
            <Users className="w-8 h-8 text-secondary mb-3" />
            <h3 className="text-3xl font-bold text-textDark">1000+</h3>
            <p className="text-gray-500 font-medium mt-1">Rural Workers</p>
          </div>
          <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100">
            <Factory className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-3xl font-bold text-textDark">50+</h3>
            <p className="text-gray-500 font-medium mt-1">Manufacturing Units</p>
          </div>
          <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100">
            <TrendingUp className="w-8 h-8 text-accent mb-3" />
            <h3 className="text-3xl font-bold text-textDark">500+</h3>
            <p className="text-gray-500 font-medium mt-1">B2B Orders</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;

