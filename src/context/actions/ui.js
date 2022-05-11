export const TOGGLE_HAMBURGER = "toggle hamburger";
export const SHOW_MODAL_ADD_NEW_POINT = "show modal - add new point";
export const SHOW_MODAL_ADD_NEW_EXTINGUISHER =
  "show modal - add new extinguisher";
export const SHOW_MODAL_INFO = "show modal - info";
export const HIDE_MODAL = "hide modal";

export const toggleHamburer = () => ({ type: TOGGLE_HAMBURGER });

export const showModalNewPoint = () => ({ type: SHOW_MODAL_ADD_NEW_POINT });

export const showModalNewExtinguisher = () => ({
  type: SHOW_MODAL_ADD_NEW_EXTINGUISHER,
});

export const showModalInfo = (information) => ({
  type: SHOW_MODAL_INFO,
  payload: information,
});

export const hideModal = () => ({ type: HIDE_MODAL });
