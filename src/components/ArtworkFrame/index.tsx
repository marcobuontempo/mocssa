import { ReactNode, useEffect, useState } from "react";
import styles from "./styles.module.css";
import ArtworkContainer from "../ArtworkContainer";
import { Link, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";

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
  const originalWidth = 21.875; // rem units
  const location = useLocation();
  const [scale, setScale] = useState(1);

  // Intersection observer hook
  const { ref, inView } = useInView({
    rootMargin: "1400px",
    triggerOnce: false,
  });

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

  return (
    <div
      className={styles.frame}
      ref={ref}
      style={{
        width: `${originalWidth}rem`,
        height: `${originalWidth}rem`,
        minWidth: `${originalWidth}rem`,
        minHeight: `${originalWidth}rem`,
        transform: `scale(${scale})`,
      }}
    >
      {inView && (
        <>
          <ArtworkContainer>{artwork}</ArtworkContainer>
          {title && creator && sourceURL && (
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
