import { useContext, useState } from "react";
import { appContext } from "../../../context/store/appContext";

export const ExtinguishersList = () => {
  const appCtx = useContext(appContext);
  const [sortByState, setSortByState] = useState("default")

  const { extinguishersState } = appCtx;

  return (
    <div>
      <label for="sortOptions">Sort by</label>
      <select id="sortOptions">
        <option value="default" selected>Default</option>
        <option value="producer">Producer</option>
        <option value="type">Type</option>
        <option value="productionDate">Production Date</option>
        <option value="inspectionDate">Inspection Date</option>
        <option value="overhaulDate">Overhaul Date</option>
      </select>
      <ul>
        {extinguishersState.map((extinguisher) => (
          <li
            key={extinguisher.id}
          >{`${extinguisher.producer} ${extinguisher.type}`}</li>
        ))}
      </ul>
    </div>
  );
};
