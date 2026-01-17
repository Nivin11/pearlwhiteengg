import aboutUs from '../../assets/aboutUs.jpg';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  return (
    <section className="py-20 bg-parchment text-dark-lava">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <img src={aboutUs} alt="About Us" className="rounded-lg shadow-2xl" />
          </div>
          <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
            <h2 className="text-4xl font-extrabold mb-4">
              Your Trusted Partner in Fabrication
            </h2>
            <p className="text-lg text-beaver mb-6">
              Pearl White Fabrication is a leader in precision engineering and industrial solutions. With over 9 years of experience, we have built a reputation for delivering excellence.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FiCheckCircle className="text-saddle-brown mr-3" />
                <span>State-of-the-art technology</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-saddle-brown mr-3" />
                <span>Experienced and certified team</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-saddle-brown mr-3" />
                <span>Commitment to quality and deadlines</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
