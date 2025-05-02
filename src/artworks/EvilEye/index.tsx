import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Evil Eye'
      attribution='Inspired by Nazar amulet'
      creator='Zerde Turdybek'
      categories={['one div', 'interactive']}
      ghSrc='/EvilEye'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}