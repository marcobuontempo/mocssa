import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import ArtworkContainer from "../ArtworkContainer";
import { Link, useLocation } from "react-router-dom";

type Props = {
  children: ReactNode;
  title?: string;
  creator?: string;
  sourceURL?: string;
};

export default function ArtworkFrame({
  children: artwork,
  title,
  creator,
  sourceURL,
}: Props) {
  const originalWidth = 350;
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [scale, setScale] = useState(1);
  const [isRendered, setIsRendered] = useState(false);

  // Scale artworks down for screens smaller than artwork size
  useEffect(() => {
    function updateScale() {
      const availableWidth = window.innerWidth;
      const newScale = Math.min(1, availableWidth / originalWidth);
      setScale(newScale);
    }

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // "Lazy-load" - render and animate only when within 1400px of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsRendered(entry.isIntersecting || entry.intersectionRatio > 0);
      },
      { rootMargin: "1400px" } // load when 1400px away
    );

    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  return (
    <div
      className={styles.frame}
      ref={containerRef}
      style={{
        width: `${originalWidth}px`,
        height: `${originalWidth}px`,
        minWidth: `${originalWidth}px`,
        minHeight: `${originalWidth}px`,
        transform: `scale(${scale})`,
      }}
    >
      {isRendered && (
        <>
          <ArtworkContainer>{artwork}</ArtworkContainer>
          {(title && creator && sourceURL) && (
            <Link
              to={`/artwork/${sourceURL}/${location.search}`}
              className={styles.information}
              state={{ backgroundLocation: location }}
            >
              <h3 className={styles.title}>{title}</h3>{" "}
              <p className={styles.creator}>by {creator}</p>
              <img
                className={styles.popout}
                src="/svg/popout.svg"
                alt="Open Artwork Details Icon"
                height={12}
                width={12}
              />
            </Link>
          )}
        </>
      )}
    </div>
  );
}
