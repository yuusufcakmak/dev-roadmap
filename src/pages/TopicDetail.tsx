import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import roadmapData from "../data/roadmapData";
import { type Level, type Category, type Topic } from "../types/roadmap";
import DevelopmentProcessSchema from "../components/common/DevelopmentProcessSchema";

const TopicDetail: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();

  const findTopic = (): {
    topic: Topic;
    category: Category;
    level: Level;
  } | null => {
    for (const level of roadmapData) {
      for (const category of level.categories) {
        const topic = category.topics.find((t: Topic) => t.id === topicId);
        if (topic) {
          return { topic, category, level };
        }
      }
    }
    return null;
  };

  const result = findTopic();

  if (!result) {
    return (
      <div className="min-h-screen py-12 brand-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold brand-h mb-4">Konu Bulunamadı</h1>
            <p className="brand-sub">
              Aradığınız konu bulunamadı. Lütfen doğru URL'yi kullandığınızdan
              emin olun.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const { topic, category, level } = result;

  return (
    <div className="min-h-screen py-12 brand-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <ol className="flex items-center space-x-2 text-sm brand-sub">
            <li>Roadmap</li>
            <li>→</li>
            <li>{level.name}</li>
            <li>→</li>
            <li>{category.name}</li>
            <li>→</li>
            <li className="text-gray-900 dark:text-white font-medium">
              {topic.title}
            </li>
          </ol>
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-secondary-800 rounded-lg shadow-lg p-6 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2 brand-h">{topic.title}</h1>
              <p className="brand-sub text-lg">{topic.description}</p>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-secondary-800 rounded-lg shadow-lg p-6"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {(topicId === "gelistirme-sureci" ||
                  topicId === "nelere-ihtiyacimiz-var") && (
                  <div className="mb-8">
                    <div className="bg-blue-100 p-4 rounded-lg mb-4">
                      <p className="text-blue-800 font-bold">
                        🔍 DEBUG: Şema yükleniyor... Topic ID: {topicId}
                      </p>
                    </div>
                    <DevelopmentProcessSchema />
                  </div>
                )}
                <div
                  dangerouslySetInnerHTML={{
                    __html: topic.content
                      .replace(/\n/g, "<br>")
                      .replace(
                        /```([^`]+)```/g,
                        '<pre class="bg-gray-100 dark:bg-secondary-700 p-4 rounded-lg overflow-x-auto"><code>$1</code></pre>'
                      ),
                  }}
                />
              </div>
            </motion.div>
          </div>
          <div className="space-y-6">
            {topic.codeExamples && topic.codeExamples.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white dark:bg-secondary-800 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 brand-h">
                  💻 Kod Örnekleri
                </h3>
                <div className="space-y-4">
                  {topic.codeExamples.map((example: any) => (
                    <div
                      key={example.id}
                      className="border border-gray-200 dark:border-secondary-700 rounded-lg p-4"
                    >
                      <h4 className="font-semibold mb-2 brand-h">
                        {example.title}
                      </h4>
                      <pre className="bg-gray-100 dark:bg-secondary-700 p-3 rounded text-sm overflow-x-auto">
                        <code className={`language-${example.language}`}>
                          {example.code}
                        </code>
                      </pre>
                      <p className="text-sm brand-sub mt-2">
                        {example.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {topic.resources && topic.resources.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white dark:bg-secondary-800 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 brand-h">📚 Kaynaklar</h3>
                <div className="space-y-3">
                  {topic.resources.map((resource: any) => (
                    <a
                      key={resource.id}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 border border-gray-200 dark:border-secondary-700 rounded-lg hover:bg-gray-50 dark:hover:bg-secondary-700 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium brand-h">
                          {resource.title}
                        </h4>
                        <p className="text-sm brand-sub capitalize">
                          {resource.type}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
            {topic.relatedProjects && topic.relatedProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  🚀 İlgili Projeler
                </h3>
                <div className="space-y-2">
                  {topic.relatedProjects.map((projectId: string) => (
                    <div
                      key={projectId}
                      className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {projectId}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
