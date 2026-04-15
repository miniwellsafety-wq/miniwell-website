"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Siren, Users2 } from "lucide-react";

export default function ExpertiseSection() {
  return (
    <section className="w-full bg-[#fcfbf8] sm:px-6 lg:px-8 py-12 lg:py-16 font-sans">
      <div className="relative bg-[#291507] sm:rounded-[2rem] overflow-hidden shadow-2xl min-h-[550px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">

            {/* ── LEFT COLUMN: Content & Feature Box ── */}
            <div className="w-full lg:w-[50%] flex flex-col pt-12 pb-12 lg:py-20">
              
              {/* Label */}
              <div className="flex items-center space-x-2 text-white font-bold text-xs tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span>OUR EXPERTISE</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.15] tracking-tight mb-10">
                Decades of experience and <br />
                specialized expertise
              </h2>

              {/* Feature Box Container */}
              <div className="bg-[#1a0d04] rounded-[2rem] p-8 sm:p-10 border border-white/5 shadow-inner">
                
                {/* Icon Headers Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#BE0201] flex items-center justify-center shrink-0">
                      <Siren className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-bold text-base leading-tight">
                      Fast Reliable <br /> Services
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#BE0201] flex items-center justify-center shrink-0">
                      <Users2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-bold text-base leading-tight">
                      Certified Expert <br /> & Team
                    </span>
                  </div>
                </div>

                {/* Bullet Points List */}
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#BE0201] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-[15px]">Expert handling of crowd control, access checkpoints.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#BE0201] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-[15px]">Offering rapid-response patrols across multiple locations, day and night.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#BE0201] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-[15px]">Round-the-clock security to ensure your peace of mind day and night.</span>
                  </li>
                </ul>

                {/* Contact CTA Button */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center bg-[#BE0201] hover:bg-[#9A0201] text-white font-semibold rounded-full pl-6 pr-2 py-2 transition-all duration-300"
                >
                  <span className="text-sm">Contact Us</span>
                  <div className="ml-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#BE0201] group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" strokeWidth={3} />
                  </div>
                </Link>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Expert Image ── */}
            <div className="w-full lg:w-[45%] relative self-end flex justify-center lg:justify-end">
              {/* Decorative Subtle Glow behind image */}
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#BE0201]/10 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative w-full aspect-[4/5] sm:max-w-[500px] lg:max-w-[550px] z-10">
                <Image
                  src="https://demo.awaikenthemes.com/firegard/fire-services/wp-content/uploads/2025/04/expertise-img.png"
                  alt="Certified fire safety expert"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}