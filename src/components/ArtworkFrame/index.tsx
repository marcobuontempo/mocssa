import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import ArtworkContainer from "../ArtworkContainer";
import ArtworkModal from "../ArtworkModal";
import { ArtworkCategories } from "../../types/artworkCategoryTypes";

type Props = {
  children: ReactNode;
  title: string;
  attribution: string;
  creator: string;
  categories: ArtworkCategories;
  ghSrc: string;
};

export default function ArtworkFrame({
  children: artwork,
  title,
  attribution,
  creator,
  categories,
  ghSrc,
}: Props) {
  const originalWidth = 350;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

  // "Lazy-load" - render and animate only when within 1000px of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsRendered((entry.isIntersecting || entry.intersectionRatio > 0));
      },
      { rootMargin: "1000px" } // load when 1000px away
    );

    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  if (modalIsOpen) {
    return (
      <ArtworkModal
        artwork={artwork}
        title={title}
        attribution={attribution}
        creator={creator}
        categories={categories}
        ghSrc={ghSrc}
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
      />
    );
  } else {
    return (
      <div
        className={`${styles.frame} ${!isRendered ? styles.paused : ""}`}
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
            <button
              className={styles.information}
              onClick={() => setModalIsOpen(true)}
            >
              <h3 className={styles.title}>{title}</h3>{" "}
              <p className={styles.creator}>by {creator} </p>
              <img
                className={styles.popout}
                src="/svg/popout.svg"
                alt="Open Details Symbol"
                height={12}
                width={12}
              />
            </button>
          </>
        )}
      </div>
    );
  }
}
