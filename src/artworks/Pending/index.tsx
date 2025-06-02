import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

const currentFolder = new URL('.', import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export default function Pending() {
  return (
    <ArtworkFrame
      title='Pending'
      attribution='Inspired by generic loading spinner'
      creator='Marco Buontempo'
      categories={['one div', 'animated']}
      sourceURL={sourceURL}
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}