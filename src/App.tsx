import Navbar from './components/navbar'
import Hero from './components/hero'
import AboutSection from './components/about'
import CardList from './components/service'
import PartnersComponent from './components/partners'
import ContactComponent from './components/contat'
import Footer from './components/footer'

const App = () => {
  return (
   <>
    <Navbar/>
    <Hero/>
    <AboutSection/>
    <CardList/>
    <PartnersComponent/>
    <ContactComponent/>
    <Footer/>
   </>
  )
}

export default App