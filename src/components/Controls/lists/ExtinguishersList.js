import { useContext, useState, useEffect } from "react";
import { appContext } from "../../../context/store/appContext";
import { useSearch } from "../../../customHooks";

export const ExtinguishersList = (props) => {
  const { filteredAgent, onClick, choosenExtiguisher, isNull } = props;
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
      <input
        placeholder="search"
        type="text"
        value={searchPattern}
        onChange={searchInputHandler}
      ></input>
      <br />
      <label style={{ padding: 2 + "px" + 0 + "px"}} htmlFor="sortOptions">
        Sort by{" "}
      </label>
      <select value={sortByState} onChange={sortByHandler} id="sortOptions">
        <option value="default">Default</option>
        <option value="producer">Producer</option>
        <option value="type">Type</option>
        <option value="productionDate">Production Date</option>
        <option value="inspectionDate">Inspection Date</option>
        <option value="overhaulDate">Overhaul Date</option>
      </select>
      <ul>
        {isNull && (
          <li
            className="list-item"
            onClick={() => (onClick ? clickHandler(null) : null)}
          >
            <b>No extinguisher</b>
          </li>
        )}
        {sortedExtinguishers.map((extinguisher) => (
          <li
            className={`list-item ${
              extinguisher.agent === filteredAgent ? "matching" : ""
            } ${choosenExtiguisher === extinguisher.id ? "selected" : ""}`}
            onClick={() => (onClick ? clickHandler(extinguisher.id) : null)}
            key={extinguisher.id}
          >
            <b>{`${extinguisher.producer} ${extinguisher.type}`}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
