import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-bgLight z-[9999] flex flex-col items-center justify-center">
      <motion.div 
        className="flex items-center space-x-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-heading font-extrabold text-textDark tracking-wider">
          INCC<span className="text-primary">INNOVATION</span>
        </h1>
      </motion.div>

      <div className="mt-8 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
      
      <motion.p 
        className="mt-4 text-sm font-body text-gray-500 font-medium tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Empowering Manufacturing
      </motion.p>
    </div>
  );
};

export default Loader;
