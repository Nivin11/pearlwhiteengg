import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-start text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-left px-4 sm:px-6 md:px-12 lg:px-24 max-w-2xl w-full" data-aos="fade-up">
        <div className="md:hidden mb-4" data-aos="fade-down">
          <p className="text-sm sm:text-base font-medium text-gray-300">
            Welcome to
          </p>
          <p className="text-lg sm:text-xl font-bold text-white">
            Pearl White Metal and Iron Works
          </p>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
          Unleash Your Vision with Precision Fabrication
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8">
          From concept to creation, we deliver cutting-edge solutions in welding, cutting, and CNC machining.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg bg-saddle-brown text-alabaster rounded-lg shadow-lg hover:bg-saddle-brown/90 transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
        >
          Get a Free Quote
          <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
