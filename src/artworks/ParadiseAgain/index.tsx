import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Paradise Again'
      attribution='Inspired by Paradise Again (Swedish House Mafia) vinyl'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/ParadiseAgain'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}