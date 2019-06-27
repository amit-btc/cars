import * as actions from "../actions/filters";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  beforeEach(() => {
    mockStore.reset();
    mockStore.restore();
  });
});

describe("fetchColors", () => {
  test("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        payload: ["a", "b", "c"],
        type: "FETCH_COLORS"
      }
    ];
    const store = mockStore();
    store.dispatch(actions.fetchColors());
    expect(store.fetchColors()).toEqual(expectedActions);
    //   return store.dispatch(actions.fetchColors()).then(() => {
    //     // return of async actions
    //     expect(store.getActions()).toEqual(expectedActions)
    //   })
  });
});
