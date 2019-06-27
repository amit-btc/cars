import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import NavBar from "../components/navbar/index";



describe("<CarsListItem />", () => {
  describe("render()", () => {
    test("renders the component", () => {
      const wrapper = shallow(<NavBar/>);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
