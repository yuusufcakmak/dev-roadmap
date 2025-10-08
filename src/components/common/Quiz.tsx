import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaTimes, FaClock, FaTrophy, FaRedo } from "react-icons/fa";
import { Quiz, QuizQuestion } from "../../data/quizData";

interface QuizProps {
  quiz: Quiz;
  onComplete?: (score: number, totalQuestions: number) => void;
  onClose?: () => void;
}

interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  timeSpent: number;
}

const QuizComponent: React.FC<QuizProps> = ({ quiz, onComplete, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(quiz.duration * 60);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  useEffect(() => {
    if (quizCompleted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleQuizComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizCompleted]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      handleQuizComplete();
    }
  };

  const handleQuizComplete = () => {
    const newAnswers =
      selectedAnswer !== null ? [...answers, selectedAnswer] : answers;
    const correctAnswers = newAnswers.filter(
      (answer, index) => answer === quiz.questions[index].correctAnswer
    ).length;

    const result: QuizResult = {
      score: Math.round((correctAnswers / quiz.questions.length) * 100),
      totalQuestions: quiz.questions.length,
      correctAnswers,
      wrongAnswers: quiz.questions.length - correctAnswers,
      timeSpent: quiz.duration * 60 - timeLeft,
    };

    setQuizResult(result);
    setQuizCompleted(true);
    onComplete?.(result.score, result.totalQuestions);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setTimeLeft(quiz.duration * 60);
    setQuizCompleted(false);
    setQuizResult(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "hard":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  if (quizCompleted && quizResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl mb-4"
            >
              {quizResult.score >= 80
                ? "🎉"
                : quizResult.score >= 60
                ? "👍"
                : "😔"}
            </motion.div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Quiz Tamamlandı!
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Skor:</span>
                <span
                  className={`text-2xl font-bold ${getScoreColor(
                    quizResult.score
                  )}`}
                >
                  {quizResult.score}%
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Doğru:</span>
                <span className="text-green-600 font-semibold">
                  {quizResult.correctAnswers}/{quizResult.totalQuestions}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">
                  Yanlış:
                </span>
                <span className="text-red-600 font-semibold">
                  {quizResult.wrongAnswers}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Süre:</span>
                <span className="text-blue-600 font-semibold">
                  {formatTime(quizResult.timeSpent)}
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleRestart}
                className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <FaRedo className="mr-2" />
                Tekrar Dene
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {quiz.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {quiz.description}
            </p>
          </div>
          <div className="flex items-center space-x-4">
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
            <div className="flex items-center text-red-600">
              <FaClock className="mr-1" />
              <span className="font-mono">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>
              Soru {currentQuestionIndex + 1} / {quiz.questions.length}
            </span>
            <span>
              {Math.round(
                ((currentQuestionIndex + 1) / quiz.questions.length) * 100
              )}
              %
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-primary-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${
                  ((currentQuestionIndex + 1) / quiz.questions.length) * 100
                }%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {currentQuestion.question}
              </h3>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedAnswer === index
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  >
                    <span className="text-gray-900 dark:text-white">
                      {String.fromCharCode(65 + index)}. {option}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between items-center">
          <button
            onClick={onClose}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            Çıkış
          </button>

          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedAnswer !== null
                ? "bg-primary-500 hover:bg-primary-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            }`}
          >
            {currentQuestionIndex < quiz.questions.length - 1
              ? "Sonraki"
              : "Tamamla"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuizComponent;
