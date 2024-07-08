// src/App.test.js
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders div with a specific class name", () => {
  const { container } = render(<App />);

  const divElement = container.querySelector(".App");
  expect(divElement).toBeInTheDocument();
});
