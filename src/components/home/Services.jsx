import { FiTool, FiZap, FiWind } from 'react-icons/fi';
import cuttingWorks from '../../assets/cuttingWorks.jpg';
import welding from '../../assets/welding.jpg';
import fabricationCnc from '../../assets/fabricationCnc.jpg';


const services = [
  {
    icon: <FiZap size={40} className="text-saddle-brown" />,
    title: 'Cutting Works',
    description: 'High-precision waterjet, laser, and plasma cutting for all materials.',
    image: cuttingWorks,
  },
  {
    icon: <FiTool size={40} className="text-saddle-brown" />,
    title: 'Welding',
    description: 'Expert MIG, TIG, and spot welding for robust and clean fabrication.',
    image: welding,
  },
  {
    icon: <FiWind size={40} className="text-saddle-brown" />,
    title: 'Fabrication & CNC',
    description: 'Custom fabrication, sheet metal bending, and CNC machining services.',
    image: fabricationCnc,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-alabaster text-dark-lava">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-4">Our Services</h2>
          <p className="text-lg text-beaver max-w-2xl mx-auto">
            We offer a comprehensive range of services to meet your most demanding needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-parchment rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={service.image} alt={service.title} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
                </div>
                <p className="text-beaver">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
