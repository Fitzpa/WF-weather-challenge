import React from "react";
import { it, describe, expect } from "vitest";
/**
 * @vitest-environment jsdom
 */
import Temperature from "./index.jsx";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Temperature", () => {
  it("should render a temp prop as fahrenheit", () => {
    const temp = "47";

    render(<Temperature temp={temp} />);
    expect(screen.getByText(temp + " F°")).toBeInTheDocument();
  });
  it("should render a temp prop as celsius", () => {
    const temp = "47";

    render(<Temperature temp={temp} />);
    expect(screen.getByText(8 + " C°")).toBeInTheDocument();
  });
});
