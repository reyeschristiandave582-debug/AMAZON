"use client";

import React from "react";

interface Step {
  number: number;
  title: string;
  subtitle: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Start the review",
    subtitle: "Click 'Start Review' below to verify eligibility",
  },
  {
    number: 2,
    title: "Enter basic details",
    subtitle: "Valid name and email required",
  },
  {
    number: 3,
    title: "Complete short survey & deals",
    subtitle: "Answer quick questions & complete 3 to 5 required offers",
  },
  {
    number: 4,
    title: "Claim your reward",
    subtitle: "Receive your $750 reward once verified",
  },
];

/**
 * InstructionSteps Component
 * 
 * Clean 4-step instructions card styled with #232f3e badges and an #ff9900 border accent.
 */
export default function InstructionSteps() {
  return (
    <section className="relative w-full max-w-md mx-auto px-4 sm:px-5 mb-4 mt-3">
      {/* Steps Card Wrapper - #ff9900 Accent Border */}
      <div className="relative rounded-[1.5rem] sm:rounded-[2rem] p-3.5 sm:p-5 bg-white/90 backdrop-blur-md border-2 border-[#ff9900]/40 shadow-xl overflow-hidden transition-all duration-300">
        {/* Decorative Background Texture */}
        <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden pointer-events-none">
          <img
            src="https://i.imgur.com/tLSCUmt.png"
            alt=""
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        {/* Dynamic Step List */}
        <div className="relative z-10 space-y-2 sm:space-y-2.5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-2.5 group/item animate-in fade-in slide-in-from-left duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Number Badge (#232f3e) */}
              <div className="relative flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-[#232f3e] text-white font-bold text-[10px] sm:text-xs shadow-sm group-hover/item:scale-105 transition-transform duration-200 mt-0.5">
                {step.number}
              </div>

              {/* Step Title & Subtext */}
              <div className="flex-1 border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                <p className="text-gray-900 text-[13px] sm:text-[14px] font-bold tracking-tight leading-snug">
                  {step.title}
                </p>
                <p className="text-gray-500 text-[11px] sm:text-[12px] font-medium leading-tight mt-0.5">
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
