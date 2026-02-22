import React from "react";
import { motion } from "framer-motion";
import { Heart, Target, Eye, Star } from "lucide-react";

import PageHeader from "../components/PageHeader";

function About() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="About Us"
        subtitle="Discover the story and the heart behind the Rani Ramchandani Foundation."
        bgImage="/extracted_images/image_1_2.jpeg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="aspect-video bg-neutral-100 rounded-3xl shadow-soft relative overflow-hidden flex justify-center items-center">
                <img
                  src="/extracted_images/image_6_2.jpeg"
                  alt="Foundation Activity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                Our Foundation Story
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Founded in Nakuru, Kenya, the Rani Ramchandani Foundation was
                established with a singular, resolute purpose: to identify the
                most vulnerable members of society and provide them with the
                tools, resources, and hope they need to thrive.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                What began as individual acts of charity quickly blossomed into
                a structured organization capable of rolling out large-scale
                initiatives—from distributing thousands of food hampers to
                rescuing street children and empowering the disabled.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50 border-y border-neutral-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-100 relative overflow-hidden">
              <div className="w-2 bg-primary-600 absolute left-0 top-0 bottom-0"></div>
              <div className="flex items-start gap-6">
                <Target size={40} className="text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-neutral-900">
                    Our Mission
                  </h3>
                  <p className="text-neutral-600 text-lg">
                    To alleviate suffering, empower the marginalized, and build
                    resilient communities by providing essential resources,
                    education, and mobility support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-100 relative overflow-hidden">
              <div className="w-2 bg-secondary-400 absolute left-0 top-0 bottom-0"></div>
              <div className="flex items-start gap-6">
                <Eye size={40} className="text-secondary-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-neutral-900">
                    Our Vision
                  </h3>
                  <p className="text-neutral-600 text-lg">
                    A world colored with smiles, where every
                    individual—regardless of background or ability—has the
                    opportunity to lead a dignified and fulfilling life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Core Values
            </h2>
            <p className="text-neutral-600 text-lg">
              The principles that guide every action we take.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Compassion",
                desc: "Acting with deep empathy and understanding for those we serve.",
              },
              {
                title: "Integrity",
                desc: "Maintaining transparency and honesty in all our operations.",
              },
              {
                title: "Empowerment",
                desc: "Providing tools and opportunities, not just temporary relief.",
              },
              {
                title: "Community",
                desc: "Fostering a sense of belonging and collective responsibility.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 bg-neutral-50 rounded-2xl text-center hover:shadow-soft transition-shadow border border-neutral-100"
              >
                <Star size={32} className="text-secondary-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-neutral-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-neutral-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
