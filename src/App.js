import "./App.css";

import { useContext } from "react";
import { appContext } from "./context/store/appContext";

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
  const appCtx = useContext(appContext)
  const {isModal} = appCtx.modalState

  return (
    <Div100vh className="app-container">
      <Hamburger />
      <Map />
      <Controls>
        <ControlsSectionWithWarningsList />
        <ControlsSectionWithDangersList />
        <ControlsSectionWithPointsList />
        <ControlsSectionWithExtingushersList />
      </Controls>
      {isModal && <Modal />}
    </Div100vh>
  );
}

export default App;
