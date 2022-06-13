import { useContext, useState } from "react"
import { appContext } from "../../../context/store/appContext"
import { makeInspection } from "../../../context/actions/extinguisher"

export const InspectionCard = (props) => {
    const appCtx = useContext(appContext)
    const {extinguishersDispatch} = appCtx
    const {extinguisher, type} = props

    const [date, setDate] = useState("")

    const dateHandler = (e) => {
        setDate(e.target.value)
    }
    
    const makeInspectionHandler = () => {
        extinguishersDispatch(makeInspection(extinguisher, date))
    }

    const makeOverhaul = () => {
      return;
    };

    return (
      <div>
        <input type="date" value={date} onChange={dateHandler}/>
        {
          (type === "inspection" ? (
            <button onClick={makeInspectionHandler}>Make Inspection</button>
          ) : (
            <button>Make Overhaul</button>
          ))
        }
      </div>
    );
}