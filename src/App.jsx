import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaWhatsapp } from 'react-icons/fa'; // Import FaWhatsapp

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {/* Everything inside Router */}
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* fixed navbar */}

        <div className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>

      {/* Sticky WhatsApp Icon */}
      <a
        href="https://wa.me/971504733247"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-[1000] bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={35} />
      </a>
    </Router>
  );
}
