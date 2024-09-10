import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='JS'
      attribution='Inspired by JavaScript logo'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/JS'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}