import { useContext, useState, useEffect } from "react";
import { appContext } from "../../../context/store/appContext";
import { useSearch } from "../../../customHooks";
import { showPointModal } from "../../../context/actions/ui";

export const PointsList = (props) => {
  const { filteredAgent, choosenExtiguisher } = props;
  const appCtx = useContext(appContext);
  const { markersState, modalDispatch } = appCtx;
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
      keys: ["name"],
    });
  }, [markersState, sortByState, searchPattern, sortDir, setConfig]);

  const searchInputHandler = (e) => {
    setSearchPattern(e.target.value);
  };

  const sortByHandler = (e) => {
    setSortByState(e.target.value);
  };
  const clickHandler = (id) => {
    modalDispatch(showPointModal(id));
  };

  return (
    <div>
      <input
        placeholder="search"
        type="text"
        value={searchPattern}
        onChange={searchInputHandler}
      ></input>
      <label htmlFor="sortOptions">Sort by</label>
      <select value={sortByState} onChange={sortByHandler} id="sortOptions">
        <option value="default">Default</option>
        <option value="name">Name</option>
        <option value="agent">Agent</option>
        <option value="extinguisher">Extinguisher</option>
      </select>
      <ul>
        {sortedPoints.map((point) => {
          return (
            <li
              className={`list-item ${
                point.agent === filteredAgent ? "matching" : ""
              } ${choosenExtiguisher === point.id ? "selected" : ""}`}
              onClick={() => clickHandler(point)}
              key={point.id}
            >
              <b>{`${point.name}`}</b>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
