import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='MWII'
      attribution='Inspired by Call of Duty: Modern Warfare II logo'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/MWII'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}