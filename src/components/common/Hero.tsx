import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaCode, FaRocket } from "react-icons/fa";

const Hero: React.FC = () => {
  const logoSources = [
    "/erstream-logo.svg",
    "/erstream-logo.png",
    "/erstream-logo.webp",
  ];
  const [logoIndex, setLogoIndex] = useState(0);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden brand-surface">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 dark:bg-accent-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-secondary-200 dark:bg-secondary-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand logo (tries svg->png->webp, hides if none found) */}
          <img
            src={logoSources[logoIndex]}
            alt="Erstream"
            onError={() =>
              setLogoIndex((i) => Math.min(i + 1, logoSources.length - 1))
            }
            className={`mx-auto mb-6 h-14 md:h-20 transition-opacity duration-300 ${
              logoIndex >= logoSources.length - 1 ? "hidden" : "opacity-90"
            }`}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium mb-8"
          >
            <FaRocket className="mr-2" />
            React Developer Tutorials
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 brand-h"
          >
            Erstream için Geliştirici Eğitimleri
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl brand-sub mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Erstream ekosistemine uygun entegrasyon örnekleri, video teslimi
            altyapısına yönelik en iyi uygulamalar ve React odaklı projelerle
            adım adım ilerleyin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/roadmap"
              className="group inline-flex items-center justify-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaCode className="mr-2" />
              Eğitime Başla
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-secondary-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-200 dark:border-secondary-700 hover:border-primary-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaPlay className="mr-2" />
              Projeleri İncele
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-secondary-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-secondary-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
