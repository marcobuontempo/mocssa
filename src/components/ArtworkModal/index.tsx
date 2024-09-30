import { Dispatch, ReactNode, useEffect } from 'react';
import styles from './styles.module.css'
import ArtworkContainer from '../ArtworkContainer'
import { ArtworkCategories } from '../../types/artworkCategoryTypes';

type Props = {
  artwork: ReactNode;
  title: string;
  attribution: string;
  creator: string;
  categories: ArtworkCategories;
  ghSrc: string;
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}

export default function ArtworkModal({
  artwork,
  title,
  attribution,
  creator,
  categories,
  ghSrc,
  isOpen,
  setIsOpen,
}: Props) {

  // Prevent scrolling on main page when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal} style={{ display: isOpen ? 'flex' : '' }}>
      <img className={styles.exit} src='/svg/xmark.svg' alt='Close Modal' height={512} width={384} onClick={() => setIsOpen(false)} />
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.creator}>by {creator}</h3>
      </div>
      <ArtworkContainer>
        {artwork}
      </ArtworkContainer>
      <div className={styles.information}>
        <p>{attribution}</p>
        <div>
          <p className={styles.category_title}>categories:</p>
          <ul className={styles.categories}>
            {categories.map(category => <li>{category}</li>)}
          </ul>
        </div>
        <a className={styles.github} href={`https://github.com/marcobuontempo/mocssa/tree/main/src/artworks${ghSrc}`} target='_blank' rel='noreferrer'>GitHub Source Code</a>
      </div>
    </div>
  )
}