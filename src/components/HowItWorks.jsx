import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Truck, Home, ShieldCheck, PackageCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-6 h-6 text-white" />,
      title: "1. Order & Planning",
      description: "B2B partners place bulk orders. Our system calculates raw material requirements and assigns tasks to specific village clusters."
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "2. Raw Material Distribution",
      description: "We deliver high-quality raw materials (spices, eco-friendly papers) directly to the homes of our micro-entrepreneurs."
    },
    {
      icon: <Home className="w-6 h-6 text-white" />,
      title: "3. Home-Based Production",
      description: "Trained rural workers manufacture the products from the comfort of their homes using our provided micro-machines."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "4. Quality Control (QC)",
      description: "Finished products are collected and brought to our central hub for strict quality, hygiene, and consistency checks."
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-white" />,
      title: "5. B2B Delivery",
      description: "Products are professionally packaged, white-labeled if required, and dispatched to wholesalers and brands on time."
    }
  ];

  return (
    <div className="py-24 bg-bgLight relative z-10 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-textDark mb-4"
          >
            How <span className="text-primary">Inccinnovation</span> Works
          </motion.h2>
          <p className="text-gray-600 font-body text-lg">A seamless, tech-driven decentralized supply chain.</p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Main Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline Icon Node */}
                <div className="absolute left-0 md:left-2 top-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-bgLight z-10">
                  {step.icon}
                </div>
                
                {/* Content Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-textDark font-heading mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
