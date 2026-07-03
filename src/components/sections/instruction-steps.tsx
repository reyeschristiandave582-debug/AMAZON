"use client";

import React from "react";
import {
  ShoppingBag,
  UserPlus,
  ClipboardList,
  Gift,
  Unlock,
} from "lucide-react";

interface Step {
  icon: React.ReactNode;
  text: string | React.ReactNode;
}

const steps: Step[] = [
  {
    icon: <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
    text: 'Click the "Start Review" button',
  },
  {
    icon: <UserPlus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
    text: "Enter your email and basic shopper details",
  },
  {
    icon: <ClipboardList className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
    text: "Answer our quick shopper experience survey",
  },
  {
    icon: <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
    text: "Complete 4–5 featured partner offers",
  },
  {
    icon: <Unlock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
    text: "Unlock Sephora Rewards",
  },
];

export default function InstructionSteps() {
  return (
    <section className="relative w-full max-w-md mx-auto px-4 sm:px-5 mb-4 mt-3">
      <div className="relative rounded-[1.5rem] sm:rounded-[2rem] p-2 sm:p-4 bg-white/5 backdrop-blur-md border-2 border-[#000001]/30 shadow-[0_8px_32_rgb(204, 0, 0)] overflow-hidden group/box transition-all duration-500 hover:border-[#000001]/50 hover:scale-[1.01]">
        <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden pointer-events-none">
          <img
            src="https://i.imgur.com/i18sUbQ.jpeg"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -left-full group-hover/box:animate-shine pointer-events-none" />

        <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#006241]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#141414]/8 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-0 sm:space-y-1">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 sm:gap-2.5 group/item animate-in fade-in slide-in-from-left duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-lg sm:rounded-xl bg-white/40 border border-[#0000001d]/15 text-[#000000] group-hover/item:scale-110 group-hover/item:bg-white/60 transition-all duration-300 shadow-sm">
                {step.icon}
              </div>

              <div className="flex-1 border-b border-[#1d4321]/5 pb-0 last:border-0">
                <p className="text-[#141414] text-[13px] sm:text-[15px] font-semibold tracking-tight leading-tight py-1.5">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


