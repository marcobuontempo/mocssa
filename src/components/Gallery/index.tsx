import styles from './styles.module.css'

// Artworks
import Adidas from '../../artworks/Adidas'
import Almost from '../../artworks/Almost'
import Amaze from '../../artworks/Amaze'
import Chrome from '../../artworks/Chrome'
import Circles from '../../artworks/Circles'
import Citrus from '../../artworks/Citrus'
import Contacts from '../../artworks/Contacts'
import CryptoPunk from '../../artworks/CryptoPunk'
import CSS from '../../artworks/CSS'
import Cursor from '../../artworks/Cursor'
import Droplet from '../../artworks/Droplet'
import Gengar from '../../artworks/Gengar'
import Glass from '../../artworks/Glass'
import GreatWave from '../../artworks/GreatWave'
import Grimace from '../../artworks/Grimace'
import Heart from '../../artworks/Heart'
import Houndstooth from '../../artworks/Houndstooth'
import HTML from '../../artworks/HTML'
import JS from '../../artworks/JS'
import Maccas from '../../artworks/Maccas'
import Mondrian from '../../artworks/Mondrian'
import MWII from '../../artworks/MWII'
import NoSignal from '../../artworks/NoSignal'
import Orbit from '../../artworks/Orbit'
import ParadiseAgain from '../../artworks/ParadiseAgain'
import Pending from '../../artworks/Pending'
import Pokeball from '../../artworks/Pokeball'
import Pong from '../../artworks/Pong'
import Rook from '../../artworks/Rook'
import Ross from '../../artworks/Ross'
import Scenic from '../../artworks/Scenic'
import Squares from '../../artworks/Squares'
import StickyBanana from '../../artworks/StickyBanana'
import Terminal from '../../artworks/Terminal'
import Tetris from '../../artworks/Tetris'
import Toyota from '../../artworks/Toyota'
import Visualiser from '../../artworks/Visualiser'

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <Rook />
      <Almost />
      <StickyBanana />
      <Pong />
      <Citrus />
      <Droplet />
      <GreatWave />
      <Cursor />
      <HTML />
      <JS />
      <CSS />
      <Visualiser />
      <Squares />
      <Heart />
      <Terminal />
      <Grimace />
      <Houndstooth />
      <Maccas />
      <Mondrian />
      <CryptoPunk />
      <Adidas />
      <Amaze />
      <Toyota />
      <Pokeball />
      <Ross />
      <MWII />
      <Scenic />
      <ParadiseAgain />
      <Orbit />
      <Glass />
      <Pending />
      <Gengar />
      <Circles />
      <Contacts />
      <NoSignal />
      <Chrome />
      <Tetris />
    </div>
  )
}