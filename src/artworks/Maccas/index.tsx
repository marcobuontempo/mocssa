import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Maccas'
      attribution='Inspired by McDonalds fries'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Maccas'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}