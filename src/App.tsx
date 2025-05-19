import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        color="140, 120, 81"
        outerSize={32}
        outerScale={2}
        
        clickables={[
          'a',
          'button',
          'input[type="checkbox"]',
        ]}
      />
      <header className="mocssa-header">
        <h1 className="title">MoCSSA</h1>
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
