import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='CSS'
      attribution='Inspired by CSS logo'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/CSS'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}