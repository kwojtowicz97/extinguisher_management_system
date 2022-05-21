import { useState } from "react";
import { addExtinguisher } from "../../../context/actions/extinguisher";
import { useContext } from "react";
import { appContext } from "../../../context/store/appContext";

export const NewExtinguisherForm = () => {
  const appCtx = useContext(appContext);
  const { extinguishersDispatch } = appCtx;
  const [producerState, setProducer] = useState();
  const [typeState, setType] = useState();
  const [prodDateState, setProdDate] = useState();
  const [inspDateState, setInspDate] = useState();
  const [ovhlDateState, setOvhlDate] = useState();

  const producerChangeHandler = (e) => {
    setProducer(e.target.value);
  };
  const typeChangeHandler = (e) => {
    setType(e.target.value);
  };
  const prodDateChangeHandler = (e) => {
    setProdDate(e.target.value);
  };
  const inspDateChangeHandler = (e) => {
    setInspDate(e.target.value);
  };
  const ovhlDateChangeHandler = (e) => {
    setOvhlDate(e.target.value);
  };

  const addExtinguisherHandler = (e) => {
    e.preventDefault();
    const data = [
      producerState,
      typeState,
      prodDateState,
      inspDateState,
      ovhlDateState,
    ];
    if (data.some((element) => element === undefined)) return;
    const extinguisher = {
      producerState,
      typeState,
      prodDateState,
      inspDateState,
      ovhlDateState,
    };

    extinguishersDispatch(addExtinguisher(extinguisher));
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="producer">Producer</label>
          <input
            id="producer"
            type="text"
            onChange={producerChangeHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <input id="type" type="text" onChange={typeChangeHandler}></input>
        </div>
        <div>
          <label htmlFor="production-date">Production date</label>
          <input
            id="production-date"
            type="date"
            onChange={prodDateChangeHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="inspection-date">Inspection date</label>
          <input
            id="inspection-date"
            type="date"
            onChange={inspDateChangeHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="overhaul-date">Overhaul date</label>
          <input
            id="overhaul-date"
            type="date"
            onChange={ovhlDateChangeHandler}
          ></input>
        </div>
        <button onClick={addExtinguisherHandler}>Add</button>
      </form>
    </div>
  );
};
