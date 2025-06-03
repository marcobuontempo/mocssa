import ArtworkFrame from "../../components/ArtworkFrame";
import { ArtworkMetadata } from "../../types/artworkMetadataType";
import metadataRaw from "./metadata.json";
import styles from "./styles.module.css";

export const metadata: ArtworkMetadata = metadataRaw as ArtworkMetadata;

export const artwork = (
  <>
    <input type='checkbox' className={styles.artwork} aria-label='Gengar toggle' />
  </>
);

export default function Gengar() {
  return (
    <ArtworkFrame
      title={metadata.title}
      creator={metadata.creator}
      sourceURL={"Gengar"}
    >
      {artwork}
    </ArtworkFrame>
  )
}