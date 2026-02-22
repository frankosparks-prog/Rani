import React from "react";
import { motion } from "framer-motion";
import { Award, Star, ShieldCheck } from "lucide-react";

import PageHeader from "../components/PageHeader";

function Awards() {
  const awardsList = [
    {
      title: "HSC Award",
      year: "2023",
      desc: "Head of State Commendation in recognition of outstanding humanitarian service to the nation.",
      icon: <Award size={40} className="text-secondary-500" />,
    },
    {
      title: "Afri-Glo Award",
      year: "2022",
      desc: "Awarded for excellence in community support and poverty alleviation across Africa.",
      icon: <Star size={40} className="text-primary-500" />,
    },
    {
      title: "Gala Humanitarian Award",
      year: "2022",
      desc: "Honored for the profound impact on marginalized communities in Nakuru County.",
      icon: <ShieldCheck size={40} className="text-secondary-500" />,
    },
    {
      title: "Pacesetter International Award",
      year: "2021",
      desc: "Recognized as a leading pacesetter in disability and mobility support initiatives regionally.",
      icon: <Award size={40} className="text-primary-500" />,
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Awards & Recognition"
        subtitle="Honoring our commitment to serving humanity. Every award belongs to the community that supports us."
        bgImage="/extracted_images/image_15_1.jpeg"
      />

      <section className="section-padding bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary-50 rounded-full mix-blend-multiply opacity-50 blur-3xl transform translate-x-1/2"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply opacity-50 blur-3xl transform -translate-x-1/2"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awardsList.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-soft hover:shadow-elegant transition-all duration-300 flex items-start gap-6 group"
              >
                <div className="shrink-0 w-20 h-20 bg-neutral-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-neutral-100">
                  {award.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">
                      {award.title}
                    </h3>
                    <span className="bg-neutral-100 text-neutral-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    {award.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Awards;
