import { TOGGLE_HAMBURGER } from "../actions/ui";

const hamburgerReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_HAMBURGER:
      return !state;
    default:
      throw new Error("[hamburger] invalid action");
  }
};

export default hamburgerReducer;
