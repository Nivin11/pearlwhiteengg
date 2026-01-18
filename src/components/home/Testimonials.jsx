import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'John Dillon',
    company: 'ABC White Corporation',
    testimonial: 'Pearl White Fabrication delivered exceptional quality on a critical project. Their attention to detail and commitment to deadlines were impressive.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    company: 'Blaze Inc.',
    testimonial: 'The team at Pearl White is professional, skilled, and easy to work with. They exceeded our expectations in every way.',
    rating: 5,
  },
  {
    name: 'Sam Wilson',
    company: 'Iron Stem Industries',
    testimonial: 'We have been working with Pearl White for several years and they have always provided us with top-notch service. Highly recommended!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-20 bg-parchment text-dark-lava">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">What Our Clients Say</h2>
          <p className="text-base sm:text-lg text-beaver max-w-2xl mx-auto px-2">
            We are proud to have earned the trust of our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-alabaster p-6 sm:p-8 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-saddle-brown" size={18} />
                ))}
              </div>
              <p className="text-beaver mb-4 text-sm sm:text-base">{testimonial.testimonial}</p>
              <div>
                <p className="font-bold text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-beaver">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
