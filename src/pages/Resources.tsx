import React from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaBook,
  FaVideo,
  FaCode,
  FaYoutube,
  FaMedium,
} from "react-icons/fa";

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "documentation" | "video" | "article" | "tool";
  icon: React.ReactNode;
  featured?: boolean;
}

const resources: Resource[] = [
  {
    id: "tr-react-docs",
    title: "React Türkçe Dokümantasyonu",
    description: "Resmi React dokümantasyonunun Türkçe çevirisi",
    url: "https://tr.react.dev",
    type: "documentation",
    icon: <FaBook className="text-blue-500" />,
    featured: true,
  },
  {
    id: "react-docs-en",
    title: "React Resmi Dokümantasyonu (İngilizce)",
    description: "React ekibinin resmi dokümantasyonu",
    url: "https://react.dev",
    type: "documentation",
    icon: <FaBook className="text-blue-500" />,
  },
  {
    id: "react-learn",
    title: "React Öğren",
    description: "React temellerini adım adım öğrenin",
    url: "https://tr.react.dev/learn",
    type: "documentation",
    icon: <FaBook className="text-green-500" />,
    featured: true,
  },
  {
    id: "react-reference",
    title: "React API Referansı",
    description: "Tüm React API'lerinin detaylı referansı",
    url: "https://tr.react.dev/reference",
    type: "documentation",
    icon: <FaCode className="text-purple-500" />,
  },

  {
    id: "react-tutorial-tr",
    title: "React Türkçe Eğitim Videoları",
    description: "Kapsamlı React eğitim serisi",
    url: "https://www.youtube.com/playlist?list=PLfAfrKyDRWrGze_1T1bUU0qA9RknVKI5J",
    type: "video",
    icon: <FaYoutube className="text-red-500" />,
    featured: true,
  },
  {
    id: "react-crash-course",
    title: "React Crash Course",
    description: "Hızlı React öğrenme kursu",
    url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    type: "video",
    icon: <FaVideo className="text-red-500" />,
  },

  {
    id: "react-medium-tr",
    title: "React Türkçe Makaleler",
    description: "Medium'da React ile ilgili Türkçe makaleler",
    url: "https://medium.com/tag/react",
    type: "article",
    icon: <FaMedium className="text-gray-700" />,
  },
  {
    id: "react-best-practices",
    title: "React Best Practices",
    description: "React geliştirmede en iyi uygulamalar",
    url: "https://tr.react.dev/learn/thinking-in-react",
    type: "article",
    icon: <FaBook className="text-orange-500" />,
  },

  {
    id: "create-react-app",
    title: "Create React App",
    description: "React uygulaması oluşturma aracı",
    url: "https://create-react-app.dev",
    type: "tool",
    icon: <FaCode className="text-green-600" />,
  },
  {
    id: "react-devtools",
    title: "React Developer Tools",
    description: "React uygulamalarını debug etme aracı",
    url: "https://react.dev/learn/react-developer-tools",
    type: "tool",
    icon: <FaCode className="text-cyan-500" />,
  },
  {
    id: "vite",
    title: "Vite",
    description: "Hızlı build tool ve dev server",
    url: "https://vitejs.dev",
    type: "tool",
    icon: <FaCode className="text-yellow-500" />,
  },
];

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-secondary-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 sm:p-6 ring-2 ring-primary-500"
    >
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="flex-shrink-0 text-xl sm:text-2xl">{resource.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2 gap-1 sm:gap-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white break-words">
              {resource.title}
            </h3>
            {resource.featured && (
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full w-fit flex-shrink-0">
                Öne Çıkan
              </span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 sm:mb-4 break-words">
            {resource.description}
          </p>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium transition-colors"
          >
            Ziyaret Et
            <FaExternalLinkAlt className="ml-1 text-xs" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Resources: React.FC = () => {
  const featuredResources = resources.filter((r) => r.featured);
  const documentationResources = resources.filter(
    (r) => r.type === "documentation"
  );
  const videoResources = resources.filter((r) => r.type === "video");
  const articleResources = resources.filter((r) => r.type === "article");
  const toolResources = resources.filter((r) => r.type === "tool");

  return (
    <div className="min-h-screen py-12 brand-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 brand-h">
            React.js Kaynakları
          </h1>
          <p className="text-base sm:text-lg lg:text-xl brand-sub max-w-3xl mx-auto px-4">
            React.js öğrenmek ve geliştirmek için kapsamlı kaynak koleksiyonu.
            Resmi dokümantasyondan topluluk kaynaklarına kadar her şey burada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 brand-h">
            ⭐ Öne Çıkan Kaynaklar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 brand-h">
            📚 Resmi Dokümantasyon
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {documentationResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 brand-h">
            🎥 Video Eğitimler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {videoResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 brand-h">
            📝 Makaleler ve Blog Yazıları
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {articleResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 brand-h">
            🛠️ Araçlar ve Kütüphaneler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {toolResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
