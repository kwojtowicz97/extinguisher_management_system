import { useContext, useState } from "react";
import { appContext } from "../../../context/store/appContext";
import { ExtinguishersList } from "../../Controls/lists";
import { setExtinguisher, setAgent } from "../../../context/actions/newPoint";
import { checkNewPointData } from "../../../context/actions/ui";

export const NewPointForm = () => {
  const appCtx = useContext(appContext);
  const { newPointDispatch, newPointState, modalDispatch, modalState } = appCtx;
  const { agent, extinguisher } = newPointState;
  const checkDataButtonHandler = (e) => {
    e.preventDefault();
    modalDispatch(checkNewPointData(agent, extinguisher));
  };
  const chooseExtinguisherHandler = (extinguisher) => {
    newPointDispatch(setExtinguisher(extinguisher));
  };
  const changeAgentHandler = (e) => {
    newPointDispatch(setAgent(e.target.value));
  };

  return (
    <div>
      <form onSubmit={checkDataButtonHandler}>
        <label htmlFor="extinguisher-agent">
          Choose default extinguisher agent:
        </label>
        <select onChange={changeAgentHandler} id="extinguisher-agent">
          <option>Any</option>
          <option>Water</option>
          <option>AFFF foam</option>
          <option>CO2</option>
          <option>ABC powder</option>
        </select>
        <div>
          <label htmlFor="extinguisher-select">Choose extinguisher:</label>
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
