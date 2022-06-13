export const ADD_EXTINGUISHER = "add extinguisher";
export const SET_IS_USED = "set extinguiser as used";
export const MAKE_INSPECTION = "make inspection";
export const MAKE_OVERAHUL = "make overhaul";

export const addExtinguisher = (extinguisher) => ({
  type: ADD_EXTINGUISHER,
  payload: extinguisher,
});

export const setIsUsed = (id) => ({
  type: SET_IS_USED,
  payload: id,
});

export const makeOverhaul = (extinguiser, date) => ({
  type: MAKE_OVERAHUL,
  payload: { extinguiser, date },
});

export const makeInspection = (extinguisher, date) => ({
  type: MAKE_INSPECTION,
  payload: { extinguisher, date },
});