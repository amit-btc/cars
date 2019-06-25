import {
  FETCH_MANUFACTURERS,
  FETCH_COLORS,
  SET_MANUFACTURER,
  SET_COLOR,
  SET_ORDER,
} from "../actions/types";

const initalState = {
  manufacturers: {},
  colors: [],
  isFetching:false,
  orderAsc: true,
  manufacturer: "",
  color: ""
};

export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_MANUFACTURERS:
      console.log('FETCH_MANUFACTURERS');
      return {
        ...state,
        manufacturers: action.payload,
        isFetching:!state.isFetching
      };

    case FETCH_COLORS:
      return {
        ...state,
        colors: action.payload.colors
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
        orderAsc: !state.orderAsc
      };

    default:
      return state;
  }
}
