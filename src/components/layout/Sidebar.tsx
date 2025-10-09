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
      <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm border border-gray-200 dark:border-secondary-700 p-4 sm:p-6 sticky top-8">
        <div className="mb-6">
          <label className="block text-sm font-medium brand-sub mb-2">
            Arama
          </label>
          <input
            type="text"
            placeholder="Konu ara..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-gray-900 dark:text-white"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium brand-sub mb-2">
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
                    : "hover:bg-gray-100 dark:hover:bg-secondary-700 brand-sub"
                }`}
              >
                <div className="font-medium">{level.name}</div>
                <div className="text-sm opacity-75">Seviye {level.order}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium brand-sub mb-2">
            Kategori
          </label>
          <div className="space-y-2">
            <button
              onClick={() => onCategoryChange("all")}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                  : "hover:bg-gray-100 dark:hover:bg-secondary-700 brand-sub"
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
                    : "hover:bg-gray-100 dark:hover:bg-secondary-700 brand-sub"
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
          <h3 className="text-sm font-medium brand-sub mb-3">
            İlerleme Durumu
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="brand-sub">Toplam Konu:</span>
              <span className="font-medium brand-h">
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
              <span className="brand-sub">Seviye Sayısı:</span>
              <span className="font-medium brand-h">{roadmapData.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="brand-sub">Kategori Sayısı:</span>
              <span className="font-medium brand-h">
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
