import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
