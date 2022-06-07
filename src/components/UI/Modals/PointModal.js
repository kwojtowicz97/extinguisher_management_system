import { useContext } from "react";
import { appContext } from "../../../context/store/appContext";
import { removeMarker } from "../../../context/actions/markers";
import { hideModal } from "../../../context/actions/ui";

export const PointModal = (props) => {
  const { marker } = props;
  const { id } = marker;
  const appCtx = useContext(appContext);
  const { markersDispatch, modalDispatch, extinguishersState } = appCtx;
  const removeHandeler = () => {
    markersDispatch(removeMarker(id));
    modalDispatch(hideModal());
  };
  const assignedExtinguisher = extinguishersState.find(
    (ex) => ex.id === marker.extinguisher
  );

  return (
    <div>
      <p>{id}</p>
      <p>{assignedExtinguisher.id}</p>
      <button onClick={removeHandeler}>Delete Point</button>
    </div>
  );
};

