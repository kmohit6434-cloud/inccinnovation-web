import React from 'react';
import { motion } from 'framer-motion';
import { PackageCheck, Truck, Users, Leaf } from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      icon: <PackageCheck className="w-8 h-8 text-primary" />,
      title: "Contract Manufacturing",
      description: "High-quality, white-label production of FMCG (Masale) and eco-friendly products tailored exactly to your brand's requirements."
    },
    {
      icon: <Truck className="w-8 h-8 text-secondary" />,
      title: "B2B Bulk Supply",
      description: "Direct factory-rate supply of pure spices and dona-pattal for wholesalers, caterers, and large-scale event organizers."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Rural Micro-Entrepreneurship",
      description: "We empower communities by setting up home-based manufacturing units, providing training, and ensuring continuous raw material supply."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Tech-Driven Logistics",
      description: "Our in-house real-time tracking dashboard ensures strict quality control and on-time pickup/delivery from every village unit."
    }
  ];

  return (
    <div id="services" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-textDark mb-4"
          >
            Our Core <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto font-body text-lg"
          >
            End-to-end manufacturing and supply chain solutions designed for B2B scale, unmatched quality, and true social impact.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 bg-bgLight rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-textDark mb-3 font-heading group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
