import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Artwork Title'
      attribution='Inspired by XX / Original Design'
      creator='Creator Name'
      categories={[]}
      ghSrc='/artwork-link'
    >
      <div className={styles.container} />
    </ArtworkContainer>
  )
}