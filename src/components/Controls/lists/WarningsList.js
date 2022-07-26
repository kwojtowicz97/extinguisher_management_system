import { useContext } from "react";
import { useWarningsAndDangers } from "../../../customHooks";
import { appContext } from "../../../context/store/appContext";
import {
  showExtinguisherModal,
  showPointModal,
} from "../../../context/actions/ui";

export const WarningsList = () => {
  const appCtx = useContext(appContext);
  const { markersState, extinguishersState, modalDispatch } = appCtx;
  const warningsAndDangers = useWarningsAndDangers();
  const {
    warnings: { extinguishersToInspect, pointsWithWrongAgents },
  } = warningsAndDangers;
  console.log(warningsAndDangers);

  const extinguishersToInspectClickHandler = (extinguiserID) => {
    modalDispatch(showExtinguisherModal(extinguiserID));
  };

  const pointsWithWrongAgentsClickHandler = (pointID) => {
    modalDispatch(showPointModal(pointID));
  };

  return (
    <div>
      {extinguishersToInspect.length > 0 && (
        <>
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
        </>
      )}
      {pointsWithWrongAgents.length > 0 && <>
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
      </>}
    </div>
  );
};
