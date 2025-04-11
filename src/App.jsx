import Drone from "./components/drone"
import Nav from "./components/nav"
import Usecase from "./components/usecase"
import './App.css'
import Mobilefeature from "./components/mobilefeatures"
import Pricing from "./components/pricing"
import Maintainance from "./components/maintainance"

function App() {

  return (
    <>
    <Nav/>
     <Drone/>
     <Mobilefeature/>
     <Usecase/>
     <Pricing/>
     <Maintainance/>
    </>
  )
}

export default App
