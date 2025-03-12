import FAQSection from "./components/FAQSection/page";
import ContactUs from "./components/ContactUs/page";
import CoolStuff from "./components/CoolStuff/page";
import EcosystemsGrid from "./components/EcosystemsGrid/Page";
import HeroSection from "./components/HeroSection/Page"
import ServicesSection from "./components/ServicesSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <Services />
      <WhyChooseUs />
      <EcosystemsGrid />
      <CoolStuff />
      <FAQSection />
      <ContactUs />
    </main>
  );
}
