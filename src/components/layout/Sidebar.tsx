import React from "react";
import { Level, Category } from "../../types/roadmap";

interface SidebarProps {
  roadmapData: Level[];
  selectedLevel: string;
  selectedCategory: string;
  searchTerm: string;
  onLevelChange: (levelId: string) => void;
  onCategoryChange: (categoryId: string) => void;
  onSearchChange: (searchTerm: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  roadmapData,
  selectedLevel,
  selectedCategory,
  searchTerm,
  onLevelChange,
  onCategoryChange,
  onSearchChange,
}) => {
  const currentLevel = roadmapData.find(
    (level: Level) => level.id === selectedLevel
  );

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 sticky top-8">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Arama
          </label>
          <input
            type="text"
            placeholder="Konu ara..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Seviye
          </label>
          <div className="space-y-2">
            {roadmapData.map((level: Level) => (
              <button
                key={level.id}
                onClick={() => onLevelChange(level.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedLevel === level.id
                    ? "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                <div className="font-medium">{level.name}</div>
                <div className="text-sm opacity-75">Seviye {level.order}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Kategori
          </label>
          <div className="space-y-2">
            <button
              onClick={() => onCategoryChange("all")}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Tüm Kategoriler
            </button>
            {currentLevel?.categories.map((category: Category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            İlerleme Durumu
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Toplam Konu:
              </span>
              <span className="font-medium text-gray-900 dark:text-white">
                {roadmapData.reduce(
                  (total, level) =>
                    total +
                    level.categories.reduce(
                      (catTotal, category) => catTotal + category.topics.length,
                      0
                    ),
                  0
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Seviye Sayısı:
              </span>
              <span className="font-medium text-gray-900 dark:text-white">
                {roadmapData.length}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Kategori Sayısı:
              </span>
              <span className="font-medium text-gray-900 dark:text-white">
                {roadmapData.reduce(
                  (total, level) => total + level.categories.length,
                  0
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
