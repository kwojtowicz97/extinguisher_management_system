import { useContext } from "react";
import { appContext } from "../../../context/store/appContext";
import { showExtinguisherModal, showPointModal } from "../../../context/actions/ui";

export const WarningsList = () => {
  const appCtx = useContext(appContext);
  const { markersState, extinguishersState, modalDispatch } = appCtx;

  const extinguishersToInspect = extinguishersState.filter((ex) => {
    const inspectionDate = new Date(ex.inspectionDate);
    const year = inspectionDate.getFullYear();
    const month = inspectionDate.getMonth();
    const day = inspectionDate.getDate();
    const nextInspection = new Date(year + 1, month, day);
    const isIncomingInspection =
      nextInspection - new Date() < 604800000 &&
      nextInspection - new Date() > 0;
    return isIncomingInspection;
  });

  const pointsWithExtinguisher = [...markersState].filter(
    (point) => point.extinguisher !== null
  );

  const pointsWithWrongAgents = pointsWithExtinguisher.filter((point) => {
    const assignedExtinguisherToPoint = extinguishersState.find(
      (ex) => ex.id === point.extinguisher
    );
    return assignedExtinguisherToPoint.agent !== point.agent;
  });

    const extinguishersToInspectClickHandler = (extinguiserID) => {
      modalDispatch(showExtinguisherModal(extinguiserID));
    };

    const pointsWithWrongAgentsClickHandler = (pointID) => {
      modalDispatch(showPointModal(pointID));
    };

  return (
    <div>
      <h2 className="subtitle">Incoming inspection</h2>
      <ul>
        {extinguishersToInspect.map((e) => (
          <li
            onClick={() => {
              extinguishersToInspectClickHandler(e.id);
            }}
            className="list-item"
            key={`ii-${e.id}`}
          >
            {e.id}
          </li>
        ))}
      </ul>
      <h2 className="subtitle">Wrong extinguishing agent</h2>
      <ul>
        {pointsWithWrongAgents.map((e) => (
          <li
            onClick={() => pointsWithWrongAgentsClickHandler(e)}
            className="list-item"
            key={`wa-${e.id}`}
          >
            <b>{e.name}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
