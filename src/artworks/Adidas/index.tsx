import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Adidas'
      attribution='Inspired by Adidas Originals logo'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Adidas'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}