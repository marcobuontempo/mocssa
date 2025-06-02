import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

const currentFolder = new URL('.', import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export default function index() {
  return (
    <ArtworkFrame
      title='Heart'
      attribution='Original Design'
      creator='Marco Buontempo'
      categories={['one div', 'pixel art', 'interactive', 'animated']}
      sourceURL={sourceURL}
    >
      <input type='checkbox' className={styles.artwork} aria-label='Heart toggle' />
    </ArtworkFrame>
  )
}