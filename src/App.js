import "./App.css";

import { Hamburger } from "./UI/Hamburger";
import { Map } from "./Map/Map";
import { Controls } from "./Controls/Controls";

function App() {
 
  return (
    <div className="app-container">
      <Hamburger />
      <Map/>
      <Controls />
    </div>
  );
}

export default App;
