import { ADD_EXTINGUISHER } from "../actions/extinguisher";

const extinguishersReducer = (state, action) => {
  const { type, payload } = action;

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
