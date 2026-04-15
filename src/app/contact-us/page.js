import ContactHero from "../../components/contacthero";
import ContactInfoCards from "../../components/ContactInfoCards";
import { ContactForm } from "../../components/ContactInfoCards";
import MapComponent from "../../components/MapComponent";

export const metadata = {
  title: "Contact Us - Miniwell Fire Safety",
  description: "Get in touch with Miniwell Fire Safety for inquiries, support, or to learn more about our fire safety solutions. We're here to help protect lives and property.",
};

export default function AboutPage() {
  return (
    <div className="bg-white"> 
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
      <section className="max-w-7xl mx-auto px-4 py-12 mb-12">
        <div className="w-full">
          <MapComponent />
        </div>
      </section>
    </div>
  );
}