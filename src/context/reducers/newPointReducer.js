import {
  SET_AGENT,
  SET_EXTINGUISHER,
  CLEAR_STATE,
  SET_NAME,
} from "../actions/newPoint";

const newPointReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME:
      return {
        name: payload,
        agent: state.agent,
        extinguisher: state.extinguisher,
      };
    case SET_AGENT:
      return {
        name: state.name,
        agent: payload,
        extinguisher: state.extinguisher,
      };
    case SET_EXTINGUISHER:
      return { name: state.name, agent: state.agent, extinguisher: payload };
    case CLEAR_STATE:
      return { name: null, agent: null, extinguisher: null };
    default:
      throw new Error("[newPoint] invalid action");
  }
};

export default newPointReducer;
