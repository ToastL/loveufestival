import { Link } from "react-router"

import House from "./icons/House"
import MapLocationDot from "./icons/MapLocationDot"
import Calendar from "./icons/Calendar"
import CircleInfo from "./icons/CircleInfo"

function Navbar() {
  return (
    <>
      <nav className="fixed bottom-0 w-full h-20 px-10 pb- bg-white border-t border-neutral-300 flex justify-between z-10">
        <Link to="/" className="flex content-center pb-6 w-7 h-full fill-neutral-300"><House /></Link>
        <Link to="/" className="flex content-center pb-6 w-7 h-full fill-neutral-300"><CircleInfo /></Link>
        <Link to="/lineup" className="flex content-center pb-6 w-7 h-full fill-neutral-300"><Calendar /></Link>
        <Link to="/map" className="flex content-center pb-6 w-7 h-full fill-neutral-300"><MapLocationDot /></Link>
      </nav>
    </>
  )
}

export default Navbar
