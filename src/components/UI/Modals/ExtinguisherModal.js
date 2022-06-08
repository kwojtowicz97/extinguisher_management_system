import { useContext } from "react";
import { appContext } from "../../../context/store/appContext";

export const ExtinguisherModal = (props) => {
  const appCtx = useContext(appContext);
  const {extinguishersState} = appCtx
  const { extinguisherId } = props;

  const extinguiser = extinguishersState.find(ex => ex.id === extinguisherId)
  const { producer, type, agent } = extinguiser;
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
    </div>
  );
};
