import Hero from "../components/hero";
import AboutSection from "../components/about";
import ServicesSection from "../components/client";
import WhoWeAreSection from "../components/WhoWeAreSection";
import FeaturesSection from "../components/features";
import FunFactsSection from "../components/FunFactsSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhoWeAreSection />
      <FeaturesSection />
      <FunFactsSection />
      <HowWeWorkSection />
      <WhatWeDoSection />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
}