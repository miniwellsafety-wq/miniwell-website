// // "use client";

// // import React, { useState } from "react";
// // import Link from "next/link";
// // import { ArrowRight, ArrowDown, ArrowUp, PhoneCall } from "lucide-react";
// // import Image from "next/image";

// // export default function FaqSection() {
// //   // State to track the open FAQ item. Defaulting to 1 (the second item) to match your design.
// //   const [openIndex, setOpenIndex] = useState(1);

// //   const faqs = [
// //     {
// //       question: "What fire safety services do you offer?",
// //       answer: "We offer a comprehensive range of services including fire risk assessments, alarm installation, extinguisher maintenance, and emergency evacuation planning.",
// //     },
// //     {
// //       question: "How often should fire extinguishers be inspected?",
// //       answer: "Fire extinguishers should undergo a basic visual inspection monthly, and a thorough professional maintenance inspection by a certified technician at least once a year to ensure compliance.",
// //     },
// //     {
// //       question: "Do you provide emergency support services?",
// //       answer: "Yes, our rapid response team is available 24/7 to handle fire safety emergencies, system failures, and immediate support requests.",
// //     },
// //     {
// //       question: "Are your systems compliant with local fire codes?",
// //       answer: "Absolutely. All our installations and maintenance protocols strictly adhere to national and local fire safety codes and regulations.",
// //     },
// //     {
// //       question: "How do I schedule a fire risk assessment?",
// //       answer: "You can schedule a fire risk assessment by contacting us via phone, email, or by filling out the consultation form on our website.",
// //     },
// //   ];

// //   return (
// //     <section className="w-full bg-[#fdfaf5] py-16 lg:py-24 font-sans text-[#291507]">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// //         {/* ── TOP HEADER ROW ── */}
// //         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative">

// //           {/* Small decorative orange dot */}
// //           <div className="absolute left-[40%] bottom-[-40px] w-2 h-2 rounded-full bg-[#f47629] hidden lg:block"></div>

// //           {/* Titles */}
// //           <div className="max-w-2xl">
// //             <div className="flex items-center gap-2 text-[#f47629] font-bold uppercase tracking-widest text-xs mb-4">
// //               <span className="w-1.5 h-1.5 rounded-full bg-[#f47629]"></span>
// //               FAQS
// //             </div>
// //             <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight">
// //               Common questions about <br className="hidden md:block" />
// //               our services
// //             </h2>
// //           </div>

// //           {/* View All Button */}
// //           <div>
// //             <Link
// //               href="/faqs"
// //               className="group flex items-center bg-[#f47629] hover:bg-orange-600 text-white font-semibold rounded-full pl-6 pr-2 py-2 transition-all duration-300 w-max"
// //             >
// //               <span className="text-sm mr-2">View All FAQ</span>
// //               <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#f47629] group-hover:translate-x-1 transition-transform duration-300">
// //                 <ArrowRight className="w-4 h-4" strokeWidth={3} />
// //               </div>
// //             </Link>
// //           </div>
// //         </div>

// //         {/* ── MAIN CONTENT GRID ── */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

// //           {/* LEFT: Images & Contact Box */}
// //           <div className="flex flex-col gap-6">

// //             {/* Masonry Image Layout */}
// //             <div className="grid grid-cols-2 gap-4 h-[450px] sm:h-[550px]">

// //               {/* Column 1 (Two stacked images) */}
// //               <div className="flex flex-col gap-4 h-full">
// //                 <div className="relative w-full h-[45%] rounded-[2rem] overflow-hidden">
// //                   <Image 
// //                     src="https://images.unsplash.com/photo-1599708153386-62bf0bd5a242?auto=format&fit=crop&w=600&q=80" 
// //                     alt="Firefighters"
// //                     fill
// //                     className="object-cover"
// //                   />
// //                 </div>
// //                 <div className="relative w-full h-[55%] rounded-[2rem] overflow-hidden">
// //                   <Image 
// //                     src="https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80" 
// //                     alt="Fire rescue"
// //                     fill
// //                     className="object-cover"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Column 2 (One tall image) */}
// //               <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
// //                 <Image 
// //                   src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80" 
// //                   alt="Firefighter with hose"
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>

// //             </div>

// //             {/* Contact Box placed below the images */}
// //             <div className="flex items-center gap-4 mt-2">
// //               <div className="w-14 h-14 rounded-full bg-[#f47629] flex items-center justify-center text-white shrink-0 shadow-md">
// //                 <PhoneCall className="w-6 h-6" />
// //               </div>
// //               <div>
// //                 <p className="text-gray-500 text-sm font-medium mb-0.5">Have any Question ?</p>
// //                 <p className="text-[#291507] font-extrabold text-xl tracking-tight">+1 987 965 698</p>
// //               </div>
// //             </div>

// //           </div>

// //           {/* RIGHT: FAQ Accordion */}
// //           <div className="flex flex-col justify-center">
// //             <div className="border-t border-gray-200">
// //               {faqs.map((faq, index) => {
// //                 const isOpen = openIndex === index;

// //                 return (
// //                   <div key={index} className="border-b border-gray-200">
// //                     {/* Question Button */}
// //                     <button
// //                       onClick={() => setOpenIndex(isOpen ? -1 : index)}
// //                       className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
// //                     >
// //                       <h4 className="text-[1.15rem] font-bold text-[#291507] pr-8 group-hover:text-[#f47629] transition-colors duration-300">
// //                         {index + 1}. {faq.question}
// //                       </h4>
// //                       <div className="w-8 h-8 rounded-full bg-[#f47629] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300">
// //                         {isOpen ? (
// //                           <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
// //                         ) : (
// //                           <ArrowDown className="w-4 h-4" strokeWidth={2.5} />
// //                         )}
// //                       </div>
// //                     </button>

// //                     {/* Answer (Animated Wrapper) */}
// //                     <div
// //                       className={`overflow-hidden transition-all duration-300 ease-in-out ${
// //                         isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
// //                       }`}
// //                     >
// //                       <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
// //                         {faq.answer}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { ArrowRight, ArrowDown, ArrowUp, PhoneCall } from "lucide-react";
// import Image from "next/image";

// export default function FaqSection() {
//     const [openIndex, setOpenIndex] = useState(1);

//     const faqs = [
//         {
//             question: "What fire safety services do you offer?",
//             answer: "We offer a comprehensive range of services including fire risk assessments, alarm installation, extinguisher maintenance, and emergency evacuation planning.",
//         },
//         {
//             question: "How often should fire extinguishers be inspected?",
//             answer: "Fire extinguishers should undergo a basic visual inspection monthly, and a thorough professional maintenance inspection by a certified technician at least once a year to ensure compliance.",
//         },
//         {
//             question: "Do you provide emergency support services?",
//             answer: "Yes, our rapid response team is available 24/7 to handle fire safety emergencies, system failures, and immediate support requests.",
//         },
//         {
//             question: "Are your systems compliant with local fire codes?",
//             answer: "Absolutely. All our installations and maintenance protocols strictly adhere to national and local fire safety codes and regulations.",
//         },
//         {
//             question: "How do I schedule a fire risk assessment?",
//             answer: "You can schedule a fire risk assessment by contacting us via phone, email, or by filling out the consultation form on our website.",
//         },
//     ];

//     return (
//         <section className="w-full bg-[#fdfaf5] py-12 lg:py-16 font-sans text-[#291507]">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative">

//                     <div className="max-w-2xl">
//                         <div className="flex items-center gap-2 text-[#BE0201] font-bold uppercase tracking-widest text-xs mb-4">
//                             <span className="w-1.5 h-1.5 rounded-full bg-[#BE0201]" />
//                             FAQS
//                         </div>
//                         <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-[1.15] tracking-tight">
//                             Common questions about <br className="hidden md:block" />
//                             our services
//                         </h2>
//                     </div>


//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
//                     <div className="flex flex-col gap-6">

//                         <div
//                             className="grid gap-3"
//                             style={{
//                                 gridTemplateColumns: "1fr 1fr",
//                                 height: "520px",
//                             }}
//                         >
//                             <div className="flex flex-col gap-3 h-full">

//                                 <div className="relative w-full rounded-[1.5rem] overflow-hidden group" style={{ flex: "0 0 42%" }}>
//                                     <Image
//                                         src="/model9.png"
//                                         alt="Firefighters with gear"
//                                         fill
//                                         className="object-cover transition-transform duration-700 group-hover:scale-105"
//                                         sizes="(max-width: 1280px) 100vw, 50vw"
//                                         priority
//                                     />
//                                 </div>

//                                 <div className="relative w-full rounded-[1.5rem] overflow-hidden group" style={{ flex: "1 1 0" }}>
//                                     <Image
//                                         src="/model10.png"
//                                         alt="Fire rescue operation"
//                                         fill
//                                         className="object-cover transition-transform duration-700 group-hover:scale-105"
//                                         sizes="(max-width: 1280px) 100vw, 50vw"
//                                     />
//                                 </div>

//                             </div>

//                             <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden group">
//                                 <Image
//                                     src="/model11.png"
//                                     alt="Firefighter with hose"
//                                     fill
//                                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                                     sizes="(max-width: 1280px) 100vw, 50vw"
//                                 />
//                             </div>

//                         </div>
//                         <div className="flex items-center gap-4 mt-1">
//                             <div className="w-14 h-14 rounded-full bg-[#BE0201] flex items-center justify-center text-white shrink-0 shadow-md">
//                                 <PhoneCall className="w-6 h-6" />
//                             </div>
//                             <div>
//                                 <p className="text-gray-500 text-sm font-medium mb-0.5">Have any Question ?</p>
//                                 <p className="text-[#291507] font-extrabold text-xl tracking-tight">+1 987 965 698</p>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="flex flex-col justify-center">
//                         <div className="border-t border-gray-200">
//                             {faqs.map((faq, index) => {
//                                 const isOpen = openIndex === index;
//                                 return (
//                                     <div key={index} className="border-b border-gray-200">
//                                         <button
//                                             onClick={() => setOpenIndex(isOpen ? -1 : index)}
//                                             className="w-full flex items-center justify-between py-5 sm:py-6 text-left focus:outline-none group"
//                                         >
//                                             <h4 className="text-base sm:text-[1.15rem] font-bold text-[#291507] pr-8 group-hover:text-[#BE0201] transition-colors duration-300">
//                                                 {index + 1}. {faq.question}
//                                             </h4>
//                                             <div className="w-8 h-8 rounded-full bg-[#BE0201] text-white flex items-center justify-center shrink-0 shadow-sm">
//                                                 {isOpen
//                                                     ? <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
//                                                     : <ArrowDown className="w-4 h-4" strokeWidth={2.5} />
//                                                 }
//                                             </div>
//                                         </button>
//                                         <div
//                                             className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
//                                                 }`}
//                                         >
//                                             <p className="text-gray-500 leading-relaxed text-sm sm:text-[15px] pr-12">
//                                                 {faq.answer}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowDown, ArrowUp, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function FaqSection() {
    // Changed from 1 to -1 so all FAQs are closed by default
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
                                <p className="text-[#291507] font-extrabold text-xl tracking-tight">+1 987 965 698</p>
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