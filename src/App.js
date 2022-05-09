import "./App.css";
import { useState } from "react";
import { useHamburger, useMarker } from "./hooks";

import { Hamburger } from "./UI/Hamburger";
import { Map } from "./Map/Map";
import { Controls } from "./Controls/Controls";

function App() {
  const [isHamburgerActive, toggleHamburgerHandler] = useHamburger(false)
  const [markers, addMarkerHandler] = useMarker()



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
