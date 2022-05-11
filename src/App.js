import "./App.css";

import { useContext } from "react";
import { appContext } from "./context/store/appContext";

import { Hamburger, Div100vh } from "./components/UI";
import { Map } from "./components/Map/Map";
import { Controls, ControlsSection, Modal } from "./components/Controls/";
import { showModalNewPoint, showModalNewExtinguisher } from "./context/actions/ui";


function App() {
  const appCtx = useContext(appContext);
  const {modalState, modalDispatch} = appCtx
  const { isModal } = modalState;

  return (
    <Div100vh className="app-container">
      <Hamburger />
      <Map />
      <Controls>
        <ControlsSection title={"Warnings"}></ControlsSection>
        <ControlsSection title={"Dangers"}></ControlsSection>
        <ControlsSection
          title={"Points"}
          button={{
            btnTitle: "Add new Point",
            btnOnClick: () => modalDispatch(showModalNewPoint()),
          }}
        ></ControlsSection>
        <ControlsSection
          title={"Extingushers"}
          button={{
            btnTitle: "Add new Extinguisher",
            btnOnClick: () => modalDispatch(showModalNewExtinguisher()),
          }}
        ></ControlsSection>
      </Controls>
      {isModal && <Modal />}
    </Div100vh>
  );
}

export default App;
