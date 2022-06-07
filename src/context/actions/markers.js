export const ADD_MARKER = "add marker";
export const REMOVE_MARKER = "remove marker"
export const CHOOSE_LOCATION = "choose location of new point";

export const addMarker = (event, newPoint) => ({ type: ADD_MARKER, payload: {event, newPoint} });

export const chooseLocation = (agent, extinguisher) => {
  return {
    type: CHOOSE_LOCATION,
    payload: {agent, extinguisher},
  };
};

export const removeMarker = (id) => {
  return {
    type: REMOVE_MARKER,
    payload: id
  }
} 
