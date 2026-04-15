"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowDown, ArrowUp, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(-1);

    const faqs = [
        {
            question: "What fire safety services do you offer?",
            answer: "We offer a comprehensive range of services including fire risk assessments, alarm installation, extinguisher maintenance, and emergency evacuation planning.",
        },
        {
            question: "How often should fire extinguishers be inspected?",
            answer: "Fire extinguishers should undergo a basic visual inspection monthly, and a thorough professional maintenance inspection by a certified technician at least once a year to ensure compliance.",
        },
        {
            question: "Do you provide emergency support services?",
            answer: "Yes, our rapid response team is available 24/7 to handle fire safety emergencies, system failures, and immediate support requests.",
        },
        {
            question: "Are your systems compliant with local fire codes?",
            answer: "Absolutely. All our installations and maintenance protocols strictly adhere to national and local fire safety codes and regulations.",
        },
        {
            question: "How do I schedule a fire risk assessment?",
            answer: "You can schedule a fire risk assessment by contacting us via phone, email, or by filling out the consultation form on our website.",
        },
    ];

    return (
        <section className="w-full bg-[#fdfaf5] py-12 lg:py-16 font-sans text-[#291507]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#BE0201]" />
                            FAQS
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-[1.15] tracking-tight">
                            Common questions about <br className="hidden md:block" />
                            our services
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div className="flex flex-col gap-6">

                        <div
                            className="grid gap-3"
                            style={{
                                gridTemplateColumns: "1fr 1fr",
                                height: "520px",
                            }}
                        >
                            <div className="flex flex-col gap-3 h-full">

                                <div className="relative w-full rounded-[1.5rem] overflow-hidden group" style={{ flex: "0 0 42%" }}>
                                    <Image
                                        src="/model9.png"
                                        alt="Firefighters with gear"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 1280px) 100vw, 50vw"
                                        priority
                                    />
                                </div>

                                <div className="relative w-full rounded-[1.5rem] overflow-hidden group" style={{ flex: "1 1 0" }}>
                                    <Image
                                        src="/model10.png"
                                        alt="Fire rescue operation"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 1280px) 100vw, 50vw"
                                    />
                                </div>

                            </div>

                            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden group">
                                <Image
                                    src="/model11.png"
                                    alt="Firefighter with hose"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 1280px) 100vw, 50vw"
                                />
                            </div>

                        </div>
                        <div className="flex items-center gap-4 mt-1">
                            <div className="w-14 h-14 rounded-full bg-[#BE0201] flex items-center justify-center text-white shrink-0 shadow-md">
                                <PhoneCall className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-0.5">Have any Question ?</p>
                                <p className="text-[#291507] font-extrabold text-xl tracking-tight">+91 9974200802</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="border-t border-gray-200">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div key={index} className="border-b border-gray-200">
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                            className="w-full flex items-center justify-between py-5 sm:py-6 text-left focus:outline-none group"
                                        >
                                            <h4 className="text-base sm:text-[1.15rem] font-bold text-[#291507] pr-8 group-hover:text-[#BE0201] transition-colors duration-300">
                                                {index + 1}. {faq.question}
                                            </h4>
                                            <div className="w-8 h-8 rounded-full bg-[#BE0201] text-white flex items-center justify-center shrink-0 shadow-sm">
                                                {isOpen
                                                    ? <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
                                                    : <ArrowDown className="w-4 h-4" strokeWidth={2.5} />
                                                }
                                            </div>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <p className="text-gray-500 leading-relaxed text-sm sm:text-[15px] pr-12">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}