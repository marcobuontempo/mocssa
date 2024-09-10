import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Heart'
      attribution='Original Design'
      creator='Marco Buontempo'
      categories={['one div', 'interactive', 'animated']}
      ghSrc='/Heart'
    >
      <input type='checkbox' className={styles.artwork} />
    </ArtworkFrame>
  )
}