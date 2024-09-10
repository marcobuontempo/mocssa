import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Sticky Banana'
      attribution='Inspired by Comedian (2019), designed by Maurizio Cattelan'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/StickyBanana'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}