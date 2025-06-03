import ArtworkFrame from "../../components/ArtworkFrame";
import { ArtworkMetadata } from "../../types/artworkMetadataType";
import metadataRaw from "./metadata.json";
import styles from "./styles.module.css";

export const metadata: ArtworkMetadata = metadataRaw as ArtworkMetadata;

export const artwork = (
  <>
    <div className={styles.artwork} />
  </>
);

export default function Circles() {
  return (
    <ArtworkFrame
      title={metadata.title}
      creator={metadata.creator}
      sourceURL={"Circles"}
    >
      {artwork}
    </ArtworkFrame>
  )
}