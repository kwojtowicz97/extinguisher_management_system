import { useContext, useState } from "react";
import { appContext } from "../../../context/store/appContext";
import { InspectionCard } from "./InspectionCard";

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
    setIsInspetion(false);
  };

  const extinguisher = extinguishersState.find((ex) => ex.id === extinguisherId);
  const { producer, type, agent } = extinguisher;
  return (
    <div>
      <ul>
        <li>
          <strong>Producer: </strong>
          {producer}
        </li>
        <li>
          <strong>Type: </strong>
          {type}
        </li>
        <li>
          <strong>Extinguishing agent: </strong>
          {agent}
        </li>
      </ul>
      <button onClick={showInspectionCard}>Inspection</button>
      <button onClick={showOverhaulCard}>Overhaul</button>
      {(isInspetion || isOverhaul) && (
        <InspectionCard
          extinguisher={extinguisher}
          type={isInspetion ? "inspection" : "overhaul"}
        />
      )}
    </div>
  );
};
