import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Amaze'
      attribution='Original Design'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Amaze'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}