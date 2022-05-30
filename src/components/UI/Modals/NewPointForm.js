import { useContext, useState } from "react";
import { appContext } from "../../../context/store/appContext";
import { ExtinguishersList } from "../../Controls/lists";

export const NewPointForm = () => {
  const appCtx = useContext(appContext);
  const [agent, setAgent] = useState("Any")
  const chooseLocationButtonHandler = (e) => {
    e.preventDefault()
  } 
  const changeAgentHandler = (e) => {
    setAgent(e.target.value)
  }
  const { extinguishersState } = appCtx;
  return (
    <div>
      <form>
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
          <ExtinguishersList filteredAgent={agent} />
        </div>
        {/* <select id="extinguisher-select">
            <option>None</option>
            {extinguishersState.map(ex => <option key={ex.id}>{`${ex.producer} ${ex.type}`}</option>)}
        </select> */}
        <button onClick={chooseLocationButtonHandler}>Choose location</button>
      </form>
    </div>
  );
};
