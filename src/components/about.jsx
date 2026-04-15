"use client";

import Image from "next/image"; 
import { Award, CheckCircle2, ArrowRight } from "lucide-react";
import { FaGem } from "react-icons/fa";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#fcfbf8] py-16 lg:py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:max-w-none pl-8 lg:pl-16 mt-8 lg:mt-0">


            <div
              className="relative overflow-hidden aspect-[4/5] shadow-sm bg-gray-100 group cursor-pointer"
              style={{
                borderRadius: '2rem 2rem 2rem 2rem',
                borderBottomRightRadius: '0px',
              }}
            >
              <Image
                src="/model.png" 
                alt="Main fire safety presentation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-7xl) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 z-20 pointer-events-none " />
            </div>

            <div className="absolute top-8 -left-4 sm:top-12 sm:-left-8 bg-[#BE0201] text-white rounded-[1.5rem] p-4 sm:p-6 w-32 h-32 sm:w-40 sm:h-40 flex flex-col justify-center items-center shadow-lg text-center z-10">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" strokeWidth={1.5} />
              <span className="font-bold text-sm sm:text-lg leading-tight">
                7 + years of<br />experience
              </span>
            </div>

            <div
              className="absolute z-10 overflow-hidden border-[6px] md:border-[10px] border-[#fcfbf8]"
              style={{
                width: '55%',
                aspectRatio: '1/1',
                bottom: '-6%',
                right: '-6%',
                borderRadius: '1.5rem',
              }}
            >
              <Image
                src="/model2.png" 
                alt="Secondary fire safety presentation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-7xl) 100vw, 50vw"
                priority
              />
            </div>

          </div>

          <div className="flex flex-col justify-center space-y-6 lg:pr-8 pt-8 lg:pt-0">

            <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-sm">
              <span className="w-2 h-2 rounded-full bg-[#BE0201]"></span>
              About Us
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#291507] leading-[1.1] tracking-tight">
              Expert guidance and personalized coaching.
            </h3>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
              fire alarm systems and extinguisher servicing to emergency evacuation planning and
              compliance inspections, our certified team is dedicated to keeping your people.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-white fill-[#BE0201] w-6 h-6 shrink-0" />
                <span className="text-sm md:text-lg font-bold text-[#291507]">
                  Fire Alarm System Installation & Maintenance
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-white fill-[#BE0201] w-6 h-6 shrink-0" />
                <span className="text-sm md:text-lg font-bold text-[#291507]">
                  Extinguisher Supply & Servicing
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 max-w-2xl">

              <div className="flex flex-col items-start gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#fcfbf8] overflow-hidden relative z-10 bg-gray-200">
                      <Image
                        src={`https://i.pravatar.cc/100?img=${i + 15}`}
                        alt={`Client avatar ${i}`}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-gray-500 text-sm">
                  Join our <strong className="text-[#291507]">50+</strong> satisfied client
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#BE0201] rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                  <FaGem className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-[#291507] text-lg">24 x 7 Response</div>
                  <div className="text-gray-500 text-sm">Award wining</div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 my-6 max-w-2xl"></div>

            <div className="pt-6">
              <Link 
                href="/about-us"
                className="inline-flex items-center bg-[#BE0201] hover:bg-[#9A0201] text-white font-semibold rounded-full pl-6 pr-2 py-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>More About Us</span>
                <div className="ml-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#BE0201]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}