import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Artwork Title'
      attribution='Inspired by XX / Original Design'
      creator='Creator Name'
      categories={[]}
      ghSrc='/artwork-link'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}