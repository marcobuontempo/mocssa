import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Heart'
      attribution='Original Design'
      creator='Marco Buontempo'
      categories={['one div', 'interactive', 'animated']}
      ghSrc='/Heart'
    >
      <input type='checkbox' className={styles.artwork} />
    </ArtworkContainer>
  )
}