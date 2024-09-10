import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Rook'
      attribution='Original Design'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Rook'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}