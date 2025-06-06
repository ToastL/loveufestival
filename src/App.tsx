import { BrowserRouter as Router, Routes, Route } from "react-router"

import Navbar from "./components/Navbar"

import HomePage from "./pages/Home"
import MapPage from "./pages/Map"
import LineupPage from "./pages/Lineup"
import InfoPage from "./pages/Info"

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <main className="mb-22">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/lineup" element={<LineupPage />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
