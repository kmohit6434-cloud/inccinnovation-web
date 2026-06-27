import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialImpact from './components/SocialImpact';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portal from './components/Portal';

const HomePage = () => (
  <div className="page-animate">
    <Hero />
    <SocialImpact />
    <Services />
    <Contact />
  </div>
);

export default function App() {
  // Loading state banaya
  const [loading, setLoading] = useState(true);

  // 2 second ka timer lagaya
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Agar loading true hai, toh Splash Screen dikhao
  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest text-gray-900 mb-6 uppercase">
          INCC<span className="text-primary" style={{ color: '#0d9488' }}>INNOVATION</span>
        </h1>
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-teal-600 animate-progress"></div>
        </div>
      </div>
    );
  }

  // Loading khatam hone par main website dikhao
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portal" element={<div className="page-animate"><Portal /></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
