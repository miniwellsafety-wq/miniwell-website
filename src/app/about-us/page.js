
import AboutSection from "../../components/about";
import AboutHero from "../../components/abouthero";
import MissionSection from "../../components/aboutApproach";
import ApproachStatsSection from "../../components/aboutmissionapproach";
import ExpertiseSection from "../../components/aboutExpertise";
import KeyFeaturesSection from "../../components/abourCommunity";
import TestimonialsSection from "../../components/TestimonialsSection";
import FaqSection from "../../components/FaqSection";
import ProcessSection from "../../components/aboutFocus";

export const metadata = {
  title: "About Us - Miniwell Fire Safety",
  description: "Learn about Miniwell Fire Safety, our mission, and our commitment to protecting lives and property through innovative fire safety solutions.",
};


export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutSection />
      <MissionSection />
      <ApproachStatsSection />
      <ExpertiseSection />
      <KeyFeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <ProcessSection />
    </div>
  );
}