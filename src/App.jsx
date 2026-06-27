import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import SocialImpact from './components/SocialImpact';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 2500); }, []);
  
  if (loading) return <Loader />;
  
  return (
    <div className="bg-bgLight min-h-screen font-body text-textDark">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <SocialImpact />
      <Contact />
      <Footer />
    </div>
  );
}
