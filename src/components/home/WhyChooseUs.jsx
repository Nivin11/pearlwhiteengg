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
    <section className="py-20 bg-parchment text-dark-lava">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-beaver max-w-2xl mx-auto">
            Experience the Pearl White Fabrication difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-alabaster p-8 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-beaver">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
