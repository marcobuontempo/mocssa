import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Tetris'
      attribution='Inspired by Tetris videogame'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/tetris'
    >
      <div className={styles.artwork}>TETRIS</div>
    </ArtworkContainer>
  )
}