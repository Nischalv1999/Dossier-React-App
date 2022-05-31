import { describe, it } from "@jest/globals";

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Icon from "./Icon";
import Typography from "assets/typography.svg";


describe("Icons test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(<Icon imageSrc={Typography} />);
    expect(container).toMatchSnapshot();
  });
});
