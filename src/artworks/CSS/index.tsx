import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='CSS'
      attribution='Inspired by CSS logo'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/CSS'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}