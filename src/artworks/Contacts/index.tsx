import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Contacts'
      attribution='Inspired by Apple iOS Contacts icon'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Contacts'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}