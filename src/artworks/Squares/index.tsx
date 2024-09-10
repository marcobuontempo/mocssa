import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Squares'
      attribution='Original Design'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Squares'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}