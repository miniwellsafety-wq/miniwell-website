"use client";

import React from "react";
import Image from "next/image";
import { Award, Users, Aperture, Database, ShieldCheck } from "lucide-react";

export default function WhatWeDoSection() {
    return (
        <section className="w-full bg-[#fdfaf5] py-12 lg:py-16 font-sans text-[#291507]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 items-start">

                    <div>
                        <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#BE0201]"></span>
                            WHAT WE DO
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold leading-[1.15] tracking-tight">
                            Delivering comprehensive <br className="hidden md:block" />
                            fire safety solutions
                        </h2>
                    </div>

                    <div className="lg:pt-6">
                        <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-lg">
                            We provide a wide range of expert fire safety services, from risk
                            assessments to installation, maintenance, and emergency support. Our
                            tailored solutions ensure your property is fully protected.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">

                    <div className="relative lg:col-span-2 w-full h-[350px] lg:h-full min-h-[350px] rounded-[2rem] overflow-hidden">
                        <Image
                            src="/model2.png"
                            alt="Main fire safety presentation"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-w-7xl) 100vw, 50vw"
                            priority
                        />
                    </div>

                    <div className="group relative overflow-hidden lg:col-span-1 bg-white rounded-[2rem] p-8 flex flex-col justify-center transition-all duration-500 cursor-pointer   border border-gray-100">
                        <div className="absolute bottom-0 left-0 w-full h-0 bg-[#BE0201] transition-all duration-500 ease-in-out group-hover:h-full z-0" />
                        <div className="relative z-10 flex flex-col">
                            <div className="mb-6 text-[#BE0201] transition-colors duration-500 group-hover:text-white">
                                <Aperture className="w-12 h-12 stroke-[1.5]" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 transition-colors duration-500 group-hover:text-white">
                                Fire Door Inspection
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/90">
                                Rigorous testing and inspection of all fire doors to ensure maximum compartmentalization during an emergency.
                            </p>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden lg:col-span-1 bg-white rounded-[2rem] p-8 flex flex-col justify-center transition-all duration-500 cursor-pointer   border border-gray-100">
                        <div className="absolute bottom-0 left-0 w-full h-0 bg-[#BE0201] transition-all duration-500 ease-in-out group-hover:h-full z-0" />

                        <div className="relative z-10 flex flex-col">
                            <div className="mb-6 text-[#BE0201] transition-colors duration-500 group-hover:text-white">
                                <ShieldCheck className="w-12 h-12 stroke-[1.5]" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 transition-colors duration-500 group-hover:text-white">
                                Certification Assistance
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/90">
                                Expert guidance through the regulatory process to secure your mandatory fire safety compliance certificates.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-200/80 pt-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 divide-x-0 md:divide-x divide-gray-200/80">

                        <div className="flex flex-col xl:flex-row items-center gap-4 px-2 sm:px-6 text-center xl:text-left">
                            <Award className="w-10 h-10 text-[#BE0201] stroke-[1.5] shrink-0" />
                            <div>
                                <div className="text-2xl font-extrabold text-[#291507]">7 +</div>
                                <div className="text-sm text-gray-500">Years Of Experience</div>
                            </div>
                        </div>

                        <div className="flex flex-col xl:flex-row items-center gap-4 px-2 sm:px-6 text-center xl:text-left">
                            <Users className="w-10 h-10 text-[#BE0201] stroke-[1.5] shrink-0" />
                            <div>
                                <div className="text-2xl font-extrabold text-[#291507]">30 +</div>
                                <div className="text-sm text-gray-500">Satisfied Clients</div>
                            </div>
                        </div>

                        <div className="flex flex-col xl:flex-row items-center gap-4 px-2 sm:px-6 text-center xl:text-left">
                            <Aperture className="w-10 h-10 text-[#BE0201] stroke-[1.5] shrink-0" />
                            <div>
                                <div className="text-2xl font-extrabold text-[#291507]">30 +</div>
                                <div className="text-sm text-gray-500">Service Locations</div>
                            </div>
                        </div>

                        <div className="flex flex-col xl:flex-row items-center gap-4 px-2 sm:px-6 text-center xl:text-left">
                            <Database className="w-10 h-10 text-[#BE0201] stroke-[1.5] shrink-0" />
                            <div>
                                <div className="text-2xl font-extrabold text-[#291507]">15 +</div>
                                <div className="text-sm text-gray-500">Drills Conducted</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}