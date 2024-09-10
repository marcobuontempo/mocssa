import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Orbit'
      attribution='Original Design'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Orbit'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}