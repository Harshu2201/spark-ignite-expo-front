
import React from "react";
import { Mail, Phone } from "lucide-react";
import UnstopLogo from "../assets/unstop-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-white py-8 border-t border-violet-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
              Contact Us
            </h3>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-violet-400" />
              <a href="mailto:ecellmeswcoe@gmail.com" className="hover:text-violet-300 transition-colors">
                ecellmeswcoe@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-violet-400" />
              <a href="mailto:harshad.pakhale@mescoeorg.onmicrosoft.com" className="hover:text-violet-300 transition-colors">
                harshad.pakhale@mescoeorg.onmicrosoft.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-violet-400" />
              <a href="tel:+919067572205" className="hover:text-violet-300 transition-colors">
                +91 9067572205 (Harshad)
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-violet-400" />
              <a href="tel:+918805525762" className="hover:text-violet-300 transition-colors">
                +91 8805525762 (Manas)
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-400">© 2025 InnovatExpo</p>
            <div className="flex items-center mt-3 gap-2">
              <p className="text-sm text-gray-400">Powered by</p>
              <a href="https://unstop.com" target="_blank" rel="noopener noreferrer">
                <img src={UnstopLogo} alt="Unstop Logo" className="h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
