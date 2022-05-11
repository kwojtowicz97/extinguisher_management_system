import {
  TOGGLE_HAMBURGER,
  SHOW_MODAL_ADD_NEW_POINT,
  HIDE_MODAL,
} from "../actions/ui";

export const ADD_NEW_POINT_MODAL = "New Point";

export const hamburgerReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_HAMBURGER:
      return !state;
    default:
      throw new Error("[hamburger] invalid action");
  }
};

export const modalReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case SHOW_MODAL_ADD_NEW_POINT:
      return { isModal: true, modal: ADD_NEW_POINT_MODAL };
    case HIDE_MODAL:
      return {isModal: false, modal: null}
    default:
      throw new Error("[modal] invalid action");
  }
};
