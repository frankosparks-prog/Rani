import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

import PageHeader from "../components/PageHeader";

function Gallery() {
  // Placeholder images for the gallery representing the themes
  const galleryItems = [
    {
      type: "Wheelchair distributions",
      img: "/extracted_images/image_1_2.jpeg",
    },
    { type: "Tree planting", img: "/extracted_images/image_4_2.jpeg" },
    { type: "Community events", img: "/extracted_images/image_6_2.jpeg" },
    { type: "Donations", img: "/extracted_images/image_7_3.jpeg" },
    { type: "Youth Empowerment", img: "/extracted_images/image_14_4.jpeg" },
    { type: "Medical Camps", img: "/extracted_images/image_12_2.jpeg" },
    { type: "School Supplies", img: "/extracted_images/image_15_1.jpeg" },
    { type: "Smiles", img: "/extracted_images/image_9_2.jpeg" },
  ];

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Gallery"
        subtitle="Moments of joy, empowerment, and community action captured in time."
        bgImage="/extracted_images/image_9_2.jpeg"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          {/* Categories / Filters could go here */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`aspect-square rounded-2xl bg-neutral-100 flex flex-col items-center justify-center p-6 text-center shadow-sm relative overflow-hidden group cursor-pointer`}
              >
                <img
                  src={item.img}
                  alt={item.type}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-semibold text-white px-4 text-lg">
                    {item.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-neutral-500 italic">
              More photos and impactful moments are continually being added to
              our archives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
