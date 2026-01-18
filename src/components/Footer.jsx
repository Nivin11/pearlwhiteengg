import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-parchment text-dark-lava pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* ABOUT SECTION */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-bold text-saddle-brown mb-4">Pearl White Metal and Iron Works</h3>
            <p className="text-beaver">
              Pioneering precision fabrication with a passion for excellence and a commitment to quality. Your trusted partner for cutting, welding, and CNC services.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-saddle-brown transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-saddle-brown transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-saddle-brown transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-saddle-brown transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-beaver">
              <li className="flex items-start">
                <FiMapPin className="text-saddle-brown mt-1 mr-3 flex-shrink-0" />
                <span>Mussafah M11, Abu Dhabi, UAE</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="text-saddle-brown mt-1 mr-3 flex-shrink-0" />
                <a href="tel:+971000000000" className="hover:text-saddle-brown transition-colors">971 504733247, +971 547714905</a>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="text-saddle-brown mt-1 mr-3 flex-shrink-0" />
                <a href="https://wa.me/971504733247" target="_blank" rel="noopener noreferrer" className="hover:text-saddle-brown transition-colors">+971 504733247</a>
              </li>
              <li className="flex items-start">
                <FiMail className="text-saddle-brown mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:contact@pearlwhite.com" className="hover:text-saddle-brown transition-colors">pearlwhiteuae@gmail.com</a>
              </li>
            </ul>
          </div>



        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-8 border-t border-beaver text-center text-beaver">
          <p>&copy; {new Date().getFullYear()} Pearl White Fabrication. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}