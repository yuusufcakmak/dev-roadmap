import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRoute,
  FaBook,
  FaProjectDiagram,
  FaCode,
  FaUsers,
  FaRocket,
  FaArrowRight,
  FaPlay,
  FaBrain,
} from "react-icons/fa";
import Hero from "../components/common/Hero";
import FeatureCard from "../components/common/FeatureCard";

const Home: React.FC = () => {
  const features = [
    {
      icon: FaRoute,
      title: "Roadmap ile Başlayın",
      description:
        "Roadmap sayfasından React öğrenme yolculuğunuza başlayın. Seviyeleri takip ederek ilerleyin ve her konuyu tamamladığınızda işaretleyin.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaBook,
      title: "Konuları İnceleyin",
      description:
        "Her konuya tıklayarak detaylı açıklamaları okuyun. Günlük hayat örnekleri ve en iyi uygulamalarla öğrenin.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaProjectDiagram,
      title: "Projelerle Pekiştirin",
      description:
        "Öğrendiklerinizi gerçek projelerle pekiştirin. Her seviyeye uygun proje örneklerini inceleyin ve kendi projelerinizi geliştirin.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-20 bg-white dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Neden React Roadmap?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Modern web geliştirme dünyasında React.js öğrenmek artık çok daha
              kolay. Adım adım ilerleyerek, pratik projelerle öğrenin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Hemen Başlayın!
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              React.js öğrenme yolculuğunuza bugün başlayın. Ücretsiz, kapsamlı
              ve Türkçe içeriklerle ilerleyin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/roadmap"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <FaRoute className="mr-2" />
                Roadmap'e Başla
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200 transform hover:scale-105"
              >
                <FaBrain className="mr-2" />
                Quiz'e Başla
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200 transform hover:scale-105"
              >
                <FaPlay className="mr-2" />
                Projeleri İncele
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
