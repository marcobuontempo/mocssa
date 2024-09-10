import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Cursor'
      attribution='Inspired by Windows98'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Cursor'
    >
      <div className={styles.artwork}>
        {"Fatal Error!\n\n    OK"}
      </div>
    </ArtworkFrame>
  )
}