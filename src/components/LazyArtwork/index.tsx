import { useInView } from "react-intersection-observer";
import { lazy, Suspense } from "react";
import ArtworkContainer from "../ArtworkContainer";
import styles from "./styles.module.css";

interface LazyArtworkProps {
  importer: () => Promise<{ default: React.ComponentType<any> }>;
}

function ArtworkLoadingPlaceholder() {
  return (
    <ArtworkContainer>
      <div className={styles.loading} />
    </ArtworkContainer>
  );
}

export default function LazyArtwork({ importer }: LazyArtworkProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "500px",
  });

  const ArtworkComponent = lazy(importer);

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={<ArtworkLoadingPlaceholder />}>
          <ArtworkComponent />
        </Suspense>
      ) : (
        <ArtworkLoadingPlaceholder />
      )}
    </div>
  );
}
