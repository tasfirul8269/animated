import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen home-page">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}