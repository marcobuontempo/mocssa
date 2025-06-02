import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

const currentFolder = new URL('.', import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export default function EvilEye() {
  return (
    <ArtworkFrame
      title='Evil Eye'
      attribution='Inspired by Nazar amulet'
      creator='Zerde Turdybek'
      categories={['one div', 'interactive']}
      sourceURL={sourceURL}
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}