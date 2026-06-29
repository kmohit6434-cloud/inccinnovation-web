import React, { useState } from "react";
import { Mail, MessageSquare, Send, AlertTriangle, PhoneCall } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", company: "", emailPhone: "", category: "General Support", details: "" });
  const [status, setStatus] = useState({ loading: false, message: "", isSuccess: false });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", isSuccess: false });
    try {
      const response = await fetch("https://inccinnovation-backend.onrender.com/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ loading: false, message: "Message sent successfully! 👍", isSuccess: true });
        setFormData({ name: "", company: "", emailPhone: "", category: "General Support", details: "" });
      } else {
        setStatus({ loading: false, message: data.message || "Error, dobara try karein.", isSuccess: false });
      }
    } catch (error) {
      setStatus({ loading: false, message: "Backend server chalu nahi hai.", isSuccess: false });
    }
  };

  return (
    <div id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Leadership Profiles - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Mohit Kumar */}
          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col sm:flex-row items-center border border-gray-100">
            <img src="/mohit.png" alt="Mohit Kumar" className="w-24 h-24 rounded-full object-cover border-4 border-primary mb-4 sm:mb-0 sm:mr-6 shrink-0" />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold text-gray-900">Mohit Kumar</h2>
              <p className="text-primary font-semibold text-sm">Founder & CEO</p>
            </div>
          </div>

          {/* Dharmpal Meena */}
          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col sm:flex-row items-center border border-gray-100">
            <img src="/dharmpal.jpg" alt="Dharmpal Meena" className="w-24 h-24 rounded-full object-cover border-4 border-primary mb-4 sm:mb-0 sm:mr-6 shrink-0" />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold text-gray-900">Dharmpal Meena</h2>
              <p className="text-primary font-semibold text-sm">Co-Founder & MD</p>
            </div>
          </div>

        </div>

        {/* Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: MessageSquare, label: "WhatsApp", color: "text-emerald-500", link: "https://wa.me/918000130580" },
            { icon: PhoneCall, label: "Direct Call", color: "text-blue-500", link: "tel:+918000130580" },
            { icon: AlertTriangle, label: "Complaint", color: "text-red-500", link: "#contact" },
            { icon: Mail, label: "Email", color: "text-amber-500", link: "mailto:Inccinnovation@Gmail.com" }
          ].map((item, i) => (
            <a key={i} href={item.link} target={item.label === "WhatsApp" ? "_blank" : "_self"} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-all">
              <item.icon className={`w-6 h-6 ${item.color} mb-2`} />
              <span className="text-xs font-bold text-gray-700">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full p-3 bg-gray-50 rounded-xl border outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className="w-full p-3 bg-gray-50 rounded-xl border outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <input type="text" name="emailPhone" value={formData.emailPhone} onChange={handleChange} required placeholder="Email / Phone" className="w-full p-3 bg-gray-50 rounded-xl border outline-none focus:ring-2 focus:ring-primary" />
            <select name="category" value={formData.category} onChange={handleChange} className="w-full p-3 bg-gray-50 rounded-xl border outline-none focus:ring-2 focus:ring-primary text-gray-600">
              <option>General Support</option><option>Complaint</option><option>Partnership</option><option>B2B Bulk Order</option>
            </select>
            <textarea rows="4" name="details" value={formData.details} onChange={handleChange} required placeholder="Your Message..." className="w-full p-3 bg-gray-50 rounded-xl border outline-none focus:ring-2 focus:ring-primary resize-none"></textarea>
            
            {status.message && <div className={`p-3 rounded-xl text-sm font-semibold ${status.isSuccess ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}>{status.message}</div>}
            
            <button type="submit" disabled={status.loading} className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 flex items-center justify-center">
              {status.loading ? "Sending..." : "Submit Request"} <Send className="w-4 h-4 ml-2" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
