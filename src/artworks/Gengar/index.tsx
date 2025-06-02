import ArtworkFrame from '../../components/ArtworkFrame'
import styles from './styles.module.css'

const currentFolder = new URL('.', import.meta.url).pathname;
const paths = currentFolder.split("/");
const sourceURL = paths[paths.length - 2];

export default function Gengar() {
  return (
    <ArtworkFrame
      title='Gengar'
      attribution='Inspired by Gengar sprite pixel art (origin unknown)'
      creator='Marco Buontempo'
      categories={['one div', 'pixel art', 'interactive']}
      sourceURL={sourceURL}
    >
      <input type='checkbox' className={styles.artwork} aria-label='Gengar toggle' />
    </ArtworkFrame>
  )
}