import {
  ADD_MARKER,
  REMOVE_MARKER,
  CHANGE_EXTINGUISHER,
} from "../actions/markers";

const markersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_MARKER:
      const {
        event,
        newPoint: { agent, extinguisher },
      } = payload;
      const newMarker = {
        number: 1,
        agent,
        extinguisher,
        id: Math.random(),
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      };
      return [...state, newMarker];

    case REMOVE_MARKER:
      return state.filter((mkr) => mkr.id !== payload);

    case CHANGE_EXTINGUISHER:
      const { marker, newExtinguiser } = payload;
      const index = state.findIndex((mkr) => mkr.id === marker.id);
      const newState = [...state];
      newState[index].extinguisher = newExtinguiser;
      return newState;
    default:
      throw new Error("[marker] invalid action");
  }
};

export default markersReducer;
