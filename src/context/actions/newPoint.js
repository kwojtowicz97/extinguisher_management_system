export const SET_AGENT = "set default agent";
export const SET_EXTINGUISHER = "set extinguisher";
export const CLEAR_STATE = "clear new point state";
export const SET_NAME = "set new point name"

export const setExtinguisher = (extinguisherID) => {
  return {
    type: SET_EXTINGUISHER,
    payload: extinguisherID,
  };
};

export const setName = (pointName) => {
  return {
    type: SET_NAME,
    payload: pointName,
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
