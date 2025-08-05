import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { curatedOrder } from "./curatedOrder";
import { ArtworkCategory } from "../../types/artworkCategoriesType";
import { ArtworkMetadata } from "../../types/artworkMetadataType";
import LazyArtwork from "../LazyArtwork";

type ArtworkMetadataModule = ArtworkMetadata & { componentPath: string };

// Statically import all Artworks during build time
const metadataModules = Object.entries(
  import.meta.glob("../../artworks/*/metadata.json", { eager: true })
).map(([path, mod]) => ({
  ...(mod as ArtworkMetadata),
  componentPath: `${path.split("/").slice(0, -1).join("/")}/index.tsx`,
})) as ArtworkMetadataModule[];

// Dynamic importer
const artworkImporters = import.meta.glob("../../artworks/*/index.tsx");

// Sort in curated order
function applyCuratedOrder(
  modules: ArtworkMetadata[],
  curatedTitles: string[]
) {
  const remaining = [...modules]; // copy so we don’t mutate the original
  const curated = [];

  // Iterate from last to first so earlier items stay at the top
  for (let i = curatedTitles.length - 1; i >= 0; i--) {
    const title = curatedTitles[i];
    const index = remaining.findIndex((mod) => mod.title === title);

    if (index !== -1) {
      curated.unshift(remaining.splice(index, 1)[0]); // move to front
    }
  }

  return [...curated, ...remaining]; // curated items on top
}

// Modules list to use. It is now already pre-sorted in curated order
const modules = applyCuratedOrder(metadataModules, curatedOrder);

export default function Gallery() {
  const [searchParams] = useSearchParams();
  const [artworks, setArtworks] = useState<any>(null);

  // Filter the artworks with matching conditions
  const filterGallery = (metadataModules: ArtworkMetadata[]) => {
    const titleParam = searchParams.get("title")?.toLocaleLowerCase();
    const creatorParam = searchParams.get("creator")?.toLocaleLowerCase();
    const categoryParams = searchParams.getAll("category");

    const filtered = metadataModules.filter((mod) => {
      // IF 'title' partially matches
      if (titleParam && !mod.title?.toLocaleLowerCase().includes(titleParam))
        return false;

      // IF 'creator' partially matches
      if (
        creatorParam &&
        !mod.creator?.toLocaleLowerCase().includes(creatorParam)
      )
        return false;

      // IF each 'category' matches
      if (
        !categoryParams.every((param) =>
          mod.categories.includes(param as ArtworkCategory)
        )
      )
        return false;

      return true;
    });

    return filtered;
  };

  const sortGallery = (metadataModules: ArtworkMetadata[]) => {
    const sortOrder = searchParams.get("sort");

    switch (sortOrder) {
      case "title-ascending":
        return metadataModules.sort((a, b) => a.title.localeCompare(b.title));
      case "title-descending":
        return metadataModules.sort((a, b) => b.title.localeCompare(a.title));
      case "date-ascending":
        return metadataModules.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      case "date-descending":
        return metadataModules.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      default:
        // "featured", or no sort search param, do NOT need sorting as they come pre-sorted by default
        return metadataModules;
    }
  };

  useEffect(() => {
    const filtered = filterGallery(modules);
    const sorted = sortGallery(filtered);
    setArtworks(sorted);
  }, [searchParams]);

  return (
    <div className={styles.gallery}>
      {artworks?.map((mod: ArtworkMetadataModule) => {
        const importer = artworkImporters[mod.componentPath];
        if (!importer) return null;

        // Dynamically import component
        return (
          <LazyArtwork
            key={mod.title}
            importer={() =>
              artworkImporters[mod.componentPath]().then((mod) => ({
                default: (mod as { default: React.ComponentType<any> }).default,
              }))
            }
          />
        );
      })}
    </div>
  );
}
