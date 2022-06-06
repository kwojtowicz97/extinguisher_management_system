import { useContext, useState, useEffect } from "react";
import { appContext } from "../../../context/store/appContext";
import { useSearch } from "../../../customHooks";

export const PointsList = (props) => {
  const { filteredAgent, onClick, choosenExtiguisher } = props;
  const appCtx = useContext(appContext);
  const { markersState, extinguisherState } = appCtx;
  const [sortedPoints, setConfig] = useSearch(markersState);
  const [sortByState, setSortByState] = useState("default");
  const [sortDir, setSortDir] = useState("desc");
  const [searchPattern, setSearchPattern] = useState("");

  useEffect(() => {
    setConfig({
      list: markersState,
      sortBy: sortByState,
      sortDesc: sortDir,
      searchPattern: searchPattern,
    });
  }, [markersState, sortByState, searchPattern, sortDir, setConfig]);

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
    <div>
      <input
        placeholder="search"
        type="text"
        value={searchPattern}
        onChange={searchInputHandler}
      ></input>
      <br />
      <label htmlFor="sortOptions">Sort by</label>
      <select value={sortByState} onChange={sortByHandler} id="sortOptions">
        <option value="default">Default</option>
        <option value="agent">Agent</option>
        <option value="extinguisher">Extinguisher</option>
      </select>
      <ul>
        {sortedPoints.map((point) => {
          const assignedExtinguisher = 0;
          return (
            <li
              className={`${point.agent === filteredAgent ? "matching" : ""} ${
                choosenExtiguisher === point.id ? "selected" : ""
              }`}
              onClick={() => (onClick ? clickHandler(point.id) : null)}
              key={point.id}
            >{`${point.number} ${point.agent} ${point.extinguisher}`}</li>
          );
        })}
      </ul>
    </div>
  );
};
