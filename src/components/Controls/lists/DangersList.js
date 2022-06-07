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
  return (
    <li>
      {extinguishersInspectionOverdue.map((e) => (
        <ul>{e.id}</ul>
      ))}
    </li>
  );
};
