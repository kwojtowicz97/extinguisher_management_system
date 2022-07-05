import "./App.css";

import { useContext } from "react";
import { appContext } from "./context/store/appContext";

import { Hamburger, Div100vh } from "./components/UI";
import { Map } from "./components/Map/Map";
import { Controls, ControlsSection, Modal } from "./components/Controls/";
import {
  showModalNewPoint,
  showModalNewExtinguisher,
  toggleHamburer,
  showExtinguisherModal,
} from "./context/actions/ui";
import {
  ExtinguishersList,
  PointsList,
  WarningsList,
  DangersList,
} from "./components/Controls/lists";

function App() {
  const appCtx = useContext(appContext);
  const { modalState, modalDispatch, hamburgerDispatch } = appCtx;
  const { isModal } = modalState;

  const addNewPointBtnHandler = () => {
    modalDispatch(showModalNewPoint());
    hamburgerDispatch(toggleHamburer());
  };

  const showExtinguisherModalHandler = (extinguiserId) => {
    modalDispatch(showExtinguisherModal(extinguiserId))
  }

  return (
    <Div100vh className="app-container">
      <Hamburger />
      <Map />
      <Controls>
        <ControlsSection title={"Dangers"} icon={"!"}>
          <DangersList />
        </ControlsSection>
        <ControlsSection title={"Warnings"}>
          <WarningsList />
        </ControlsSection>

        <ControlsSection
          title={"Points"}
          button={{
            btnTitle: "+",
            btnOnClick: addNewPointBtnHandler,
          }}
        >
          <PointsList filteredAgent="Any" shouldShowOnlyUnused={false} />
        </ControlsSection>
        <ControlsSection
          title={"Extingushers"}
          button={{
            btnTitle: "+",
            btnOnClick: () => modalDispatch(showModalNewExtinguisher()),
          }}
        >
          <ExtinguishersList filteredAgent="Any" shouldShowOnlyUnused={false} onClick={showExtinguisherModalHandler}/>
        </ControlsSection>
      </Controls>
      {isModal && <Modal />}
    </Div100vh>
  );
}

export default App;
