import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

const currentFolder = new URL('.', import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export default function index() {
  return (
    <ArtworkFrame
      title='Almost'
      attribution='Inspired by the original DVD screensaver'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      sourceURL={sourceURL}
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}