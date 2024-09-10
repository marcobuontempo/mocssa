import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Contacts'
      attribution='Inspired by Apple iOS Contacts icon'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Contacts'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}