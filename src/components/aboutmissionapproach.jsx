"use client";

import React from "react";
import { Siren, GraduationCap, ShieldCheck } from "lucide-react";

export default function ApproachStatsSection() {
  const approaches = [
    {
      title: "Emergency Response",
      description: "We provide reliable, state-of-the-art systems that detect potential hazards, keeping your home safe.",
      icon: Siren,
      stat: "47K+",
      statLabel: "Rescue calls each year",
    },
    {
      title: "Safety Education",
      description: "We provide reliable, state-of-the-art systems that detect potential hazards, keeping your home safe.",
      icon: GraduationCap,
      stat: "50K+",
      statLabel: "People trained annually",
    },
    {
      title: "Community Protection",
      description: "We provide reliable, state-of-the-art systems that detect potential hazards, keeping your home safe.",
      icon: ShieldCheck,
      stat: "30%",
      statLabel: "Reduction in hazards",
    },
  ];

  return (
    <section className="mx-4 lg:mx-8  py-16 lg:py-24 font-sans  my-8   relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── TOP HEADER AREA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 items-start">
          
          {/* Left: Title Area */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE0201]"></span>
              OUR APPROACH
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#291507] leading-[1.15] tracking-tight">
              Delivering reliable and <br className="hidden md:block" />
              customized solutions
            </h2>
          </div>

          {/* Right: Intro Paragraph */}
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-gray-500 leading-relaxed text-sm sm:text-[15px] max-w-lg">
              We combine professional expertise, advanced technology, and a deep understanding 
              of your needs to provide protection you can trust.
            </p>
          </div>
        </div>

        {/* ── STATS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {approaches.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col group">
                {/* Icon Container - Primary Red */}
                <div className="w-14 h-14 rounded-full bg-[#BE0201] flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <h3 className="text-lg font-bold text-[#291507] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Statistical Counter */}
                <div className="mt-auto">
                  <div className="text-4xl lg:text-5xl font-extrabold text-[#291507] mb-2 tracking-tight">
                    {item.stat}
                  </div>
                  <p className="text-gray-400 text-sm font-medium">
                    {item.statLabel}
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