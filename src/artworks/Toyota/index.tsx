import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Toyota'
      attribution='Inspired by vintage design Toyota logo'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Toyota'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}