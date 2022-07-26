import { useContext, useState } from "react";
import { appContext } from "../../../context/store/appContext";
import { makeInspection } from "../../../context/actions/extinguisher";

export const InspectionCard = (props) => {
  const appCtx = useContext(appContext);
  const { extinguishersDispatch } = appCtx;
  const { extinguisher, type } = props;

  const [date, setDate] = useState("");

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const makeInspectionHandler = () => {
    extinguishersDispatch(makeInspection(extinguisher, date));
  };

  const makeOverhaul = () => {
    return;
  };

  return (
    <div className="inspection-card">
      <p>Check if:</p>
      <ul className="inspection-checklist">
        <li>There is no mechanical damage</li>
        <li>Extinguisher isn't used</li>
        <li>Extinguisher has a seal</li>
        <li>Extinguisher is in correct place and properly mounted</li>
        <li>The preassure is correct</li>
      </ul>
      <label htmlFor="date">
        <b>Choose inspection date: </b>
      </label>
      <input
        id="date"
        type="date"
        defaultValue={new Date().toISOString().substring(0, 10)}
        value={date}
        onChange={dateHandler}
      />
      <br/>
      {type === "inspection" ? (
        <button onClick={makeInspectionHandler}>Make Inspection</button>
      ) : (
        <button>Make Overhaul</button>
      )}
    </div>
  );
};
