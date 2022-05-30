import {
  TOGGLE_HAMBURGER,
  SHOW_MODAL_ADD_NEW_POINT,
  SHOW_MODAL_ADD_NEW_EXTINGUISHER,
  HIDE_MODAL,
  SHOW_MODAL_INFO,
  CHECK_NEW_POINT_DATA,
  END_ADDING_POINT,
} from "../actions/ui";

export const ADD_NEW_POINT_MODAL = "New Point Modal";
export const ADD_NEW_EXTINGUISHER_MODAL = "New Extinguisher Modal";
export const INFO_MODAL = "Info Modal";

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
  const { type, payload } = action;

  switch (type) {
    case SHOW_MODAL_ADD_NEW_POINT:
      return { isModal: true, modal: ADD_NEW_POINT_MODAL };
    case SHOW_MODAL_ADD_NEW_EXTINGUISHER:
      return { isModal: true, modal: ADD_NEW_EXTINGUISHER_MODAL };
    case SHOW_MODAL_INFO:
      return {
        isModal: true,
        modal: ADD_NEW_EXTINGUISHER_MODAL,
        info: payload || "",
      };
    case HIDE_MODAL:
      return { isModal: false, modal: null };
    case CHECK_NEW_POINT_DATA:
      const { agent, extinguisher } = payload;
      if (!agent || !extinguisher) {
        return { ...state, info: "select extinguisher" };
      }
      return { isModal: false, modal: null, isChooseLocation: true };
    case END_ADDING_POINT:
      return { isModal: false, modal: null };
    default:
      throw new Error("[modal] invalid action");
  }
};
