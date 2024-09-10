import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Sticky Banana'
      attribution='Inspired by Comedian (2019), designed by Maurizio Cattelan'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/StickyBanana'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}