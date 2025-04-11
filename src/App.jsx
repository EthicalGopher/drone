import Drone from "./components/drone"
import Nav from "./components/nav"
import Usecase from "./components/usecase"
import './App.css'
import Mobilefeature from "./components/mobilefeatures"
import Pricing from "./components/pricing"
import Maintainance from "./components/maintainance"
import { ParallaxProvider } from "react-scroll-parallax"

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
    </ParallaxProvider>
    </>
  )
}

export default App
