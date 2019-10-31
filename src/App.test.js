import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// написать тест который проверяет самого высокого челика
// и тест который проверяет есть ли дартвейдер в списке
