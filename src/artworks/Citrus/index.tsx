import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Citrus'
      attribution='Original Design'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Citrus'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}