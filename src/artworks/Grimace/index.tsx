import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Grimace'
      attribution='Inspired by generic grimace emoji'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Grimace'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}