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
import VoiceInput from "./components/mic.jsx";

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
        <div className="fixed bottom-0 left-0 right-10 p-4 container mx-auto " style={{zIndex:999}}>

        <VoiceInput/>
        </div>
    </>
  )
}

export default App
