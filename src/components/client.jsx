// "use client";

// import { ArrowUpRight, ArrowRight, Aperture, LayoutGrid, Globe, Radar } from "lucide-react";

// export default function ServicesSection() {
//   const services = [
//     {
//       title: "Commercial Security",
//       description: "We are committed to eco-friendly farming practices.",
//       icon: Aperture,
//     },
//     {
//       title: "Residential Security",
//       description: "We are committed to eco-friendly farming practices.",
//       icon: LayoutGrid,
//     },
//     {
//       title: "Event Security",
//       description: "We are committed to eco-friendly farming practices.",
//       icon: Globe,
//     },
//     {
//       title: "CCTV Monitoring",
//       description: "We are committed to eco-friendly farming practices.",
//       icon: Radar,
//     },
//   ];

//   return (
//     // CHANGED: Replaced w-full with mx-4 lg:mx-8 (margin left/right) and added rounded-[2.5rem]
//     <section className="mx-4 lg:mx-8 bg-yellow-50 py-16 lg:py-24 font-sans rounded-[2.5rem] my-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div className="flex flex-col items-center text-center mb-16">
//           <div className="flex items-center gap-2 text-[#f47629] font-bold uppercase tracking-widest text-xs mb-4">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#f47629]"></span>
//             OUR SERVICES
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#291507] leading-[1.2] max-w-2xl tracking-tight">
//             Fire safety services tailored <br className="hidden md:block" />
//             for maximum protection
//           </h2>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden flex flex-col p-8 rounded-[2rem] transition-all duration-500 cursor-pointer bg-[#faf8f2] text-[#291507]   border border-gray-200 "
//               >
//                 <div className="absolute bottom-0 left-0 w-full h-0 bg-[#f47629] transition-all duration-500 ease-in-out group-hover:h-full z-0" />

//                 <div className="relative z-10 flex flex-col h-full">
                  
//                   <div className="mb-8">
//                     <Icon className="w-12 h-12 stroke-[1.5] text-[#f47629] transition-colors duration-500 group-hover:text-white" />
//                   </div>

//                   <h3 className="text-xl font-bold mb-3 transition-colors duration-500 group-hover:text-white">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm leading-relaxed mb-10 text-gray-500 transition-colors duration-500 group-hover:text-white/90">
//                     {service.description}
//                   </p>

//                   <div className="mt-auto">
//                     <div className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 text-white bg-[#f47629] group-hover:bg-[#1a0f08] group-hover:scale-110">
                      
//                       <ArrowUpRight className="w-5 h-5 absolute transition-all duration-500 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-50" />
                      
//                       <ArrowRight className="w-5 h-5 absolute transition-all duration-500 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100" />
                    
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
//             Discover our range of fire protection services designed to meet all your needs. Ready
//             to get started? Book your free fire safety consultation today.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { ArrowUpRight, ArrowRight, Fuel, Factory, Building2, Building, Home, Warehouse } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Petrol Pumps",
      description: "Specialized fire suppression and rapid-response systems designed for highly flammable environments.",
      icon: Fuel,
    },
    {
      title: "Industries",
      description: "Robust fire protection solutions to safeguard heavy machinery, personnel, and manufacturing plants.",
      icon: Factory,
    },
    {
      title: "Hospitals",
      description: "Reliable safety measures prioritizing smooth patient evacuation and critical medical equipment protection.",
      icon: Building2,
    },
    {
      title: "Commercial Buildings",
      description: "Comprehensive alarm and extinguisher systems tailored for corporate offices and retail spaces.",
      icon: Building,
    },
    {
      title: "Residential Buildings",
      description: "24/7 monitoring and life safety systems to keep families, tenants, and properties completely secure.",
      icon: Home,
    },
    {
      title: "Warehouses",
      description: "Large-scale smoke detection and sprinkler systems to protect valuable inventory and logistics hubs.",
      icon: Warehouse,
    },
  ];

  return (
    <section className="mx-4 lg:mx-8 bg-red-100/60 py-16 lg:py-24 font-sans rounded-[2.5rem] my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BE0201]"></span>
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#291507] leading-[1.2] max-w-2xl tracking-tight">
            Fire safety services tailored <br className="hidden md:block" />
            for maximum protection
          </h2>
        </div>

        {/* Services Grid - Changed to lg:grid-cols-3 for a perfect 3x2 grid of 6 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden flex flex-col p-8 rounded-[2rem] transition-all duration-500 cursor-pointer bg-[#faf8f2] text-[#291507] border border-gray-200"
              >
                {/* Hover Background */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#BE0201] transition-all duration-500 ease-in-out group-hover:h-full z-0" />

                <div className="relative z-10 flex flex-col h-full">
                  
                  <div className="mb-8">
                    <Icon className="w-12 h-12 stroke-[1.5] text-[#BE0201] transition-colors duration-500 group-hover:text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-10 text-gray-500 transition-colors duration-500 group-hover:text-white/90">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    {/* Hover button changes to a dark color (#291507) to contrast with the red background */}
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 text-white bg-[#BE0201] group-hover:bg-[#291507] group-hover:scale-110">
                      
                      <ArrowUpRight className="w-5 h-5 absolute transition-all duration-500 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-50" />
                      
                      <ArrowRight className="w-5 h-5 absolute transition-all duration-500 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100" />
                    
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover our range of fire protection services designed to meet all your needs. Ready
            to get started? Book your free fire safety consultation today.
          </p>
        </div>

      </div>
    </section>
  );
}