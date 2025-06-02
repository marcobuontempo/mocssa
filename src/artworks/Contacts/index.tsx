import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

const currentFolder = new URL('.', import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export default function Contacts() {
  return (
    <ArtworkFrame
      title='Contacts'
      attribution='Inspired by Apple iOS Contacts icon'
      creator='Marco Buontempo'
      categories={['one div']}
      sourceURL={sourceURL}
    >
      <div className={styles.artwork} />
    </ArtworkFrame>
  )
}