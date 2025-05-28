import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import AnimatedCursor from "react-animated-cursor";
import { isTouchDevice } from "./utils/isTouchDevice";
import FilterForm from "./components/FilterForm";

function App() {
  const [showCursor, setShowCursor] = useState(false);
  const [shrunkTitle, setShrunkTitle] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
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
      setShrunkTitle(true);
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

  const toggleFilterDisplay = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <>
      {showCursor && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "var(--accent-colour)",
            mixBlendMode: "exclusion",
          }}
          outerStyle={{
            backgroundColor: "rgba(255,255,255,0.33)",
            border: "3px solid var(--accent-colour)",
          }}
          clickables={["a", "button", 'input[type="checkbox"]']}
        />
      )}
      <header className="mocssa-header">
        <div className="title-container">
          <h1 className={`title ${shrunkTitle ? "shrink" : ""}`}>
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
          <button className="filter-button" onClick={toggleFilterDisplay}>
            Filter Options →
          </button>
          {isFilterVisible && <FilterForm />}
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
