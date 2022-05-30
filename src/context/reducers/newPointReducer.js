import {
  SET_AGENT,
  SET_EXTINGUISHER,
} from "../actions/newPoint";


const newPointReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_AGENT:
      return { agent: payload, extinguisher: state.extinguisher };
    case SET_EXTINGUISHER:
      return { agent: state.agent, extinguisher: payload };
    default:
      throw new Error("[newPoint] invalid action");
  }
};

export default newPointReducer;
