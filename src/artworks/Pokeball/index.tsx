import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Pokeball'
      attribution='Inspired by a pokeball in Pokemon'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Pokeball'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}