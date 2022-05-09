import { ADD_MARKER } from "../actions/markers";

const markersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_MARKER:
      const newMarker = {
        id: Math.random(),
        lat: payload.latlng.lat,
        lng: payload.latlng.lng,
      };
      return [...state, newMarker];
    default:
      throw new Error("[marker] invalid action");
  }
};

export default markersReducer;
