import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaHome,
  FaRoute,
  FaProjectDiagram,
  FaBook,
  FaBrain,
  FaPuzzlePiece,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: "Başlangıç", href: "/", icon: FaHome },
    { name: "Roadmap", href: "/roadmap", icon: FaRoute },
    { name: "Projeler", href: "/projects", icon: FaProjectDiagram },
    { name: "Design Patterns", href: "/design-patterns", icon: FaPuzzlePiece },
    { name: "Quiz", href: "/quiz", icon: FaBrain },
    { name: "Kaynaklar", href: "/resources", icon: FaBook },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md border-b border-gray-200 dark:border-secondary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-primary-500"
            >
              <FaReact size={32} />
            </motion.div>
            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
              React Roadmap
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-primary-500 bg-primary-50 dark:bg-primary-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-secondary-800"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-secondary-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-secondary-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-secondary-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-secondary-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200 dark:border-secondary-700"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(item.href)
                          ? "text-primary-500 bg-primary-50 dark:bg-primary-900/20"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-secondary-800"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
