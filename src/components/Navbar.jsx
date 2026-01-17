import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/logo.png';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-saddle-brown font-bold'
      : 'hover:text-saddle-brown transition-colors duration-300';

  return (
    <nav className="w-full fixed top-0 z-50 bg-parchment shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* NAVBAR HEIGHT BASED ON SCROLL */}
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-20' : 'h-24'
          }`}
        >

          {/* LOGO + BRAND */}
          <Link
            to="/"
            className="flex items-center transition-all duration-300"
          >
            <img
              src={Logo}
              alt="Pearl White Metal & Iron Works Logo"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-14' : 'h-16'
              }`}
            />

            {/* Brand name (desktop only) */}
            <span
              className={`hidden md:block ml-4 font-heading font-bold text-saddle-brown transition-all duration-300 ${
                isScrolled ? 'text-2xl' : 'text-3xl'
              }`}
            >
              Pearl White Metal & Iron Works
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.title} to={link.path} className={linkClass}>
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-lava hover:text-saddle-brown focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute inset-x-0 p-2 transition-all duration-300 ease-out z-[999] ${
          isOpen
            ? `${isScrolled ? 'top-20' : 'top-24'} block translate-y-0 opacity-100`
            : `${isScrolled ? 'top-20' : 'top-24'} hidden -translate-y-full opacity-0`
        }`}
        id="mobile-menu"
      >
        <div className="h-screen rounded-lg shadow-lg ring-1 ring-beaver ring-opacity-5 bg-parchment divide-y-2 divide-beaver">
          <div className="pt-6 pb-6 px-6">

            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-heading font-bold text-saddle-brown">
                Pearl White
              </h1>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center text-dark-lava hover:text-saddle-brown focus:outline-none"
              >
                <FiX size={28} />
              </button>
            </div>

            <nav className="mt-14 grid gap-y-10 text-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-medium ${
                      isActive ? 'text-saddle-brown' : 'text-dark-lava'
                    } hover:text-saddle-brown`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </nav>

          </div>
        </div>
      </div>
    </nav>
  );
}
