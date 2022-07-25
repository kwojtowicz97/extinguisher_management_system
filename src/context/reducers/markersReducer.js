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
        newPoint: { agent, extinguisher, name },
      } = payload;
      const newMarker = {
        name,
        agent,
        extinguisher,
        id: Math.random(),
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      };
      localStorage.setItem("points", JSON.stringify([...state, newMarker]));
      return [...state, newMarker];

    case REMOVE_MARKER:
      const temp = state.filter((mkr) => mkr.id !== payload);
      localStorage.setItem("points", JSON.stringify(temp));
      return temp;

    case CHANGE_EXTINGUISHER:
      const { marker, newExtinguiser } = payload;
      const index = state.findIndex((mkr) => mkr.id === marker.id);
      const newState = [...state];
      newState[index].extinguisher = newExtinguiser;
      localStorage.setItem("points", JSON.stringify(newState));
      return newState;
    default:
      throw new Error("[marker] invalid action");
  }
};

export default markersReducer;
