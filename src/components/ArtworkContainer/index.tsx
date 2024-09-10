import { ReactNode } from 'react'
import styles from './styles.module.css'

type Props = {
  children: ReactNode;
  title: string;
  attribution: string;
  creator: string;
  categories: ('one div' | 'pixel art' | 'animated' | 'interactive')[];
  ghSrc: string;
}

export default function ArtworkContainer({
  children: artwork,
  title,
  attribution,
  creator,
  categories,
  ghSrc,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <h2 className={styles.title}>{title}</h2> <p className={styles.creator}>by {creator}</p>
      </div>
      <div className={styles.artwork}>
        {artwork}
      </div>
    </div>
  )
}