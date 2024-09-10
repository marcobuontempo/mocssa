import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Great Wave'
      attribution='Inspired by The Great Wave off Kanagawa, designed by Katsushika Hokusai'
      creator='Marco Buontempo'
      categories={['one div', 'pixel art', 'animated']}
      ghSrc='/GreatWave'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}