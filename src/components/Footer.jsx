import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-parchment text-dark-lava pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12">
          
          {/* ABOUT SECTION */}
          <div className="col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-saddle-brown mb-4">Pearl White Metal and Iron Works</h3>
            <p className="text-sm sm:text-base text-beaver">
              Pioneering precision fabrication with a passion for excellence and a commitment to quality. Your trusted partner for cutting, welding, and CNC services.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/" className="text-sm sm:text-base hover:text-saddle-brown transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-sm sm:text-base hover:text-saddle-brown transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-sm sm:text-base hover:text-saddle-brown transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm sm:text-base hover:text-saddle-brown transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4 text-beaver text-sm sm:text-base">
              <li className="flex items-start">
                <FiMapPin className="text-saddle-brown mt-1 mr-3 flex-shrink-0" size={18} />
                <span>Mussafah M11, Abu Dhabi, UAE</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="text-saddle-brown mt-1 mr-3 flex-shrink-0" size={18} />
                <a href="tel:+971504733247" className="hover:text-saddle-brown transition-colors">+971 504733247, +971 547714905</a>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="text-saddle-brown mt-1 mr-3 flex-shrink-0" size={18} />
                <a href="https://wa.me/971504733247" target="_blank" rel="noopener noreferrer" className="hover:text-saddle-brown transition-colors">+971 504733247</a>
              </li>
              <li className="flex items-start">
                <FiMail className="text-saddle-brown mt-1 mr-3 flex-shrink-0" size={18} />
                <a href="mailto:contact@pearlwhite.com" className="hover:text-saddle-brown transition-colors break-all">pearlwhiteuae@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-beaver text-center text-beaver text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Pearl White Fabrication. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}