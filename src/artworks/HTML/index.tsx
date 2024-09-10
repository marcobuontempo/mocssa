import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='HTML'
      attribution='Inspired by HTML logo'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/HTML'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}