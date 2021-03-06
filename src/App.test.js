import React from "react";

import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import App from './App';

describe("App Component test", () => {

  const wrapper = shallow(
    <App.WrappedComponent />
  );
  it("to match snapshot when markup is mounted", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
