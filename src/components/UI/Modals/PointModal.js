import { useContext } from "react";
import { appContext } from "../../../context/store/appContext";
import {
  changeExtinguisher,
  removeMarker,
} from "../../../context/actions/markers";
import { hideModal } from "../../../context/actions/ui";
import { useState } from "react";
import { ExtinguishersList } from "../../Controls/lists";
import { ExtinguisherModal } from "./ExtinguisherModal";

export const PointModal = (props) => {
  const { marker } = props;
  const { id, agent, name } = marker;
  const appCtx = useContext(appContext);
  const { markersDispatch, modalDispatch, extinguishersState } = appCtx;
  const [isMakeInspectionOverhaul, setMakeInspectionOverhaul] = useState(false)
  const [isChangingExtinguisher, setIsChangingExtinguisher] = useState(false);
  
  const removeHandeler = () => {
    markersDispatch(removeMarker(id));
    modalDispatch(hideModal());
  };
  const assignedExtinguisher = extinguishersState.find(
    (ex) => ex.id === marker.extinguisher
  );

  const showExtinguisherList = () => {
    setIsChangingExtinguisher((state) => !state);
    setMakeInspectionOverhaul(false)
  };

  const showExtinguisherCard = () => {
    setMakeInspectionOverhaul(state => !state)
    setIsChangingExtinguisher(false)
  }


  const changeExtinguisherHandler = (extinguisher) => {
    markersDispatch(changeExtinguisher(marker, extinguisher));
    setIsChangingExtinguisher(false);
  };

  return (
    <div>
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
          : "No Extinguisher"}
      </p>

      <button onClick={showExtinguisherList}>Change/Assign Extinguisher</button>
      {assignedExtinguisher && (
        <button onClick={showExtinguisherCard}>Make Inspection/Overhaul</button>
      )}

      <button onClick={removeHandeler}>Delete Point</button>
      {isChangingExtinguisher && (
        <ExtinguishersList
          isNull={true}
          filteredAgent={agent}
          onClick={changeExtinguisherHandler}
        />
      )}
      {isMakeInspectionOverhaul && (
        <ExtinguisherModal extinguisherId={assignedExtinguisher.id} />
      )}
    </div>
  );
};
