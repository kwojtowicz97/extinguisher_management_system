import { ADD_EXTINGUISHER, SET_IS_USED } from "../actions/extinguisher";
import { v4 as newID } from "uuid";

const extinguishersReducer = (state, action) => {
  const { type, payload } = action;
  console.log(newID());

  switch (type) {
    case ADD_EXTINGUISHER:
      const {
        producerState,
        typeState,
        prodDateState,
        inspDateState,
        ovhlDateState,
      } = payload;

      const extinguisher = {
        id: newID(),
        producer: producerState,
        type: typeState,
        productionDate: prodDateState,
        inspectionDate: inspDateState,
        overhaulDate: ovhlDateState,
        isUsed: false,
      };
      return [extinguisher, ...state];
    case SET_IS_USED:
      const id = payload;
      const extinguiser = state.find((ex) => ex.id === id);
      extinguiser.isUsed = true;
      return state;
    default:
      throw new Error("[extinguishers] invalid action");
  }
};

export default extinguishersReducer;
