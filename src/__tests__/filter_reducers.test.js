import reducer from "../reducers/filters";
import * as actions from "../actions/types";
// Tests for reducers

describe("fetch reducer", () => {
  const initialState = {
    manufacturers: {},
    colors: [],
    manufacturer: "",
    color: ""
  };
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_COLORS", () => {
    const startAction = {
      type: actions.FETCH_COLORS,
      payload: { colors: ["a", "b"] }
    };
    expect(reducer(initialState, startAction)).toEqual({
      manufacturers: {},
      colors: ["a", "b"],
      manufacturer: "",
      color: ""
    });
  });

  it("should handle FETCH_MANUFACTURERS", () => {
    const manufacturerObject = {
      manufacturers: [
        {
          name: "Fiat",
          models: [
            {
              name: "Marea"
            }
          ]
        }
      ]
    };
    const startAction = {
      type: actions.FETCH_MANUFACTURERS,
      payload: manufacturerObject
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer(initialState, startAction)).toEqual({
      manufacturers: manufacturerObject,
      colors: [],
      manufacturer: "",
      color: ""
    });
  });
});
