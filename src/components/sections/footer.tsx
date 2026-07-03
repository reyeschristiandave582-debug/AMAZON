"use client";

import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full max-w-[512px] mx-auto px-4 pt-0 pb-12 mt-6 text-center">
      {/* Social Media Icons */}
      <div className="flex items-center justify-center gap-1.5 mb-2">
          <a 
            href="https://www.facebook.com/sephora/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#000001] hover:bg-[#000001] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-3.5 h-3.5 fill-current" />
          </a>
          <a 
            href="https://www.instagram.com/sephora/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#000001] hover:bg-[#000001] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a 
            href="https://www.linkedin.com/company/sephora" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#000001] hover:bg-[#000001] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5 fill-current" />
          </a>
      </div>

   {/* Copyright */}
      <p className="text-[#182C54]/60 text-[10px] font-bold mb-4 tracking-tight italic">
        © 2026 All rights reserved.
      </p>
      
    </footer>
  );
};

export default Footer;


