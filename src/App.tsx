import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {

  return (
    <>
      <header>
        <div className='mocssa-title'>
          <h1>
            Museum of CSS Art
          </h1>
          <img className='mocssa-logo' src='/svg/landmark.svg' alt='museum logo' height={68} width={68} />
          <p className='mocssa-note'>Note: use the latest version of Chrome for the best experience!</p>
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
