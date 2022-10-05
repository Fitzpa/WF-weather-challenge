import React from "react";
/**
 * @vitest-environment jsdom
 */
import Button from "./Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { it, describe } from "vitest";

describe("Button", () => {
  it("should render a button with a name and type", () => {
    const buttonName = "Submit";

    render(<Button name={buttonName} buttonType="submit" />);
    expect(screen.getByText(buttonName)).toBeInTheDocument();
  });
});
