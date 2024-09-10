import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Visualiser'
      attribution='Inspired by audio visualisers'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Visualiser'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}