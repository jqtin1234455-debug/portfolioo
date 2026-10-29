import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ResumeModal from './components/ResumeModal';

// Separate Page Views
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-[#00c885] selection:text-white transition-colors duration-300">
        {/* Global Responsive Navigation */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          darkMode={darkMode}
          onToggleTheme={toggleTheme}
        />

        {/* Main Routed Page Views */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenResume={() => setIsResumeOpen(true)}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenResume={() => setIsResumeOpen(true)} />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage />}
            />
            <Route path="/skills" element={<SkillsPage />} />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            {/* Redirect any /services to /projects */}
            <Route path="/services" element={<Navigate to="/projects" replace />} />
            <Route
              path="*"
              element={
                <HomePage
                  onOpenResume={() => setIsResumeOpen(true)}
                />
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </Router>
  );
}
