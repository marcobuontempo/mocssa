import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Glass'
      attribution='Original Design'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Glass'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}