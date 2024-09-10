import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='JS'
      attribution='Inspired by JavaScript logo'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/JS'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}