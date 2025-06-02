import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { isTouchDevice } from "../../utils/isTouchDevice";

export default function CustomCursor() {
  const [showCursor, setShowCursor] = useState(false);

  // Disable animated cursor for touch devices
  useEffect(() => {
    if (!isTouchDevice()) {
      setShowCursor(true);
      document.documentElement.classList.add("no-touch");
    }
  }, []);

  if (!showCursor) return null;

  return (
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
  );
}
