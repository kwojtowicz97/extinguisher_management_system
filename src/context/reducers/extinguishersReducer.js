import {
  ADD_EXTINGUISHER,
  SET_IS_USED,
  MAKE_INSPECTION,
  MAKE_OVERAHUL,
} from "../actions/extinguisher";
import { v4 as newID } from "uuid";

const extinguishersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EXTINGUISHER:
      const {
        producerState,
        typeState,
        agentState,
        prodDateState,
        inspDateState,
        ovhlDateState,
      } = payload;

      const extinguisher = {
        id: newID(),
        producer: producerState,
        agent: agentState,
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

    case MAKE_INSPECTION:
      const extinguisherToInspect = state.find(
        (ex) => ex === payload.extinguisher
      );
      extinguisherToInspect.inspectionDate = payload.date;
      return state;
    case MAKE_OVERAHUL:
      const extinguisherToOverhaul = state.find(
        (ex) => ex === payload.extinguisher
      );
      extinguisherToInspect.overhaulDate = payload.date;
      return state;
    default:
      throw new Error("[extinguishers] invalid action");
  }
};

export default extinguishersReducer;
