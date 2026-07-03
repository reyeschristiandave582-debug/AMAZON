"use client";

import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

const CRUMBL_URL = "https://giftclick.org/aff_c?offer_id=163&aff_id=183864&source=Sephora";

const HeroBranding = () => {
  return (
<div className="relative z-10 max-w-[512px] mx-auto px-4 pt-0 pb-0 text-center -mt-2">
{/* Brand Header Marquee */}
    <div 
      className="mb-1 overflow-hidden relative cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: CRUMBL_URL } }, "*")}
    >
      <div className="flex animate-marquee whitespace-nowrap min-w-full will-change-transform">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center mx-4">
            <img 
              src="https://i.imgur.com/Quntd7A.png" 
              alt="Crumbl Cookies Logo" 
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>
        ))}
        {[...Array(10)].map((_, i) => (
          <div key={`dup-${i}`} className="flex items-center mx-4">
            <img 
              src="https://i.imgur.com/Quntd7A.png" 
              alt="Crumbl Cookies Logo" 
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Gift Card Visual */}
    <div 
      className="relative mb-1 group cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: CRUMBL_URL } }, "*")}
    >
      <div className="relative inline-block animate-float will-change-transform">
            {/* Main Card Image */}
            <div className="relative z-10 w-[240px] sm:w-[320px] mx-auto transition-transform duration-500 group-hover:scale-105">
              <img 
                src="https://i.imgur.com/kbdKkos.png" 
                alt="T-Mobile $1000 Gift Card" 
                className="w-full h-auto"
              />
              
                {/* Interactive Shine */}
                <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                </div>
            </div>
          </div>
        </div>

          {/* Main Headline */}
        <div className="flex flex-col items-center gap-0.5 px-2">
        <div className="relative">
            <h1 className="text-[22px] md:text-[28px] font-extrabold leading-tight tracking-tight flex items-center justify-center gap-x-2 flex-wrap font-poppins">
            <span className="text-[#000001]">Unlock</span>
            <span className="text-[#000001]">Sephora</span>
            <div className="flex items-center -ml-1">
              <Gift className="w-6.0 h-6.0 text-[#000001] fill-transparent" />
            </div>
          </h1>
        </div>
        
        {/* Sub-headline */}
        <div className="flex items-center justify-center gap-2 w-full text-center">
          <Sparkles className="w-3.5 h-3.5 text-[#000000] shrink-0 animate-sparkle" />
          <p className="text-[13px] sm:text-sm md:text-[15px] text-[#0e100f]/90 font-medium leading-relaxed whitespace-nowrap font-poppins">
            Here&apos;s how to claim your <span className="text-[#000001] font-bold">$750 gift card</span>
          </p>
          <Sparkles className="w-3.5 h-3.5 text-[#000000] shrink-0 animate-sparkle" />
        </div>
      </div>
    </div>
  );
};

export default HeroBranding;

