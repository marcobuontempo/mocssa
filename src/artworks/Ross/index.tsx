import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Ross'
      attribution='Inspired by generic grey alien'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Ross'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}