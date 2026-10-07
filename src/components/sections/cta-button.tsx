"use client";

import React from 'react';
import { Star } from 'lucide-react';

/**
 * CTAButton Component
 * 
 * High-converting primary CTA button styled with #232f3e dark navy tones, 
 * vibrant gold star accents, continuous shine animation, and a thumb-friendly layout.
 */
export default function CTAButton() {
  const url = "https://giftclick.org/aff_c?offer_id=1431&aff_id=200438&source=zon";

  const handleClick = (e: React.MouseEvent) => {
    // For preview environment
    if (typeof window !== 'undefined' && window.parent) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    }
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto px-4 flex flex-col items-center mt-5 mb-2">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative w-full h-[52px] sm:h-[58px] bg-[#232f3e] hover:bg-[#19222d] text-white rounded-full flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(35,47,62,0.4)] hover:shadow-[0_12px_30px_rgba(35,47,62,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden no-underline border border-white/20 animate-pulse"
      >
        {/* Continuous Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -left-full group-hover:animate-shine pointer-events-none" />

        <div className="flex items-center justify-center gap-2.5 sm:gap-3 relative z-10">
          <Star 
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#FFC220] text-[#FFC220] flex-shrink-0" 
            style={{ filter: 'drop-shadow(0 0 5px rgba(255,194,32,0.7))' }}
          />

          <span className="text-[14px] sm:text-[16px] font-black uppercase text-white tracking-[0.14em] drop-shadow-sm">
            START REVIEW
          </span>

          <Star 
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#FFC220] text-[#FFC220] flex-shrink-0" 
            style={{ filter: 'drop-shadow(0 0 5px rgba(255,194,32,0.7))' }}
          />
        </div>
      </a>

      {/* Ambient Floor Glow */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-[#232f3e]/20 blur-xl -z-10 rounded-full pointer-events-none" />
    </div>
  );
}
