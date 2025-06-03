import ArtworkFrame from "../../components/ArtworkFrame";
import { ArtworkMetadata } from "../../types/artworkMetadataType";
import metadataRaw from "./metadata.json";
import styles from "./styles.module.css";

export const metadata: ArtworkMetadata = metadataRaw as ArtworkMetadata;

export const artwork = (
  <>
    <div className={styles.artwork}>
      {"Fatal Error!\n\n    OK"}
    </div>
  </>
);

export default function Cursor() {
  return (
    <ArtworkFrame
      title={metadata.title}
      creator={metadata.creator}
      sourceURL={"Cursor"}
    >
      {artwork}
    </ArtworkFrame>
  )
}