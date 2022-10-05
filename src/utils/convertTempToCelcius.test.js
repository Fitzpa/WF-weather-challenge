import { convertToCelsius } from "./convertTempToCelcius";
import { it, expect } from "vitest";

it("shouled convert a number from fahrenheight to celsius", () => {
  const temp = 57;
  const result = convertToCelsius(temp);

  expect(result).toBe(14);
});
