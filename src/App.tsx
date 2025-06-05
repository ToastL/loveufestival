import { BrowserRouter as Router, Routes, Route } from "react-router"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Map from "./pages/Map"
import Lineup from "./pages/Lineup"

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/lineup" element={<Lineup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
