import { useContext, useState, useEffect } from "react";
import { appContext } from "../../../context/store/appContext";
import { useSearch } from "../../../customHooks";

export const ExtinguishersList = (props) => {
  const { filteredAgent, onClick, choosenExtiguisher, isNull, filterUsed } = props;
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
      keys: ["producer", "type", "agent"],
    });
  }, [extinguishersState, sortByState, searchPattern, sortDir, setConfig]);

  const searchInputHandler = (e) => {
    setSearchPattern(e.target.value);
  };

  const sortByHandler = (e) => {
    setSortByState(e.target.value);
  };
  const clickHandler = (id) => {
    onClick(id);
  };

  return (
    <div className="extinguishers-list">
      <div className="search-container">
        <input
          placeholder="Search for producer/type/agent"
          type="text"
          value={searchPattern}
          onChange={searchInputHandler}
        ></input>
        {/* <select value={sortByState} onChange={sortByHandler} id="sortOptions">
          <option value="default">Default</option>
          <option value="producer">Producer</option>
          <option value="type">Type</option>
          <option value="productionDate">Production Date</option>
          <option value="inspectionDate">Inspection Date</option>
          <option value="overhaulDate">Overhaul Date</option>
        </select> */}
      </div>
      <ul>
        {isNull && (
          <li
            className="list-item"
            onClick={() => (onClick ? clickHandler(null) : null)}
          >
            <b>No extinguisher</b>
          </li>
        )}
        {sortedExtinguishers
          .filter((ex) => (filterUsed ? !ex.isUsed : true))
          .map((extinguisher) => (
            <li
              className={`list-item ${
                extinguisher.agent === filteredAgent ? "matching" : ""
              } ${choosenExtiguisher === extinguisher.id ? "selected" : ""}`}
              onClick={() => (onClick ? clickHandler(extinguisher.id) : null)}
              key={extinguisher.id}
            >
              <b>{`${extinguisher.producer} ${extinguisher.type} (${extinguisher.agent}) - ${extinguisher.isUsed ? "ASSIGNED" : "UNASSIGNED"}`}</b>
            </li>
          ))}
      </ul>
    </div>
  );
};
