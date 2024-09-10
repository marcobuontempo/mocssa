import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='CryptoPunk'
      attribution='Inspired by CryptoPunk #7804, designed by Larva Labs Studio'
      creator='Marco Buontempo'
      categories={['one div', 'pixel art']}
      ghSrc='/CryptoPunk'
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}