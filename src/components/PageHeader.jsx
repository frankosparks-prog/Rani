import React from "react";
import { motion } from "framer-motion";

function PageHeader({ title, subtitle, bgImage }) {
  return (
    <div className="relative pt-8 pb-20 px-4 text-center overflow-hidden flex flex-col items-center justify-center min-h-[45vh] lg:min-h-[50vh]">
      {/* Background Image / Gradient */}
      {bgImage ? (
        <div className="absolute inset-0 w-full h-full">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-neutral-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/50 to-neutral-900/20"></div>
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-primary-900">
          <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        </div>
      )}

      {/* Content */}
      <div className="container-custom relative z-10 max-w-4xl mx-auto pt-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md tracking-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="w-24 h-1.5 bg-secondary-400 mx-auto mb-6 rounded-full shadow-lg"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-lg md:text-xl lg:text-2xl text-neutral-200 leading-relaxed font-light drop-shadow max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          </>
        )}
      </div>
    </div>
  );
}

export default PageHeader;
