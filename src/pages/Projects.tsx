import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaClock, FaCode, FaCheckCircle } from "react-icons/fa";
import projectsData from "../data/projectsData";

const Projects: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  const difficulties = [
    { id: "all", name: "Tümü", color: "bg-gray-500" },
    { id: "easy", name: "Kolay", color: "bg-green-500" },
    { id: "medium", name: "Orta", color: "bg-yellow-500" },
    { id: "hard", name: "Zor", color: "bg-red-500" },
    { id: "expert", name: "Uzman", color: "bg-purple-500" },
  ];

  const filteredProjects =
    selectedDifficulty === "all"
      ? projectsData
      : projectsData.filter(
          (project) => project.difficulty === selectedDifficulty
        );

  const getDifficultyColor = (difficulty: string) => {
    const diff = difficulties.find((d) => d.id === difficulty);
    return diff ? diff.color : "bg-gray-500";
  };

  const getDifficultyName = (difficulty: string) => {
    const diff = difficulties.find((d) => d.id === difficulty);
    return diff ? diff.name : "Bilinmiyor";
  };

  return (
    <div className="min-h-screen brand-section py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 brand-h">React Projeleri</h1>
          <p className="text-xl brand-sub max-w-3xl mx-auto">
            Öğrendiğiniz React konularını pratik edebileceğiniz, zorluk
            seviyesine göre kategorize edilmiş projeler. Her proje size farklı
            beceriler kazandıracak.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {difficulties.map((difficulty) => (
            <button
              key={difficulty.id}
              onClick={() => setSelectedDifficulty(difficulty.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedDifficulty === difficulty.id
                  ? `${difficulty.color} text-white shadow-lg`
                  : "bg-white dark:bg-secondary-800 text-gray-700 dark:text-white hover:shadow-md"
              }`}
            >
              {difficulty.name}
            </button>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <FaCode className="text-6xl text-white opacity-80" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(
                      project.difficulty
                    )}`}
                  >
                    {getDifficultyName(project.difficulty)}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <FaClock className="mr-2" />
                  {project.duration}
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Teknolojiler:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white text-xs rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Özellikler:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <FaCheckCircle className="text-green-500 mr-2 text-xs" />
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-sm text-gray-500 dark:text-gray-500">
                        +{project.features.length - 3} özellik daha...
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FaCode className="text-6xl text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              Bu zorluk seviyesinde proje bulunamadı
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Farklı bir zorluk seviyesi seçmeyi deneyin.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
