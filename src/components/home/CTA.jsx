import { FiArrowRight } from 'react-icons/fi';
import heroBg from '../../assets/hero-bg.jpg';

const CTA = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-center px-4" data-aos="zoom-in">
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to bring your ideas to life?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Let's discuss your project and how we can help you achieve your goals.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 font-bold text-lg bg-saddle-brown text-alabaster rounded-lg shadow-lg hover:bg-saddle-brown/90 transform hover:scale-105 transition-transform duration-300"
        >
          Contact Us
          <FiArrowRight className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default CTA;
