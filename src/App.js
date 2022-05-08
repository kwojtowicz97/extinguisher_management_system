import "./App.css";
import { useState } from "react";

import { Hamburger } from "./UI/Hamburger";
import { Map } from "./Map/Map";
import { Controls } from "./Controls/Controls";

function App() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const toggleHamburgerHandler = () => {
    setIsHamburgerActive((state) => !state);
  };

  const [markers, setMarkers] = useState([]);
  const addMarkerHandler = (e) => {
    console.log(e);
    setMarkers((prev) => [...prev, { lat: e.latlng.lat, lng: e.latlng.lng }]);
  };

  return (
    <div className="app-container">
      <Hamburger onClick={toggleHamburgerHandler} />
      <Map
        className="map-container"
        onAddMarker={addMarkerHandler}
        markers={markers}
      />
      <Controls isHamburgerActive={isHamburgerActive} />
    </div>
  );
}

export default App;
