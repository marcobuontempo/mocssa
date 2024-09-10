import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Droplet'
      attribution='Original Design'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Droplet'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}