import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Ross'
      attribution='Inspired by generic grey alien'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Ross'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}