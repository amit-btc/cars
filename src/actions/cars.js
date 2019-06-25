import { FETCH_CARS } from "./types";

export const fetchCars = () => dispatch => {
  fetch("http://localhost:3001/cars?manufacturer=Fiat&color=white&sort=asc&page=1")
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_CARS,
        payload: data
      })
    );
};

  
