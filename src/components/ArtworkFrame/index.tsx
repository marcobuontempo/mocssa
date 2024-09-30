import { ReactNode, useState } from 'react'
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
      <div className={styles.frame}>
        <ArtworkContainer>
          {artwork}
        </ArtworkContainer>
        <div className={styles.information} onClick={() => setModalIsOpen(true)}>
          <h2 className={styles.title}>{title}</h2> <p className={styles.creator}>by {creator} </p>
          <img className={styles.popout} src='/svg/popout.svg' alt='Open Details' height={512} width={512} />
        </div>
      </div>
    )
  }

}