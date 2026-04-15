// "use client";

// import React from "react";
// import Link from "next/link";
// import { Flame, Phone, Mail, MapPin, Send } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#fcfbf8] sm:px-6 lg:px-8 sm:py-8 font-sans mt-8">
//       <div className="relative bg-[#291507] sm:rounded-3xl overflow-hidden shadow-2xl pt-12 lg:pt-16 pb-8 text-white">
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="flex flex-col lg:flex-row items-stretch rounded-[1.5rem] bg-[#3a1d0f] overflow-hidden mb-12 lg:mb-16 shadow-lg">
            
//             <div className="bg-[#f47629] p-8 lg:w-[30%] flex items-center justify-center lg:justify-start gap-3">
//               <div className="bg-white rounded-full p-2 flex items-center justify-center">
//                 <Flame className="w-6 h-6 text-[#f47629] fill-current" />
//               </div>
//               <span className="text-2xl font-extrabold tracking-tight">Firegard.</span>
//             </div>

//             <div className="p-8 lg:w-[70%] flex flex-col xl:flex-row flex-wrap items-start xl:items-center justify-between gap-8">
              
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-[#f47629] flex items-center justify-center shrink-0">
//                   <Phone className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-white text-sm mb-0.5">Phone Number</p>
//                   <p className="font-bold text-lg">+(1) 456 789 254</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-[#f47629] flex items-center justify-center shrink-0">
//                   <Mail className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-white text-sm mb-0.5">Email Address</p>
//                   <p className="font-bold text-lg">info@domain.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-[#f47629] flex items-center justify-center shrink-0">
//                   <MapPin className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-white text-sm mb-0.5">Location</p>
//                   <p className="font-bold text-lg">123 Lorem Stree</p>
//                 </div>
//               </div>

//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 lg:mb-16">
            
//             <div className="flex flex-col">
//               <h3 className="text-xl font-bold mb-6">About Solutions</h3>
//               <p className="text-white leading-relaxed text-sm mb-8 pr-4">
//                 Our mission is to protect lives and property with expert service.
//               </p>

//             </div>

//             <div className="flex flex-col">
//               <h3 className="text-xl font-bold mb-6">Quick link</h3>
//               <ul className="space-y-4 text-white text-sm">
//                 <li><Link href="#" className="hover:text-[#f47629] transition-colors">Home</Link></li>
//                 <li><Link href="#" className="hover:text-[#f47629] transition-colors">About Us</Link></li>
//                 <li><Link href="#" className="hover:text-[#f47629] transition-colors">Services</Link></li>
//                 <li><Link href="#" className="hover:text-[#f47629] transition-colors">Blogs</Link></li>
//               </ul>
//             </div>

//             <div className="flex flex-col">

//             </div>

//             <div className="flex flex-col">
//               <h3 className="text-xl font-bold mb-6">Subscribe</h3>
//               <p className="text-white leading-relaxed text-sm mb-6">
//                 Stay updated with the latest security trends offers by subscribing to our newsletter.
//               </p>
//               <form className="relative w-full" onSubmit={(e) => e.preventDefault()}>
//                 <input 
//                   type="email" 
//                   placeholder="Enter Your Email" 
//                   className="w-full bg-[#3a1d0f] text-white text-sm placeholder:text-white/40 border-none outline-none rounded-full py-4 pl-6 pr-14 focus:ring-2 focus:ring-[#f47629]/50 transition-shadow"
//                   required
//                 />
//                 <button 
//                   type="submit" 
//                   className="absolute right-1.5 top-1.5 bottom-1.5 w-10 h-10 bg-[#f47629] hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
//                 >
//                   <Send className="w-4 h-4 text-white -ml-0.5" />
//                 </button>
//               </form>
//             </div>

//           </div>

//           <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
//             <p>Copyright © 2026 All Rights Reserved.</p>
//             <div className="flex items-center gap-4">
//               <Link href="#" className="hover:text-white transition-colors">Term's & Condition</Link>
//               <span>/</span>
//               <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
//             </div>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fcfbf8] sm:px-6 lg:px-8 sm:py-8 font-sans mt-8">
      {/* Dark enterprise background to match the testimonials and other sections */}
      <div className="relative bg-[#291507] sm:rounded-3xl overflow-hidden shadow-2xl pt-12 lg:pt-16 pb-8 text-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Contact Info Banner */}
          <div className="flex flex-col lg:flex-row items-stretch rounded-[1.5rem] bg-[#1a0d04] overflow-hidden mb-12 lg:mb-16 shadow-lg border border-white/5">
            
            {/* Logo Section - Changed to white background so the logo matches the header perfectly */}
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

            {/* Contact Info Details */}
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

          {/* Main Footer Links & Newsletter */}
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

            {/* Filled in the previously empty column with your services */}
            <div className="flex flex-col">
              {/* <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li><Link href="#" className="hover:text-[#BE0201] transition-colors">Commercial Buildings</Link></li>
                <li><Link href="#" className="hover:text-[#BE0201] transition-colors">Residential Buildings</Link></li>
                <li><Link href="#" className="hover:text-[#BE0201] transition-colors">Industrial Warehouses</Link></li>
                <li><Link href="#" className="hover:text-[#BE0201] transition-colors">Hospitals & Clinics</Link></li>
                <li><Link href="#" className="hover:text-[#BE0201] transition-colors">Hospitals & Clinics</Link></li>
                <li><Link href="#" className="hover:text-[#BE0201] transition-colors">Hospitals & Clinics</Link></li>
              </ul> */}
            </div>

            {/* <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-6">Subscribe</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-6">
                Stay updated with the latest fire safety trends and regulatory updates by subscribing to our newsletter.
              </p>
              <form className="relative w-full" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="w-full bg-[#1a0d04] text-white text-sm placeholder:text-white/40 border border-white/10 outline-none rounded-full py-4 pl-6 pr-14 focus:ring-2 focus:ring-[#BE0201]/50 transition-shadow"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-10 h-10 bg-[#BE0201] hover:bg-[#9A0201] rounded-full flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4 text-white -ml-0.5" />
                </button>
              </form>
            </div> */}

          </div>

          {/* Bottom Copyright Row */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>Copyright © 2026 Miniwell. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-[#BE0201] transition-colors">Terms & Conditions</Link>
              <span>/</span>
              <Link href="#" className="hover:text-[#BE0201] transition-colors">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}