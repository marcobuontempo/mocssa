import styles from './styles.module.css'

// Artworks
import Grimace from '../../artworks/Grimace'
import Droplet from '../../artworks/Droplet'

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <Grimace />
      <Droplet />
    </div>
  )
}