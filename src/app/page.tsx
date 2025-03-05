import FAQSection from "./components/FAQSection/page";
import ContactUs from "./components/ContactUs/page";
import CoolStuff from "./components/CoolStuff/page";
import EcosystemsGrid from "./components/EcosystemsGrid/Page";
export default function Home() {
  return (
    <main>
      <EcosystemsGrid />
      <CoolStuff />
      <FAQSection />
      <ContactUs />

    </main>
  );
}
