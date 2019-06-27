import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store"; // Smart components

// Component to be tested
import CarsListItem from "../components/CarsBlock/CarsListItem";

const data = {
  stockNumber: 10126,
  manufacturerName: "Skoda",
  modelName: "Roomster",
  color: "green",
  mileage: {
    number: 135573,
    unit: "km"
  },
  fuelType: "Petrol",
  pictureUrl: "http://localhost:3001/car.svg"
};

describe("<CarsListItem />", () => {
  describe("render()", () => {
    test("renders the component", () => {
      const wrapper = shallow(<CarsListItem data={data} />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
