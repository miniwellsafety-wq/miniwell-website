"use client";

import React, { useState } from "react";
import { LayoutGrid, Fingerprint, HardHat, Diamond } from "lucide-react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Consultation",
      description: "We develop unique solutions that fit your property's safety needs.",
      icon: LayoutGrid,
    },
    {
      num: "02",
      title: "Custom Design System",
      description: "Our experts engineer specialized safety layouts tailored to your space.",
      icon: Fingerprint,
    },
    {
      num: "03",
      title: "Professional Installation",
      description: "Certified technicians ensure your systems are installed to local codes.",
      icon: HardHat,
    },
    {
      num: "04",
      title: "Ongoing Support",
      description: "We provide 24/7 maintenance and emergency support for total peace of mind.",
      icon: Diamond,
    },
  ];

  return (
    <section className="w-full bg-[#fdfaf5] py-16 lg:py-24 font-sans text-[#291507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 items-start">
          <div>
            <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-lg bg-[#BE0201]"></span>
              OUR FOCUS IS YOUR SAFETY
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight">
              Delivering unmatched <br className="hidden md:block" />
              security through dedication
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-lg">
              When it comes to fire protection, choosing the right partner is critical. 
              We are committed to delivering reliable, customized solutions that meet 
              the highest industry safety standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveStep(index)}
                className={`relative p-10 rounded-[1.5rem] transition-all duration-500 cursor-pointer flex flex-col min-h-[380px] group ${
                  isActive 
                    ? "bg-[#BE0201] text-white shadow-2xl" 
                    : "bg-red-100/60 text-[#291507] hover:bg-[#f6f2e6]"
                }`}
              >
                <div className={`text-lg font-bold mb-10 transition-colors duration-300 ${
                  isActive ? "text-white/80" : "text-[#BE0201]"
                }`}>
                  {step.num}
                </div>

                <div className="mb-10">
                  <Icon 
                    className={`w-12 h-12 stroke-[1.25] transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#BE0201]"
                    }`} 
                  />
                </div>

                <div className="mt-auto">
                  <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-[#291507]"
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-white/80" : "text-gray-500"
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}