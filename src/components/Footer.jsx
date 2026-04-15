"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fcfbf8] sm:px-6 lg:px-8 sm:py-8 font-sans mt-8">
      <div className="relative bg-[#291507] sm:rounded-3xl overflow-hidden shadow-2xl pt-12 lg:pt-16 pb-8 text-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-stretch rounded-[1.5rem] bg-[#1a0d04] overflow-hidden mb-12 lg:mb-16 shadow-lg border border-white/5">
            
            <div className="bg-white p-8 lg:w-[30%] flex items-center justify-center lg:justify-start gap-3">
              <Image 
                src="/miniwell-border-logo.svg" 
                alt="Miniwell Logo" 
                width={48} 
                height={48}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-gray-900">
                Miniwell<span className="text-[#BE0201]">.</span>
              </span>
            </div>

            <div className="p-8 lg:w-[70%] flex flex-col xl:flex-row flex-wrap items-start xl:items-center justify-between gap-8">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#BE0201] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-0.5">Phone Number</p>
                  <p className="font-bold text-lg">+91 9974200802</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#BE0201] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-0.5">Email Address</p>
                  <p className="font-bold text-lg">miniwellsafety@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#BE0201] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-0.5">Location</p>
                  <p className="font-bold text-lg">Survey no 1636 24, Malhar Bunglows, Karan Nagar Rd, Kadi, Gujarat 382715</p>
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 lg:mb-16">
            
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-6">About Solutions</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-8 pr-4">
                Our mission is to protect lives and property with expert fire safety services, advanced technology, and unwavering dedication.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li><Link href="/" className="hover:text-[#BE0201] transition-colors">Home</Link></li>
                <li><Link href="/about-us" className="hover:text-[#BE0201] transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-[#BE0201] transition-colors">Services</Link></li>
                <li><Link href="/contact-us" className="hover:text-[#BE0201] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div className="flex flex-col">
            </div>


          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>Copyright © 2026 Miniwell. All Rights Reserved.</p>
            {/* <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-[#BE0201] transition-colors">Terms & Conditions</Link>
              <span>/</span>
              <Link href="#" className="hover:text-[#BE0201] transition-colors">Privacy Policy</Link>
            </div> */}
          </div>

        </div>
      </div>
    </footer>
  );
}