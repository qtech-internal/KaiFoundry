import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Services />
      <WhyChooseUs />
    </div>
  );
}




