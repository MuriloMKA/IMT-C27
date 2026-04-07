import { HeroCarousel } from './components/HeroCarousel';
import { InfoSection } from './components/InfoSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel />
      <InfoSection />
      <LocationSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
