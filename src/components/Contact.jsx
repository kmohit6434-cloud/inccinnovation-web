import React from "react";
import { Phone, Mail, MessageSquare, Send, AlertTriangle, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center border border-gray-100">
          <img src="/mohit.png" alt="Mohit Kumar" className="w-32 h-32 rounded-full object-cover border-4 border-primary mb-4 md:mb-0 md:mr-8" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Mohit Kumar</h2>
            <p className="text-primary font-semibold text-lg">Founder & CEO, Inccinnovation</p>
            <p className="text-gray-500 mt-2 text-sm max-w-md">Leading the mission for local innovation and tech-driven solutions.</p>
          </div>
        </div>

        {/* Buttons in White Background */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: MessageSquare, label: "WhatsApp", color: "text-emerald-500", link: "https://wa.me/918000130580" },
            { icon: PhoneCall, label: "Direct Call", color: "text-blue-500", link: "tel:+918000130580" },
            { icon: AlertTriangle, label: "Complaint", color: "text-red-500", link: "#contact" },
            { icon: Mail, label: "Email", color: "text-amber-500", link: "mailto:Inccinnovation@Gmail.com" }
          ].map((item, i) => (
            <a key={i} href={item.link} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-all">
              <item.icon className={`w-6 h-6 ${item.color} mb-2`} />
              <span className="text-xs font-bold text-gray-700">{item.label}</span>
            </a>
          ))}
        </div>
        {/* White Background Form */}
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 bg-gray-50 rounded-xl border" />
              <input type="text" placeholder="Company Name" className="w-full p-3 bg-gray-50 rounded-xl border" />
            </div>
            <select className="w-full p-3 bg-gray-50 rounded-xl border">
              <option>General Support</option>
              <option>Register a Complaint</option>
              <option>Partnership Inquiry</option>
            </select>
            <textarea rows="4" placeholder="Your Message..." className="w-full p-3 bg-gray-50 rounded-xl border"></textarea>
            <button className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 flex items-center justify-center">
              Submit Request <Send className="w-4 h-4 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
