import { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import ArtworkContainer from '../ArtworkContainer'
import ArtworkModal from '../ArtworkModal'
import { ArtworkCategories } from '../../types/artworkCategoryTypes';

type Props = {
  children: ReactNode;
  title: string;
  attribution: string;
  creator: string;
  categories: ArtworkCategories;
  ghSrc: string;
}

export default function ArtworkFrame({
  children: artwork,
  title,
  attribution,
  creator,
  categories,
  ghSrc,
}: Props) {
  const originalWidth = 350;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    function updateScale() {
      const availableWidth = window.innerWidth;
      const newScale = Math.min(1, availableWidth / originalWidth);
      setScale(newScale);
    }

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  if (modalIsOpen) {
    return (
      <ArtworkModal
        artwork={artwork}
        title={title}
        attribution={attribution}
        creator={creator}
        categories={categories}
        ghSrc={ghSrc}
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
      />
    )
  }
  else {
    return (
      <div 
      className={styles.frame} 
      ref={containerRef}
      style={{
        width: `${originalWidth}px`,
        height: `${originalWidth}px`,
        minWidth: `${originalWidth}px`,
        minHeight: `${originalWidth}px`,
        transform: `scale(${scale})`,
      }}>
        <ArtworkContainer>
          {artwork}
        </ArtworkContainer>
        <button className={styles.information} onClick={() => setModalIsOpen(true)}>
          <h2 className={styles.title}>{title}</h2> <p className={styles.creator}>by {creator} </p>
          <img className={styles.popout} src='/svg/popout.svg' alt='Open Details' height={512} width={512} />
        </button>
      </div>
    )
  }

}