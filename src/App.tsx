import HomePage from "./Pages/HomePage"
import NavbarComponent from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Routes, Route } from "react-router-dom";
import Partners from "./Pages/Partners";
import Process from "./Pages/Process";

function App() {

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/process" element={<Process />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
