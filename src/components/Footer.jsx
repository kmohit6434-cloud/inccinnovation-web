import React from "react";

export default function Footer() {
  return (
    <footer className="bg-textDark text-white py-16 text-center border-t border-gray-800 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-extrabold mb-4 tracking-wider">
          INCC<span className="text-primary">INNOVATION</span>
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Empowering rural communities through decentralized manufacturing. A vision by Mohit Kumar.
        </p>
        <div className="border-t border-gray-800 pt-8 text-gray-500 text-sm">
          &copy; 2026 Inccinnovation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
