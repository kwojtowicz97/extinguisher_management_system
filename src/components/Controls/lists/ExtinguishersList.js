import { useContext } from "react"
import { appContext } from "../../../context/store/appContext"

export const ExtinguishersList = () => {
    const appCtx = useContext(appContext)

    const { extinguishersState } = appCtx;

    return (<ul>
        {extinguishersState.map(extinguisher => <li key={extinguisher.id}>{`${extinguisher.producer} ${extinguisher.type}`}</li>)}
    </ul>)
}