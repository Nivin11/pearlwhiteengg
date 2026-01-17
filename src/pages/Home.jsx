import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
}