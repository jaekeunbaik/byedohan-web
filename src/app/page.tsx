import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
