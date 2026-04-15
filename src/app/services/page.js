import ServiceHero from "../../components/servicehero";
import ServicesTarget from "../../components/servicetarget";
import TestimonialsSection from "../../components/TestimonialsSection";
import WhatWeDoSection from "../../components/WhatWeDoSection";
import FaqSection from "../../components/FaqSection";
import ProcessSection from "../../components/aboutFocus";

export const metadata = {
  title: "Services - Miniwell Fire Safety",
  description: "Learn about Miniwell Fire Safety, our mission, and our commitment to protecting lives and property through innovative fire safety solutions.",
};


export default function ServicesPage() {
  return (
    <div>
      <ServiceHero />
      <ServicesTarget />
      <TestimonialsSection />
      <WhatWeDoSection />
      <FaqSection />
      <ProcessSection />
    </div>
  );
}