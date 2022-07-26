import { useContext } from "react";
import { appContext } from "../../../context/store/appContext";
import { useWarningsAndDangers } from "../../../customHooks";
import { showExtinguisherModal, showPointModal } from "../../../context/actions/ui";

export const DangersList = () => {
  const appCtx = useContext(appContext);
  const { markersState, extinguishersState, modalDispatch } = appCtx;
  const warningsAndDangers = useWarningsAndDangers()
  const {dangers: { extinguishersInspectionOverdue, pointsWithNoExtinguisher }} = warningsAndDangers

  const extinguishersInspectionOverdueClickHandler = (extinguiserID) => {
    modalDispatch(showExtinguisherModal(extinguiserID));
  };

  const pointsWithNoExtinguisherClickHandler = (pointID) => {
    modalDispatch(showPointModal(pointID))
  }

  return (
    <div>
      {extinguishersInspectionOverdue.length > 0 && (
        <>
          <h2 className="subtitle">Inspection Overdue</h2>
          <ul>
            {extinguishersInspectionOverdue.map((e) => (
              <li
                onClick={() => extinguishersInspectionOverdueClickHandler(e.id)}
                className="list-item"
                key={`io-${e.id}`}
              >
                <b>{`${e.producer} ${e.type}`}</b>
                <br />
                Last inspection: <b>{e.inspectionDate}</b>
              </li>
            ))}
          </ul>
        </>
      )}
      {pointsWithNoExtinguisher.length > 0 && <>
        <h2 className="subtitle">No fire extinguisher</h2>
        <ul>
          {pointsWithNoExtinguisher.map((e) => (
            <li
              onClick={() => pointsWithNoExtinguisherClickHandler(e)}
              className="list-item"
              key={`ne-${e.id}`}
            >
              <b>{e.name}</b>
            </li>
          ))}
        </ul>
      </>}
    </div>
  );
};
