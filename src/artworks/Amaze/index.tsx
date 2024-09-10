import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Amaze'
      attribution='Original Design'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Amaze'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}