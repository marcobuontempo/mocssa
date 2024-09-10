import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Houndstooth'
      attribution='Inspired by houndstooth pattern'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Houndstooth'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}