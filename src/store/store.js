import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

const middleware = [thunk];


const store = createStore(
  reducer,
  compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
