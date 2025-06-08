import { ReactElement, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { ArtworkMetadata } from "../../types/artworkMetadataType";
import ArtworkFrame from "../ArtworkFrame";

export default function EmbedContainer() {
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
      });
  }, [artworkSourceURL]);

  if (!artwork || !metadata) return null;

  return (
    <div className={styles.embedcontainer}>
      <ArtworkFrame>{artwork}</ArtworkFrame>
      <div className={styles.footer}>
        <h1 className={styles.title}>
          {metadata.title} by {metadata.creator}
        </h1>
        <a
          className={styles.embedlink}
          href={window.location.origin}
          rel="noopener noreferrer"
          target="_blank"
        >
          &copy; MoCSSA
        </a>
      </div>
    </div>
  );
}
