import { FETCH_CARS } from "../actions/types";

const initalState = {
    data:{
        cars:[]
    }
};

export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_CARS:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
}
