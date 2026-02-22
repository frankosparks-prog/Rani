import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Heart,
  Users,
  Shield,
  Accessibility,
  Leaf,
  Award,
  ArrowRight,
} from "lucide-react";

const fadeInInfo = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const heroImages = [
  "/extracted_images/image_7_3.jpeg",
  "/extracted_images/image_1_2.jpeg",
  "/extracted_images/image_14_4.jpeg",
  "/extracted_images/image_4_2.jpeg",
];

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-20 md:pt-24 md:pb-32 overflow-hidden min-h-[90vh] flex items-center overflow-x-hidden">
      {/* Background Slider */}
      {heroImages.map((img, index) => (
        <motion.div
          key={img}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: index === currentImage ? 1 : 0,
            scale: index === currentImage ? 1 : 1.1,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={img}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-neutral-900/60 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent"></div>

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInInfo}
            className="mb-6 flex justify-center"
          >
            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-white/30 shadow-lg flex items-center gap-2">
              <Heart size={16} className="fill-primary-500 text-primary-500" />{" "}
              Humanitarian Foundation in Nakuru, Kenya
            </span>
          </motion.div>
          <motion.h1
            variants={fadeInInfo}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-md"
          >
            Let Us <span className="text-secondary-400">Colour The World</span>{" "}
            With Smiles
          </motion.h1>
          <motion.p
            variants={fadeInInfo}
            className="text-lg md:text-xl text-neutral-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow"
          >
            We are dedicated to uplifting communities, empowering the youth, and
            spreading hope through compassionate humanitarian aid. Join us in
            making a lasting impact.
          </motion.p>
          <motion.div
            variants={fadeInInfo}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="btn btn-primary text-lg px-8 py-4 shadow-xl shadow-primary-900/50"
            >
              Learn More
            </Link>
            <Link
              to="/impact"
              className="btn bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/50 text-lg px-8 py-4 transition-colors"
            >
              Our Impact
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MissionSnapshot() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-primary-700 font-semibold tracking-wider text-sm uppercase">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              Rooted in Nakuru, Reaching the World
            </h3>
            <p className="text-neutral-600 text-lg leading-relaxed">
              The Rani Ramchandani Foundation was born from a deep desire to
              help those in need. Based in Nakuru, Kenya, our humanitarian focus
              is on touching lives directly—providing basic needs, education,
              mobility, and hope to vulnerable communities.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              We believe that every small act of kindness ripples outwards,
              coloring the world with smiles and building a stronger, more
              compassionate society.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800 transition-colors group"
            >
              Read our full story{" "}
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-100 relative shadow-elegant">
              <img
                src="/extracted_images/image_14_4.jpeg"
                alt="Foundation Activity"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: <Users size={32} />,
    title: "Community Support",
    desc: "Providing essential resources like food hampers to vulnerable families.",
  },
  {
    icon: <Shield size={32} />,
    title: "Youth Empowerment",
    desc: "Rescuing and educating street children, giving them a brighter future.",
  },
  {
    icon: <Accessibility size={32} />,
    title: "Mobility & Disability",
    desc: "Distributing wheelchairs and smart sticks to enhance independence.",
  },
  {
    icon: <Heart size={32} />,
    title: "Health Initiatives",
    desc: "Supporting medical access and community health programs.",
  },
  {
    icon: <Leaf size={32} />,
    title: "Environmental",
    desc: "Engaging in tree planting and sustainability activities.",
  },
];

function WhatWeDoHighlights() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-neutral-50" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary-700 font-semibold tracking-wider text-sm uppercase mb-3">
            Our Core Pillars
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            What We Do
          </h3>
          <p className="text-neutral-600 text-lg">
            We focus our efforts across multiple domains to bring holistic
            support to communities in need.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInInfo}
              className="card-elegant p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-3">
                {service.title}
              </h4>
              <p className="text-neutral-600">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/what-we-do" className="btn btn-outline">
            View All Initiatives
          </Link>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { count: 13010, label: "Wheelchairs" },
  { count: 21000, label: "Food Hampers" },
  { count: 38, label: "Street Children Educated" },
  { count: 40, label: "Smart Stick Beneficiaries" },
  { count: 50, label: "Locations Reached", suffix: "+" },
];

function ImpactCounters() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section
      className="py-20 bg-primary-700 text-white relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-secondary-300 font-semibold tracking-wider text-sm uppercase mb-3">
            Measurable Impact
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">Smiles Delivered</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary-400 font-heading">
                {inView ? (
                  <CountUp end={stat.count} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="text-primary-100 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderSpotlight() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-soft border border-neutral-100">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-elegant mx-auto max-w-[300px] bg-secondary-100 flex justify-center items-center">
              <img
                src="/extracted_images/image_8_2.jpeg"
                alt="Rani Ramchandani"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/3 space-y-6 text-center md:text-left"
          >
            <h2 className="text-primary-700 font-semibold tracking-wider text-sm uppercase">
              Founder Spotlight
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Rani Ramchandani
            </h3>
            <p className="text-neutral-600 text-lg italic border-l-4 border-secondary-400 pl-4 py-2">
              "Our mission is simple: to find where the need is greatest and
              fill it with love, practical support, and enduring hope."
            </p>
            <p className="text-neutral-600 leading-relaxed">
              As the driving force behind the foundation, Rani's vision has
              united thousands in the spirit of giving. Her dedication has
              brought awards, but more importantly, it has brought vital
              resources to disabled individuals, youth, and communities across
              Kenya.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center font-semibold text-primary-700 hover:text-primary-800 transition-colors"
            >
              Read Founder's Story <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AwardsPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const awards = [
    "HSC Award",
    "Afri-Glo Award",
    "Gala Humanitarian Award",
    "Pacesetter International Award",
  ];

  return (
    <section className="section-padding bg-neutral-900 text-white" ref={ref}>
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Award size={48} className="mx-auto text-secondary-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Recognized for Excellence
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-12 text-lg">
            Our commitment to community welfare has been honored with
            prestigious awards, reflecting our credibility and dedication to the
            cause.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-neutral-800 border border-neutral-700 px-6 py-3 rounded-full text-sm font-medium text-neutral-300 shadow-sm hover:border-secondary-500 hover:text-secondary-400 transition-colors cursor-default"
              >
                {award}
              </div>
            ))}
          </div>
          <Link
            to="/awards"
            className="btn btn-outline border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-500"
          >
            View All Awards
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-24 bg-secondary-400 text-neutral-900 text-center relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-secondary-300 rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-500 rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>

      <div className="container-custom relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl mb-10 text-neutral-800 opacity-90">
          Whether it's a donation, partnership, or volunteering your time, your
          contribution helps us color the world with smiles.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/donate"
            className="btn bg-neutral-900 text-white hover:bg-neutral-800 text-lg px-8 py-4 shadow-xl"
          >
            Donate Now
          </Link>
          <Link
            to="/contact"
            className="btn bg-transparent border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white text-lg px-8 py-4"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <MissionSnapshot />
      <WhatWeDoHighlights />
      <ImpactCounters />
      <FounderSpotlight />
      <AwardsPreview />
      <CallToAction />
    </div>
  );
}

export default Home;
