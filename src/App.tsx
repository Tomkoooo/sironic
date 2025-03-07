import Navbar from './components/navbar'
import Hero from './components/hero'
import AboutSection from './components/about'

const App = () => {
  return (
   <div className='h-screen'>
    <Navbar/>
    <Hero/>
    <AboutSection/>
   </div>
  )
}

export default App