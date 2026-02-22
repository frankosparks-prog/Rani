import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/image.png"
                alt="Logo"
                className="w-12 h-12 bg-white rounded-full p-1"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white">
                  Rani Ramchandani
                </span>
                <span className="font-heading text-sm text-secondary-400">
                  FOUNDATION
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400">
              Coloring the world with smiles through community welfare, youth
              empowerment, and compassionate humanitarian aid.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/what-we-do"
                  className="hover:text-primary-400 transition-colors"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className="hover:text-primary-400 transition-colors"
                >
                  Our Impact
                </Link>
              </li>
              <li>
                <Link
                  to="/awards"
                  className="hover:text-primary-400 transition-colors"
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-primary-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-secondary-400 shrink-0 mt-1"
                />
                <span className="text-sm">Nakuru, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary-400 shrink-0" />
                <span className="text-sm">+254 (0) 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-secondary-400 shrink-0" />
                <span className="text-sm">info@raniramchandani.org</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">
              Support Our Cause
            </h4>
            <p className="text-sm text-neutral-400 mb-6">
              Your generosity helps us bring smiles to those who need it most.
            </p>
            <Link
              to="/donate"
              className="btn bg-white tracking-wide text-primary-700 hover:bg-neutral-100 w-full justify-center"
            >
              Make a Donation{" "}
              <Heart size={16} className="ml-2 fill-primary-700" />
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Rani Ramchandani Foundation. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
