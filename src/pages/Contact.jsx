import React from "react";
import { MapPin, Phone, Mail, CreditCard, Heart } from "lucide-react";

import PageHeader from "../components/PageHeader";

function Contact() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Contact & Support"
        subtitle="We would love to hear from you. Whether you want to volunteer, partner, or donate, your support matters."
        bgImage="/extracted_images/image_12_2.jpeg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Contact Details & Donation */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Get in Touch
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1">
                        Our Location
                      </h4>
                      <p className="text-neutral-600">Nakuru, Kenya</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1">
                        Phone Number
                      </h4>
                      <p className="text-neutral-600">+254 (0) 700 000 000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1">
                        Email Address
                      </h4>
                      <p className="text-neutral-600">
                        info@raniramchandani.org
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 border border-primary-100 rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-primary-800 mb-4 flex items-center gap-2">
                  <Heart
                    className="fill-primary-700 text-primary-700"
                    size={24}
                  />{" "}
                  Support Our Cause
                </h2>
                <p className="text-primary-800/80 mb-6 font-medium">
                  Your donations help us provide wheelchairs, food hampers, and
                  educational support.
                </p>

                <div className="bg-white rounded-2xl p-6 border border-primary-100 mb-4 flex items-center gap-4">
                  <CreditCard
                    size={32}
                    className="text-secondary-500 shrink-0"
                  />
                  <div>
                    <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-1">
                      M-PESA Paybill
                    </div>
                    <div className="text-2xl font-bold text-neutral-900 tracking-wider">
                      000000
                    </div>
                    <div className="text-sm text-neutral-600 mt-1">
                      Account:{" "}
                      <span className="font-semibold text-neutral-900">
                        DONATION
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-100 shadow-elegant">
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                Send a Message
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="How can I help?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full py-4 text-lg mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
