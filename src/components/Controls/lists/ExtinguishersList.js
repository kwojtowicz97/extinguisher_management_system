import { useContext, useState, useEffect } from "react";
import { appContext } from "../../../context/store/appContext";
import { useSearch } from "../../../customHooks";

export const ExtinguishersList = () => {
  const appCtx = useContext(appContext);
  const { extinguishersState } = appCtx;
  const [sortedExtinguishers, setConfig] = useSearch(extinguishersState);
  const [sortByState, setSortByState] = useState("default");
  const [sortDir, setSortDir] = useState("desc");
  const [searchPattern, setSearchPattern] = useState("");

  useEffect(() => {
    setConfig({
      list: extinguishersState,
      sortBy: sortByState,
      sortDesc: sortDir,
      searchPattern: searchPattern,
    });
  }, [extinguishersState, sortByState, searchPattern, sortDir, setConfig]);

  const searchInputHandler = (e) => {
    setSearchPattern(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={searchPattern}
        onChange={searchInputHandler}
      ></input>
      <br />
      <label htmlFor="sortOptions">Sort by</label>
      <select defaultValue="default" id="sortOptions">
        <option value="default">Default</option>
        <option value="producer">Producer</option>
        <option value="type">Type</option>
        <option value="productionDate">Production Date</option>
        <option value="inspectionDate">Inspection Date</option>
        <option value="overhaulDate">Overhaul Date</option>
      </select>
      <ul>
        {sortedExtinguishers.map((extinguisher) => (
          <li
            key={extinguisher.id}
          >{`${extinguisher.producer} ${extinguisher.type}`}</li>
        ))}
      </ul>
    </div>
  );
};
