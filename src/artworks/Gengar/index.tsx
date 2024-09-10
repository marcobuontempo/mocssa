import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Gengar'
      attribution='Inspired by Gengar sprite pixel art (origin unknown)'
      creator='Marco Buontempo'
      categories={['one div', 'interactive']}
      ghSrc='/Gengar'
    >
      <input type='checkbox' className={styles.artwork} />
    </ArtworkContainer>
  )
}