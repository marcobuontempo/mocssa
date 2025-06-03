import ArtworkFrame from "../../components/ArtworkFrame";
import { ArtworkMetadata } from "../../types/artworkMetadataType";
import metadataRaw from "./metadata.json";
import styles from "./styles.module.css";

const currentFolder = new URL(".", import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export const metadata: ArtworkMetadata = metadataRaw as ArtworkMetadata;

export const artwork = (
  <>
    <input type='checkbox' className={styles.artwork} aria-label='Heart toggle' />
  </>
);

export default function Heart() {
  return (
    <ArtworkFrame
      title={metadata.title}
      creator={metadata.creator}
      sourceURL={sourceURL}
    >
      {artwork}
    </ArtworkFrame>
  )
}