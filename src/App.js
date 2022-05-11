import "./App.css";

import { Hamburger, Div100vh } from "./components/UI";
import { Map } from "./components/Map/Map";
import {
  Controls,
  ControlsSectionWithDangersList,
  ControlsSectionWithExtingushersList,
  ControlsSectionWithPointsList,
  ControlsSectionWithWarningsList,
  Modal,
} from "./components/Controls/";

function App() {
  return (
    <Div100vh className="app-container">
      <Hamburger />
      <Map />
      <Controls>
        <Modal />
        <ControlsSectionWithWarningsList />
        <ControlsSectionWithDangersList />
        <ControlsSectionWithPointsList />
        <ControlsSectionWithExtingushersList />
      </Controls>
    </Div100vh>
  );
}

export default App;
