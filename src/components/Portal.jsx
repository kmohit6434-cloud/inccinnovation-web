import React, { useState } from 'react';
import { ShoppingCart, AlertTriangle, Briefcase, Truck, Package, ArrowLeft, Send, User, ShieldCheck } from 'lucide-react';

export default function Portal() {
  const [currentView, setCurrentView] = useState('login');
  const [activeCategory, setActiveCategory] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Login/Session Data
  const [user, setUser] = useState({ name: '', phone: '', password: '' });
  const [regData, setRegData] = useState({ name: '', phone: '', password: '', question: 'Aapke pehle school ka kya naam tha?', answer: '' });
  const [forgotData, setForgotData] = useState({ phone: '', answer: '', newPassword: '' });
  const [activeQuestion, setActiveQuestion] = useState('');
  const [formDetails, setFormDetails] = useState({ message: '', quantity: '' });
  const [status, setStatus] = useState({ loading: false, msg: '' });

  const securityQuestions = ["Aapke pehle school ka kya naam tha?", "Aapka janm kis shahar me hua tha?", "Aapke bachpan ke best friend ka naam kya hai?"];
  const portalOptions = [
    { id: 'Complaint', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50', title: 'Register Complaint' },
    { id: 'Order', icon: ShoppingCart, color: 'text-blue-500', bg: 'bg-blue-50', title: 'Place New Order' },
    { id: 'Partnership', icon: Briefcase, color: 'text-purple-500', bg: 'bg-purple-50', title: 'Partnership Program' },
    { id: 'B2B Supply', icon: Truck, color: 'text-emerald-500', bg: 'bg-emerald-50', title: 'B2B Supply Request' },
    { id: 'Wholesale', icon: Package, color: 'text-amber-500', bg: 'bg-amber-50', title: 'Wholesale Products' }
  ];

  const switchView = (view) => { setError(''); setSuccess(''); setCurrentView(view); };

  const handleRegister = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('inccUsers')) || [];
    if (users.find(u => u.phone === regData.phone)) { setError('Yeh Number already registered hai!'); return; }
    users.push(regData);
    localStorage.setItem('inccUsers', JSON.stringify(users));
    setSuccess('Account created! Login karein.');
    setTimeout(() => switchView('login'), 2000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('inccUsers')) || [];
    const foundUser = users.find(u => u.phone === user.phone && u.password === user.password);
    if (foundUser) {
      setUser({ name: foundUser.name, phone: foundUser.phone });
      switchView('dashboard');
    } else { setError('Galat details!'); }
  };

  const submitRequest = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: '' });
    try {
      const response = await fetch("https://inccinnovation-backend.onrender.com/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: `${user.name} (Client: ${user.phone})`, emailPhone: user.phone, category: activeCategory, details: formDetails.message })
      });
      if ((await response.json()).success) {
        setStatus({ loading: false, msg: 'Request Submitted! 👍' });
        setTimeout(() => { switchView('dashboard'); setStatus({ loading: false, msg: '' }); }, 2000);
      }
    } catch { setStatus({ loading: false, msg: 'Server error.' }); }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      <div className="max-w-md mx-auto">
        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm font-bold rounded-xl text-center">{error}</div>}
        
        {currentView === 'login' && (
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Partner Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="text" required placeholder="Mobile Number" onChange={(e)=>setUser({...user, phone: e.target.value})} className="w-full p-3 bg-gray-50 rounded-xl border" />
              <input type="password" required placeholder="Password" onChange={(e)=>setUser({...user, password: e.target.value})} className="w-full p-3 bg-gray-50 rounded-xl border" />
              <button className="w-full bg-primary text-white py-3 rounded-xl font-bold">Login</button>
            </form>
            <button onClick={() => switchView('register')} className="w-full mt-4 text-sm font-bold text-primary">Create Account</button>
          </div>
        )}

        {currentView === 'register' && (
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <input type="text" required placeholder="Full Name" onChange={(e)=>setRegData({...regData, name: e.target.value})} className="w-full p-3 bg-gray-50 rounded-xl border" />
              <input type="text" required placeholder="Mobile Number" onChange={(e)=>setRegData({...regData, phone: e.target.value})} className="w-full p-3 bg-gray-50 rounded-xl border" />
              <input type="password" required placeholder="Password" onChange={(e)=>setRegData({...regData, password: e.target.value})} className="w-full p-3 bg-gray-50 rounded-xl border" />
              <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold">Register</button>
            </form>
            <button onClick={() => switchView('login')} className="w-full mt-4 text-sm font-bold text-gray-500">Back to Login</button>
          </div>
        )}

        {currentView === 'dashboard' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-3xl shadow-sm mb-8 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Hello, {user.name}! 👋</h2>
                <p className="text-gray-500 text-sm">Welcome to Inccinnovation</p>
              </div>
              <button onClick={() => switchView('login')} className="text-red-500 font-bold">Logout</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {portalOptions.map((opt, i) => (
                <div key={i} onClick={() => { setActiveCategory(opt.title); switchView('form'); }} className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md text-center flex flex-col items-center">
                  <opt.icon className={`w-8 h-8 ${opt.color} mb-3`} />
                  <span className="font-bold text-sm">{opt.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'form' && (
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <button onClick={() => switchView('dashboard')} className="text-sm font-bold mb-4">← Back</button>
            <h2 className="text-xl font-bold mb-4">{activeCategory}</h2>
            <form onSubmit={submitRequest} className="space-y-4">
              <textarea rows="4" required placeholder="Enter details..." onChange={(e)=>setFormDetails({...formDetails, message: e.target.value})} className="w-full p-3 bg-gray-50 rounded-xl border"></textarea>
              <button className="w-full bg-primary text-white py-3 rounded-xl font-bold">{status.loading ? '...' : 'Submit'}</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
