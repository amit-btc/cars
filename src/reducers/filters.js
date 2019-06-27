import {
  FETCH_MANUFACTURERS,
  FETCH_COLORS,
  SET_MANUFACTURER,
  SET_COLOR,
} from "../actions/types";

const initialState = {
  manufacturers: {},
  colors: [],
  manufacturer: "",
  color: "",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MANUFACTURERS:
      return {
        ...state,
        manufacturers: action.payload,
      };

    case FETCH_COLORS:
      return {
        ...state,
        colors: action.payload.colors,
      };

    case SET_MANUFACTURER:
      return {
        ...state,
        manufacturer: action.payload
      };

    case SET_COLOR:
      return {
        ...state,
        color: action.payload
      };
    
    default:
      return state;
  }
}
