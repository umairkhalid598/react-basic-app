import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("render react app", () => {
  it("renders learn react link", () => {
    expect.assertions(1);
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
