"use client";

import React from 'react';
import { Star } from 'lucide-react';

/**
 * CTAButton Component
 * 
 * The primary call-to-action button with a high-impact design, 
 * including a shimmering hover effect, star icons, and a pulsing bottom glow.
 */
export default function CTAButton() {
  const url = "https://giftclick.org/aff_c?offer_id=163&aff_id=183864&source=Sephora";

  const handleClick = (e: React.MouseEvent) => {
    // For Orchids preview environment
    if (typeof window !== 'undefined' && window.parent) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    }
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto px-4 flex flex-col items-center mt-6 mb-0">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative w-[220px] sm:w-full h-[42px] sm:h-[54px] bg-[#000001] hover:bg-[#000001] text-white rounded-full flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(0,36,204,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden no-underline"
      >
        {/* Shine Animation Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -left-full group-hover:animate-shine pointer-events-none" />

        <div className="flex items-center gap-3 sm:gap-4 relative z-10">
          <Star 
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#ffffff] text-[#ffffff] animate-pulse" 
            style={{ filter: 'none' }}
          />

          <span className="text-[12px] sm:text-[14px] font-bold sm:font-white uppercase text-white tracking-[0.08em] flex items-center gap-1.5 sm:gap-2">
            START REVIEW
          </span>

          <Star 
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#ffffff] text-[#ffffff] animate-pulse" 
            style={{ filter: 'none' }}
          />
        </div>
      </a>

      <p className="mt-3 text-[#182C54]/60 text-[10px] sm:text-[11px] font-bold tracking-tight text-center italic">
        (Instant approval - No purchase required)
      </p>

      {/* Subtle bottom glow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#0024cc]/20 blur-2xl -z-10 rounded-full opacity-50 pointer-events-none" />
    </div>
  );
}
