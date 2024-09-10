import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Chrome'
      attribution='Inspired by Google Chrome logo'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Chrome'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}