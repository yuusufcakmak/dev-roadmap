import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCog,
  FaPuzzlePiece,
  FaLayerGroup,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaInfoCircle,
  FaLightbulb,
  FaShieldAlt,
  FaSync,
  FaEye,
  FaCubes,
  FaExternalLinkAlt,
} from "react-icons/fa";
import PatternDiagram from "../components/common/PatternDiagram";

const DesignPatterns: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = useState<string>("all");

  const patterns = [
    {
      id: "hoc",
      name: "Higher-Order Components (HOC)",
      category: "Component Patterns",
      description:
        "Bir component'i alıp yeni bir component döndüren fonksiyonlar",
      icon: FaLayerGroup,
      color: "from-blue-500 to-blue-600",
      useCases: [
        "Authentication",
        "Loading States",
        "Error Handling",
        "Data Fetching",
      ],
      example: "withAuth, withLoading, withErrorBoundary",
      pros: ["Reusability", "Separation of Concerns", "Composition"],
      cons: ["Wrapper Hell", "Props Collision", "Debugging Complexity"],
    },
    {
      id: "render-props",
      name: "Render Props",
      category: "Component Patterns",
      description: "Component'in render fonksiyonunu prop olarak alan pattern",
      icon: FaCode,
      color: "from-green-500 to-green-600",
      useCases: ["Data Sharing", "State Management", "Cross-cutting Concerns"],
      example: "DataProvider, MouseTracker, WindowSize",
      pros: ["Flexibility", "Explicit Dependencies", "Easy Testing"],
      cons: ["Callback Hell", "Performance Issues", "Complex JSX"],
    },
    {
      id: "compound",
      name: "Compound Components",
      category: "Component Patterns",
      description: "Birbirleriyle iletişim kuran component grupları",
      icon: FaPuzzlePiece,
      color: "from-purple-500 to-purple-600",
      useCases: ["Form Components", "Modal Systems", "Navigation Menus"],
      example: "Select, Modal, Accordion, Tabs",
      pros: ["Flexible API", "Better Encapsulation", "Intuitive Usage"],
      cons: ["Complex Implementation", "Limited Flexibility", "Learning Curve"],
    },
    {
      id: "provider",
      name: "Provider Pattern",
      category: "State Management",
      description: "Context API ile global state yönetimi",
      icon: FaShieldAlt,
      color: "from-red-500 to-red-600",
      useCases: ["Theme Management", "User Authentication", "Global Settings"],
      example: "ThemeProvider, AuthProvider, LanguageProvider",
      pros: ["Global Access", "Avoid Prop Drilling", "Centralized State"],
      cons: ["Re-render Issues", "Performance Problems", "Testing Complexity"],
    },
    {
      id: "custom-hooks",
      name: "Custom Hooks",
      category: "Logic Patterns",
      description: "Stateful logic'i component'lerden ayıran pattern",
      icon: FaCog,
      color: "from-yellow-500 to-yellow-600",
      useCases: ["API Calls", "Form Handling", "Local Storage", "WebSocket"],
      example: "useApi, useForm, useLocalStorage, useWebSocket",
      pros: ["Logic Reuse", "Clean Components", "Easy Testing"],
      cons: ["Hook Rules", "Dependency Management", "Debugging"],
    },
    {
      id: "observer",
      name: "Observer Pattern",
      category: "Behavioral Patterns",
      description: "State değişikliklerini dinleyen pattern",
      icon: FaEye,
      color: "from-indigo-500 to-indigo-600",
      useCases: ["Event Handling", "State Updates", "Real-time Data"],
      example: "useState, useEffect, Event Listeners",
      pros: ["Loose Coupling", "Dynamic Relationships", "Event-driven"],
      cons: ["Memory Leaks", "Performance Issues", "Complex Debugging"],
    },
    {
      id: "factory",
      name: "Factory Pattern",
      category: "Creational Patterns",
      description: "Component'leri dinamik olarak oluşturan pattern",
      icon: FaCubes,
      color: "from-pink-500 to-pink-600",
      useCases: ["Dynamic Components", "Plugin Systems", "Component Registry"],
      example: "ComponentFactory, PluginManager, DynamicRenderer",
      pros: ["Flexibility", "Extensibility", "Centralized Creation"],
      cons: ["Complexity", "Type Safety", "Runtime Errors"],
    },
    {
      id: "memoization",
      name: "Memoization Pattern",
      category: "Performance Patterns",
      description: "Hesaplamaları cache'leyen pattern",
      icon: FaSync,
      color: "from-teal-500 to-teal-600",
      useCases: [
        "Expensive Calculations",
        "API Response Caching",
        "Component Optimization",
      ],
      example: "useMemo, useCallback, React.memo, useSWR",
      pros: ["Performance Boost", "Reduced Calculations", "Better UX"],
      cons: ["Memory Usage", "Cache Invalidation", "Complexity"],
    },
  ];

  const categories = [
    { id: "all", name: "Tümü", icon: FaRocket },
    {
      id: "Component Patterns",
      name: "Component Patterns",
      icon: FaPuzzlePiece,
    },
    { id: "State Management", name: "State Management", icon: FaShieldAlt },
    { id: "Logic Patterns", name: "Logic Patterns", icon: FaCog },
    { id: "Behavioral Patterns", name: "Behavioral Patterns", icon: FaEye },
    { id: "Creational Patterns", name: "Creational Patterns", icon: FaCubes },
    { id: "Performance Patterns", name: "Performance Patterns", icon: FaSync },
  ];

  const filteredPatterns =
    selectedPattern === "all"
      ? patterns
      : patterns.filter((pattern) => pattern.category === selectedPattern);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              React Design Patterns
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              React uygulamalarında kullanılan temel tasarım desenlerini
              keşfedin. Her pattern'in ne zaman ve nasıl kullanılacağını
              öğrenin.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPattern(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedPattern === category.id
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
                }`}
              >
                <Icon size={16} />
                {category.name}
              </motion.button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPatterns.map((pattern, index) => {
            const Icon = pattern.icon;
            return (
              <motion.div
                key={pattern.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
              >
                <div
                  className={`bg-gradient-to-r ${pattern.color} p-6 text-white`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={24} />
                    <h3 className="text-xl font-bold">{pattern.name}</h3>
                  </div>
                  <p className="text-white/90 text-sm">{pattern.description}</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <PatternDiagram pattern={pattern.id} />
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <FaLightbulb size={16} className="text-yellow-500" />
                      Kullanım Alanları
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pattern.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <FaCode size={16} className="text-blue-500" />
                      Örnekler
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                      {pattern.example}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 flex-1">
                    <div>
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2 text-sm">
                        ✅ Avantajlar
                      </h4>
                      <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        {pattern.pros.map((pro) => (
                          <li key={pro} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">
                        ⚠️ Dezavantajlar
                      </h4>
                      <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        {pattern.cons.map((con) => (
                          <li key={con} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {pattern.category}
                    </span>
                    <div className="flex gap-2">
                      <Link
                        to={`/pattern/${pattern.id}`}
                        className="flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300"
                      >
                        Detayları Gör
                        <FaArrowRight size={12} />
                      </Link>
                      <button
                        onClick={() => {
                          const patternUrls: { [key: string]: string } = {
                            hoc: "https://refactoring.guru/design-patterns/decorator",
                            "render-props":
                              "https://refactoring.guru/design-patterns/strategy",
                            compound:
                              "https://refactoring.guru/design-patterns/composite",
                            provider:
                              "https://refactoring.guru/design-patterns/observer",
                            "custom-hooks":
                              "https://refactoring.guru/design-patterns/template-method",
                            observer:
                              "https://refactoring.guru/design-patterns/observer",
                            factory:
                              "https://refactoring.guru/design-patterns/factory-method",
                            memoization:
                              "https://refactoring.guru/design-patterns/proxy",
                          };
                          const url =
                            patternUrls[pattern.id] ||
                            "https://refactoring.guru/design-patterns";
                          window.open(url, "_blank");
                        }}
                        className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                        title="Refactoring.Guru'da Gör"
                      >
                        <FaExternalLinkAlt size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaInfoCircle className="text-primary-500" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Design Pattern'ları Nasıl Seçmeliyim?
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Her design pattern'ın kendine özgü kullanım alanları vardır.
              Projenizin ihtiyaçlarına göre en uygun pattern'i seçin. Küçük
              projeler için basit pattern'lar, büyük projeler için daha karmaşık
              pattern'lar tercih edilmelidir.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DesignPatterns;
