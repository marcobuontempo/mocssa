import styles from './styles.module.css'

// Artworks
import Grimace from '../../artworks/Grimace'

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <Grimace />
    </div>
  )
}