import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

const currentFolder = new URL('.', import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export default function Pong() {
  return (
    <ArtworkFrame
      title='Pong'
      attribution='Inspired by Pong videogame, designed by Atari'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      sourceURL={sourceURL}
    >
      <div className={styles.artwork}>
        2-1
      </div>
    </ArtworkFrame>
  )
}