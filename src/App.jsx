import Drone from "./components/drone"
import Nav from "./components/nav"
import Usecase from "./components/usecase"
import './App.css'
import Mobilefeature from "./components/mobilefeatures"
import Pricing from "./components/pricing"
import Maintainance from "./components/maintainance"
import { ParallaxProvider } from "react-scroll-parallax"
import Contact from "./components/contact"
import Footer from "./components/footer"

function App() {

  return (
    <>
    <ParallaxProvider>

    <Nav/>
     <Drone/>
     <Mobilefeature/>
     <Usecase/>
     <Pricing/>
     <Maintainance/>
     <Contact/>
     <Footer/>
    </ParallaxProvider>
    </>
  )
}

export default App
