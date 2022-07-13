import { useContext, useState } from "react";
import { appContext } from "../../../context/store/appContext";
import { InspectionCard } from "./InspectionCard";
import { useWarningsAndDangers } from "../../../customHooks";

export const ExtinguisherModal = (props) => {
  const appCtx = useContext(appContext);
  const { extinguishersState } = appCtx;
  const { extinguisherId } = props;
  const [isInspetion, setIsInspetion] = useState(false);
  const [isOverhaul, setIsOverhaul] = useState(false);
  const showInspectionCard = () => {
    setIsInspetion((state) => !state);
    setIsOverhaul(false);
  };

  const showOverhaulCard = () => {
    setIsOverhaul((state) => !state);
    setIsInspetion();
  };


  const {
    dangers: { extinguishersInspectionOverdue, pointsWithNoExtinguisher },
    warnings: { extinguishersToInspect, pointsWithWrongAgents },
  } = useWarningsAndDangers();

  const extinguisher = extinguishersState.find(
    (ex) => ex.id === extinguisherId
  );

  const { producer, type, agent, id } = extinguisher;
  let toInspect = false;
  let inspectionOverdue = false;

  if (extinguishersToInspect.some((ex) => ex.id === id)) {
    toInspect = true;
  }

  if (extinguishersInspectionOverdue.some((ex) => ex.id === id)) {
    inspectionOverdue = true;
  }
  console.log(inspectionOverdue, toInspect);
  return (
    <div className="modal-content">
      <p className="danger-info">
        {inspectionOverdue
          ? "Inspection Overdue"
          : toInspect
          ? "Incoming inspection"
          : ""}
      </p>
      <p>
        <strong>Producer: </strong>
        {producer}
      </p>
      <p>
        <strong>Type: </strong>
        {type}
      </p>
      <p>
        <strong>Extinguishing agent: </strong>
        {agent}
      </p>
      <div className="button-container">
        <button onClick={showInspectionCard}>Inspection</button>
        <button onClick={showOverhaulCard}>Overhaul</button>
      </div>
      {(isInspetion || isOverhaul) && (
        <InspectionCard
          extinguisher={extinguisher}
          type={isInspetion ? "inspection" : "overhaul"}
        />
      )}
    </div>
  );
};
