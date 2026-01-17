import { Link } from 'react-router-dom';
import { FiAward, FiEye, FiHeart, FiUsers, FiArrowRight } from 'react-icons/fi';
import { FiCheckCircle  } from "react-icons/fi";
import aboutUs from '../assets/aboutUs.jpg';
import heroBg from '../assets/hero-bg.jpg';

const values = [
  {
    icon: <FiAward size={40} className="text-saddle-brown" />,
    title: 'Precision',
    description: 'We deliver millimeter-perfect results with our advanced CNC and fabrication technology.',
  },
  {
    icon: <FiHeart size={40} className="text-saddle-brown" />,
    title: 'Quality',
    description: 'Our commitment to quality is unwavering, with strict checks at every stage of production.',
  },
  {
    icon: <FiUsers size={40} className="text-saddle-brown" />,
    title: 'Expertise',
    description: 'A highly skilled team with decades of combined experience in the fabrication industry.',
  },
];



export default function About() {
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
          <h1 className="text-5xl md:text-6xl font-extrabold">About Us</h1>
          <p className="text-lg mt-4">
            Pioneering precision fabrication with a passion for excellence.
          </p>
        </div>
      </section>

<section className="py-20 bg-parchment">
        <div className="container mx-auto px-6">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
              <img src={aboutUs} alt="Our Story" className="rounded-lg shadow-2xl" />
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="text-4xl font-extrabold mb-4">Our Story</h2>
              <p className="text-beaver mb-4">
                Founded over nine years ago, Pearl White Fabrication started with a simple mission: to provide the highest quality fabrication services in Mussafah. We have since grown into a trusted partner for businesses across the UAE, known for our precision, reliability, and commitment to customer satisfaction.
              </p>
              <p className="text-beaver">
                Our journey is one of continuous innovation, investing in the latest technology and nurturing a team of passionate experts who share our vision for excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES SECTION */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-parchment p-8 rounded-lg shadow-lg">
                <div className="flex justify-center items-center mb-4">
                    {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                <p className="text-beaver">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* OUR MISSION & VISION SECTION */}
<section className="py-20 bg-parchment">
  <div className="container mx-auto px-6" data-aos="fade-up">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold">Our Mission & Vision</h2>
      <p className="text-beaver mt-2">
        Driving excellence through precision, innovation, and trust.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

      {/* Vision */}
      <div className="bg-alabaster p-8 rounded-lg shadow-lg" data-aos="fade-left">
        <div className="flex items-center mb-4">
          <FiEye size={38} className="text-saddle-brown" />
          <h3 className="text-3xl font-bold ml-4">Our Vision</h3>
        </div>

        <p className="text-beaver leading-relaxed">
          To become a trusted and leading engineering solutions provider by
          delivering precision metal cutting, fabrication, and CNC machining
          services that set benchmarks in quality, reliability, and innovation.
          We support industrial growth through cost-effective, timely solutions
          while elevating industry standards through excellence and
          uncompromising quality.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-alabaster p-8 rounded-lg shadow-lg" data-aos="fade-right">
        <div className="flex items-center mb-4">
          <FiHeart size={38} className="text-saddle-brown" />
          <h3 className="text-3xl font-bold ml-4">Our Mission</h3>
        </div>

        <p className="text-beaver mb-6 leading-relaxed">
          Our mission is to deliver high-precision metal processing and
          fabrication services by integrating advanced technologies—including
          waterjet, laser, plasma, flame cutting, CNC lathe and milling, forming,
          rolling, and specialized welding solutions—with expert craftsmanship.
        </p>

        <ul className="space-y-4">
          {[
            "Achieving exceptional accuracy, consistency, and durability in every project",
            "Building long-term partnerships through reliability, transparency, and trust",
            "Ensuring on-time delivery without compromise on quality",
            "Upholding the highest standards of safety, quality control, and operational excellence",
            "Continuously investing in technology, skills, and process innovation",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-beaver"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <FiCheckCircle
                size={20}
                className="text-saddle-brown mt-1 flex-shrink-0"
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>




      {/* CALL TO ACTION */}
      <section
        className="py-24 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="bg-black/70 py-16">
          <h2 className="text-4xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Get in touch with our team to discuss your next project.
          </p>

          <a href="/contact" className="mt-8 inline-flex items-center justify-center px-8 py-4 font-bold text-lg bg-saddle-brown text-alabaster rounded-lg shadow-lg hover:bg-saddle-brown/90 transform hover:scale-105 transition-transform duration-300">
            Contact Us
            <FiArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}