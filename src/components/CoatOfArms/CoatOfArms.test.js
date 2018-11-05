import React from "react";
import ReactDOM from "react-dom";
import CoatOfArms from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CoatOfArms />, div);
});