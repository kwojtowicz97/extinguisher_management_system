import { useContext } from "react";
import { appContext } from "../../../context/store/appContext";

export const DangersList = () => {
  const appCtx = useContext(appContext);
  const { markersState, extinguishersState } = appCtx;

  const extinguishersInspectionOverdue = extinguishersState.filter((ex) => {
    const inspectionDate = new Date(ex.inspectionDate);
    const year = inspectionDate.getFullYear();
    const month = inspectionDate.getMonth();
    const day = inspectionDate.getDate();
    const nextInspection = new Date(year + 1, month, day);
    const isIncomingInspection = nextInspection - new Date() < 0;
    return isIncomingInspection;
  });

  const pointsWithNoExtinguisher = markersState.filter(
    (point) => point.extinguisher === null
  );

  return (
    <div>
      <ul>
        <li>Inspection Overdue</li>
        {extinguishersInspectionOverdue.map((e) => (
          <li key={`io-${e.id}`}>{e.id}</li>
        ))}
      </ul>
      <ul>
        <li>No fire extinguisher</li>
        {pointsWithNoExtinguisher.map((e) => (
          <li key={`ne-${e.id}`}>{e.id}</li>
        ))}
      </ul>
    </div>
  );
};
