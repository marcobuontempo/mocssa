import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {

  return (
    <>
      <header>
        <img className='mocssa-title' src='/logos/mocssa-logo.png' alt='Museum of CSS Art' />
      </header>

      <main>
        <Gallery />
      </main>

      <Footer />
    </>
  )
}

export default App
