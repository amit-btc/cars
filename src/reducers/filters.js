import {
  FETCH_MANUFACTURERS,
  FETCH_COLORS,
  SET_MANUFACTURER,
  SET_COLOR,
  SET_ORDER
} from "../actions/types";

const initalState = {
  manufacturers: {},
  colors: [],
  sortAsc: true,
  manufacturer: "",
  color: "",
};

export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_MANUFACTURERS:
      return {
        ...state,
        manufacturers: action.payload,
        manufacturer: action.payload.manufacturers[0].name
      };

    case FETCH_COLORS:
      return {
        ...state,
        colors: action.payload.colors,
        color: action.payload.colors[0]
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

    case SET_ORDER:
      return {
        ...state,
        sortAsc: !state.sortAsc
      };
    
    default:
      return state;
  }
}
