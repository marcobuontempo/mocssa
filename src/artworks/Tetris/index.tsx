import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Tetris'
      attribution='Inspired by Tetris videogame, designed by Alexey Pajitnov'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Tetris'
    >
      <div className={styles.artwork}>TETRIS</div>
    </ArtworkContainer>
  )
}