"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Code } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-800 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-7 w-7 text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            DevPortfolio
          </span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          {["about", "playground", "contact"].map((id) => (
            <a
              key={id}
              href={`/${id}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {id === "about"
                ? "소개"
                : id === "playground"
                ? "놀이터"
                : "연락처"}
            </a>
          ))}

          <button
            onClick={toggleDark}
            className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-600" />
            )}
          </button>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            이력서
          </Link>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDark}
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-600" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-2 shadow-md"
        >
          {["about", "playground", "contact"].map((id) => (
            <a
              key={id}
              href={`/${id}`}
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {id === "about"
                ? "소개"
                : id === "playground"
                ? "놀이터"
                : "연락처"}
            </a>
          ))}

          <Link
            href="/resume.pdf"
            target="_blank"
            className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium"
            onClick={() => setMobileOpen(false)}
          >
            이력서
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
