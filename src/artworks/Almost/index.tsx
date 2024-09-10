import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Almost'
      attribution='Inspired by the original DVD screensaver'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Almost'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}