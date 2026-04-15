"use client";

import React from "react";
import Image from "next/image"; 

export default function FeaturesSection() {
  const features = [
    {
      num: "01",
      title: "Custom Fire Protection Plans",
      description: "Tailored fire safety solutions based on your property's unique need.",
      image: "https://demo.awaikenthemes.com/firegard/fire-services/wp-content/uploads/2025/04/feature-img-1.jpg", 
    },
    {
      num: "02",
      title: "Advanced Fire Alarm Systems",
      description: "State of the art fire alarm systems designed for early detection.",
      image: "https://demo.awaikenthemes.com/firegard/fire-services/wp-content/uploads/2025/04/feature-img-2.jpg",
    },
    {
      num: "03",
      title: "Evacuation Planning & Drills",
      description: "We develop customized emergency evacuation plans.",
      image: "https://demo.awaikenthemes.com/firegard/fire-services/wp-content/uploads/2025/04/feature-img-3.jpg",
    },
  ];

  return (
    <section className="mx-4 lg:mx-8 bg-red-100/60 py-12 lg:py-16 font-sans rounded-[2.5rem] my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 items-start">
          
          <div>
            <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE0201]"></span>
              OUR FEATURES
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#291507] leading-[1.15] tracking-tight">
              Tailored solutions for <br className="hidden md:block" />
              maximum protection
            </h2>
          </div>

          <div className="lg:pt-6">
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-lg">
              Our fire safety solutions combine cutting edge technology, certified
              expertise, and customized strategies to protect your property and
              ensure compliance.
            </p>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative w-full h-[400px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer border border-gray-100"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 33vw"
              />

              <div className="absolute top-6 left-6 w-12 h-12 bg-[#BE0201] text-white rounded-full flex items-center justify-center font-bold text-lg z-10 shadow-md">
                {feature.num}
              </div>

              <div className="absolute bottom-5 left-5 right-5 p-5 sm:p-6 bg-[#291507]/60 backdrop-blur-md rounded-2xl z-10 flex flex-col justify-end transition-all duration-300 group-hover:bg-[#1a0d04]/80 border-l-4 border-transparent group-hover:border-[#BE0201]">
                <h3 className="text-white text-[1.1rem] sm:text-[1.15rem] font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}