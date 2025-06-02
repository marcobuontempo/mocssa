import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

const currentFolder = new URL('.', import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export default function NoSignal() {
  return (
    <ArtworkFrame
      title='No Signal'
      attribution='Inspired by generic TV signal loss'
      creator='Marco Buontempo'
      categories={['one div']}
      sourceURL={sourceURL}
    >
      <div className={styles.artwork}>
        NO SIGNAL
      </div>
    </ArtworkFrame>
  )
}