import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCheck,
  FaClock,
  FaCode,
  FaPlay,
  FaBook,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useProgress } from "../context/ProgressContext";
import roadmapData from "../data/roadmapData";
import { type Level, type Category, type Topic } from "../types/roadmap";
import Sidebar from "../components/layout/Sidebar";
import { useScrollRestoration } from "../hooks/useScrollRestoration";

const Roadmap: React.FC = () => {
  const {
    progress,
    markTopicCompleted,
    markTopicIncomplete,
    isTopicCompleted,
  } = useProgress();
  const [selectedLevel, setSelectedLevel] = useState<string>("react-101");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useScrollRestoration();

  const validSelectedLevel = roadmapData.find(
    (level) => level.id === selectedLevel
  )
    ? selectedLevel
    : roadmapData[0]?.id || "react-101";
  const currentLevel = roadmapData.find(
    (level: Level) => level.id === validSelectedLevel
  );

  const handleLevelChange = (levelId: string) => {
    setSelectedLevel(levelId);
    setSelectedCategory("all");
    setSearchTerm("");
  };

  const filteredCategories =
    currentLevel?.categories?.filter((category: Category) => {
      if (selectedCategory === "all") return true;
      return category.id === selectedCategory;
    }) || [];

  const safeCurrentLevel = currentLevel || roadmapData[0];

  const totalTopics = roadmapData.reduce(
    (total: number, level: Level) =>
      total +
      level.categories.reduce(
        (catTotal: number, category: Category) =>
          catTotal + category.topics.length,
        0
      ),
    0
  );

  const completedCount = progress.completedTopics.length;
  const progressPercentage =
    totalTopics > 0 ? (completedCount / totalTopics) * 100 : 0;

  if (!roadmapData || roadmapData.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-secondary-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Roadmap yükleniyor...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen brand-surface-hex">
      <div className="bg-white dark:bg-secondary-800 shadow-sm border-b border-gray-200 dark:border-secondary-700">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                React Öğrenme Roadmap'i
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Adım adım React.js öğrenme yolculuğunuz
              </p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <div className="text-right">
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  İlerleme: {completedCount}/{totalTopics}
                </div>
                <div className="text-base sm:text-lg font-semibold text-primary-600 dark:text-primary-400">
                  %{Math.round(progressPercentage)}
                </div>
              </div>
              <div className="w-24 sm:w-32 h-2 sm:h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-green-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-8">
          <div className="w-full xl:w-80 xl:flex-shrink-0">
            <Sidebar
              roadmapData={roadmapData}
              selectedLevel={validSelectedLevel}
              selectedCategory={selectedCategory}
              searchTerm={searchTerm}
              onLevelChange={handleLevelChange}
              onCategoryChange={setSelectedCategory}
              onSearchChange={setSearchTerm}
            />
          </div>
          <div className="flex-1 min-w-0">
            {filteredCategories.map((category: Category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6"
              >
                <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl flex-shrink-0">
                      {category.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white break-words">
                        {category.name}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-words">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="grid gap-3 sm:gap-4">
                    {(() => {
                      const filteredTopics = category.topics.filter(
                        (topic: Topic) =>
                          topic.title
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          topic.description
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                      );

                      if (filteredTopics.length === 0) {
                        return (
                          <div className="text-center py-8">
                            <div className="text-gray-500 dark:text-gray-400">
                              <FaCode className="w-8 h-8 mx-auto mb-2 opacity-50" />
                              <p className="text-sm">
                                Bu kategoride konu bulunamadı.
                              </p>
                            </div>
                          </div>
                        );
                      }

                      return filteredTopics.map((topic: Topic) => {
                        const isCompleted = isTopicCompleted(topic.id);
                        return (
                          <motion.div
                            key={topic.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`p-4 rounded-lg border transition-all duration-200 ${
                              isCompleted
                                ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                                : "bg-gray-50 border-gray-200 dark:bg-secondary-800 dark:border-gray-700 hover:shadow-md"
                            }`}
                          >
                            <div className="flex items-start gap-3 sm:gap-4">
                              <button
                                onClick={() => {
                                  if (isCompleted) {
                                    markTopicIncomplete(topic.id);
                                  } else {
                                    markTopicCompleted(topic.id);
                                  }
                                }}
                                className={`mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                                  isCompleted
                                    ? "bg-green-500 border-green-500 text-white"
                                    : "border-gray-300 dark:border-gray-600 hover:border-primary-500"
                                }`}
                              >
                                {isCompleted && (
                                  <FaCheck className="w-2 h-2 sm:w-3 sm:h-3" />
                                )}
                              </button>

                              <div className="flex-1 min-w-0 overflow-hidden">
                                <div className="flex flex-col gap-3">
                                  <div className="flex-1 min-w-0">
                                    <Link
                                      to={`/topic/${topic.id}`}
                                      className="block hover:opacity-80 transition-opacity"
                                    >
                                      <h3
                                        className={`font-semibold mb-2 text-sm sm:text-base break-words ${
                                          isCompleted
                                            ? "text-green-800 dark:text-green-200"
                                            : "text-gray-900 dark:text-white"
                                        }`}
                                      >
                                        {topic.title}
                                      </h3>
                                    </Link>
                                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 break-words">
                                      {topic.description}
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-2 flex-wrap">
                                    <Link
                                      to={`/topic/${topic.id}`}
                                      className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm font-medium flex-shrink-0"
                                    >
                                      <FaBook className="w-3 h-3 sm:w-4 sm:h-4" />
                                      <span className="hidden sm:inline">
                                        Detaya Git
                                      </span>
                                      <span className="sm:hidden">Detay</span>
                                    </Link>
                                    {topic.codeExamples.length > 0 && (
                                      <button className="p-1.5 sm:p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors flex-shrink-0">
                                        <FaCode className="w-3 h-3 sm:w-4 sm:h-4" />
                                      </button>
                                    )}
                                    <button className="p-1.5 sm:p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors flex-shrink-0">
                                      <FaPlay className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </button>
                                  </div>
                                </div>

                                {topic.resources.length > 0 && (
                                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                      {topic.resources.map((resource: any) => (
                                        <a
                                          key={resource.id}
                                          href={resource.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white rounded text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors max-w-full min-w-0"
                                        >
                                          <span className="truncate max-w-[120px] sm:max-w-[150px]">
                                            {resource.title}
                                          </span>
                                          <FaExternalLinkAlt className="w-2 h-2 flex-shrink-0" />
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        );
                      });
                    })()}
                  </div>
                </div>
              </motion.div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 dark:text-gray-400 mb-4">
                  <FaCode className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium mb-2">Konu bulunamadı</h3>
                  <p>Arama kriterlerinize uygun konu bulunamadı.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
