import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaClock, FaBrain, FaCode, FaCog } from "react-icons/fa";
import { quizData, Quiz } from "../data/quizData";
import QuizComponent from "../components/common/Quiz";

const QuizPage: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setShowQuiz(true);
  };

  const handleQuizComplete = (score: number, totalQuestions: number) => {
    console.log(
      `Quiz completed! Score: ${score}% (${totalQuestions} questions)`
    );
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
    setSelectedQuiz(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-100 dark:bg-green-900/20";
      case "medium":
        return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20";
      case "hard":
        return "text-red-600 bg-red-100 dark:bg-red-900/20";
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-900/20";
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return <FaBrain className="text-green-500" />;
      case "medium":
        return <FaCode className="text-yellow-500" />;
      case "hard":
        return <FaCog className="text-red-500" />;
      default:
        return <FaBrain className="text-gray-500" />;
    }
  };

  const getTopicIcon = (topic: string) => {
    switch (topic) {
      case "React Temelleri":
        return "⚛️";
      case "JSX":
        return "📝";
      case "Hooks":
        return "🪝";
      case "Props ve State":
        return "🔄";
      default:
        return "📚";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            React.js Quiz'leri
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            React.js bilginizi test edin! Farklı seviyelerde quiz'ler ile
            kendinizi geliştirin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {quizData.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTopicIcon(quiz.topic)}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                        quiz.difficulty
                      )}`}
                    >
                      {quiz.difficulty === "easy"
                        ? "Kolay"
                        : quiz.difficulty === "medium"
                        ? "Orta"
                        : "Zor"}
                    </span>
                  </div>
                  {getDifficultyIcon(quiz.difficulty)}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {quiz.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {quiz.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    <span>{quiz.duration} dakika</span>
                  </div>
                  <div className="flex items-center">
                    <FaBrain className="mr-1" />
                    <span>{quiz.questions.length} soru</span>
                  </div>
                </div>

                <button
                  onClick={() => handleStartQuiz(quiz)}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <FaPlay className="mr-2" />
                  Quiz'e Başla
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {showQuiz && selectedQuiz && (
        <QuizComponent
          quiz={selectedQuiz}
          onComplete={handleQuizComplete}
          onClose={handleCloseQuiz}
        />
      )}
    </div>
  );
};

export default QuizPage;
