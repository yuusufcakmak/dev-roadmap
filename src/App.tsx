import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";
import { ProgressProvider } from "./context/ProgressContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Projects from "./pages/Projects";
import DesignPatterns from "./pages/DesignPatterns";
import PatternDetail from "./pages/PatternDetail";
import Resources from "./pages/Resources";
import Quiz from "./pages/Quiz";
import TopicDetail from "./pages/TopicDetail";

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gray-50 dark:bg-secondary-900 transition-colors duration-300">
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/design-patterns" element={<DesignPatterns />} />
                <Route path="/pattern/:patternId" element={<PatternDetail />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/topic/:topicId" element={<TopicDetail />} />
              </Routes>
            </Layout>
          </div>
        </Router>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
