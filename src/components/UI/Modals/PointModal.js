import { useContext } from "react";
import { appContext } from "../../../context/store/appContext";
import {
  changeExtinguisher,
  removeMarker,
} from "../../../context/actions/markers";
import {setIsUsed} from "../../../context/actions/extinguisher"
import { hideModal } from "../../../context/actions/ui";
import { useState } from "react";
import { ExtinguishersList } from "../../Controls/lists";
import { ExtinguisherModal } from "./ExtinguisherModal";
import { useWarningsAndDangers } from "../../../customHooks";

export const PointModal = (props) => {
  const { marker } = props;
  const { id, agent, name } = marker;
  const appCtx = useContext(appContext);
  const {
    markersDispatch,
    modalDispatch,
    extinguishersDispatch,
    extinguishersState,
  } = appCtx;
  const [isMakeInspectionOverhaul, setMakeInspectionOverhaul] = useState(false);
  const [isChangingExtinguisher, setIsChangingExtinguisher] = useState(false);

  const {
    dangers: { extinguishersInspectionOverdue, pointsWithNoExtinguisher },
    warnings: { extinguishersToInspect, pointsWithWrongAgents },
  } = useWarningsAndDangers();

  let noExtinguisher = false;
  let wrongAgent = false;

  if (pointsWithNoExtinguisher.some((ex) => ex.id === id)) {
    noExtinguisher = true;
  }

  if (pointsWithWrongAgents.some((ex) => ex.id === id)) {
    wrongAgent = true;
  }

  const removeHandeler = () => {
    markersDispatch(removeMarker(id));
    extinguishersDispatch(setIsUsed())
    modalDispatch(hideModal());
  };
  const assignedExtinguisher = extinguishersState.find(
    (ex) => ex.id === marker.extinguisher
  );

  const showExtinguisherList = () => {
    setIsChangingExtinguisher((state) => !state);
    setMakeInspectionOverhaul(false);
  };

  const showExtinguisherCard = () => {
    setMakeInspectionOverhaul((state) => !state);
    setIsChangingExtinguisher(false);
  };

  const changeExtinguisherHandler = (extinguisher) => {
    markersDispatch(changeExtinguisher(marker, extinguisher));
    extinguishersDispatch(setIsUsed(extinguisher));
    setIsChangingExtinguisher(false);
  };

  return (
    <div className="modal-content">
      <p className="danger-info">
        {noExtinguisher
          ? "No extinguisher assigned"
          : wrongAgent
          ? "Wrong extinguishing agent"
          : ""}
      </p>
      <p>
        <b>Point name: </b>
        {name}
      </p>
      <p>
        <b>Default extinguishing agent: </b>
        {agent}
      </p>
      <p>
        <b>Assigned extinguiser: </b>
        {assignedExtinguisher
          ? `${assignedExtinguisher.producer} ${assignedExtinguisher.type}`
          : "No extinguisher"}
      </p>

      <div className="button-container">
        <button onClick={showExtinguisherList}>
          Change/Assign Extinguisher
        </button>
        {assignedExtinguisher && (
          <button onClick={showExtinguisherCard}>
            Make Inspection/Overhaul
          </button>
        )}

        <button onClick={removeHandeler}>Delete Point</button>
      </div>
      <div className="inspection-container">
        {isChangingExtinguisher && (
          <ExtinguishersList
            isNull={true}
            filteredAgent={agent}
            onClick={changeExtinguisherHandler}
            filterUsed={true}
          />
        )}
        {isMakeInspectionOverhaul && (
          <ExtinguisherModal extinguisherId={assignedExtinguisher.id} />
        )}
      </div>
    </div>
  );
};
