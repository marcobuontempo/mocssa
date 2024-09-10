import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Tetris'
      attribution='Inspired by Tetris videogame, designed by Alexey Pajitnov'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Tetris'
    >
      <div className={styles.artwork}>TETRIS</div>
    </ArtworkFrame>
  )
}