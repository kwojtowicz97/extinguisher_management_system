import { useContext } from "react";
import { appContext } from "../../../context/store/appContext";
import {
  changeExtinguisher,
  removeMarker,
} from "../../../context/actions/markers";
import { hideModal } from "../../../context/actions/ui";
import { useState } from "react";
import { ExtinguishersList } from "../../Controls/lists";

export const PointModal = (props) => {
  const { marker } = props;
  const { id, agent } = marker;
  const appCtx = useContext(appContext);
  const { markersDispatch, modalDispatch, extinguishersState } = appCtx;
  const [isChangingExtinguisher, setIsChangingExtinguisher] = useState(false);
  const removeHandeler = () => {
    markersDispatch(removeMarker(id));
    modalDispatch(hideModal());
  };
  const assignedExtinguisher = extinguishersState.find(
    (ex) => ex.id === marker.extinguisher
  );

  const showExtinguisherList = () => {
    setIsChangingExtinguisher(true);
  };

  const changeExtinguisherHandler = (extinguisher) => {
    markersDispatch(changeExtinguisher(marker, extinguisher));
    setIsChangingExtinguisher(false);
  };

  return (
    <div>
      <p>{id}</p>
      <p>{assignedExtinguisher.id}</p>
      {!isChangingExtinguisher && (
        <button onClick={showExtinguisherList}>
          Change/Assign Extinguisher
        </button>
      )}
      {isChangingExtinguisher && (
        <ExtinguishersList
          filteredAgent={agent}
          onClick={changeExtinguisherHandler}
        />
      )}
      <button onClick={removeHandeler}>Delete Point</button>
    </div>
  );
};
