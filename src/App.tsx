import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import AnimatedCursor from "react-animated-cursor";
import { isTouchDevice } from "./utils/isTouchDevice";

function App() {
  const [showCursor, setShowCursor] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Load initial theme from localStorage or system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Disable animated cursor for touch devices
  useEffect(() => {
    if (!isTouchDevice()) {
      setShowCursor(true);
    }
  }, []);

  // Animate title
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShrunk(true);
    }, 2000); // delay before shrinking
    return () => clearTimeout(timeout);
  }, []);

  // Apply dark mode class to <body>
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      {showCursor && (
        <AnimatedCursor
          color="140, 120, 81"
          outerSize={32}
          outerScale={2}
          clickables={["a", "button", 'input[type="checkbox"]']}
        />
      )}
      <header className="mocssa-header">
        <div className="title-container">
          <h1 className={`title ${shrunk ? "shrink" : ""}`}>
            <div>
              <span className="acronym">M</span>
              <span className="fade">useum&nbsp;</span>
            </div>
            <div>
              <span className="acronym">o</span>
              <span className="fade">f&nbsp;</span>
            </div>
            <div>
              <span className="acronym">CSS</span>
              <span className="fade">&nbsp;</span>
            </div>
            <div>
              <span className="acronym">A</span>
              <span className="fade">rt</span>
            </div>
          </h1>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </button>
        <div className="hr"></div>
        <div className="subcontainer">
          <h2 className="subheading">CSS Artworks</h2>
          <p className="info">
            A collection of artwork creations made with only HTML and CSS.
            Exploring CSS as a medium for artistic expression.
          </p>
          <button className="filter-button">Filter →</button>
        </div>
      </header>

      <main>
        <Gallery />
      </main>

      <Footer />
    </>
  );
}

export default App;
