import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='No Signal'
      attribution='Inspired by generic TV signal loss'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/NoSignal'
    >
      <div className={styles.artwork}>
        NO SIGNAL
      </div>
    </ArtworkContainer>
  )
}