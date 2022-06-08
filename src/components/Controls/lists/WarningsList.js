import { useContext } from "react";
import { appContext } from "../../../context/store/appContext";

export const WarningsList = () => {
  const appCtx = useContext(appContext);
  const { markersState, extinguishersState } = appCtx;

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

  return (
    <div>
      <ul>
        <li>Incoming inspection</li>
        {extinguishersToInspect.map((e) => (
          <li key={`ii-${e.id}`}>{e.id}</li>
        ))}
      </ul>
      <ul>
        <li>Wrong extinguishing agent</li>
        {pointsWithWrongAgents.map((e) => (
          <li key={`wa-${e.id}`}>{e.id}</li>
        ))}
      </ul>
    </div>
  );
};
