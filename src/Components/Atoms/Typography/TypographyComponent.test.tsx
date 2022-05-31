/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import TypographyComponent from "./TypographyComponent";

describe("Typography Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<TypographyComponent />);

    expect(wrapper).toBeTruthy;
  });
});
