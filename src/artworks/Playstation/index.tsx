import ArtworkFrame from "../../components/ArtworkFrame";
import { ArtworkMetadata } from "../../types/artworkMetadataType";
import metadataRaw from "./metadata.json";
import styles from "./styles.module.css";

export const metadata: ArtworkMetadata = metadataRaw as ArtworkMetadata;

export const artwork = (
  <>
    <div className={styles.artwork}>
      <input type="checkbox" className={styles.triangle} />
      <input type="checkbox" className={styles.circle} />
      <input type="checkbox" className={styles.cross} />
      <input type="checkbox" className={styles.square} />
    </div>
  </>
);

export default function Playstation() {
  return (
    <ArtworkFrame
      title={metadata.title}
      creator={metadata.creator}
      sourceURL={"Playstation"}
    >
      {artwork}
    </ArtworkFrame>
  )
}
  