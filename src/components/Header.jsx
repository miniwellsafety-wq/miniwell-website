"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Clock, Mail, ArrowRight, Menu, X as CloseIcon } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="w-full font-sans shadow-sm">
      <div className="bg-[#BE0201] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-0 sm:h-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-0 text-xs sm:text-sm">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span><strong>Working Hour:</strong> 08:00am to 09:00pm</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span><strong>Email:</strong> miniwellsafety@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center justify-start sm:justify-end mt-1 sm:mt-0 pt-2 sm:pt-0 border-t border-white/20 sm:border-0 w-full sm:w-auto">
            <span><strong>Contact:</strong> +91 9974200802</span>
          </div>
          
        </div>
      </div>

      <div className="bg-[#fcfbf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            <div className="flex-shrink-0 flex items-center space-x-3">
                <Image 
                  src="/miniwell-border-logo.svg" 
                  alt="Miniwell Logo" 
                  width={48} 
                  height={48}
                  className="object-contain"
                  priority
                />
              <span className="text-2xl font-bold text-gray-900">
                Miniwell<span className="text-[#BE0201]">.</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link 
                href="/" 
                className={`flex items-center font-medium py-8 transition-colors ${
                  isActive("/") ? "text-[#BE0201]" : "text-gray-600 hover:text-[#BE0201]"
                }`}
              >
                Home
              </Link>

              <Link 
                href="/about-us" 
                className={`flex items-center font-medium py-8 transition-colors ${
                  isActive("/about-us") ? "text-[#BE0201]" : "text-gray-600 hover:text-[#BE0201]"
                }`}
              >
                About Us
              </Link>
              
              <div className="relative group">
                <Link 
                  href="/services" 
                  className={`flex items-center font-medium py-8 transition-colors ${
                    isActive("/services") ? "text-[#BE0201]" : "text-gray-600 hover:text-[#BE0201]"
                  }`}
                >
                  Services 
                </Link>
              </div>

              <Link 
                href="/contact-us" 
                className={`flex items-center font-medium py-8 transition-colors ${
                  isActive("/contact-us") ? "text-[#BE0201]" : "text-gray-600 hover:text-[#BE0201]"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            <div className="hidden lg:block">
              <Link href="/contact-us" className="inline-flex items-center bg-[#BE0201] hover:bg-[#8B0000] text-white font-semibold rounded-full pl-6 pr-2 py-2 transition-colors duration-200">
                <span>Contact Us</span>
                <div className="ml-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#BE0201]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-gray-600 hover:text-[#BE0201] focus:outline-none"
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop (Dark overlay) */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Drawer (Right Side) */}
        <div 
          className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header & Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="text-xl font-bold text-gray-900">
              Menu<span className="text-[#BE0201]">.</span>
            </span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-[#BE0201] focus:outline-none p-1"
            >
              <CloseIcon className="w-7 h-7" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="px-4 py-4 space-y-1">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-3 font-medium border-b border-gray-50 ${
                isActive("/") ? "text-[#BE0201]" : "text-gray-600"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about-us" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-3 font-medium border-b border-gray-50 ${
                isActive("/about-us") ? "text-[#BE0201]" : "text-gray-600"
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-3 font-medium border-b border-gray-50 ${
                isActive("/services") ? "text-[#BE0201]" : "text-gray-600"
              }`}
            >
              Services
            </Link>
            <Link 
              href="/contact-us" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-3 font-medium border-b border-gray-50 ${
                isActive("/contact-us") ? "text-[#BE0201]" : "text-gray-600"
              }`}
            >
              Contact Us
            </Link>
            
            <div className="pt-6 px-3">
               <Link 
                  href="/contact-us" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-[#BE0201] text-white font-semibold rounded-full px-6 py-3"
                >
                <span>Contact Us</span>
                <div className="ml-3 w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#BE0201]">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}