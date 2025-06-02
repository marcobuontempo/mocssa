import { MouseEvent, ReactElement, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArtworkMetadata } from "../../types/artworkMetadataType";
import ArtworkFrame from "../ArtworkFrame";

export default function ArtworkModal() {
  const location = useLocation();
  const navigate = useNavigate();
  const { artworkSourceURL } = useParams();
  const [artwork, setArtwork] = useState<ReactElement | null>(null);
  const [metadata, setMetadata] = useState<ArtworkMetadata | null>(null);

  // Dynamically import the necessary artwork component
  useEffect(() => {
    if (!artworkSourceURL) return;

    import(`../../artworks/${artworkSourceURL}/index.tsx`)
      .then((module) => {
        setArtwork(() => module.artwork);
        setMetadata(() => module.metadata);
      })
      .catch(() => {
        setArtwork(null);
        setMetadata(null);
        navigate("/");
      });
  }, [artworkSourceURL]);

  // Prevent scroll when modal is showing
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleCloseModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const backgroundLocation = location.state?.backgroundLocation as
      | Location
      | undefined;

    if (backgroundLocation) {
      navigate(-1); // go back to where we came from
    } else {
      navigate("/"); // fallback if user came directly to /artwork/:artworkSourceURL
    }
  };

  if (!artwork || !metadata) return null;
  return (
    <div className={styles.modal}>
      <button className={styles.exit} onClick={handleCloseModal}>
        <img src="/svg/xmark.svg" alt="Close Modal" height={48} width={48} />
      </button>
      <div className={styles.header}>
        <h2 className={styles.title}>{metadata.title}</h2>
        <h3 className={styles.creator}>by {metadata.creator}</h3>
      </div>

      <ArtworkFrame>{artwork}</ArtworkFrame>

      <div className={styles.information}>
        <p className={styles.attribution}>{metadata.attribution}</p>
        <div>
          <p className={styles.category_title}>categories:</p>
          <ul className={styles.categories}>
            {metadata.categories.map((category) => (
              <li
                key={category}
                className={styles[`${category.split(" ").join("")}`]}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <a
          className={styles.github}
          href={`https://github.com/marcobuontempo/mocssa/tree/main/src/artworks/${artworkSourceURL}`}
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub Source Code</span>
          <img
            className={styles.linkicon}
            src="/svg/link.svg"
            alt="Open GitHub Source Icon"
            height={12}
            width={12}
          />
        </a>
      </div>
    </div>
  );
}
