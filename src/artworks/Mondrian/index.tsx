import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

const currentFolder = new URL('.', import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export default function index() {
  return (
    <ArtworkFrame
      title='Mondrian'
      attribution='Inspired by compositions designed by Piet Mondrian'
      creator='Marco Buontempo'
      categories={['one div']}
      sourceURL={sourceURL}
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}