// "use client";

// import React, { useState } from "react";

// export default function HowWeWorkSection() {
//   // State to track which step is currently highlighted (defaults to the first one: index 0)
//   const [activeIndex, setActiveIndex] = useState(0);

//   const steps = [
//     {
//       num: "01",
//       title: "Initial Consultation",
//       description: "We begin by understanding your unique fire safety needs. Our experts will consult with you to evaluate your space.",
//     },
//     {
//       num: "02",
//       title: "Professional Installation",
//       description: "Our certified technicians install the necessary fire protection systems, ensuring compliance and regulations.",
//     },
//     {
//       num: "03",
//       title: "Emergency Response & Support",
//       description: "Should you ever need us, our team is available 24/7 to assist with fire emergencies, ensuring quick and efficient responses.",
//     },
//   ];

//   return (
//     <section className="mx-4 lg:mx-8 bg-yellow-50 py-16 lg:py-24 font-sans rounded-[2.5rem] my-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Top Header Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 items-start">
          
//           {/* Left: Titles */}
//           <div>
//             <div className="flex items-center gap-2 text-[#f47629] font-bold uppercase tracking-widest text-xs mb-4">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#f47629]"></span>
//               HOW WE WORK
//             </div>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-[#291507] leading-[1.15] tracking-tight">
//               How we ensure your fire <br className="hidden md:block" />
//               safety every step of the way
//             </h2>
//           </div>

//           {/* Right: Intro Paragraph */}
//           <div className="lg:pt-10">
//             <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-lg">
//               We follow a comprehensive, step-by-step approach to ensure that your
//               property is equipped with the highest level of fire protection. Here's
//               how we work.
//             </p>
//           </div>

//         </div>

//         {/* Bottom Content Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* Left: Image */}
//           <div className="w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-lg">
//             <img
//               // Using a reliable Unsplash URL of a firefighter
//               src="https://demo.awaikenthemes.com/firegard/fire-services/wp-content/uploads/2025/04/feature-img-1.jpg"
//               alt="Firefighter on duty"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Right: Interactive Steps List */}
//           <div className="flex flex-col gap-2">
//             {steps.map((step, index) => {
//               const isActive = activeIndex === index;

//               return (
//                 <div
//                   key={index}
//                   onMouseEnter={() => setActiveIndex(index)}
//                   className={`flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-[2rem] cursor-pointer transition-all duration-300 ease-in-out ${
//                     isActive ? "bg-[#f47629] shadow-md" : "bg-transparent hover:bg-orange-50/50"
//                   }`}
//                 >
//                   {/* Step Number */}
//                   <div 
//                     className={`text-4xl lg:text-5xl font-extrabold transition-colors duration-300 ${
//                       isActive ? "text-white" : "text-[#f47629]"
//                     }`}
//                   >
//                     {step.num}
//                   </div>

//                   {/* Step Content */}
//                   <div>
//                     <h3 
//                       className={`text-[1.35rem] font-bold mb-3 transition-colors duration-300 ${
//                         isActive ? "text-white" : "text-[#291507]"
//                       }`}
//                     >
//                       {step.title}
//                     </h3>
//                     <p 
//                       className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
//                         isActive ? "text-white/90" : "text-gray-500"
//                       }`}
//                     >
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import Image from "next/image"; // Added for optimized image rendering

export default function HowWeWorkSection() {
  // State to track which step is currently highlighted (defaults to the first one: index 0)
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Initial Consultation",
      description: "We begin by understanding your unique fire safety needs. Our experts will consult with you to evaluate your space.",
    },
    {
      num: "02",
      title: "Professional Installation",
      description: "Our certified technicians install the necessary fire protection systems, ensuring compliance and regulations.",
    },
    {
      num: "03",
      title: "Emergency Response & Support",
      description: "Should you ever need us, our team is available 24/7 to assist with fire emergencies, ensuring quick and efficient responses.",
    },
  ];

  return (
    <section className="mx-4 lg:mx-8 bg-red-100/60 py-12 lg:py-16 font-sans rounded-[2.5rem] my-8 border border-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 items-start">
          
          {/* Left: Titles */}
          <div>
            <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE0201]"></span>
              HOW WE WORK
            </div>
            {/* Scaled down heading slightly to match previous sections */}
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#291507] leading-[1.15] tracking-tight">
              How we ensure your fire <br className="hidden md:block" />
              safety every step of the way
            </h2>
          </div>

          {/* Right: Intro Paragraph */}
          <div className="lg:pt-6">
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-lg">
              We follow a comprehensive, step-by-step approach to ensure that your
              property is equipped with the highest level of fire protection. Here's
              how we work.
            </p>
          </div>

        </div>

        {/* Bottom Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left: Image */}
          {/* Reduced height to 500px max to prevent excessive scrolling */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <Image
              src="/model8.png" // Updated to use your local image
              alt="Fire safety expert at work"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>

          {/* Right: Interactive Steps List */}
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`flex flex-col sm:flex-row gap-5 p-5 sm:p-8 rounded-[2rem] cursor-pointer transition-all duration-300 ease-in-out border border-transparent ${
                    isActive ? "bg-[#BE0201] shadow-md border-[#BE0201]" : "bg-transparent hover:bg-red-50/50 hover:border-red-100"
                  }`}
                >
                  {/* Step Number */}
                  <div 
                    className={`text-3xl lg:text-4xl font-extrabold transition-colors duration-300 shrink-0 ${
                      isActive ? "text-white" : "text-[#BE0201]"
                    }`}
                  >
                    {step.num}
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 
                      className={`text-[1.25rem] font-bold mb-2 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-[#291507]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className={`text-sm sm:text-[15px] leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-white/90" : "text-gray-500"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}