import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders", () => {
  expect(shallow(<App />).debug()).toMatchSnapshot();
  expect(
    shallow(<App />)
      .find(".highest")
      .find("td")
      .at(0)
      .text()
  ).toBe("Darth Vader");
});
