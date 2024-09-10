import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkFrame
      title='Pong'
      attribution='Inspired by Pong videogame, designed by Atari'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      ghSrc='/Pong'
    >
      <div className={styles.artwork}>
        2-1
      </div>
    </ArtworkFrame>
  )
}