import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import AnimatedCursor from "react-animated-cursor";
import { isTouchDevice } from "./utils/isTouchDevice";
import ArtworkModal from "./components/ArtworkModal";
import Header from "./components/Header";

function App() {
  const [showCursor, setShowCursor] = useState(false);
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

  // Apply dark mode class to <body>
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

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

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Gallery />
        <ArtworkModal />
      </main>

      <Footer />
    </>
  );
}

export default App;
