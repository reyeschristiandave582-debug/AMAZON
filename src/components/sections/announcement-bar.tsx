"use client";

import React, { useState, useEffect } from "react";
import { Clock, Sparkles } from "lucide-react";

/**
 * AnnouncementBar Component
 * 
 * A sticky top bar with a countdown timer, sparkle icons, and a shimmering bottom border.
 * Built to pixel-perfect accuracy using Next.js 15, TypeScript, and Tailwind CSS.
 */
const AnnouncementBar = () => {
  // Initial time set to 5 minutes (300 seconds)
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time as M:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-[#000001] border-b border-[#000001]/30 py-1.5 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
      {/* Sparkle Icons Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <Sparkles 
          className="absolute left-[10%] top-1/2 -translate-y-1/2 w-4 h-4 text-white animate-pulse" 
          strokeWidth={1.5}
        />
        <Sparkles 
          className="absolute right-[10%] top-1/2 -translate-y-1/2 w-4 h-4 text-white animate-pulse" 
          strokeWidth={1.5}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-xl mx-auto">
        {/* Top Row: Timer Message */}
        <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-2 text-center">
              <Clock 
                className="w-3.5 h-3.5 text-[#ffffff] animate-pulse shrink-0" 
                strokeWidth={2.5}
              />
              <p className="text-[#ffffff] text-[12px] font-bold tracking-tight text-center">
                You have{" "}
                <span className="text-[#ffffff] tabular-nums font-black">
                  {formatTime(timeLeft)}
                </span>{" "}
                minutes left to unlock your Sephora reward
              </p>
            </div>
        </div>

        {/* Bottom Row: Subtext with decorative lines */}
        <div className="flex items-center gap-2 mt-0.5">
          <div className="h-[1px] w-4 bg-[#ffffff]"></div>
          <p className="text-[#ffffff] text-[9px] uppercase tracking-[0.15em] font-bold">
            Complete the steps before access expires
          </p>
          <div className="h-[1px] w-4 bg-[#ffffff]"></div>
        </div>
      </div>

      {/* Shimmering Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#000001] to-transparent w-full opacity-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/20 animate-shine"></div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
