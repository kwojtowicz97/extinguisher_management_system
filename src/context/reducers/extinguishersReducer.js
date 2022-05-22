import { ADD_EXTINGUISHER } from "../actions/extinguisher";
import { v4 as newID } from "uuid";

const extinguishersReducer = (state, action) => {
  const { type, payload } = action;
  console.log(newID())

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
    default:
      throw new Error("[extinguishers] invalid action");
  }
};

export default extinguishersReducer;
