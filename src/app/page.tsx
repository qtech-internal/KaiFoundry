import FAQSection from "./components/FAQSection/page";
import ContactUs from "./components/ContactUs/page";
import CoolStuff from "./components/CoolStuff/page";
import EcosystemsGrid from "./components/EcosystemsGrid/Page";
import HeroSection from "./components/HeroSection/Page";
import ServicesSection from "./components/ServicesSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import AnimatedSection from "./components/AnimatedImageCard";
import AnimatedImageMobile from "./components/AnimatedImageMobile";
import './globals.css';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <Services />
      <WhyChooseUs />
      <EcosystemsGrid />
      <div className="hidden lg:block">
      <AnimatedSection />
      </div>
      <div className="block lg:hidden">
      <AnimatedImageMobile/>
      </div>
      <CoolStuff />
      <FAQSection />
      <ContactUs />
    </main>
  );
}
