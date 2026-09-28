import { MotionConfig } from 'motion/react';
import { useEffect } from 'react';
import { Committee } from './components/Committee';
import { EventInfo } from './components/EventInfo';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Nav } from './components/Nav';
import { VenueMap } from './components/VenueMap';
import { startSmoothScroll } from './lib/smooth-scroll';

export default function App() {
  useEffect(() => startSmoothScroll(), []);

  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <EventInfo />
        <VenueMap />
        <Gallery />
        <Committee />
        <FAQ />
      </main>
      <Footer />
    </MotionConfig>
  );
}
