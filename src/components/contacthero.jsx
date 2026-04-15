"use client";

import Link from "next/link";

export default function contactHero() {
  return (
    <section className="w-full bg-[#fcfbf8] sm:px-6 lg:px-8 sm:py-8 font-sans">
      <div className="relative bg-[#291507] sm:rounded-[2rem] overflow-hidden shadow-sm min-h-[250px] sm:min-h-[300px] flex items-center">

        {/* ── DECORATIVE BACKGROUND ELEMENTS ── */}
        
        {/* Soft Red Glow - Bottom Left */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#BE0201] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        
        {/* Soft Red Glow - Bottom Right */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#BE0201] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        {/* Subtle Dotted Pattern - Right Side */}
        <div
          className="absolute right-12 top-12 bottom-12 w-48 z-0 opacity-5 pointer-events-none hidden md:block"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 lg:py-24">
          
          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6">
            Contact Us
          </h1>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-white/70 font-medium text-sm sm:text-base">
            <Link 
              href="/" 
              className="hover:text-[#BE0201] transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Contact Us</span>
          </div>

        </div>

      </div>
    </section>
  );
}