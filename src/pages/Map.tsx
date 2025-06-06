import { useState } from "react";

function getLocation(callback: PositionCallback) {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(callback)
  } else {
    console.error("Geolocation is not available.")
  }
}

function Map() {
  const [location, setLocation] = useState([0, 0]);

  getLocation((position) => {
    setLocation([position.coords.latitude, position.coords.longitude])
  })

  return (
    <>
      <div>{location[0]}, {location[1]}</div>
    </>
  );
}

export default Map;
