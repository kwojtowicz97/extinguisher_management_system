import "./App.css";

import { useContext } from "react";
import { appContext } from "./store/appContext";

import { Hamburger } from "./UI/Hamburger";
import { Map } from "./Map/Map";
import { Controls } from "./Controls/Controls";

function App() {
  const { markersState, hamburgerState } = useContext(appContext);
 
  return (
    <div className="app-container">
      <Hamburger />
      <Map className="map-container" markers={markersState} />
      <Controls isHamburgerActive={hamburgerState} />
    </div>
  );
}

export default App;
