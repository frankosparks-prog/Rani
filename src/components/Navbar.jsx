import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Impact", path: "/impact" },
    { name: "Awards", path: "/awards" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 pt-4 px-4 md:px-8 ${scrolled ? "pb-4" : "pb-6"}`}
      >
        <div
          className={`mx-auto max-w-7xl rounded-full transition-all duration-500 border overflow-hidden
          ${
            scrolled
              ? "bg-white/90 backdrop-blur-md shadow-lg border-white/50 py-1 px-5"
              : "bg-white/60 backdrop-blur-sm shadow-sm border-white/20 py-2 px-6"
          }
        `}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/image.png"
                alt="Rani Ramchandani Foundation Logo"
                className="w-11 h-11 object-contain group-hover:rotate-12 transition-transform duration-500"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-primary-800 leading-tight drop-shadow-sm">
                  Rani Ramchandani
                </span>
                <span className="font-heading font-semibold text-sm text-secondary-500 tracking-wider">
                  FOUNDATION
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-all duration-300 relative group px-2 py-1
                  ${location.pathname === link.path ? "text-primary-800" : "text-neutral-700 hover:text-primary-600"}
                `}
                >
                  {link.name}
                  {/* Active Indicator / Hover effect */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-300 rounded-full
                  ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}
                `}
                  ></span>
                </Link>
              ))}
              <Link
                to="/donate"
                className="btn btn-primary px-6 py-2.5 text-sm gap-2 rounded-full shadow-lg shadow-primary-900/20 hover:shadow-primary-900/40 transform hover:-translate-y-0.5 transition-all"
              >
                <Heart size={16} className="fill-white" /> Donate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-neutral-800 p-2 focus:outline-none relative z-50 rounded-full bg-white/50 backdrop-blur-sm border border-white/50 shadow-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Off-Canvas Menu */}
      <div
        className={`fixed inset-0 bg-neutral-900/60 backdrop-blur-md z-40 transition-opacity duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden flex flex-col pt-20 pb-8 px-8 border-l border-white/20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-3 mb-8 pb-6 border-b border-neutral-200"
        >
          <img
            src="/image.png"
            alt="Rani Ramchandani Foundation Logo"
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-primary-800 leading-tight">
              Rani Ramchandani
            </span>
            <span className="font-heading font-semibold text-xs text-secondary-500 tracking-wider">
              FOUNDATION
            </span>
          </div>
        </motion.div>

        <div className="flex-1 flex flex-col space-y-6 overflow-y-auto">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: 20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
            >
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-2xl font-bold tracking-tight transition-colors ${
                  location.pathname === link.path
                    ? "text-primary-700"
                    : "text-neutral-800 hover:text-primary-600"
                }`}
              >
                {link.name}
              </Link>
              {/* Separator line */}
              <div className="h-px w-full bg-gradient-to-r from-neutral-200 to-transparent mt-4 opacity-50" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-8"
        >
          <Link
            to="/donate"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary w-full py-4 rounded-2xl flex items-center justify-center gap-3 text-lg shadow-xl shadow-primary-900/20"
          >
            <Heart size={20} className="fill-white" /> Support Our Cause
          </Link>
        </motion.div>
      </div>
    </>
  );
}

export default Navbar;
