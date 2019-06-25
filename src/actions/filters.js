import {
  FETCH_MANUFACTURERS,
  FETCH_COLORS,
  SET_MANUFACTURER,
  SET_COLOR
} from "../actions/types";

export const fetchManufacturers = () => dispatch => {
  fetch("http://localhost:3001/manufacturers")
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_MANUFACTURERS,
        payload: data
      })
    );
};

export const fetchColors = () => dispatch => {
  fetch("http://localhost:3001/colors")
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_COLORS,
        payload: data
      })
    );
};

export const setManufacturer = data => dispatch =>
  dispatch({
    type: SET_MANUFACTURER,
    payload: data
  });

export const setColor = data => dispatch =>
  dispatch({
    type: SET_COLOR,
    payload: data
  });
