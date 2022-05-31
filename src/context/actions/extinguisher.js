export const ADD_EXTINGUISHER = "add extinguisher";
export const SET_IS_USED = "set extinguiser as used"

export const addExtinguisher = (extinguisher) => ({
  type: ADD_EXTINGUISHER,
  payload: extinguisher,
});


export const setIsUsed = (id) => ({
  type: SET_IS_USED,
  payload: id
})