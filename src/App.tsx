import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {

  return (
    <>
      <header>
        <img className='mocssa-title' src='/mocssa-logo.png' />
      </header>

      <main>
        <Gallery />
      </main>

      <Footer />
    </>
  )
}

export default App
