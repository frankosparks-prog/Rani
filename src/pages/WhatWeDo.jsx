import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Accessibility,
  Heart,
  Leaf,
  BookOpen,
  Utensils,
} from "lucide-react";

import PageHeader from "../components/PageHeader";

function WhatWeDo() {
  const services = [
    {
      id: "mobility",
      title: "Disability & Mobility Support",
      icon: <Accessibility size={40} />,
      desc: "Empowering disabled individuals with tools to move freely and independently. We have distributed over 13,010 wheelchairs and provided 40 smart sticks to the visually impaired.",
      tags: ["Wheelchairs", "Smart Sticks", "Independence"],
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      id: "youth",
      title: "Youth Empowerment",
      icon: <Shield size={40} />,
      desc: "Rescuing vulnerable street children, providing them with safe shelter, and enrolling them in schools. Educating 38 children and giving them a second chance at life.",
      tags: ["Education", "Rescue", "Mentorship"],
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: "community",
      title: "Community Welfare",
      icon: <Utensils size={40} />,
      desc: "Fighting food insecurity by distributing 21,000+ food hampers to families facing extreme poverty during difficult times.",
      tags: ["Food Distribution", "Poverty Alleviation", "Basic Needs"],
      color: "bg-orange-50 text-orange-600 border-orange-100",
    },
    {
      id: "health",
      title: "Health Initiatives",
      icon: <Heart size={40} />,
      desc: "Hosting medical camps, supporting healthcare infrastructure, and bringing critical health services directly to underserved locations.",
      tags: ["Medical Camps", "Healthcare", "Sanitation"],
      color: "bg-red-50 text-red-600 border-red-100",
    },
    {
      id: "environment",
      title: "Environmental Activities",
      icon: <Leaf size={40} />,
      desc: "Planting trees across Nakuru county to combat climate change, restore ecosystems, and promote a greener future for the next generation.",
      tags: ["Tree Planting", "Conservation", "Sustainability"],
      color: "bg-green-50 text-green-600 border-green-100",
    },
    {
      id: "education",
      title: "Education Support",
      icon: <BookOpen size={40} />,
      desc: "Providing school supplies, uniforms, and scholarships to promising students from disadvantaged backgrounds.",
      tags: ["Supplies", "Scholarships", "Literacy"],
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="What We Do"
        subtitle="A comprehensive look at our humanitarian pillars and the difference we make every day."
        bgImage="/extracted_images/image_6_2.jpeg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="card-elegant p-8 md:p-10 flex flex-col md:flex-row gap-6 border border-neutral-100"
              >
                <div
                  className={`w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center border ${service.color}`}
                >
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-neutral-100 text-neutral-600 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;
