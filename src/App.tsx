import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Gallery from "./components/Gallery";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load initial theme from localStorage or system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    // Apply dark mode class to <html>
    root.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    // Remove the transition-blocking class from <html>
    if (root.classList.contains("no-theme-transition")) {
      setTimeout(() => root.classList.remove("no-theme-transition"), 0);
    }
  }, [darkMode]);

  return (
    <>
      <CustomCursor />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Gallery />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
