"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactInfoCards() {
  const contactInfo = [
    {
      title: "Contact Us",
      details: ["+91 9974200802"],
      icon: Phone,
    },
    {
      title: "E-mail",
      details: ["miniwellsafety@gmail.com"],
      icon: Mail,
    },
    {
      title: "Our Location",
      details: [
        "Survey no 1636 24, Malhar Bunglows, Karan Nagar Rd, Kadi, Gujarat 382715",
      ],
      icon: MapPin,
    },
  ];

  return (
    <section className="mx-4 lg:mx-8 py-16 lg:py-24 font-sans rounded-[2.5rem] my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden flex flex-col p-8 rounded-[2rem] transition-all duration-500 cursor-pointer bg-red-100/60 text-[#291507] border border-gray-200"
              >
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#BE0201] transition-all duration-500 ease-in-out group-hover:h-full z-0" />

                <div className="relative z-10 flex flex-col h-full">
                  
                  <div className="mb-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-[#BE0201] transition-colors duration-500" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 transition-colors duration-500 group-hover:text-white">
                    {info.title}
                  </h3>

                  <div className="flex flex-col space-y-1.5">
                    {info.details.map((line, i) => (
                      <p
                        key={i}
                        className="text-sm font-medium text-gray-500 transition-colors duration-500 group-hover:text-white/90"
                      >
                        {line}
                      </p>
                    ))}
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

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", message: "",
  });
  const [status, setStatus] = useState("idle"); 

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="mx-4 lg:mx-8 py-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="bg-red-100/60 rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-gray-200">

          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[#291507] tracking-tight mb-3">
              Have any questions?
            </h2>
            <p className="text-gray-500 font-medium">Fill out the form to connect with us today.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input name="firstName" value={formData.firstName} onChange={handleChange}
                type="text" placeholder="First Name" required
                className="w-full bg-white text-[#291507] placeholder-gray-400 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#BE0201] transition-all border border-transparent" />

              <input name="lastName" value={formData.lastName} onChange={handleChange}
                type="text" placeholder="Last Name" required
                className="w-full bg-white text-[#291507] placeholder-gray-400 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#BE0201] transition-all border border-transparent" />

              <input name="email" value={formData.email} onChange={handleChange}
                type="email" placeholder="E-mail address" required
                className="w-full bg-white text-[#291507] placeholder-gray-400 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#BE0201] transition-all border border-transparent" />

              <input name="phone" value={formData.phone} onChange={handleChange}
                type="tel" placeholder="Phone number"
                className="w-full bg-white text-[#291507] placeholder-gray-400 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#BE0201] transition-all border border-transparent" />

            </div>

            <textarea name="message" value={formData.message} onChange={handleChange}
              placeholder="Message" rows={5} required
              className="w-full bg-white text-[#291507] placeholder-gray-400 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#BE0201] transition-all resize-y border border-transparent" />

            {status === "success" && (
              <p className="text-green-600 font-medium">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium">❌ Something went wrong. Please try again.</p>
            )}

            <div className="pt-2">
              <button type="submit" disabled={status === "loading"}
                className="bg-[#BE0201] hover:bg-[#291507] disabled:opacity-60 text-white font-bold py-4 px-10 rounded-full transition-colors duration-300">
                {status === "loading" ? "Sending..." : "Submit Message"}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}