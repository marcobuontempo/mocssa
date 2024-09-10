import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='HTML'
      attribution='Inspired by HTML logo'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/HTML'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}