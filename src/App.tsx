import HomePage from "./Pages/HomePage"
import NavbarComponent from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
