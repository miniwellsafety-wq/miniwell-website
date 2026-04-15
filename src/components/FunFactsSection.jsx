// // // "use client";

// // // import React from "react";

// // // export default function FunFactsSection() {
// // //   const gridItems = [
// // //     {
// // //       type: "image",
// // //       src: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&w=800&q=80",
// // //       alt: "Firefighters assessing a fire",
// // //     },
// // //     {
// // //       type: "stat-white",
// // //       title: "The number of lives and Property saved",
// // //       stat: "31K+",
// // //     },
// // //     {
// // //       type: "image",
// // //       src: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&w=800&q=80",
// // //       alt: "Firefighters putting out a large fire",
// // //     },
// // //     {
// // //       type: "stat-orange",
// // //       title: "Fire Emergencies Are Preventable",
// // //       stat: "80%",
// // //     },
// // //     {
// // //       type: "stat-orange",
// // //       title: "Fire Extinguishers Have a Short Lifespan",
// // //       stat: "98+",
// // //     },
// // //     {
// // //       type: "image",
// // //       src: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&w=800&q=80",
// // //       alt: "Fire rescue vehicle",
// // //     },
// // //     {
// // //       type: "stat-white",
// // //       title: "Fire Suppression Systems Save More Than Lives",
// // //       stat: "21K+",
// // //     },
// // //     {
// // //       type: "image",
// // //       src: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&w=800&q=80",
// // //       alt: "Firefighters in gear",
// // //     },
// // //   ];

// // //   return (
// // //     <section className="w-full bg-[#fdfaf5] py-16 lg:py-24 font-sans">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mb-16 items-start">
// // //           <div>
// // //             <div className="flex items-center gap-2 text-[#f47629] font-bold uppercase tracking-widest text-xs mb-4">
// // //               <span className="w-1.5 h-1.5 rounded-full bg-[#f47629]"></span>
// // //               FUN FACTS
// // //             </div>
// // //             <h2 className="text-3xl md:text-4xl font-extrabold text-[#291507] leading-[1.15] tracking-tight">
// // //               Fascinating fire safety facts <br className="hidden lg:block" />
// // //               that could save lives
// // //             </h2>
// // //           </div>

// // //           <div className="lg:pt-8">
// // //             <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-lg">
// // //               Explore these interesting fire safety facts that highlight the
// // //               importance of protection, prevention, and preparedness. Stay
// // //               informed and safe with knowledge.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //           {gridItems.map((item, index) => {
            
// // //             if (item.type === "image") {
// // //               return (
// // //                 <div 
// // //                   key={index} 
// // //                   className="w-full aspect-square sm:aspect-auto sm:min-h-[280px] rounded-3xl overflow-hidden"
// // //                 >
// // //                   <img
// // //                     src={item.src}
// // //                     alt={item.alt}
// // //                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
// // //                   />
// // //                 </div>
// // //               );
// // //             }

// // //             if (item.type === "stat-white") {
// // //               return (
// // //                 <div 
// // //                   key={index} 
// // //                   className="w-full aspect-square sm:aspect-auto sm:min-h-[280px] bg-white rounded-3xl p-8 flex flex-col justify-between border border-gray-100"
// // //                 >
// // //                   <h3 className="text-[#291507] font-bold text-lg leading-snug pr-4">
// // //                     {item.title}
// // //                   </h3>
// // //                   <div className="text-4xl md:text-5xl font-extrabold text-[#291507] tracking-tight mt-8">
// // //                     {item.stat}
// // //                   </div>
// // //                 </div>
// // //               );
// // //             }

// // //             if (item.type === "stat-orange") {
// // //               return (
// // //                 <div 
// // //                   key={index} 
// // //                   className="w-full aspect-square sm:aspect-auto sm:min-h-[280px] bg-[#f47629] rounded-3xl p-8 flex flex-col justify-between text-white"
// // //                 >
// // //                   <h3 className="font-bold text-lg leading-snug pr-4 text-white/95">
// // //                     {item.title}
// // //                   </h3>
// // //                   <div className="text-4xl md:text-5xl font-extrabold tracking-tight mt-8">
// // //                     {item.stat}
// // //                   </div>
// // //                 </div>
// // //               );
// // //             }

// // //             return null;
// // //           })}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }


// "use client";

// import React from "react";
// import Image from "next/image"; 

// export default function FunFactsSection() {
//   const gridItems = [
//     {
//       type: "image",
//       src: "/model4.png", 
//       alt: "Firefighters assessing a fire",
//     },
//     {
//       type: "stat-white",
//       title: "The number of lives and Property saved",
//       stat: "31K+",
//     },
//     {
//       type: "image",
//       src: "/model6.png", 
//       alt: "Firefighters putting out a large fire",
//     },
//     {
//       type: "stat-red",
//       title: "Fire Emergencies Are Preventable",
//       stat: "80%",
//     },
//     {
//       type: "stat-red", 
//       title: "Fire Extinguishers Have a Short Lifespan",
//       stat: "98+",
//     },
//     {
//       type: "image",
//       src: "/model5.png", 
//       alt: "Fire rescue vehicle",
//     },
//     {
//       type: "stat-white",
//       title: "Fire Suppression Systems Save More Than Lives",
//       stat: "21K+",
//     },
//     {
//       type: "image",
//       src: "/model7.png", 
//       alt: "Firefighters in gear",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#fdfaf5] py-12 lg:py-16 font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mb-12 items-start">
//           <div>
//             <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-4">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#BE0201]"></span>
//               FUN FACTS
//             </div>
//             <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-[#291507] leading-[1.2] tracking-tight">
//               Fascinating fire safety facts <br className="hidden lg:block" />
//               that could save lives
//             </h2>
//           </div>

//           <div className="lg:pt-6">
//             <p className="text-gray-500 leading-relaxed text-sm sm:text-[15px] max-w-lg">
//               Explore these interesting fire safety facts that highlight the
//               importance of protection, prevention, and preparedness. Stay
//               informed and safe with knowledge.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {gridItems.map((item, index) => {
            
//             if (item.type === "image") {
//               return (
//                 <div 
//                   key={index} 
//                   className="group relative w-full aspect-square sm:aspect-auto sm:min-h-[240px] rounded-[1.5rem] overflow-hidden border border-gray-100"
//                 >
//                   <Image
//                     src={item.src}
//                     alt={item.alt}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                     sizes="(max-w-7xl) 100vw, 50vw"
//                     priority
//                   />
//                 </div>
//               );
//             }

//             if (item.type === "stat-white") {
//               return (
//                 <div 
//                   key={index} 
//                   className="w-full aspect-square sm:aspect-auto sm:min-h-[240px] bg-white rounded-[1.5rem] p-6 sm:p-8 flex flex-col justify-between border border-gray-100 "
//                 >
//                   <h3 className="text-[#291507] font-bold text-base sm:text-lg leading-snug pr-4">
//                     {item.title}
//                   </h3>
//                   <div className="text-3xl md:text-4xl font-extrabold text-[#291507] tracking-tight mt-6">
//                     {item.stat}
//                   </div>
//                 </div>
//               );
//             }

//             if (item.type === "stat-red") {
//               return (
//                 <div 
//                   key={index} 
//                   className="w-full aspect-square sm:aspect-auto sm:min-h-[240px] bg-[#BE0201] rounded-[1.5rem] p-6 sm:p-8 flex flex-col justify-between text-white "
//                 >
//                   <h3 className="font-bold text-base sm:text-lg leading-snug pr-4 text-white/95">
//                     {item.title}
//                   </h3>
//                   <div className="text-3xl md:text-4xl font-extrabold tracking-tight mt-6">
//                     {item.stat}
//                   </div>
//                 </div>
//               );
//             }

//             return null;
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import Image from "next/image"; 

export default function FunFactsSection() {
  const gridItems = [
    {
      type: "image",
      src: "/model4.png", 
      alt: "Firefighters assessing a fire",
    },
    {
      type: "stat-white",
      title: "The number of lives and Property saved",
      stat: "31K+",
    },
    {
      type: "image",
      src: "/model6.png", 
      alt: "Firefighters putting out a large fire",
    },
    {
      type: "stat-red",
      title: "Fire Emergencies Are Preventable",
      stat: "80%",
    },
    {
      type: "stat-red", 
      title: "Fire Extinguishers Have a Short Lifespan",
      stat: "98+",
    },
    {
      type: "image",
      src: "/model5.png", 
      alt: "Fire rescue vehicle",
    },
    {
      type: "stat-white",
      title: "Fire Suppression Systems Save More Than Lives",
      stat: "21K+",
    },
    {
      type: "image",
      src: "/model7.png", 
      alt: "Firefighters in gear",
    },
  ];

  return (
    <section className="w-full bg-[#fdfaf5] py-12 lg:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mb-12 items-start">
          <div>
            <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BE0201]"></span>
              FUN FACTS
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-[#291507] leading-[1.2] tracking-tight">
              Fascinating fire safety facts <br className="hidden lg:block" />
              that could save lives
            </h2>
          </div>

          <div className="lg:pt-6">
            <p className="text-gray-500 leading-relaxed text-sm sm:text-[15px] max-w-lg">
              Explore these interesting fire safety facts that highlight the
              importance of protection, prevention, and preparedness. Stay
              informed and safe with knowledge.
            </p>
          </div>
        </div>

        {/* Changed from grid-cols-1 to grid-cols-2 for mobile, and adjusted the gap for smaller screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {gridItems.map((item, index) => {
            
            if (item.type === "image") {
              return (
                <div 
                  key={index} 
                  className="group relative w-full aspect-square sm:aspect-auto min-h-[160px] sm:min-h-[240px] rounded-2xl sm:rounded-[1.5rem] overflow-hidden border border-gray-100"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-w-7xl) 100vw, 50vw"
                    priority
                  />
                </div>
              );
            }

            if (item.type === "stat-white") {
              return (
                <div 
                  key={index} 
                  className="w-full aspect-square sm:aspect-auto min-h-[160px] sm:min-h-[240px] bg-white rounded-2xl sm:rounded-[1.5rem] p-4 sm:p-8 flex flex-col justify-between border border-gray-100"
                >
                  <h3 className="text-[#291507] font-bold text-sm sm:text-lg leading-snug pr-2 sm:pr-4">
                    {item.title}
                  </h3>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#291507] tracking-tight mt-4 sm:mt-6">
                    {item.stat}
                  </div>
                </div>
              );
            }

            if (item.type === "stat-red") {
              return (
                <div 
                  key={index} 
                  className="w-full aspect-square sm:aspect-auto min-h-[160px] sm:min-h-[240px] bg-[#BE0201] rounded-2xl sm:rounded-[1.5rem] p-4 sm:p-8 flex flex-col justify-between text-white"
                >
                  <h3 className="font-bold text-sm sm:text-lg leading-snug pr-2 sm:pr-4 text-white/95">
                    {item.title}
                  </h3>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-4 sm:mt-6">
                    {item.stat}
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>

      </div>
    </section>
  );
}