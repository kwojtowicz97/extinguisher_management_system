import { ADD_MARKER } from "../actions/markers";

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

    default:
      throw new Error("[marker] invalid action");
  }
};

export default markersReducer;
