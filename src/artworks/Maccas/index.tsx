import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

const currentFolder = new URL('.', import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export default function Maccas() {
  return (
    <ArtworkFrame
      title='Maccas'
      attribution='Inspired by McDonalds fries'
      creator='Marco Buontempo'
      categories={['one div']}
      sourceURL={sourceURL}
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}