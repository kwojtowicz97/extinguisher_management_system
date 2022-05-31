import {
  SET_AGENT,
  SET_EXTINGUISHER,
  CLEAR_STATE
} from "../actions/newPoint";


const newPointReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_AGENT:
      return { agent: payload, extinguisher: state.extinguisher };
    case SET_EXTINGUISHER:
      return { agent: state.agent, extinguisher: payload };
      case CLEAR_STATE:
          return { agent: null, extinguisher: null };
    default:
      throw new Error("[newPoint] invalid action");
  }
};

export default newPointReducer;
