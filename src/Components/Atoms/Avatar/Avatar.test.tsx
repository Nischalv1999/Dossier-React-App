import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";
import "@testing-library/jest-dom";

test("Test - Avatar", () => {
  render(
    <Avatar variant="square" src="assets/Avatar1.svg" />,
  );
  const avatar = screen.getByRole("img");
  expect(avatar).toHaveAttribute(
    "src",
    "assets/Avatar1.svg",
  );
})
