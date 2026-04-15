"use client";

import { ArrowUpRight, ArrowRight, Fuel, Factory, Building2, Building, Home, Warehouse } from "lucide-react";

export default function ServicesTarget() {
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
    <section className="mx-4 lg:mx-8  py-16 lg:py-24 font-sans rounded-[2.5rem] my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden flex flex-col p-8 rounded-[2rem] transition-all duration-500 cursor-pointer bg-red-100/60 text-[#291507] border border-gray-200"
              >
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

      </div>
    </section>
  );
}