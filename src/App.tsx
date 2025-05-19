import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import AnimatedCursor from "react-animated-cursor";
import { isTouchDevice } from "./utils/isTouchDevice";

function App() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    if (!isTouchDevice()) {
      setShowCursor(true);
    }
  }, []);

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
        <h1 className="title">
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
