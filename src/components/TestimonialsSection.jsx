"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "The team provided exceptional financial guidance tailored to my needs. Their expert advice helped me grow my investments while ensuring financial security for the future. I highly recommend their services for anyone seeking trusted, personalized financial solutions!",
      name: "Arlene McCoy",
      role: "Co. Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      quote: "Their comprehensive fire safety protocols and prompt responses are unmatched. Detailed inspections gave our corporate office complete peace of mind. Truly a professional group of experts who know exactly what they are doing.",
      name: "Robert Fox",
      role: "Facility Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      quote: "We've worked with many security and safety firms, but none match the dedication and technical knowledge shown here. The emergency response drills were eye-opening and incredibly well-organized for our entire staff.",
      name: "Eleanor Pena",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#fcfbf8] sm:px-6 lg:px-8 py-12 lg:py-16 font-sans">
      <div className="relative bg-[#291507] sm:rounded-[2rem] overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16">
        
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            <div className="lg:col-span-7 flex flex-col">
              
              <div className="flex items-center space-x-2 text-white font-bold text-xs tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span>TESTIMONIALS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white leading-[1.15] tracking-tight mb-10">
                Customer experiences with <br className="hidden sm:block" />
                our fire safety services
              </h2>

              <div className="relative overflow-hidden w-full min-h-[220px] mt-auto">
                
                <div 
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full shrink-0 flex flex-col justify-between pr-4 sm:pr-24">
                      
                      <p className="text-white font-medium leading-relaxed text-sm sm:text-base mb-10 max-w-2xl">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-base">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm mt-0.5">{testimonial.role}</p>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

                <div className="absolute bottom-1 right-0 flex items-center gap-3 bg-[#291507] pl-4">
                  <button 
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#BE0201] flex items-center justify-center text-white transition-colors duration-300 focus:outline-none"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#BE0201] flex items-center justify-center text-white transition-colors duration-300 focus:outline-none"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 flex flex-col lg:pl-12">
              
              <div className="flex justify-start lg:justify-end mb-12 lg:mb-20">
              </div>

              <div className="flex flex-col gap-8">
                
                <div>
                  <h3 className="text-4xl sm:text-[2.75rem] font-extrabold text-white mb-3">
                    12+
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-[280px]">
                    Properties successfully secured with our advanced fire protection systems.
                  </p>
                </div>

                <div className="w-full h-px bg-white/10 my-2" />

                <div>
                  <h3 className="text-4xl sm:text-[2.75rem] font-extrabold text-[#BE0201] mb-3">
                    100%
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-[280px]">
                    Commitment to regulatory compliance and passing safety inspections.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}