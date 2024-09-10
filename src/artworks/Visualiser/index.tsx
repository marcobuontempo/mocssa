import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Visualiser'
      attribution='Inspired by audio visualisers'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Visualiser'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}