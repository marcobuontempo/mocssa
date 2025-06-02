import { ComponentType, ReactElement } from "react"
import { ArtworkMetadata } from "./artworkMetadataType";

export type ArtworkModule = {
  default: ComponentType;
  metadata: ArtworkMetadata;
  artwork: ReactElement;
}