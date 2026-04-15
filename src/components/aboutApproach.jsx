"use client";

import React from "react";
import { Target, Eye, Rocket } from "lucide-react";

export default function MissionSection() {
  const approaches = [
    {
      title: "Our Mission",
      description: "Committed to delivering top-tier fire protection solutions through technical excellence and reliability.",
      icon: Rocket,
    },
    {
      title: "Our Vision",
      description: "To be the most trusted partner in fire safety, setting industry standards for innovation and safety.",
      icon: Eye,
    },
    {
      title: "Our Goal",
      description: "Ensuring 100% compliance and safety for every property we protect, from homes to industries.",
      icon: Target,
    },
  ];

  return (
    <section className="mx-4 lg:mx-8 bg-red-100/60 py-16 lg:py-20 font-sans rounded-[2.5rem] my-8 border border-gray-100/50 shadow-sm relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 items-start">
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE0201]"></span>
              OUR APPROACH
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#291507] leading-[1.15] tracking-tight">
              Innovative solutions for <br className="hidden md:block" />
              maximum security
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-gray-500 leading-relaxed text-sm sm:text-[15px] max-w-lg">
              When it comes to fire protection, choosing the right partner is critical. 
              We are committed to delivering reliable, customized solutions that meet 
              the highest safety standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {approaches.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-5 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#BE0201] flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.5} />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-[#291507] mb-2 group-hover:text-[#BE0201] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
                    {item.description}
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