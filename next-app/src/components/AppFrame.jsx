"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ResumeModal from "./ResumeModal";

const PortfolioContext = createContext(null);

export function usePortfolioActions() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolioActions must be used within AppFrame");
  }

  return context;
}

export default function AppFrame({ children }) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    setDarkMode(
      savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches,
    );
  }, []);

  useEffect(() => {
    if (darkMode === null) return;

    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const actions = {
    onOpenResume: () => setIsResumeOpen(true),
    onToggleTheme: () => setDarkMode((current) => !current),
    darkMode: darkMode ?? false,
  };

  return (
    <PortfolioContext.Provider value={actions}>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-[#00c885] selection:text-white transition-colors duration-300">
        <Navbar
          onOpenResume={actions.onOpenResume}
          darkMode={actions.darkMode}
          onToggleTheme={actions.onToggleTheme}
        />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </PortfolioContext.Provider>
  );
}
