import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

const currentFolder = new URL('.', import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export default function index() {
  return (
    <ArtworkFrame
      title='Great Wave'
      attribution='Inspired by The Great Wave off Kanagawa, designed by Katsushika Hokusai'
      creator='Marco Buontempo'
      categories={['one div', 'pixel art', 'animated']}
      sourceURL={sourceURL}
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}