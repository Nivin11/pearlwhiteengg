import { FiAward, FiClock, FiUsers } from 'react-icons/fi';

const features = [
  {
    icon: <FiAward size={40} className="text-saddle-brown" />,
    title: 'Unmatched Quality',
    description: 'We are committed to delivering the highest quality products and services.',
  },
  {
    icon: <FiClock size={40} className="text-saddle-brown" />,
    title: 'On-Time Delivery',
    description: 'We respect your deadlines and ensure your projects are delivered on time.',
  },
  {
    icon: <FiUsers size={40} className="text-saddle-brown" />,
    title: 'Customer-Centric',
    description: 'We work closely with our clients to ensure their complete satisfaction.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-20 bg-parchment text-dark-lava">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Why Choose Us?</h2>
          <p className="text-base sm:text-lg text-beaver max-w-2xl mx-auto px-2">
            Experience the Pearl White Fabrication difference.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-alabaster p-6 sm:p-8 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-beaver">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
