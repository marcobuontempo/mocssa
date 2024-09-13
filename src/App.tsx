import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {

  return (
    <>
      <header>
        <h1 className='mocssa-title'>
          Museum of CSS Art
          <img className='mocssa-logo' src='/svg/landmark.svg' alt='museum logo' />
        </h1>

      </header>

      <main>
        <Gallery />
      </main>

      <Footer />
    </>
  )
}

export default App
