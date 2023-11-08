import './App.css'
import Appointment from './Components/Appointment'
import { Routes, Route } from "react-router-dom"
import SignUp from './Pages/SignUp'
import DocterList from './Pages/DocterList'
import SIgnIn from './Pages/SIgnIn'
function App() {


  return (
    <>
     {/* <Appointment/> */}
     
     <Routes>

        <Route path="/" element={ <Appointment/> } />
        <Route path="/sign-up" element={ <SignUp/> } />
        <Route path="/sign-in" element={ <SIgnIn/> } />
        <Route path="/Docter-List" element={ <DocterList/> } />
      
      </Routes>
    </>
  )
}

export default App
