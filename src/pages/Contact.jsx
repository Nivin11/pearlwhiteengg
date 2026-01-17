import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight } from 'react-icons/fi';
import heroBg from '../assets/hero-bg.jpg';

const contactDetails = [
  {
    icon: <FiMapPin size={30} className="text-saddle-brown" />,
    title: 'Our Address',
    info: 'Mussafah M11, Abu Dhabi, UAE',
  },
  {
    icon: <FiPhone size={30} className="text-saddle-brown" />,
    title: 'Phone',
    info: '+971 547714905 , +971 504733247',
  },
  {
    icon: <FiMail size={30} className="text-saddle-brown" />,
    title: 'Email Address',
    info: 'pearlwhiteuae@gmail.com',
  },
];

export default function Contact() {
  return (
    <div className="pt-16 bg-alabaster text-dark-lava">

      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] flex items-center justify-start text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        data-aos="fade-down"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-left px-6 md:px-12 lg:px-24 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold">Get in Touch</h1>
          <p className="text-lg mt-4">
            We're here to help you with all your fabrication needs. Reach out to us today!
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS SECTION */}
      <section className="py-20 bg-parchment">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-extrabold">Contact Information</h2>
            <p className="text-beaver mt-2">Find us, call us, or email us. We are here for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {contactDetails.map((detail, index) => (
              <div key={index} className="bg-alabaster p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex justify-center items-center mb-4">
                    {detail.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{detail.title}</h3>
                <p className="text-beaver text-lg">{detail.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP & BUSINESS HOURS SECTION */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-6">
          <div className="md:flex gap-12 items-start">
            {/* GOOGLE MAP */}
            <div className="md:w-2/3 mb-12 md:mb-0" data-aos="fade-right">
              <h3 className="text-3xl font-extrabold mb-6">Find Us On The Map</h3>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                {/* Replace with your Google Maps embed URL */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3634.5609497648525!2d54.50427247535495!3d24.3617820782582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDIxJzQyLjQiTiA1NMKwMzAnMjQuNyJF!5e0!3m2!1sen!2sin!4v1768370579781!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* BUSINESS HOURS */}
            <div className="md:w-1/3" data-aos="fade-left">
              <h3 className="text-3xl font-extrabold mb-6">Business Hours</h3>
              <div className="bg-parchment p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <FiClock size={24} className="text-saddle-brown mr-4" />
                  <h4 className="text-xl font-bold">Working Days</h4>
                </div>
                <p className="text-beaver mb-6 ml-10">Monday to Saturday : 8:00 AM - 6:00 PM</p>
                <div className="flex items-center mb-4">
                  <FiClock size={24} className="text-saddle-brown mr-4" />
                  <h4 className="text-xl font-bold">Holiday</h4>
                </div>
                <p className="text-beaver ml-10">Sunday : Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="py-24 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="bg-black/70 py-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Check out our services and see how we can help you achieve your goals.
          </p>

          <Link to="/services" className="mt-8 inline-flex items-center justify-center px-8 py-4 font-bold text-lg bg-saddle-brown text-alabaster rounded-lg shadow-lg hover:bg-saddle-brown/90 transform hover:scale-105 transition-transform duration-300">
            Our Services
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}