import { ArtworkCategories } from "./artworkCategoriesType";

export type ArtworkMetadata = {
  "title": string,
  "attribution": string,
  "creator": string,
  "date": string,
  "categories": ArtworkCategories,
};