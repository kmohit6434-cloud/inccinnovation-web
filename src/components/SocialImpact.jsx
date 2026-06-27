import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sprout, Home } from 'lucide-react';

const SocialImpact = () => {
  return (
    <div id="impact" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content (Left Side) */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-textDark mb-6">
                More Than Just Business.<br />
                <span className="text-primary">It's a Movement.</span>
              </h2>
              <p className="text-gray-600 font-body text-lg mb-8 leading-relaxed">
                At Inccinnovation, our core mission goes beyond contract manufacturing. We are bringing the factory to the villages. By empowering housewives and unemployed youth in regions like Dausa, Lalsot, and Bharatpur, we are creating sustainable micro-economies at the grassroots level.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4 mt-1">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-textDark font-heading">Women Empowerment</h4>
                    <p className="text-gray-500 font-body mt-1">Providing safe, home-based income sources for housewives without disrupting their daily lives.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-xl mr-4 mt-1">
                    <Home className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-textDark font-heading">Stopping Rural Migration</h4>
                    <p className="text-gray-500 font-body mt-1">Creating solid local jobs so the youth don't have to leave their hometowns in search of work.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-xl mr-4 mt-1">
                    <Sprout className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-textDark font-heading">Sustainable Growth</h4>
                    <p className="text-gray-500 font-body mt-1">Eco-friendly production models and direct wealth distribution into the community.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual/Image Card (Right Side) */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
            >
              {/* Premium Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-95 z-10"></div>
              
              {/* Decorative Pattern */}
              <div className="absolute inset-0 z-0 opacity-20">
                 <div className="absolute inset-0 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:30px_30px]"></div>
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-8 text-center">
                <h3 className="text-3xl font-heading font-bold mb-4 leading-tight">
                  "Building the future,<br/>one village at a time."
                </h3>
                <p className="text-lg font-body opacity-90 max-w-md">
                  Every B2B wholesale order you place directly feeds a family and educates a child in our rural network.
                </p>

                {/* Animated Counters Box */}
                <div className="mt-10 flex space-x-4">
                   <div className="bg-white/20 backdrop-blur-md p-5 rounded-2xl border border-white/30 shadow-lg">
                      <p className="text-sm font-medium uppercase tracking-wider opacity-90 mb-1">Active Villages</p>
                      <p className="text-4xl font-heading font-bold">12+</p>
                   </div>
                   <div className="bg-white/20 backdrop-blur-md p-5 rounded-2xl border border-white/30 shadow-lg">
                      <p className="text-sm font-medium uppercase tracking-wider opacity-90 mb-1">Families Impacted</p>
                      <p className="text-4xl font-heading font-bold">500+</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SocialImpact;
