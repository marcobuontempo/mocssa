import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Maccas'
      attribution='Inspired by McDonalds fries'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Maccas'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}