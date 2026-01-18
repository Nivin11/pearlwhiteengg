import aboutUs from '../../assets/aboutUs.jpg';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  return (
    <section className="py-12 sm:py-20 bg-parchment text-dark-lava">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="mb-8 md:mb-0" data-aos="fade-right">
            <img src={aboutUs} alt="About Us" className="rounded-lg shadow-2xl w-full h-auto" />
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Your Trusted Partner in Fabrication
            </h2>
            <p className="text-base sm:text-lg text-beaver mb-6">
              Pearl White Fabrication is a leader in precision engineering and industrial solutions. With over 9 years of experience, we have built a reputation for delivering excellence.
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start sm:items-center">
                <FiCheckCircle className="text-saddle-brown mr-3 flex-shrink-0 mt-1 sm:mt-0" />
                <span className="text-sm sm:text-base">State-of-the-art technology</span>
              </li>
              <li className="flex items-start sm:items-center">
                <FiCheckCircle className="text-saddle-brown mr-3 flex-shrink-0 mt-1 sm:mt-0" />
                <span className="text-sm sm:text-base">Experienced and certified team</span>
              </li>
              <li className="flex items-start sm:items-center">
                <FiCheckCircle className="text-saddle-brown mr-3 flex-shrink-0 mt-1 sm:mt-0" />
                <span className="text-sm sm:text-base">Commitment to quality and deadlines</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
