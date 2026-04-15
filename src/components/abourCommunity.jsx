"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Flame } from "lucide-react";

export default function KeyFeaturesSection() {
  const featureList = [
    {
      title: "Licensed & Trained Fire Safety Guards",
      description: "We are your trusted emergency fire ally, dedicated to protecting your business with elite personnel.",
    },
    {
      title: "Advanced Surveillance Integration",
      description: "Seamless integration of thermal detection and fire monitoring systems for 24/7 protection.",
    },
    {
      title: "Licensed & Vetted Security Personnel",
      description: "Every member of our team is fully certified and undergoes rigorous background checks.",
    },
  ];

  return (
    <section className="w-full bg-[#fdfaf5] py-16 lg:py-24 font-sans text-[#291507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ── LEFT COLUMN: Text Content ── */}
          <div className="flex flex-col">
            {/* Label */}
            <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE0201]"></span>
              OUR KEY FEATURES
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.15] mb-6 tracking-tight">
              Our commitment to best in <br className="hidden sm:block" />
              every feature we provide
            </h2>

            {/* Intro Description */}
            <p className="text-gray-500 leading-relaxed mb-10 max-w-lg text-sm sm:text-base">
              We are your trusted emergency fire ally, dedicated to protecting your home and
              business with reliable fire system installations and expert personnel.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-8">
              {featureList.map((item, index) => (
                <div key={index} className="flex flex-col gap-2 group cursor-default">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#BE0201] shrink-0 transition-transform group-hover:scale-110" />
                    <h3 className="font-bold text-lg text-[#291507] group-hover:text-[#BE0201] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="pl-8">
                    <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed max-w-md">
                      {item.description}
                    </p>
                    {/* Divider line between features */}
                    {index !== featureList.length - 1 && (
                      <div className="w-full h-px bg-gray-200 mt-8" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Masonry Image Grid ── */}
          <div className="relative">
            {/* 4-Image Grid Layout */}
            <div className="grid grid-cols-2 gap-4 h-[500px] sm:h-[600px]">
              {/* Image 1: Top Left */}
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-sm">
                <Image
                  src="/model4.png" 
                  alt="Firefighters heading to scene"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 50vw, 25vw"
                />
              </div>
              {/* Image 2: Top Right */}
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-sm">
                <Image
                  src="/model6.png"
                  alt="Firefighter with extinguisher"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 50vw, 25vw"
                />
              </div>
              {/* Image 3: Bottom Full Width (spanning 2 cols theoretically, but here as a grid cell) */}
              <div className="relative col-span-2 rounded-[1.5rem] overflow-hidden shadow-sm">
                <Image
                  src="/model4.png"
                  alt="Firefighters on industrial site"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* ── CENTRAL FLOATING ICON ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl z-20 border-[6px] border-[#fdfaf5]">
              <div className="bg-[#BE0201] rounded-full p-3 shadow-inner">
                 <Flame className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}