import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import NavbarComponent from "./Components/Navbar";
import Course from "./Pages/Course";
import HomePage from "./Pages/HomePage";
import Partners from "./Pages/Partners";
import Process from "./Pages/Process";

function App() {
	return (
		<>
			<NavbarComponent />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/course" element={<Course />} />
				<Route path="/partners" element={<Partners />} />
				<Route path="/process" element={<Process />} />
			</Routes>
			{/* <Footer /> */}
		</>
	);
}

export default App;
