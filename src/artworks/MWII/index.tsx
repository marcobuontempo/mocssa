import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='MWII'
      attribution='Inspired by Call of Duty: Modern Warfare II logo'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/MWII'
    >
      <div className={styles.artwork} />
    </ArtworkContainer>
  )
}