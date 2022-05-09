import {ADD_EXTINGUISHER} from "../actions/extinguisher"

const extinguishersReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case ADD_EXTINGUISHER:
      return state;
    default:
      throw new Error("[extinguishers] invalid action");
  }
};

export default extinguishersReducer;
