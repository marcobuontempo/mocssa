import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Mondrian'
      attribution='Inspired by compositions designed by Piet Mondrian'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Mondrian'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}