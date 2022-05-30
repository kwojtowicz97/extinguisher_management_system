export const SET_AGENT = "set default agent"
export const SET_EXTINGUISHER = "set extinguisher"


export const setExtinguisher = (extinguisherID) => {
    return {
        type: SET_EXTINGUISHER,
        payload: extinguisherID
    }
}

export const setAgent = (agentType) => {
    return {
        type: SET_AGENT,
        payload: agentType
    }
}

