import Footer from './components/Footer'
import Gallery from './components/Gallery'
import AnimatedCursor from 'react-animated-cursor'

function App() {

  return (
    <>
      <AnimatedCursor
        color='150, 121, 105'
        outerSize={32}
        outerScale={2}
      />
      <header>
        <div className='mocssa-title'>
          <h1>
            Museum of CSS Art
          </h1>
          <img className='mocssa-logo' src='/svg/landmark.svg' alt='museum logo' height={68} width={68} />
          <p className='mocssa-note'>note: use the latest version of Chrome for the best experience!</p>
        </div>
      </header>

      <main>
        <Gallery />
      </main>

      <Footer />
    </>
  )
}

export default App
