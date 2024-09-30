import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Gengar'
      attribution='Inspired by Gengar sprite pixel art (origin unknown)'
      creator='Marco Buontempo'
      categories={['one div', 'interactive']}
      ghSrc='/Gengar'
    >
      <input type='checkbox' className={styles.artwork} aria-label='Gengar toggle' />
    </ArtworkFrame>
  )
}