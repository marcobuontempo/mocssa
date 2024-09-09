import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Droplet'
      attribution='Original Design'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/droplet'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}