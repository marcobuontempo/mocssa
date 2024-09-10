import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Almost'
      attribution='Inspired by the original DVD screensaver'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Almost'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}