
import React from "react";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
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
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/meswcoe_e_cell?igsh=MWg0a2ptaXkzYXNqOA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-violet-300 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/meswcoe-e-cell/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-violet-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://chat.whatsapp.com/B9khcm1zUf6DcK8C2GKFur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
                </svg>
              </a>
            </div>
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
