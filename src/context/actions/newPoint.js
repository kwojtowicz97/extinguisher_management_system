export const SET_AGENT = "set default agent";
export const SET_EXTINGUISHER = "set extinguisher";
export const CLEAR_STATE = "clear new point state";

export const setExtinguisher = (extinguisherID) => {
  return {
    type: SET_EXTINGUISHER,
    payload: extinguisherID,
  };
};

export const setAgent = (agentType) => {
  return {
    type: SET_AGENT,
    payload: agentType,
  };
};

export const clearState = () => {
  return { type: CLEAR_STATE, payload: null };
};
