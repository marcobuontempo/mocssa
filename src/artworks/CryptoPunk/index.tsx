import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

const currentFolder = new URL('.', import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export default function index() {
  return (
    <ArtworkFrame
      title='CryptoPunk'
      attribution='Inspired by CryptoPunk #7804, designed by Larva Labs Studio'
      creator='Marco Buontempo'
      categories={['one div', 'pixel art']}
      sourceURL={sourceURL}
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}