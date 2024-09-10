import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Pending'
      attribution='Inspired by generic loading spinner'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Pending'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}