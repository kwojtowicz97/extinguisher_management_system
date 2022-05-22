import { useState } from "react";
import { addExtinguisher } from "../../../context/actions/extinguisher";
import { useContext } from "react";
import { appContext } from "../../../context/store/appContext";
import { hideModal } from "../../../context/actions/ui";

export const NewExtinguisherForm = () => {
  const appCtx = useContext(appContext);
  const { extinguishersDispatch, modalDispatch } = appCtx;
  const [producerState, setProducer] = useState("");
  const [typeState, setType] = useState("");
  const [prodDateState, setProdDate] = useState("");
  const [inspDateState, setInspDate] = useState("");
  const [inspDateCheckbox, setInspDateCheckbox] = useState(false)
  const [ovhlDateState, setOvhlDate] = useState("");
  const [ovhlDateCheckbox, setOvhlDateCheckbox] = useState(false);

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
      inspDateCheckbox && inspDateState,
      ovhlDateCheckbox && ovhlDateState,
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
    modalDispatch(hideModal());
  };

  return (
    <div>
      <form onSubmit={addExtinguisherHandler}>
        <div>
          <label htmlFor="producer">Producer</label>
          <input
            id="producer"
            type="text"
            value={producerState}
            onChange={producerChangeHandler}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <input
            id="type"
            type="text"
            value={typeState}
            onChange={typeChangeHandler}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="production-date">Production date</label>
          <input
            id="production-date"
            type="date"
            value={prodDateState}
            onChange={prodDateChangeHandler}
            required
          ></input>
        </div>
        <div>
          <input
            type="checkbox"
            checked={inspDateCheckbox}
            onChange={() => setInspDateCheckbox((prev) => !prev)}
          ></input>
          <label htmlFor="inspection-date">Inspection date</label>
          <input
            id="inspection-date"
            type="date"
            value={inspDateState}
            required={inspDateCheckbox}
            disabled={!inspDateCheckbox}
            onChange={inspDateChangeHandler}
          ></input>
        </div>
        <div>
          <input
            type="checkbox"
            checked={ovhlDateCheckbox}
            onChange={() => setOvhlDateCheckbox((prev) => !prev)}
          ></input>
          <label htmlFor="overhaul-date">Overhaul date</label>
          <input
            id="overhaul-date"
            type="date"
            value={ovhlDateState}
            required={ovhlDateCheckbox}
            disabled={!ovhlDateCheckbox}
            onChange={ovhlDateChangeHandler}
          ></input>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
