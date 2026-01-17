import { FiArrowRight } from 'react-icons/fi';
import heroBg from '../../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-start text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-left px-6 md:px-12 lg:px-24 max-w-3xl" data-aos="fade-up">
        <div className="md:hidden mb-4" data-aos="fade-down">
          <p className="text-lg font-medium text-gray-300">
            Welcome to
          </p>
          <p className="text-2xl font-bold text-white">
            Pearl White Metal and Iron Works
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
          Unleash Your Vision with Precision Fabrication
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          From concept to creation, we deliver cutting-edge solutions in welding, cutting, and CNC machining.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 font-bold text-lg bg-saddle-brown text-alabaster rounded-lg shadow-lg hover:bg-saddle-brown/90 transform hover:scale-105 transition-transform duration-300"
        >
          Get a Free Quote
          <FiArrowRight className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
