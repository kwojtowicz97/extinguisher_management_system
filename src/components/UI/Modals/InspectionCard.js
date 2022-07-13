import { useContext, useState } from "react";
import { appContext } from "../../../context/store/appContext";
import { makeInspection } from "../../../context/actions/extinguisher";

export const InspectionCard = (props) => {
  const appCtx = useContext(appContext);
  const { extinguishersDispatch, setRefresh } = appCtx;
  const { extinguisher, type } = props;

  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const makeInspectionHandler = () => {
    extinguishersDispatch(makeInspection(extinguisher, date));
    setRefresh(true)

  };

  const makeOverhaul = () => {
    return;
  };

  return (
    <div className="inspection-card">
      <input
        type="date"
        value={date}
        onChange={dateHandler}
      />
      {type === "inspection" ? (
        <button onClick={makeInspectionHandler}>Make Inspection</button>
      ) : (
        <button>Make Overhaul</button>
      )}
    </div>
  );
};
