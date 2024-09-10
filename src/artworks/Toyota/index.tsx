import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Toyota'
      attribution='Inspired by vintage design Toyota logo'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Toyota'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}