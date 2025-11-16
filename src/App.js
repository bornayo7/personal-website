import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    try {
      return localStorage.getItem("preferred-theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("preferred-theme", theme);
    } catch {
      /* ignore write errors */
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <Preloader load={isLoading} />
      <div className="App" id={isLoading ? "no-scroll" : "scroll"}>
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <ScrollToTop />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
