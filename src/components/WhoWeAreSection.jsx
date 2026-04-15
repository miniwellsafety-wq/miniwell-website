"use client";

import React from "react";
import Image from "next/image"; 

export default function WhoWeAreSection() {
    return (
        <section className="w-full bg-[#fdfaf5] py-16 lg:py-24 font-sans text-[#291507]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    <div className="flex flex-col">

                        <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#BE0201]"></span>
                            WHO WE ARE
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.15] mb-6 tracking-tight text-[#291507]">
                            Unlock your potential <br className="hidden sm:block" />
                            with our expertise
                        </h2>

                        <p className="text-gray-500 leading-relaxed mb-10 max-w-lg text-xs sm:text-base">
                            Fire incidents can strike without warning, causing damage, disruption, and putting
                            lives at risk. That’s why having a trusted fire protection partner is essential.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-25 h-25 rounded-full border border-[#BE0201] flex items-center justify-center text-2xl font-extrabold shadow-sm bg-[#fdfaf5] p-2">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl sm:text-2xl font-extrabold bg-red-50 text-[#BE0201]">
                                        98%
                                    </div> 
                                </div>
                                <div className="font-bold text-[15px] leading-tight text-[#291507]">
                                    Satisfied <br /> Customers
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-25 h-25 rounded-full border border-[#BE0201] flex items-center justify-center text-2xl font-extrabold shadow-sm bg-[#fdfaf5] p-2">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl sm:text-2xl font-extrabold bg-red-50 text-[#BE0201]">
                                        20K
                                    </div> 
                                </div>
                                <div className="font-bold text-[15px] leading-tight text-[#291507]">
                                    Projects <br /> Completed
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 mb-8 max-w-lg" />

                        <h3 className="text-[1.35rem] font-bold mb-4 text-[#291507]">
                            Certified and Experienced in fire protections
                        </h3>

                        <p className="text-gray-500 leading-relaxed mb-6 max-w-lg text-sm sm:text-base">
                            From advanced alarm systems and extinguishers to custom evacuation plans, our
                            certified professionals handle every detail with care, precision, and urgency.
                        </p>

                        <ul className="flex flex-col gap-3">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-[#BE0201] text-white rounded-full p-0.5 shrink-0">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-500 text-sm sm:text-base">Let us help you build a custom fire protection plan.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-[#BE0201] text-white rounded-full p-0.5 shrink-0">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-500 text-sm sm:text-base">From inspections to installations we've got you covered.</span>
                            </li>
                        </ul>

                    </div>

                    <div className="relative w-full h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                 <Image
                   src="/model3.png" 
                   alt="Main fire safety presentation"
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                   sizes="(max-w-7xl) 100vw, 50vw"
                   priority
                 />
                    </div>

                </div>
            </div>
        </section>
    );
}