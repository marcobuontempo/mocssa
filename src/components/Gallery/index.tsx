import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { curatedOrder } from "./curatedOrder";
import { ArtworkModule } from "../../types/artworkModuleType";
import { ArtworkCategory } from "../../types/artworkCategoriesType";

// Statically import all Artworks during build time
const defaultModules = Object.entries(
  import.meta.glob("../../artworks/*/index.tsx", { eager: true })
).map(([_path, mod]) => mod) as ArtworkModule[];

// Sort in curated order
function applyCuratedOrder(modules: ArtworkModule[], curatedTitles: string[]) {
  const remaining = [...modules]; // copy so we don’t mutate the original
  const curated = [];

  // Iterate from last to first so earlier items stay at the top
  for (let i = curatedTitles.length - 1; i >= 0; i--) {
    const title = curatedTitles[i];
    const index = remaining.findIndex((mod) => mod.metadata.title === title);

    if (index !== -1) {
      curated.unshift(remaining.splice(index, 1)[0]); // move to front
    }
  }

  return [...curated, ...remaining]; // curated items on top
}

// Modules list to use. It is now already pre-sorted in curated order
const modules = applyCuratedOrder(defaultModules, curatedOrder);

export default function Gallery() {
  const [searchParams] = useSearchParams();
  const [artworks, setArtworks] = useState<any>(null);

  // Filter the artworks with matching conditions
  const filterGallery = (artworkModules: ArtworkModule[]) => {
    const titleParam = searchParams.get("title")?.toLocaleLowerCase();
    const creatorParam = searchParams.get("creator")?.toLocaleLowerCase();
    const categoryParams = searchParams.getAll("category");

    const filtered = artworkModules.filter((mod) => {
      // IF 'title' partially matches
      if (
        titleParam &&
        !mod.metadata.title?.toLocaleLowerCase().includes(titleParam)
      )
        return false;

      // IF 'creator' partially matches
      if (
        creatorParam &&
        !mod.metadata.creator?.toLocaleLowerCase().includes(creatorParam)
      )
        return false;

      // IF each 'category' matches
      if (
        !categoryParams.every((param) =>
          mod.metadata.categories.includes(param as ArtworkCategory)
        )
      )
        return false;

      return true;
    });

    return filtered;
  };

  const sortGallery = (artworkModules: ArtworkModule[]) => {
    const sortOrder = searchParams.get("sort");

    switch (sortOrder) {
      case "title-ascending":
        return artworkModules.sort((a, b) =>
          a.metadata.title.localeCompare(b.metadata.title)
        );
      case "title-descending":
        return artworkModules.sort((a, b) =>
          b.metadata.title.localeCompare(a.metadata.title)
        );
      case "date-ascending":
        return artworkModules.sort(
          (a, b) =>
            new Date(a.metadata.date).getTime() -
            new Date(b.metadata.date).getTime()
        );
      case "date-descending":
        return artworkModules.sort(
          (a, b) =>
            new Date(b.metadata.date).getTime() -
            new Date(a.metadata.date).getTime()
        );
      default:
        // "featured", or no sort search param, do NOT need sorting as they come pre-sorted by default
        return artworkModules;
    }
  };

  useEffect(() => {
    const filtered = filterGallery(modules);
    const sorted = sortGallery(filtered);
    setArtworks(sorted);
  }, [searchParams]);

  return (
    <div className={styles.gallery}>
      {artworks &&
        artworks.map((mod: ArtworkModule) => (
          <mod.default key={mod.metadata.title} />
        ))}
    </div>
  );
}
