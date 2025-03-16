import HomePage from "./Pages/HomePage"
import NavbarComponent from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Routes, Route } from "react-router-dom";
import Partners from "./Pages/Partners";

function App() {

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
