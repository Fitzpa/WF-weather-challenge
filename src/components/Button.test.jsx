import React from "react";
import { BrowserRouter } from "react-router-dom";
import { it, describe, expect } from "vitest";
/**
 * @vitest-environment jsdom
 */
import Button from "./Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const MockRouter = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

describe("Button", () => {
  it("should render a button with a name and type", () => {
    const buttonName = "Submit";

    render(<Button name={buttonName} buttonType="submit" />);
    expect(screen.getByText(buttonName)).toBeInTheDocument();
  });
  it("should render a Link with a name and url", () => {
    const buttonName = "I am a link";
    const url = "/five-day-weather-forecast";

    render(
      <MockRouter>
        <Button name={buttonName} url={url} />
      </MockRouter>
    );
    expect(screen.getByText(buttonName)).toBeInTheDocument();
  });
});
