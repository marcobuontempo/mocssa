import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Mondrian'
      attribution='Inspired by compositions designed by Piet Mondrian'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Mondrian'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}