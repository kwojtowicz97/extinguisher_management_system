import { useContext, useState } from "react";
import { appContext } from "../../../context/store/appContext";
import { ExtinguishersList } from "../../Controls/lists";
import {
  setExtinguisher,
  setAgent,
  setName,
} from "../../../context/actions/newPoint";
import { checkNewPointData } from "../../../context/actions/ui";

export const NewPointForm = () => {
  const appCtx = useContext(appContext);
  const { newPointDispatch, newPointState, modalDispatch, modalState } = appCtx;
  const { agent, extinguisher } = newPointState;
  const checkDataButtonHandler = (e) => {
    e.preventDefault();
    modalDispatch(checkNewPointData(agent, extinguisher));
  };
  const changeNameHandler = (e) => {
    newPointDispatch(setName(e.target.value));
  };
  const chooseExtinguisherHandler = (extinguisher) => {
    newPointDispatch(setExtinguisher(extinguisher));
  };
  const changeAgentHandler = (e) => {
    newPointDispatch(setAgent(e.target.value));
  };

  return (
    <div className="modal-content">
      <form onSubmit={checkDataButtonHandler}>
        <div className="point">
          <label htmlFor="point-name">
            <b>Point name: </b>
          </label>
          <input onChange={changeNameHandler} type="text" />
        </div>
        <div className="point">
          <label htmlFor="extinguisher-agent">
            <b>Default extinguisher agent: </b>
          </label>
          <select onChange={changeAgentHandler} id="extinguisher-agent">
            <option>Any</option>
            <option>Water</option>
            <option>AFFF foam</option>
            <option>CO2</option>
            <option>ABC powder</option>
          </select>
        </div>
        <div className="point">
          <label htmlFor="extinguisher-select">
            <b>Extinguisher: </b>
          </label>
          <ExtinguishersList
            filteredAgent={newPointState.agent}
            onClick={chooseExtinguisherHandler}
            choosenExtiguisher={newPointState.extinguisher}
          />
        </div>
        {/* <select id="extinguisher-select">
            <option>None</option>
            {extinguishersState.map(ex => <option key={ex.id}>{`${ex.producer} ${ex.type}`}</option>)}
        </select> */}
        <button type="submit">Choose location</button>
        {modalState.info && <p>{modalState.info}</p>}
      </form>
    </div>
  );
};
