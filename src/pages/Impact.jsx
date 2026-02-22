import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Users,
  ShieldCheck,
  Accessibility,
  Utensils,
} from "lucide-react";

import PageHeader from "../components/PageHeader";

function ImpactCard({ count, label, icon, detail }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-soft text-center group hover:border-primary-200 transition-colors"
    >
      <div className="w-16 h-16 mx-auto bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-4xl font-bold text-neutral-900 mb-2 font-heading">
        {inView ? <CountUp end={count} duration={2} separator="," /> : "0"}
        {detail.includes("+") ? "+" : ""}
      </div>
      <div className="text-xl font-semibold text-primary-700 mb-3">{label}</div>
      <p className="text-neutral-500 text-sm leading-relaxed">{detail}</p>
    </div>
  );
}

function Impact() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Impact & Achievements"
        subtitle="Numbers tell a story of hope. Here is how we have changed lives together."
        bgImage="/extracted_images/image_14_4.jpeg"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <ImpactCard
              count={13010} 
              label="Wheelchairs"
              icon={<Accessibility size={32} />}
              detail="Distributed to physically disabled individuals granting them mobility."
            />
            <ImpactCard
              count={21000} 
              label="Food Hampers"
              icon={<Utensils size={32} />}
              detail="Packages given to families experiencing severe food shortages."
            />
            <ImpactCard
              count={38}
              label="Street Children"
              icon={<Users size={32} />}
              detail="Rescued from the streets and safely enrolled into educational programs."
            />
            <ImpactCard
              count={40}
              label="Smart Sticks"
              icon={<ShieldCheck size={32} />}
              detail="Provided to visually impaired persons for safer navigation."
            />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-16 border border-neutral-100 shadow-soft">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-neutral-900">
                  Geographic Reach
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Initially focused on Nakuru, our efforts have rapidly expanded
                  to encompass over <strong>50+ locations</strong> nationwide.
                  We travel to remote villages, slums, and isolated communities
                  to ensure that geographical boundaries do not prevent people
                  from receiving help.
                </p>
                <div className="flex items-center gap-4 bg-primary-50 p-6 rounded-2xl border border-primary-100 mt-8">
                  <MapPin size={40} className="text-primary-600 shrink-0" />
                  <div>
                    <div className="font-bold text-neutral-900 text-xl">
                      50+ Locations Reached
                    </div>
                    <div className="text-neutral-600">
                      Across multiple counties in Kenya
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-neutral-100 w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl mx-auto flex items-center justify-center relative overflow-hidden shadow-elegant border border-neutral-200">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kenya_location_map.svg/1024px-Kenya_location_map.svg.png')] bg-center bg-no-repeat bg-contain m-8 filter grayscale"></div>
                  <div className="relative z-10 text-center">
                    <MapPin
                      size={48}
                      className="text-primary-600 mx-auto mb-4 animate-bounce"
                    />
                    <h3 className="text-neutral-900 font-bold text-2xl bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-sm">
                      National Presence
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Impact;
